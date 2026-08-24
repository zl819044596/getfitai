"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Dumbbell, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/components/auth-context";

const navLinks = [
  { href: "/train", label: "Train" },
  { href: "/tools", label: "Tools" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/#features", label: "Features" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/my-plans", label: "My Plans" },
];

const memberLinks = [{ href: "/dashboard", label: "Progress" }];

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, isPro, loading, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const account = user ? (
    <div className="flex items-center gap-3">
      <Link href="/pricing" className="hidden lg:flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-orange-300">
          {(user.name || user.email).charAt(0).toUpperCase()}
        </span>
        <span className="max-w-32 truncate">{user.name || user.email}</span>
        {isPro && <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-orange-300">Pro</span>}
      </Link>
      <button onClick={() => void logout()} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors" aria-label="Sign out">
        <LogOut className="h-4 w-4" />
        <span className="hidden lg:inline">Sign out</span>
      </button>
    </div>
  ) : (
    <Link href="/login" className="inline-flex items-center px-4 py-2 text-sm font-bold text-white border border-slate-700 hover:border-orange-500/70 hover:text-orange-300 rounded-full transition-colors">
      Sign in
    </Link>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#020617]/95 backdrop-blur-md border-b border-slate-800" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center glow-sm"><Dumbbell className="w-5 h-5 text-white" /></div>
            <span className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>GetFitAI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {[...navLinks, ...(user ? memberLinks : [])].map((link) => <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-400 hover:text-orange-400 transition-colors">{link.label}</Link>)}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {!loading && account}
            <Link href="/train" className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-full btn-glow" style={{ fontFamily: "var(--font-heading)" }}>Start Training</Link>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setMobileMenuOpen((open) => !open)} aria-label="Toggle navigation">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#020617]/98 border-b border-slate-800 overflow-hidden">
            <nav className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-1">
              {[...navLinks, ...(user ? memberLinks : [])].map((link) => <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-orange-300">{link.label}</Link>)}
              <div className="mt-3 border-t border-slate-800 pt-4">
                {!loading && (user ? <button onClick={() => void logout()} className="w-full rounded-lg px-3 py-3 text-left text-sm font-medium text-slate-300 hover:bg-slate-800">Sign out {user.email}</button> : <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="block rounded-lg bg-orange-500 px-3 py-3 text-center text-sm font-bold text-white">Sign in</Link>)}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
