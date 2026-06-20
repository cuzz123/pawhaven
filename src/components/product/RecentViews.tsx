"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function getRecent(): any[] { try { return JSON.parse(localStorage.getItem("pawhaven_recent") || "[]"); } catch { return []; } }
function addRecent(product: any) {
  const recent = getRecent().filter((p: any) => p.slug !== product.slug);
  recent.unshift({ slug: product.slug, name: product.name, price: product.price, image: product.image });
  localStorage.setItem("pawhaven_recent", JSON.stringify(recent.slice(0, 6)));
}

export function useRecentView(product: any) {
  useEffect(() => { if (product?.slug) addRecent(product); }, [product?.slug]);
}

export function RecentViews() {
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => { setItems(getRecent()); }, []);
  if (items.length < 2) return null;
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-xl font-bold mb-4">Recently Viewed</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {items.slice(0, 6).map((p: any) => (
          <Link key={p.slug} href={`/products/${p.slug}`} className="flex-shrink-0 w-40 group">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-[var(--border-light)] mb-2">
              <Image src={p.image || "/images/calming-mat.png"} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="160px" />
            </div>
            <p className="text-xs font-semibold line-clamp-1">{p.name}</p>
            <p className="text-xs text-[var(--text-muted)]">${p.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
