"use client";
import { Heart } from "lucide-react";
import { useWishlistStore } from "@/lib/wishlist";

export function WishlistButton({ product }: { product: { id: string; name: string; slug: string; image: string; price: number } }) {
  const isWishlisted = useWishlistStore(s => s.isWishlisted(product.id));
  const toggleItem = useWishlistStore(s => s.toggleItem);

  return (
    <button
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleItem(product); }}
      className={`p-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 ${
        isWishlisted
          ? "text-[var(--sale)] bg-[var(--sale-bg)]"
          : "text-[var(--text-muted)] hover:text-[var(--sale)] hover:bg-[var(--sale-bg)]"
      }`}
      aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={isWishlisted}
    >
      <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} strokeWidth={2} />
    </button>
  );
}
