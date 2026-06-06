import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";

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
  readTime: string;
  createdAt: string;
  updatedAt: string;
}

const DATA_FILE = path.join(process.cwd(), "data", "posts.json");

function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, "[]", "utf-8");
}

export function getAllPosts(): Post[] {
  ensureDataFile();
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8")) as Post[];
  } catch {
    return [];
  }
}

export function getPublishedPosts(): Post[] {
  return getAllPosts()
    .filter((p) => p.status === "published")
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  return getPublishedPosts().find((p) => p.slug === slug) ?? null;
}

export function getPostById(id: string): Post | null {
  return getAllPosts().find((p) => p.id === id) ?? null;
}

export function createPost(
  data: Omit<Post, "id" | "createdAt" | "updatedAt">
): Post {
  const posts = getAllPosts();
  const now = new Date().toISOString();
  const post: Post = { ...data, id: randomUUID(), createdAt: now, updatedAt: now };
  posts.push(post);
  fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2), "utf-8");
  return post;
}

export function updatePost(
  id: string,
  data: Partial<Omit<Post, "id" | "createdAt">>
): Post | null {
  const posts = getAllPosts();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  posts[idx] = { ...posts[idx], ...data, updatedAt: new Date().toISOString() };
  fs.writeFileSync(DATA_FILE, JSON.stringify(posts, null, 2), "utf-8");
  return posts[idx];
}

export function deletePost(id: string): boolean {
  const posts = getAllPosts();
  const filtered = posts.filter((p) => p.id !== id);
  if (filtered.length === posts.length) return false;
  fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}
