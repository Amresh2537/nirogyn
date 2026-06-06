import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getExpectedToken, ADMIN_COOKIE } from "@/lib/auth";
import { getAllPosts, createPost } from "@/lib/posts";

async function isAuthed(req: NextRequest): Promise<boolean> {
  // Check cookie
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  return token === getExpectedToken();
}

export async function GET(req: NextRequest) {
  if (!(await isAuthed(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(getAllPosts());
}

export async function POST(req: NextRequest) {
  if (!(await isAuthed(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await req.json();
    const post = createPost(body);
    return NextResponse.json(post, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
