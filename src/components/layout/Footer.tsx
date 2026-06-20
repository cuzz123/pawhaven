import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--text)] text-[var(--announcement-text)]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-white mb-4 text-sm">Shop</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/products" className="hover:text-white transition-colors">All Products</Link>
            <Link href="/products?cat=calming" className="hover:text-white transition-colors">Calming</Link>
            <Link href="/products?cat=safety" className="hover:text-white transition-colors">Safety & GPS</Link>
            <Link href="/products?cat=feeding" className="hover:text-white transition-colors">Feeding</Link>
            <Link href="/products?cat=memorial" className="hover:text-white transition-colors">Memorial</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 text-sm">Support</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/shipping" className="hover:text-white transition-colors">Shipping</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Returns</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 text-sm">Company</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 text-sm">PawHaven</h4>
          <p className="text-sm leading-relaxed">Premium smart pet products. Because they give us everything.</p>
        </div>
      </div>
      <div className="border-t border-[var(--text-muted)]/20 py-6 text-center text-xs">
        &copy; {new Date().getFullYear()} PawHaven. 1% of every purchase donated to animal shelters.
      </div>
    </footer>
  );
}
