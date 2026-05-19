import { Zap } from "lucide-react";

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
              <li><a href="/" className="hover:text-black transition-colors">Workout Generator</a></li>
              <li><a href="/tools" className="hover:text-black transition-colors">Fitness Tools</a></li>
              <li><a href="#features" className="hover:text-black transition-colors">Features</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="/blog" className="hover:text-black transition-colors">Blog</a></li>
              <li><a href="/about" className="hover:text-black transition-colors">About</a></li>
              <li><a href="/contact" className="hover:text-black transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="/privacy" className="hover:text-black transition-colors">Privacy</a></li>
              <li><a href="/terms" className="hover:text-black transition-colors">Terms</a></li>
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
