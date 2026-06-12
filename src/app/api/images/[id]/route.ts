import { NextRequest, NextResponse } from "next/server";
import { getDbOrNull } from "@/lib/mongodb";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const db = await getDbOrNull();
  if (!db) {
    return NextResponse.json({ error: "Storage not available" }, { status: 503 });
  }

  const asset = await db.collection("assets").findOne({ id });
  if (!asset) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const buffer = Buffer.from(asset.data as string, "base64");

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": asset.contentType as string,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
