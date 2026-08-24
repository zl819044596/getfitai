"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CircleUserRound, ArrowRight, Dumbbell } from "lucide-react";
import { useAuth } from "@/components/auth-context";

export default function LoginPage() {
  const { user, loading, login } = useAuth();
  const [nextPath, setNextPath] = useState("/pricing");

  useEffect(() => {
    const requestedNext = new URLSearchParams(window.location.search).get("next");
    if (requestedNext?.startsWith("/")) setNextPath(requestedNext);
  }, []);

  return (
    <main className="min-h-screen bg-[#020617] px-4 pb-16 pt-32 sm:pt-40">
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-7 shadow-2xl shadow-black/30 backdrop-blur sm:p-9">
          <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 shadow-lg shadow-orange-500/20"><Dumbbell className="h-6 w-6 text-white" /></div>
          {loading ? (
            <div className="space-y-3 animate-pulse"><div className="h-8 w-2/3 rounded bg-slate-800" /><div className="h-4 w-full rounded bg-slate-800" /></div>
          ) : user ? (
            <>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">Welcome back</p>
              <h1 className="text-3xl font-bold text-white">You&apos;re signed in</h1>
              <p className="mt-3 text-slate-400">You&apos;re signed in as <span className="font-medium text-slate-200">{user.name || user.email}</span>.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Link href="/pricing" className="rounded-xl border border-slate-700 px-4 py-3 text-center text-sm font-bold text-slate-200 transition-colors hover:border-orange-500 hover:text-orange-300">View pricing</Link>
                <Link href={nextPath} className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600">Go to dashboard <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </>
          ) : (
            <>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">Get more from GetFitAI</p>
              <h1 className="text-3xl font-bold text-white">Sign in to your account</h1>
              <p className="mt-3 text-slate-400">Keep your workout plans in one place and manage your subscription.</p>
              <button onClick={login} className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-white px-4 py-3.5 text-sm font-bold text-slate-900 transition-transform hover:scale-[1.01] active:scale-[0.99]">
                <CircleUserRound className="h-5 w-5" /> Continue with Google
              </button>
              <p className="mt-5 text-center text-xs leading-relaxed text-slate-500">By continuing, you agree to our <Link href="/terms" className="text-slate-300 hover:text-orange-300">Terms</Link> and <Link href="/privacy" className="text-slate-300 hover:text-orange-300">Privacy Policy</Link>.</p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
