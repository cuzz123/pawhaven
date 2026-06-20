"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative z-50" role="region" aria-label="Announcements">
      <div className="bg-[var(--primary)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-2.5 text-center text-sm font-medium">
          Free Shipping Over $50 &middot; 30-Day Trial &middot; 1% Donated to Animal Shelters
        </div>
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1.5 flex h-6 w-6 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        aria-label="Close announcement banner"
      >
        <X size={14} strokeWidth={2} />
      </button>
    </div>
  );
}
