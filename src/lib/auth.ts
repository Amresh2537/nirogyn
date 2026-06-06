import { createHash } from "crypto";

export const ADMIN_COOKIE = "nirogyn_admin_token";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "Nirogyn@2024";
const AUTH_SECRET = process.env.AUTH_SECRET ?? "nirogyn-auth-secret-xk9p2m8q";

export function generateToken(password: string): string {
  return createHash("sha256").update(password + AUTH_SECRET).digest("hex");
}

export function isValidPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export function getExpectedToken(): string {
  return generateToken(ADMIN_PASSWORD);
}
