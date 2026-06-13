import { MongoClient, type Db } from "mongodb";

const MONGODB_DB = process.env.MONGODB_DB?.trim();

declare global {
  var __nirogynMongoClientPromise: Promise<MongoClient> | undefined;
}

function getClientPromise() {
  const mongodbUri = process.env.MONGODB_URI;

  if (!mongodbUri) {
    return null;
  }

  if (!global.__nirogynMongoClientPromise) {
    global.__nirogynMongoClientPromise = new MongoClient(mongodbUri).connect();
  }

  return global.__nirogynMongoClientPromise;
}

export async function getDbOrNull(): Promise<Db | null> {
  const clientPromise = getClientPromise();
  if (!clientPromise) return null;

  try {
    const client = await clientPromise;
    return MONGODB_DB ? client.db(MONGODB_DB) : client.db();
  } catch {
    global.__nirogynMongoClientPromise = undefined;
    return null;
  }
}

export async function getDb(): Promise<Db> {
  const db = await getDbOrNull();
  if (!db) {
    throw new Error("MONGODB_URI is not set");
  }

  return db;
}