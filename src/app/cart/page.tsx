"use client";
import { useState } from "react";
import { useCartStore } from "@/lib/cart";
import Link from "next/link";
import Image from "next/image";
import { Trash2, ShoppingBag, Plus, Minus, ArrowLeft } from "lucide-react";

const CROSS_SELL = [
  {slug:"gps-tracker",name:"GPS Tracker Pro",price:149,image:"/images/gps-tracker.png"},
  {slug:"calming-bed",name:"Calming Bed",price:129,image:"/images/calming-bed.png"},
  {slug:"slow-feeder",name:"Slow Feeder Bowl",price:69,image:"/images/slow-feeder.png"},
  {slug:"paw-necklace",name:"Paw Necklace",price:129,image:"/images/paw-necklace.png"},
];

export default function CartPage() {
  const items = useCartStore(s => s.items);
  const total = useCartStore(s => s.subtotal());
  const removeItem = useCartStore(s => s.removeItem);
  const updateQuantity = useCartStore(s => s.updateQuantity);
  const [discountCode, setDiscountCode] = useState("");
  const [discountMsg, setDiscountMsg] = useState("");

  if (items.length === 0) return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-6">
      <div>
        <ShoppingBag size={48} className="mx-auto mb-4 text-[var(--text-muted)]" />
        <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
        <Link href="/products" className="inline-flex px-6 py-3 rounded-full bg-[var(--text)] text-white font-semibold hover:opacity-90">Browse Products</Link>
      </div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart ({items.length})</h1>
      <div className="space-y-4 mb-8">
        {items.map(item => (
          <div key={item.product.id} className="flex items-center gap-4 p-4 bg-white border border-[var(--border)] rounded-xl">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-[var(--border-light)] flex-shrink-0">
              <Image src={item.product.image || '/images/calming-mat.png'} alt={item.product.name} fill className="object-cover" sizes="80px" />
            </div>
            <div className="flex-1 min-w-0">
              <Link href={'/products/' + item.product.slug} className="font-semibold hover:text-[var(--accent)]">{item.product.name}</Link>
              <p className="text-sm text-[var(--text-muted)]">${item.product.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <button onClick={() => updateQuantity(item.product.id, undefined, Math.max(1, item.quantity - 1))} className="w-7 h-7 rounded border border-[var(--border)] flex items-center justify-center hover:bg-[var(--border-light)]"><Minus size={12}/></button>
                <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.product.id, undefined, item.quantity + 1)} className="w-7 h-7 rounded border border-[var(--border)] flex items-center justify-center hover:bg-[var(--border-light)]"><Plus size={12}/></button>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeItem(item.product.id)} className="text-[var(--text-muted)] hover:text-red-500 mt-1"><Trash2 size={16}/></button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white border border-[var(--border)] rounded-xl p-6">
        <div className="mb-4">
            {total < 50 ? (
              <div className="bg-[var(--primary)]/5 border border-[var(--primary)]/20 rounded-xl p-3 text-sm">
                <div className="flex justify-between mb-1"><span className="text-[var(--primary)] font-semibold">${(50 - total).toFixed(2)} away from free shipping</span><span className="text-[var(--text-muted)]">$0 — $50</span></div>
                <div className="h-2 bg-[var(--border-light)] rounded-full overflow-hidden"><div className="h-full bg-[var(--primary)] rounded-full transition-all" style={{width: `${Math.min(100, (total/50)*100)}%`}} /></div>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-sm text-green-700 font-semibold flex items-center gap-2">Free Shipping Earned</div>
            )}
          </div>
          <div className="flex gap-2 mb-4">
            <input type="text" placeholder="Discount code" value={discountCode} onChange={e => { setDiscountCode(e.target.value); setDiscountMsg(""); }} className="flex-1 px-4 py-2 rounded-xl border border-[var(--border)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 focus:border-[var(--accent)]" />
            <button
              onClick={() => {
                if (!discountCode.trim()) return;
                if (discountCode.toUpperCase() === "WELCOME15") {
                  setDiscountMsg("Code valid! Applied at checkout (15% off).");
                } else {
                  setDiscountMsg("Invalid code. Try WELCOME15 for 15% off your first order.");
                }
              }}
              className="px-4 py-2 rounded-xl border border-[var(--border)] text-sm font-medium hover:bg-[var(--border-light)] transition-colors"
            >Apply</button>
          </div>
          {discountMsg && <p className="text-xs text-[var(--accent)] -mt-2 mb-4">{discountMsg}</p>}
          <div className="flex justify-between text-lg font-bold mb-6"><span>Total</span><span>${total.toFixed(2)}</span></div>
        <Link href="/checkout" className="block w-full py-4 rounded-full bg-[var(--text)] text-white font-semibold text-lg hover:opacity-90 text-center">Proceed to Checkout</Link>
        <Link href="/products" className="block text-center text-sm text-[var(--text-muted)] mt-4 hover:text-[var(--accent)]"><ArrowLeft size={14} className="inline mr-1"/>Continue Shopping</Link>
      </div>
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CROSS_SELL.map(p => (
            <Link key={p.slug} href={'/products/' + p.slug} className="group bg-white border border-[var(--border)] rounded-xl overflow-hidden hover:shadow-md transition-all">
              <div className="relative aspect-square overflow-hidden bg-[var(--border-light)]">
                <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="25vw" />
              </div>
              <div className="p-3"><h3 className="text-sm font-semibold">{p.name}</h3><span className="text-sm font-bold">${p.price}</span></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
