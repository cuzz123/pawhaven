import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--text)] text-[var(--announcement-text)]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold text-white mb-4 text-sm">Shop</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/products" className="hover:text-white transition-colors">All Products</Link>
            <Link href="/products/calming-mat" className="hover:text-white transition-colors">Calming Mat</Link>
            <Link href="/products/gps-tracker" className="hover:text-white transition-colors">GPS Tracker</Link>
            <Link href="/products/slow-feeder" className="hover:text-white transition-colors">Slow Feeder</Link>
            <Link href="/products/paw-necklace" className="hover:text-white transition-colors">Paw Necklace</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 text-sm">Support</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/shipping" className="hover:text-white transition-colors">Shipping</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Returns</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4 text-sm">Company</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/faq" className="hover:text-white transition-colors">About</Link>
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
        (c) 2026 PawHaven. 1% of every purchase donated to animal shelters.
      </div>
    </footer>
  );
}
