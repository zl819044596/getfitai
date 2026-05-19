"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X } from "lucide-react";

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleGetStarted = () => {
    if (isHome) {
      document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#generator";
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">GetFitAI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <Link href="/#how-it-works" className="hover:text-black transition-colors">How it Works</Link>
          <Link href="/#features" className="hover:text-black transition-colors">Features</Link>
          <Link href="/tools" className="hover:text-black transition-colors">Tools</Link>
        </div>

        <div className="hidden md:block">
          <button
            onClick={handleGetStarted}
            className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Get Started
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-3">
          <Link href="/#how-it-works" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>How it Works</Link>
          <Link href="/#features" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Features</Link>
          <Link href="/tools" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>Tools</Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              handleGetStarted();
            }}
            className="w-full bg-black text-white py-3 rounded-full text-sm font-medium"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
