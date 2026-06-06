import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getExpectedToken, ADMIN_COOKIE } from "@/lib/auth";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;

  if (token !== getExpectedToken()) {
    redirect("/admin/login");
  }

  return <>{children}</>;
}
