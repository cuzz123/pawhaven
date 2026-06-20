import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-[var(--text-muted)] mb-8">Page not found. Let&apos;s get you back to the good stuff.</p>
        <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--text)] text-white font-semibold hover:opacity-90">Back to PawHaven</Link>
      </div>
    </div>
  );
}
