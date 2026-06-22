export default function ProductLoading() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-pulse">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-4">
        <div className="h-4 w-10 bg-[var(--border-light)] rounded" />
        <div className="h-4 w-4">/</div>
        <div className="h-4 w-16 bg-[var(--border-light)] rounded" />
        <div className="h-4 w-4">/</div>
        <div className="h-4 w-32 bg-[var(--border-light)] rounded" />
      </div>

      {/* Back link */}
      <div className="h-4 w-28 bg-[var(--border-light)] rounded mb-8" />

      {/* Product main: 2-column */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="relative aspect-square rounded-2xl bg-[var(--border-light)]">
          <div className="absolute top-4 left-4 h-6 w-20 bg-[var(--bg)] rounded-full" />
        </div>

        {/* Info */}
        <div className="space-y-5">
          <div className="h-4 w-32 bg-[var(--border-light)] rounded" />
          <div className="h-9 w-3/4 bg-[var(--border-light)] rounded" />

          {/* Stars */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-4 h-4 bg-[var(--border-light)] rounded" />
              ))}
            </div>
            <div className="h-4 w-28 bg-[var(--border-light)] rounded" />
          </div>

          {/* Price */}
          <div className="h-8 w-20 bg-[var(--border-light)] rounded" />

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 w-full bg-[var(--border-light)] rounded" />
            <div className="h-4 w-5/6 bg-[var(--border-light)] rounded" />
            <div className="h-4 w-2/3 bg-[var(--border-light)] rounded" />
          </div>

          {/* Features list */}
          <div className="space-y-2">
            <div className="h-5 w-24 bg-[var(--border-light)] rounded" />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-4 h-4 bg-[var(--border-light)] rounded mt-0.5 flex-shrink-0" />
                <div className="h-4 w-48 bg-[var(--border-light)] rounded" />
              </div>
            ))}
          </div>

          {/* Shipping & trial badges */}
          <div className="flex gap-4">
            <div className="h-4 w-28 bg-[var(--border-light)] rounded" />
            <div className="h-4 w-28 bg-[var(--border-light)] rounded" />
          </div>

          {/* Add to cart button */}
          <div className="h-14 w-full bg-[var(--border-light)] rounded-full" />

          {/* Trust box */}
          <div className="p-4 rounded-xl bg-[var(--border-light)]/50 space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[var(--border-light)] rounded" />
                <div className="h-4 w-48 bg-[var(--border-light)] rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
