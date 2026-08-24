"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Crown, Loader2 } from "lucide-react";
import { useAuth } from "@/components/auth-context";

const freeFeatures = ["2 AI workout plans each week", "Personalized plan generator", "Save plans in this browser"];
const proFeatures = ["Unlimited AI workout plans", "4-week periodized plans — coming soon", "Cloud plan saving", "Progress tracking — coming soon"];

export default function PricingPage() {
  const { user, isPro, loading } = useAuth();
  const [subscribing, setSubscribing] = useState(false);
  const [error, setError] = useState("");

  async function startCheckout() {
    if (!user) {
      window.location.assign("/login?next=/pricing");
      return;
    }
    setSubscribing(true);
    setError("");
    try {
      const response = await fetch("/api/subscribe", { method: "POST" });
      const data = (await response.json().catch(() => ({}))) as { checkout_url?: string; error?: string };
      if (!response.ok || !data.checkout_url) throw new Error(data.error || "Unable to start checkout. Please try again.");
      window.location.assign(data.checkout_url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to start checkout. Please try again.");
      setSubscribing(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#020617] px-4 pb-20 pt-28 sm:pt-36">
      <section className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Simple pricing</p>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Train smarter, on your terms.</h1>
          <p className="mt-5 text-lg text-slate-400">Start free. Upgrade whenever you want unlimited plans and cloud access.</p>
        </div>

        {isPro && !loading && <div className="mx-auto mt-8 flex max-w-2xl items-center justify-between gap-4 rounded-2xl border border-orange-500/30 bg-orange-500/10 px-5 py-4 text-sm text-orange-100"><span className="flex items-center gap-2 font-semibold"><Crown className="h-5 w-5 text-orange-400" /> You&apos;re on Pro.</span><a href="mailto:zl18672545321@gmail.com?subject=GetFitAI%20Pro%20subscription" className="font-bold text-orange-300 hover:text-orange-200">Manage subscription</a></div>}

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <PricingCard name="Free" price="$0" description="For getting started with personalized workouts." features={freeFeatures} action={<Link href="/tools/workout-generator" className="block w-full rounded-xl border border-slate-700 px-4 py-3 text-center text-sm font-bold text-slate-100 transition-colors hover:border-orange-500 hover:text-orange-300">Start for free</Link>} />
          <PricingCard name="Pro" price="$8.99" description="For a more consistent, connected training routine." features={proFeatures} highlighted action={<button disabled={loading || isPro || subscribing} onClick={() => void startCheckout()} className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60">{subscribing ? <><Loader2 className="h-4 w-4 animate-spin" /> Redirecting…</> : isPro ? "You’re on Pro" : "Upgrade to Pro"}</button>} />
        </div>
        {error && <p className="mt-5 text-center text-sm text-red-400">{error}</p>}
        <p className="mt-8 text-center text-sm text-slate-500">Questions about Pro? <a className="text-slate-300 hover:text-orange-300" href="mailto:zl18672545321@gmail.com">Contact us</a>.</p>
      </section>
    </main>
  );
}

function PricingCard({ name, price, description, features, action, highlighted = false }: { name: string; price: string; description: string; features: string[]; action: React.ReactNode; highlighted?: boolean }) {
  return <article className={`relative rounded-3xl border p-7 sm:p-8 ${highlighted ? "border-orange-500/60 bg-slate-900 shadow-2xl shadow-orange-500/10" : "border-slate-800 bg-slate-950/60"}`}>
    {highlighted && <span className="absolute right-6 top-0 -translate-y-1/2 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">MOST POPULAR</span>}
    <h2 className="text-2xl font-bold text-white">{name}</h2>
    <p className="mt-3 min-h-12 text-sm leading-relaxed text-slate-400">{description}</p>
    <div className="mt-7 flex items-end gap-1"><span className="text-5xl font-bold text-white">{price}</span>{name === "Pro" && <span className="mb-1 text-slate-400">/month</span>}</div>
    <ul className="my-8 space-y-4 border-y border-slate-800 py-7">{features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-slate-300"><Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />{feature}</li>)}</ul>
    {action}
  </article>;
}
