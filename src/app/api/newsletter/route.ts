import { NextRequest, NextResponse } from "next/server";
import { subscribeEmail } from "@/lib/newsletter";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = String(body?.email ?? "");

    if (!email.trim()) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const result = await subscribeEmail(email);
    return NextResponse.json({ ok: true, inserted: result.inserted, subscriber: result.subscriber });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}