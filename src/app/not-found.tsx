import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-slate-800">
          <Dumbbell className="w-10 h-10 text-orange-500" />
        </div>
        <h1 className="text-6xl font-bold text-white mb-4" style={{fontFamily: 'var(--font-heading)'}}>404</h1>
        <p className="text-lg text-slate-400 mb-8 max-w-md mx-auto">
          This page doesn&apos;t exist. Maybe it moved, or maybe you took a wrong turn on the way to the gym.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
