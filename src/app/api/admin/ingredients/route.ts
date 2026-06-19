import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getExpectedToken, ADMIN_COOKIE } from "@/lib/auth";
import { createIngredient, getAllIngredients } from "@/lib/ingredients";

async function isAuthed(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  return token === getExpectedToken();
}

export async function GET() {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(await getAllIngredients());
}

export async function POST(req: NextRequest) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await req.json();
    const ingredient = await createIngredient(body);
    return NextResponse.json(ingredient, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
