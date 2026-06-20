import { db } from "@/lib/db";
import Link from "next/link";
export const dynamic = "force-dynamic";

export default async function AdminProducts() {
  const products = await db.product.findMany({ include: { category: true }, orderBy: { createdAt: "desc" } });
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Products ({products.length})</h2>
      </div>
      <div className="bg-white border border-[var(--border)] rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-[var(--border-light)] text-left">
            <tr><th className="p-3 font-semibold">Name</th><th className="p-3">Category</th><th className="p-3">Price</th><th className="p-3">Tag</th></tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} className="border-t border-[var(--border)] hover:bg-[var(--border-light)]">
                <td className="p-3"><Link href={`/products/${p.slug}`} className="text-[var(--accent)] hover:underline">{p.name}</Link></td>
                <td className="p-3 text-[var(--text-muted)]">{p.category.name}</td>
                <td className="p-3 font-medium">${p.price}</td>
                <td className="p-3">{p.tag && <span className="px-2 py-1 rounded-full text-xs bg-[var(--primary)]/10 text-[var(--primary)]">{p.tag}</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
