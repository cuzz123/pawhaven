"use client";
import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function ProductLightbox({ images, name }: { images: string[]; name: string }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  if (images.length === 0) return null;

  return (
    <>
      <div onClick={() => setOpen(true)} className="cursor-pointer relative aspect-square rounded-2xl overflow-hidden bg-[var(--border-light)] group">
        <Image src={images[0]} alt={name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="50vw" priority />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-semibold bg-black/50 px-4 py-2 rounded-full transition-opacity">Click to enlarge</span>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={() => setOpen(false)}>
          <button className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full" onClick={() => setOpen(false)}><X size={28}/></button>
          {images.length > 1 && <button className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full" onClick={e => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length); }}><ChevronLeft size={32}/></button>}
          <div className="relative w-[90vw] h-[80vh]" onClick={e => e.stopPropagation()}>
            <Image src={images[idx]} alt={name} fill className="object-contain" sizes="90vw" priority />
          </div>
          {images.length > 1 && <button className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full" onClick={e => { e.stopPropagation(); setIdx(i => (i + 1) % images.length); }}><ChevronRight size={32}/></button>}
          <div className="absolute bottom-4 text-white text-sm">{idx + 1} / {images.length}</div>
        </div>
      )}
    </>
  );
}
