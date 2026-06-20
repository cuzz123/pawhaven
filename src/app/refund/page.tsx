import type { Metadata } from "next";
export const metadata: Metadata = { title: "Returns & Refunds - PawHaven" };
export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Returns & Refunds</h1>
      <div className="prose max-w-none text-[var(--text-secondary)] leading-relaxed text-lg">
        <p>30-day happiness guarantee. If your pet does not love it, return it for a full refund. Items must be in original condition. We cover return shipping for defective products. Refunds processed within 5 business days of receiving the return.</p>
      </div>
    </div>
  );
}
