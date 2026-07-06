import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/utils/authOptions";

export async function requireAdmin() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/login");
  }
  
  if ((session as any)?.user?.role !== "admin") {
    redirect("/");
  }
  
  return session;
}

export async function isAdmin(): Promise<boolean> {
  const session = await getServerSession(authOptions);
  return (session as any)?.user?.role === "admin";
}
