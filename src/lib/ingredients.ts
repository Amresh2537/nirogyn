import { randomUUID } from "crypto";
import fs from "fs/promises";
import path from "path";
import { getDbOrNull } from "./mongodb";

export interface Ingredient {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  status: "draft" | "published";
  featuredImage: string;
  featuredImageAlt: string;
  seoTitle: string;
  seoDescription: string;
  readTime: string;
  createdAt: string;
  updatedAt: string;
}

const DATA_FILE = path.join(process.cwd(), "data", "ingredients.json");
const COLLECTION = "ingredients";
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

async function readLocalIngredients(): Promise<Ingredient[]> {
  await ensureDataFile();
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const items = JSON.parse(raw) as Ingredient[];
    return Array.isArray(items)
      ? items.map((item) => normalizeIngredient(item as unknown as Record<string, unknown>))
      : [];
  } catch {
    return [];
  }
}

async function writeLocalIngredients(ingredients: Ingredient[]): Promise<void> {
  await ensureDataFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(ingredients, null, 2), "utf-8");
}

function normalizeIngredient(doc: Record<string, unknown>): Ingredient {
  const status =
    doc.status === "published" || doc.published === true
      ? "published"
      : doc.status === "draft"
        ? "draft"
        : "draft";

  return {
    id: String(doc.id ?? doc._id),
    title: String(doc.title ?? ""),
    slug: String(doc.slug ?? ""),
    excerpt: String(doc.excerpt ?? ""),
    content: String(doc.content ?? ""),
    author: String(doc.author ?? "Nirogyn Editorial"),
    category: String(doc.category ?? "Uncategorized"),
    status,
    featuredImage: String(doc.featuredImage ?? ""),
    featuredImageAlt: String(doc.featuredImageAlt ?? doc.title ?? ""),
    seoTitle: String(doc.seoTitle ?? doc.title ?? ""),
    seoDescription: String(doc.seoDescription ?? doc.excerpt ?? ""),
    readTime: String(doc.readTime ?? "5 min read"),
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
          const items = JSON.parse(raw) as Ingredient[];
          if (Array.isArray(items) && items.length > 0) {
            await collection.insertMany(
              items.map((item) => normalizeIngredient(item as unknown as Record<string, unknown>))
            );
          }
        } catch {
          // Ignore seed failures; the collection can start empty.
        }
      }
    })();
  }

  return bootstrapPromise;
}

export async function getAllIngredients(): Promise<Ingredient[]> {
  const db = await getDbOrNull();
  if (!db) return readLocalIngredients();

  await bootstrap();
  const docs = await db.collection(COLLECTION).find({}).sort({ createdAt: -1 }).toArray();
  return docs.map((doc) => normalizeIngredient(doc as Record<string, unknown>));
}

export async function getPublishedIngredients(): Promise<Ingredient[]> {
  const db = await getDbOrNull();
  if (!db) {
    return (await readLocalIngredients())
      .filter((item) => item.status === "published")
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  await bootstrap();
  const docs = await db
    .collection(COLLECTION)
    .find({ $or: [{ status: "published" }, { published: true }] })
    .sort({ createdAt: -1 })
    .toArray();
  return docs.map((doc) => normalizeIngredient(doc as Record<string, unknown>));
}

export async function getIngredientBySlug(slug: string): Promise<Ingredient | null> {
  const db = await getDbOrNull();
  if (!db) {
    return (await getPublishedIngredients()).find((item) => item.slug === slug) ?? null;
  }

  await bootstrap();
  const doc = await db.collection(COLLECTION).findOne({
    slug,
    $or: [{ status: "published" }, { published: true }],
  });
  return doc ? normalizeIngredient(doc as Record<string, unknown>) : null;
}

export async function getIngredientById(id: string): Promise<Ingredient | null> {
  const db = await getDbOrNull();
  if (!db) {
    return (await readLocalIngredients()).find((item) => item.id === id) ?? null;
  }

  await bootstrap();
  const doc = await db.collection(COLLECTION).findOne({ id });
  return doc ? normalizeIngredient(doc as Record<string, unknown>) : null;
}

function normalizeInput(data: Omit<Ingredient, "id" | "createdAt" | "updatedAt">) {
  return {
    ...data,
    featuredImageAlt: data.featuredImageAlt || data.title,
    seoTitle: data.seoTitle || data.title,
    seoDescription: data.seoDescription || data.excerpt,
    readTime: data.readTime || "5 min read",
  };
}

export async function createIngredient(
  data: Omit<Ingredient, "id" | "createdAt" | "updatedAt">
): Promise<Ingredient> {
  const now = new Date().toISOString();
  const ingredient: Ingredient = {
    ...normalizeInput(data),
    id: randomUUID(),
    createdAt: now,
    updatedAt: now,
  };
  const db = await getDbOrNull();
  if (!db) {
    const ingredients = await readLocalIngredients();
    ingredients.push(ingredient);
    await writeLocalIngredients(ingredients);
    return ingredient;
  }

  await bootstrap();
  await db.collection(COLLECTION).insertOne(ingredient);
  return ingredient;
}

export async function updateIngredient(
  id: string,
  data: Partial<Omit<Ingredient, "id" | "createdAt">>
): Promise<Ingredient | null> {
  const now = new Date().toISOString();
  const nextData = normalizeInput(data as Omit<Ingredient, "id" | "createdAt" | "updatedAt">);
  const db = await getDbOrNull();
  if (!db) {
    const ingredients = await readLocalIngredients();
    const idx = ingredients.findIndex((item) => item.id === id);
    if (idx === -1) return null;
    ingredients[idx] = { ...ingredients[idx], ...nextData, updatedAt: now };
    await writeLocalIngredients(ingredients);
    return ingredients[idx];
  }

  await bootstrap();
  const collection = db.collection(COLLECTION);
  await collection.updateOne({ id }, { $set: { ...nextData, updatedAt: now }, $unset: { published: "" } });
  const updated = await collection.findOne({ id });
  return updated ? normalizeIngredient(updated as Record<string, unknown>) : null;
}

export async function deleteIngredient(id: string): Promise<boolean> {
  const db = await getDbOrNull();
  if (!db) {
    const ingredients = await readLocalIngredients();
    const filtered = ingredients.filter((item) => item.id !== id);
    if (filtered.length === ingredients.length) return false;
    await writeLocalIngredients(filtered);
    return true;
  }

  await bootstrap();
  const result = await db.collection(COLLECTION).deleteOne({ id });
  return result.deletedCount === 1;
}
