import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getExpectedToken, ADMIN_COOKIE } from "@/lib/auth";
import { deleteIngredient, getIngredientById, updateIngredient } from "@/lib/ingredients";

async function isAuthed(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  return token === getExpectedToken();
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const ingredient = await getIngredientById(id);
  if (!ingredient) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(ingredient);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { id } = await params;
    const body = await req.json();
    const ingredient = await updateIngredient(id, body);
    if (!ingredient) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(ingredient);
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const ok = await deleteIngredient(id);
  if (!ok) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
