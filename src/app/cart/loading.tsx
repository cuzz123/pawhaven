export default function CartLoading() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 animate-pulse">
      {/* Title */}
      <div className="h-9 w-56 bg-[var(--border-light)] rounded mb-8" />

      {/* Cart items */}
      <div className="space-y-4 mb-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 bg-white border border-[var(--border)] rounded-xl"
          >
            <div className="w-20 h-20 rounded-lg bg-[var(--border-light)] flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-3/4 bg-[var(--border-light)] rounded" />
              <div className="h-3 w-16 bg-[var(--border-light)] rounded" />
              <div className="flex items-center gap-2 mt-2">
                <div className="w-7 h-7 rounded border border-[var(--border)] bg-[var(--border-light)]" />
                <div className="w-6 h-4 bg-[var(--border-light)] rounded" />
                <div className="w-7 h-7 rounded border border-[var(--border)] bg-[var(--border-light)]" />
              </div>
            </div>
            <div className="text-right space-y-2">
              <div className="h-5 w-16 bg-[var(--border-light)] rounded" />
              <div className="h-4 w-4 bg-[var(--border-light)] rounded ml-auto" />
            </div>
          </div>
        ))}
      </div>

      {/* Order summary card */}
      <div className="bg-white border border-[var(--border)] rounded-xl p-6 space-y-4">
        {/* Free shipping progress */}
        <div className="bg-[var(--border-light)] rounded-xl p-3">
          <div className="flex justify-between mb-1">
            <div className="h-3 w-32 bg-[var(--border-light)] rounded" />
            <div className="h-3 w-16 bg-[var(--border-light)] rounded" />
          </div>
          <div className="h-2 w-full bg-[var(--bg)] rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-[var(--border-light)] rounded-full" />
          </div>
        </div>

        {/* Discount code */}
        <div className="flex gap-2">
          <div className="flex-1 h-10 bg-[var(--border-light)] rounded-xl" />
          <div className="w-20 h-10 bg-[var(--border-light)] rounded-xl" />
        </div>

        {/* Total */}
        <div className="flex justify-between">
          <div className="h-6 w-12 bg-[var(--border-light)] rounded" />
          <div className="h-6 w-20 bg-[var(--border-light)] rounded" />
        </div>

        {/* Checkout button */}
        <div className="h-14 w-full bg-[var(--border-light)] rounded-full" />

        {/* Continue shopping link */}
        <div className="h-4 w-36 bg-[var(--border-light)] rounded mx-auto" />
      </div>

      {/* Cross-sell skeletons */}
      <div className="mt-12">
        <div className="h-7 w-40 bg-[var(--border-light)] rounded mb-4" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-white border border-[var(--border)] rounded-xl overflow-hidden">
              <div className="aspect-square bg-[var(--border-light)]" />
              <div className="p-3 space-y-1.5">
                <div className="h-4 w-3/4 bg-[var(--border-light)] rounded" />
                <div className="h-4 w-1/4 bg-[var(--border-light)] rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
