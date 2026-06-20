"use client";
import { useState, useEffect } from "react";
import { X, Loader2 } from "lucide-react";

export function EmailPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("pawhaven_popup");
    if (dismissed) return;
    // Show after 60 seconds, not 15 — don't interrupt browsing
    const timer = setTimeout(() => setShow(true), 60000);
    const handleExit = (e: MouseEvent) => { if (e.clientY < 10) setShow(true); };
    document.addEventListener("mouseleave", handleExit);
    return () => { clearTimeout(timer); document.removeEventListener("mouseleave", handleExit); };
  }, []);

  if (!show || done) return null;

  async function subscribe() {
    if (!email.includes("@") || email.length < 5) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email }) });
      if (!res.ok) throw new Error("Failed");
      setDone(true);
      setTimeout(() => setShow(false), 3000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center" onClick={() => setShow(false)}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative bg-white rounded-t-2xl sm:rounded-2xl p-8 max-w-md w-full mx-4 mb-0 sm:mb-0 shadow-2xl animate-in slide-in-from-bottom" onClick={e => e.stopPropagation()}>
        <button onClick={() => { setShow(false); localStorage.setItem("pawhaven_popup", "1"); }} className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text)]"><X size={20}/></button>
        {done ? (
          <div className="text-center py-4"><div className="text-4xl mb-2">&#10003;</div><p className="font-bold text-lg">You are in!</p><p className="text-[var(--text-muted)] text-sm">15% off code sent to your email.</p></div>
        ) : (
          <>
            <h3 className="text-xl font-bold mb-2">Get 15% Off Your First Order</h3>
            <p className="text-[var(--text-muted)] text-sm mb-4">Join PawHaven for exclusive deals and pet care tips.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" value={email} onChange={e => { setEmail(e.target.value); setError(""); }} className={`flex-1 px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50 focus:border-[var(--accent)] ${error ? "border-[var(--sale)] bg-[var(--sale-bg)]" : "border-[var(--border)]"}`} />
              <button onClick={subscribe} disabled={loading} className="px-6 py-2.5 rounded-xl bg-[var(--text)] text-white font-semibold text-sm hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center gap-2">
                {loading && <Loader2 size={14} className="animate-spin" />}
                Claim
              </button>
            </div>
            {error && <p className="text-xs text-[var(--sale)] mt-2">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
}
