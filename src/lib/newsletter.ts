import { randomUUID } from "crypto";
import fs from "fs/promises";
import path from "path";
import { getDbOrNull } from "./mongodb";

export interface Subscriber {
  id: string;
  email: string;
  subscribedAt: string;
  updatedAt: string;
}

const COLLECTION = "newsletter_subscribers";
let bootstrapPromise: Promise<void> | null = null;
const DATA_FILE = path.join(process.cwd(), "data", "newsletter.json");

async function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  await fs.mkdir(dir, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf-8");
  }
}

async function readLocalSubscribers(): Promise<Subscriber[]> {
  await ensureDataFile();
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const items = JSON.parse(raw) as Subscriber[];
    return Array.isArray(items) ? items : [];
  } catch {
    return [];
  }
}

async function writeLocalSubscribers(subscribers: Subscriber[]): Promise<void> {
  await ensureDataFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(subscribers, null, 2), "utf-8");
}

async function bootstrap() {
  if (!bootstrapPromise) {
    bootstrapPromise = (async () => {
      const db = await getDbOrNull();
      if (!db) return;

      const collection = db.collection(COLLECTION);
      await collection.createIndex({ email: 1 }, { unique: true });

      const count = await collection.countDocuments();
      if (count === 0) {
        const localSubscribers = await readLocalSubscribers();
        if (localSubscribers.length > 0) {
          await collection.insertMany(localSubscribers.map((subscriber) => ({
            ...subscriber,
            email: normalizeEmail(subscriber.email),
          })));
        }
      }
    })();
  }

  return bootstrapPromise;
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function toSubscriber(doc: Record<string, unknown>): Subscriber {
  return {
    id: String(doc.id ?? doc._id),
    email: String(doc.email ?? ""),
    subscribedAt: String(doc.subscribedAt ?? new Date().toISOString()),
    updatedAt: String(doc.updatedAt ?? doc.subscribedAt ?? new Date().toISOString()),
  };
}

export async function subscribeEmail(email: string): Promise<{ subscriber: Subscriber; inserted: boolean }> {
  const normalizedEmail = normalizeEmail(email);
  const now = new Date().toISOString();

  const db = await getDbOrNull();
  if (!db) {
    const subscribers = await readLocalSubscribers();
    const existing = subscribers.find((subscriber) => subscriber.email === normalizedEmail);
    if (existing) {
      return { subscriber: existing, inserted: false };
    }

    const subscriber: Subscriber = {
      id: randomUUID(),
      email: normalizedEmail,
      subscribedAt: now,
      updatedAt: now,
    };

    subscribers.push(subscriber);
    await writeLocalSubscribers(subscribers);
    return { subscriber, inserted: true };
  }

  await bootstrap();
  const collection = db.collection(COLLECTION);

  const existing = await collection.findOne({ email: normalizedEmail });
  if (existing) {
    const subscriber = toSubscriber(existing as Record<string, unknown>);
    return { subscriber, inserted: false };
  }

  const subscriber: Subscriber = {
    id: randomUUID(),
    email: normalizedEmail,
    subscribedAt: now,
    updatedAt: now,
  };

  await collection.insertOne(subscriber);
  return { subscriber, inserted: true };
}

export async function getSubscribers(): Promise<Subscriber[]> {
  const db = await getDbOrNull();
  if (!db) {
    return (await readLocalSubscribers()).sort(
      (a, b) => new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime()
    );
  }

  await bootstrap();
  const docs = await db.collection(COLLECTION).find({}).sort({ subscribedAt: -1 }).toArray();
  return docs.map((doc) => toSubscriber(doc as Record<string, unknown>));
}