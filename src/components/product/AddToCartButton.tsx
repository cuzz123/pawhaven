"use client";
import { useState, useRef } from "react";
import { useCartStore } from "@/lib/cart";
import { ShoppingBag, Check } from "lucide-react";

interface AddToCartButtonProps {
  product: { slug: string; name: string; price: number; image: string };
  label?: string;
}

export function AddToCartButton({ product, label }: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const addItem = useCartStore(s => s.addItem);

  const handleAdd = () => {
    // Debounce: ignore clicks during "Added!" animation
    if (added) return;
    addItem({ id: product.slug, slug: product.slug, name: product.name, price: product.price, image: product.image });
    setAdded(true);
    timeoutRef.current = setTimeout(() => setAdded(false), 2000);
  };

  const defaultLabel = `Add to Cart — $${product.price}`;
  const buttonLabel = label || defaultLabel;

  return (
    <button
      onClick={handleAdd}
      className="w-full py-4 rounded-full bg-[var(--text)] text-white font-semibold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
    >
      {added ? (
        <><Check size={20} /> Added!</>
      ) : (
        <><ShoppingBag size={20} /> {buttonLabel}</>
      )}
    </button>
  );
}
