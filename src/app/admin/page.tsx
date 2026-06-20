import { db } from "@/lib/db";
export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [products, orders, users] = await Promise.all([
    db.product.count(), db.order.count(), db.user.count(),
  ]);
  return (
    <div className="grid grid-cols-3 gap-6">
      {[{label:"Products",value:products,href:"/admin/products"},{label:"Orders",value:orders,href:"/admin/orders"},{label:"Users",value:users,href:"/admin"}].map(s => (
        <div key={s.label} className="bg-white border border-[var(--border)] rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-[var(--accent)] mb-2">{s.value}</div>
          <div className="text-sm text-[var(--text-muted)]">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
