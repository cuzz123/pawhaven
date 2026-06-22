export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero skeleton */}
      <div className="relative min-h-[90vh] flex items-center bg-[var(--bg)] pt-[72px] overflow-hidden animate-pulse">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left - text */}
          <div className="py-12 lg:py-20 space-y-6">
            <div className="h-4 w-48 bg-[var(--border-light)] rounded" />
            <div className="space-y-3">
              <div className="h-14 w-3/4 bg-[var(--border-light)] rounded" />
              <div className="h-14 w-1/2 bg-[var(--border-light)] rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-5 w-full bg-[var(--border-light)] rounded max-w-[480px]" />
              <div className="h-5 w-2/3 bg-[var(--border-light)] rounded" />
            </div>
            <div className="flex gap-4">
              <div className="h-12 w-44 bg-[var(--border-light)] rounded-full" />
              <div className="h-12 w-44 bg-[var(--border-light)] rounded-full" />
            </div>
          </div>
          {/* Right - image */}
          <div className="relative lg:py-12">
            <div className="aspect-[4/3] rounded-2xl bg-[var(--border-light)]" />
          </div>
        </div>
      </div>

      {/* Best Sellers grid skeleton */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 animate-pulse">
            <div className="space-y-2">
              <div className="h-4 w-24 bg-[var(--border-light)] rounded" />
              <div className="h-8 w-64 bg-[var(--border-light)] rounded" />
            </div>
            <div className="h-5 w-20 bg-[var(--border-light)] rounded hidden sm:block" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square rounded-2xl bg-[var(--border-light)]" />
                <div className="p-4 space-y-2">
                  <div className="h-4 w-3/4 bg-[var(--border-light)] rounded" />
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <div key={j} className="w-3 h-3 bg-[var(--border-light)] rounded" />
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <div className="h-6 w-16 bg-[var(--border-light)] rounded" />
                    <div className="h-4 w-12 bg-[var(--border-light)] rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PawHaven skeleton */}
      <section className="py-20 bg-[var(--border-light)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 space-y-2 animate-pulse">
            <div className="h-4 w-24 bg-[var(--bg)]/20 rounded mx-auto" />
            <div className="h-8 w-72 bg-[var(--bg)]/20 rounded mx-auto" />
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="text-center space-y-3 animate-pulse">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg)]/20 mx-auto" />
                <div className="h-5 w-32 bg-[var(--bg)]/20 rounded mx-auto" />
                <div className="space-y-1">
                  <div className="h-3 w-full bg-[var(--bg)]/20 rounded" />
                  <div className="h-3 w-2/3 bg-[var(--bg)]/20 rounded mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner skeleton */}
      <section className="relative py-28 overflow-hidden animate-pulse">
        <div className="absolute inset-0 bg-[#1E1A17]" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center space-y-4">
          <div className="h-10 w-64 bg-[#3A3220] rounded mx-auto" />
          <div className="h-5 w-96 bg-[#3A3220] rounded mx-auto" />
          <div className="h-14 w-56 bg-[#3A3220] rounded-full mx-auto mt-6" />
        </div>
      </section>
    </div>
  );
}
