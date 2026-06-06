import { NextRequest, NextResponse } from "next/server";
import { isValidPassword, generateToken, ADMIN_COOKIE } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { password } = body as { password: string };

    if (!password || !isValidPassword(password)) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const token = generateToken(password);
    const res = NextResponse.json({ ok: true });

    res.cookies.set(ADMIN_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return res;
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
