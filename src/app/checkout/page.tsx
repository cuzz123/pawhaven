"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useCartStore } from "@/lib/cart";

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";

declare global { interface Window { paypal: any; pawhaven_paypal_loaded?: boolean; } }

export default function CheckoutPage() {
  const [paid, setPaid] = useState(false);
  const [paypalReady, setPaypalReady] = useState(false);
  const [error, setError] = useState("");
  const items = useCartStore(s => s.items);
  const total = useCartStore(s => s.subtotal());
  const clearCart = useCartStore(s => s.clearCart);
  const paypalRef = useRef<HTMLDivElement>(null);
  const totalRef = useRef(total);
  totalRef.current = total;

  const renderPaypal = useCallback(() => {
    if (!window.paypal || !paypalRef.current) return;
    paypalRef.current.innerHTML = "";
    window.paypal.Buttons({
      style: { layout: "vertical", color: "gold", shape: "pill", label: "paypal" },
      createOrder: () => {
        const orderItems = items.map(item => ({ name: item.product.name, quantity: item.quantity, price: item.product.price }));
        return fetch("/api/paypal/create-order", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ total: totalRef.current.toFixed(2), items: orderItems })
        }).then(r => r.json()).then(d => d.id);
      },
      onApprove: async (data: any) => {
        try {
          const res = await fetch("/api/paypal/capture-order", {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderID: data.orderID,
              items: items.map(item => ({ name: item.product.name, slug: item.product.slug, price: item.product.price, quantity: item.quantity })),
              total: totalRef.current,
            })
          });
          if (!res.ok) throw new Error("Capture failed");
          clearCart();
          setPaid(true);
        } catch {
          setError("Payment could not be completed. Please contact support.");
        }
      },
      onError: (err: any) => { setError("Payment failed. Please try again."); console.error(err); },
    }).render(paypalRef.current).catch((e: any) => setError("PayPal failed to load. Please refresh."));
  }, [clearCart]);

  useEffect(() => {
    if (paid || items.length === 0) return;
    if (window.paypal) { setPaypalReady(true); renderPaypal(); return; }
    if (window.pawhaven_paypal_loaded) return;

    window.pawhaven_paypal_loaded = true;
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=USD&intent=capture`;
    script.async = true;
    script.onload = () => { setPaypalReady(true); renderPaypal(); };
    script.onerror = () => setError("PayPal unavailable. Please try again later.");
    document.head.appendChild(script);
  }, [paid, items.length, renderPaypal]);

  if (items.length === 0 && !paid) return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-6">
      <div><h1 className="text-2xl font-bold mb-4">Your cart is empty</h1><Link href="/products" className="text-[var(--accent)] font-semibold hover:underline">Continue Shopping</Link></div>
    </div>
  );

  if (paid) return (
    <div className="min-h-[60vh] flex items-center justify-center text-center px-6">
      <div><div className="text-6xl mb-4">&#10003;</div><h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1><p className="text-[var(--text-muted)] mb-8">Thank you for your purchase.</p><Link href="/products" className="inline-flex px-8 py-4 rounded-full bg-[var(--text)] text-white font-semibold hover:opacity-90">Continue Shopping</Link></div>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/products" className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] mb-8"><ArrowLeft size={16}/> Back to Shop</Link>
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="space-y-4 mb-8">
        {items.map(item => (
          <div key={item.product.id} className="flex items-center gap-4 p-4 bg-white border border-[var(--border)] rounded-xl">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-[var(--border-light)] flex-shrink-0"><Image src={item.product.image || "/images/calming-mat.png"} alt={item.product.name} fill className="object-cover" sizes="64px" /></div>
            <div className="flex-1"><h3 className="font-semibold">{item.product.name}</h3><p className="text-sm text-[var(--text-muted)]">Qty: {item.quantity}</p></div>
            <span className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="bg-white border border-[var(--border)] rounded-xl p-6">
        <div className="flex justify-between text-lg font-bold mb-6"><span>Total</span><span>${total.toFixed(2)}</span></div>
        {error && <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm mb-4">{error}</div>}
        <div className="flex items-center justify-center gap-6 mb-6 text-sm text-[var(--text-muted)]">
            <div className="flex items-center gap-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> Encrypted & Secure</div>
            <div className="flex items-center gap-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> 30-Day Returns</div>
            <div className="flex items-center gap-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="23 7 16 12 23 17"/></svg> No Hidden Fees</div>
          </div>
          <div ref={paypalRef} className="min-h-[150px]"></div>
        {!paypalReady && !error && <div className="flex items-center justify-center py-8 text-[var(--text-muted)]"><Loader2 size={20} className="animate-spin mr-2"/>Loading PayPal...</div>}
        <p className="text-xs text-[var(--text-muted)] text-center mt-4">Secured by PayPal. We never store your card details.</p>
      </div>
    </div>
  );
}
