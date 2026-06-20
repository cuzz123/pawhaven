"use client";
import { useWishlistStore } from "@/lib/wishlist";
import Link from "next/link";
import Image from "next/image";
import { Heart, Trash2, ShoppingBag } from "lucide-react";

export default function WishlistPage() {
  const items = useWishlistStore(s => s.items);
  const removeItem = useWishlistStore(s => s.removeItem);

  if (items.length === 0) return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-6">
      <div>
        <Heart size={48} className="mx-auto mb-4 text-[var(--text-muted)]" />
        <h1 className="text-2xl font-bold mb-2">Your wishlist is empty</h1>
        <p className="text-[var(--text-muted)] mb-6">Save products you love and come back to them anytime.</p>
        <Link href="/products" className="inline-flex px-6 py-3 rounded-full bg-[var(--text)] text-white font-semibold hover:opacity-90">Discover Products</Link>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center gap-3 mb-8">
        <Heart size={28} className="text-red-500 fill-red-500" />
        <h1 className="text-3xl font-bold">My Wishlist ({items.length})</h1>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {items.map(item => (
          <div key={item.id} className="group bg-white border border-[var(--border)] rounded-2xl overflow-hidden hover:shadow-lg transition-all">
            <Link href={`/products/${item.slug}`}>
              <div className="relative aspect-square overflow-hidden bg-[var(--border-light)]">
                <Image src={item.image || "/images/calming-mat.png"} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="25vw" />
              </div>
            </Link>
            <div className="p-4">
              <Link href={`/products/${item.slug}`} className="font-semibold hover:text-[var(--accent)]">{item.name}</Link>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-bold">${item.price}</span>
                <button onClick={() => removeItem(item.id)} className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 size={18}/></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
