import Link from "next/link";
import { Dumbbell, MessageSquare } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Workout Planner", href: "/tools/workout-generator" },
    { label: "Fitness Tools", href: "/tools" },
    { label: "BMI Calculator", href: "/tools/bmi-calculator" },
    { label: "Calorie Calculator", href: "/tools/calorie-calculator" },
    { label: "TDEE Calculator", href: "/tools/tdee-calculator" },
    { label: "My Saved Plans", href: "/my-plans" },
  ],
  train: [
    { label: "Full Body Burn", href: "/train/full-body-burn" },
    { label: "Core Crusher", href: "/train/core-crusher" },
    { label: "HIIT Blast", href: "/train/hiit-blast" },
    { label: "Lower Body Strength", href: "/train/lower-body-strength" },
    { label: "Quick Cardio", href: "/train/quick-cardio" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "AI Workout Planner", href: "/blog/ai-workout-planner" },
    { label: "Beginner Gym Plan", href: "/blog/beginner-gym-plan" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center glow-sm">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span 
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                GetFitAI
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-4">
              AI-powered workout plans, built around you.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <Link href="/contact" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-400 hover:bg-orange-500/10 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Tools</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Train */}
          <div>
            <h4 className="font-semibold text-white mb-4">Train</h4>
            <ul className="space-y-3">
              {footerLinks.train.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            &copy; 2026 GetFitAI. All rights reserved.
          </p>
          <Link href="https://github.com" className="text-sm text-slate-400 hover:text-white transition-colors">
            Open Source
          </Link>
        </div>
      </div>
    </footer>
  );
}
