import { Zap } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">GetFitAI</span>
            </div>
            <p className="text-sm text-gray-500">
              AI-powered workout plans for everyone. No sign-up required.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-black transition-colors">Workout Generator</Link></li>
              <li><Link href="/tools" className="hover:text-black transition-colors">Fitness Tools</Link></li>
              <li><Link href="/#features" className="hover:text-black transition-colors">Features</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/blog" className="hover:text-black transition-colors">Blog</Link></li>
              <li><Link href="/about" className="hover:text-black transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/privacy" className="hover:text-black transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-black transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
          © 2025 GetFitAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
