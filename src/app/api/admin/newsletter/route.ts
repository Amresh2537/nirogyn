import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getExpectedToken, ADMIN_COOKIE } from "@/lib/auth";
import { getSubscribers } from "@/lib/newsletter";

async function isAuthed(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  return token === getExpectedToken();
}

export async function GET() {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const subscribers = await getSubscribers();
  return NextResponse.json(subscribers);
}