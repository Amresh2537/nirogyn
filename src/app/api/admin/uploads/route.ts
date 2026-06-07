import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import path from "path";
import { mkdir, writeFile } from "fs/promises";
import { randomUUID } from "crypto";
import { getExpectedToken, ADMIN_COOKIE } from "@/lib/auth";

async function isAuthed(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  return token === getExpectedToken();
}

export async function POST(req: NextRequest) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Image file is required" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const extension = path.extname(file.name) || ".jpg";
    const fileName = `${Date.now()}-${randomUUID()}${extension}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads", "blog");
    await mkdir(uploadDir, { recursive: true });
    await writeFile(path.join(uploadDir, fileName), buffer);

    return NextResponse.json({ url: `/uploads/blog/${fileName}` });
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}