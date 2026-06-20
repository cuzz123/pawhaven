import Link from "next/link";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (!session?.user) redirect("/auth/signin");
  // @ts-expect-error role is in JWT token from authorize callback
  if (session.user.role !== "admin") redirect("/");
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex gap-4 mb-8 border-b border-[var(--border)] pb-4">
        <h1 className="text-2xl font-bold">Admin</h1>
        <nav className="flex gap-4 ml-8">
          <Link href="/admin" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)]">Dashboard</Link>
          <Link href="/admin/products" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)]">Products</Link>
          <Link href="/admin/orders" className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text)]">Orders</Link>
        </nav>
      </div>
      {children}
    </div>
  );
}
