"use client";
import { useState } from "react";
import { useCartStore } from "@/lib/cart";
import { ShoppingBag, Check } from "lucide-react";

export function AddToCartButton({ slug, name, price, image }: { slug: string; name: string; price: number; image: string }) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore(s => s.addItem);

  const handleAdd = () => {
    if (added) return;
    addItem({ id: slug, slug, name, price, image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button onClick={handleAdd} className="w-full py-4 rounded-full bg-[var(--text)] text-white font-semibold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
      {added ? <><Check size={20} /> Added!</> : <><ShoppingBag size={20} /> Add to Cart — ${price}</>}
    </button>
  );
}
