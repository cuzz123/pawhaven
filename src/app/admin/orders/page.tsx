import { db } from "@/lib/db";
export const dynamic = "force-dynamic";

export default async function AdminOrders() {
  const orders = await db.order.findMany({ include: { user: { select: { name: true, email: true } }, items: { include: { product: { select: { name: true } } } } }, orderBy: { createdAt: "desc" }, take: 50 });
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Orders ({orders.length})</h2>
      {orders.length === 0 ? <p className="text-[var(--text-muted)]">No orders yet.</p> : (
        <div className="space-y-4">
          {orders.map(o => (
            <div key={o.id} className="bg-white border border-[var(--border)] rounded-xl p-4">
              <div className="flex justify-between mb-2"><span className="font-semibold">{o.user.name || o.user.email}</span><span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${o.status==="completed"?"bg-green-100 text-green-700":"bg-yellow-100 text-yellow-700"}`}>{o.status}</span></div>
              <div className="text-sm text-[var(--text-muted)]">
                {o.items.map(i => `${i.product.name} x${i.quantity}`).join(", ")}
              </div>
              <div className="text-right font-bold mt-2">${o.total.toFixed(2)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
