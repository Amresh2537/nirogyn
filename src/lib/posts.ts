import { randomUUID } from "crypto";
import fs from "fs/promises";
import path from "path";
import { getDbOrNull } from "./mongodb";

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML
  author: string;
  category: string;
  status: "draft" | "published";
  featured: boolean;
  featuredImage: string;
  featuredImageAlt: string;
  seoTitle: string;
  seoDescription: string;
  readTime: string;
  createdAt: string;
  updatedAt: string;
}

const DATA_FILE = path.join(process.cwd(), "data", "posts.json");
const COLLECTION = "posts";
let bootstrapPromise: Promise<void> | null = null;

async function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  await fs.mkdir(dir, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf-8");
  }
}

async function readLocalPosts(): Promise<Post[]> {
  await ensureDataFile();
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const items = JSON.parse(raw) as Post[];
    return Array.isArray(items) ? items.map((item) => normalizePost(item as unknown as Record<string, unknown>)) : [];
  } catch {
    return [];
  }
}

async function writeLocalPosts(posts: Post[]): Promise<void> {
  await ensureDataFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2), "utf-8");
}

function normalizePost(doc: Record<string, unknown>): Post {
  return {
    id: String(doc.id ?? doc._id),
    title: String(doc.title ?? ""),
    slug: String(doc.slug ?? ""),
    excerpt: String(doc.excerpt ?? ""),
    content: String(doc.content ?? ""),
    author: String(doc.author ?? "Nirogyn Editorial"),
    category: String(doc.category ?? ""),
    status: doc.status === "published" ? "published" : "draft",
    featured: Boolean(doc.featured),
    featuredImage: String(doc.featuredImage ?? ""),
    featuredImageAlt: String(doc.featuredImageAlt ?? doc.title ?? ""),
    seoTitle: String(doc.seoTitle ?? doc.title ?? ""),
    seoDescription: String(doc.seoDescription ?? doc.excerpt ?? ""),
    readTime: String(doc.readTime ?? ""),
    createdAt: String(doc.createdAt ?? new Date().toISOString()),
    updatedAt: String(doc.updatedAt ?? doc.createdAt ?? new Date().toISOString()),
  };
}

async function bootstrap() {
  if (!bootstrapPromise) {
    bootstrapPromise = (async () => {
      const db = await getDbOrNull();
      if (!db) return;

      await ensureDataFile();
      const collection = db.collection(COLLECTION);
      await collection.createIndex({ slug: 1 }, { unique: true });
      await collection.createIndex({ status: 1, createdAt: -1 });

      const count = await collection.countDocuments();
      if (count === 0) {
        try {
          const raw = await fs.readFile(DATA_FILE, "utf-8");
          const items = JSON.parse(raw) as Post[];
          if (Array.isArray(items) && items.length > 0) {
            await collection.insertMany(items.map((item) => normalizePost(item as unknown as Record<string, unknown>)));
          }
        } catch {
          // Ignore seed failures; the collection can start empty.
        }
      }
    })();
  }

  return bootstrapPromise;
}

export async function getAllPosts(): Promise<Post[]> {
  const db = await getDbOrNull();
  if (!db) return readLocalPosts();

  await bootstrap();
  const docs = await db.collection(COLLECTION).find({}).sort({ createdAt: -1 }).toArray();
  return docs.map((doc) => normalizePost(doc as Record<string, unknown>));
}

export async function getPublishedPosts(): Promise<Post[]> {
  const db = await getDbOrNull();
  if (!db) {
    return (await readLocalPosts())
      .filter((p) => p.status === "published")
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  await bootstrap();
  const docs = await db.collection(COLLECTION).find({ status: "published" }).sort({ createdAt: -1 }).toArray();
  return docs.map((doc) => normalizePost(doc as Record<string, unknown>));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const db = await getDbOrNull();
  if (!db) {
    return (await getPublishedPosts()).find((p) => p.slug === slug) ?? null;
  }

  await bootstrap();
  const doc = await db.collection(COLLECTION).findOne({ slug, status: "published" });
  return doc ? normalizePost(doc as Record<string, unknown>) : null;
}

export async function getPostById(id: string): Promise<Post | null> {
  const db = await getDbOrNull();
  if (!db) {
    return (await readLocalPosts()).find((p) => p.id === id) ?? null;
  }

  await bootstrap();
  const doc = await db.collection(COLLECTION).findOne({ id });
  return doc ? normalizePost(doc as Record<string, unknown>) : null;
}

function normalizeInput(data: Omit<Post, "id" | "createdAt" | "updatedAt">) {
  return {
    ...data,
    featuredImageAlt: data.featuredImageAlt || data.title,
    seoTitle: data.seoTitle || data.title,
    seoDescription: data.seoDescription || data.excerpt,
  };
}

export async function createPost(
  data: Omit<Post, "id" | "createdAt" | "updatedAt">
): Promise<Post> {
  const now = new Date().toISOString();
  const post: Post = { ...normalizeInput(data), id: randomUUID(), createdAt: now, updatedAt: now };
  const db = await getDbOrNull();
  if (!db) {
    const posts = await readLocalPosts();
    posts.push(post);
    await writeLocalPosts(posts);
    return post;
  }

  await bootstrap();
  const collection = db.collection(COLLECTION);
  await collection.insertOne(post);
  return post;
}

export async function updatePost(
  id: string,
  data: Partial<Omit<Post, "id" | "createdAt">>
): Promise<Post | null> {
  const now = new Date().toISOString();
  const nextData = normalizeInput(data as Omit<Post, "id" | "createdAt" | "updatedAt">);
  const db = await getDbOrNull();
  if (!db) {
    const posts = await readLocalPosts();
    const idx = posts.findIndex((post) => post.id === id);
    if (idx === -1) return null;
    posts[idx] = { ...posts[idx], ...nextData, updatedAt: now };
    await writeLocalPosts(posts);
    return posts[idx];
  }

  await bootstrap();
  const collection = db.collection(COLLECTION);
  await collection.updateOne({ id }, { $set: { ...nextData, updatedAt: now } });
  const updated = await collection.findOne({ id });
  return updated ? normalizePost(updated as Record<string, unknown>) : null;
}

export async function deletePost(id: string): Promise<boolean> {
  const db = await getDbOrNull();
  if (!db) {
    const posts = await readLocalPosts();
    const filtered = posts.filter((post) => post.id !== id);
    if (filtered.length === posts.length) return false;
    await writeLocalPosts(filtered);
    return true;
  }

  await bootstrap();
  const result = await db.collection(COLLECTION).deleteOne({ id });
  return result.deletedCount === 1;
}
