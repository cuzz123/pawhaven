export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-pulse">
      <div className="h-4 w-24 bg-[var(--border-light)] rounded mb-8" />
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="aspect-square bg-[var(--border-light)] rounded-2xl" />
        <div className="space-y-4">
          <div className="h-4 w-20 bg-[var(--border-light)] rounded" />
          <div className="h-8 w-64 bg-[var(--border-light)] rounded" />
          <div className="h-6 w-32 bg-[var(--border-light)] rounded" />
          <div className="h-4 w-full bg-[var(--border-light)] rounded" />
          <div className="h-4 w-3/4 bg-[var(--border-light)] rounded" />
        </div>
      </div>
    </div>
  );
}
