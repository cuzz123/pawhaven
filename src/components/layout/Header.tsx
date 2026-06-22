"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ShoppingBag, Heart, Menu, X, Sun, Moon, User } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useCartStore, useCartUIStore } from "@/lib/cart";
import { useWishlistStore } from "@/lib/wishlist";
import { SearchOverlay } from "./SearchOverlay";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "Calming", href: "/products?cat=calming" },
  { label: "Safety", href: "/products?cat=safety" },
  { label: "Feeding", href: "/products?cat=feeding" },
  { label: "Memorial", href: "/products?cat=memorial" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const itemCount = useCartStore((s) => s.itemCount());
  const openCart = useCartUIStore((s) => s.openCart);
  const wishlistCount = useWishlistStore((s) => s.count());

  const isActive = (href: string) => {
    const [hrefPath, hrefQuery] = href.split("?");
    if (hrefPath !== pathname) return false;
    if (!hrefQuery) return true;
    // Check that the link's query params are a subset of current params
    const linkParams = new URLSearchParams(hrefQuery);
    for (const [key, value] of linkParams.entries()) {
      if (searchParams.get(key) !== value) return false;
    }
    return true;
  };

  return (
    <header className="sticky top-0 z-40 h-[72px] border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        {/* Left — Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="PawHaven home"
        >
          {/* Paw print SVG */}
          <svg
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
            className="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2C14 2 18 8 18 13C18 15.5 17 17 15 18.5L20 22L16 24L14 26L12 24L8 22L13 18.5C11 17 10 15.5 10 13C10 8 14 2 14 2Z"
              fill="var(--accent)"
              fillOpacity="0.7"
            />
            <path
              d="M14 6C14 6 16 10 16 13C16 14.5 15.5 15.5 14.5 16.5L17 19L14 20.5L11 19L13.5 16.5C12.5 15.5 12 14.5 12 13C12 10 14 6 14 6Z"
              fill="var(--primary)"
              fillOpacity="0.6"
            />
            <circle cx="14" cy="9" r="1.5" fill="var(--accent)" />
          </svg>

          <span className="font-serif text-xl font-semibold tracking-tight text-[var(--text)]">
            PawHaven
          </span>
        </Link>

        {/* Center — Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium transition-colors hover:bg-[var(--border-light)] hover:text-[var(--text)] ${
                isActive(link.href) ? "text-[var(--accent)] bg-[var(--accent)]/10" : "text-[var(--text-secondary)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right — Icon buttons */}
        <div className="flex items-center gap-1">
          {/* Search */}
          <SearchOverlay />

          {/* Sign In */}
          {session?.user ? (
            <div className="relative group">
              <button className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--primary)]/10 text-[var(--primary)] font-bold text-sm" aria-label="Account">
                {session.user.name?.charAt(0) || session.user.email?.charAt(0) || "U"}
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-[var(--border)] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="p-3 border-b border-[var(--border)]">
                  <p className="text-sm font-semibold">{session.user.name || "User"}</p>
                  <p className="text-xs text-[var(--text-muted)]">{session.user.email}</p>
                </div>
                <button onClick={() => signOut()} className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-b-xl">Sign Out</button>
              </div>
            </div>
          ) : (
            <Link href="/auth/signin" aria-label="Sign In" className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--border-light)] hover:text-[var(--text)]">
              <User size={20} strokeWidth={1.8} />
            </Link>
          )}

          {/* Wishlist */}
          <Link
            href="/wishlist"
            aria-label={`Wishlist, ${wishlistCount} items`}
            className="relative flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--border-light)] hover:text-[var(--sale)]"
          >
            <Heart size={20} strokeWidth={1.8} />
            {wishlistCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[var(--sale)] px-1 text-[10px] font-semibold leading-none text-white">
                {wishlistCount > 99 ? "99+" : wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart with badge */}
          <button
            type="button"
            onClick={openCart}
            aria-label={`Shopping cart, ${itemCount} items`}
            className="relative flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--border-light)] hover:text-[var(--text)]"
          >
            <ShoppingBag size={20} strokeWidth={1.8} />
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[var(--primary)] px-1 text-[10px] font-semibold leading-none text-white">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </button>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={() => { const d=document.documentElement; const is=d.getAttribute("data-theme")==="dark"; d.setAttribute("data-theme",is?"light":"dark"); localStorage.setItem("pawhaven_theme",is?"light":"dark"); }}
            className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] text-[var(--text-secondary)] hover:bg-[var(--border-light)]"
            aria-label="Toggle theme"
          >
            <Sun size={18} strokeWidth={1.8} className="hidden dark:block" />
            <Moon size={18} strokeWidth={1.8} className="block dark:hidden" />
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] text-[var(--text-secondary)] transition-colors hover:bg-[var(--border-light)] hover:text-[var(--text)] lg:hidden"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={22} strokeWidth={1.8} />
            ) : (
              <Menu size={22} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      {mobileMenuOpen && (
        <div className="animate-fade-in border-b border-[var(--border)] bg-[var(--surface)] lg:hidden">
          <nav
            className="flex flex-col gap-0.5 px-4 py-3"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-[var(--radius-sm)] px-3 py-3 text-sm font-medium text-[var(--text)] transition-colors hover:bg-[var(--border-light)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
