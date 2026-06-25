import Link from "next/link";
import { Dumbbell, Globe, Share2, MessageSquare } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Workout Planner", href: "/workouts/home" },
    { label: "Fitness Tools", href: "/tools" },
    { label: "BMI Calculator", href: "/tools/bmi-calculator" },
    { label: "Calorie Calculator", href: "/tools/calorie-calculator" },
    { label: "Protein Calculator", href: "/tools/protein-calculator" },
    { label: "TDEE Calculator", href: "/tools/tdee-calculator" },
    { label: "BMR Calculator", href: "/tools/bmr-calculator" },
    { label: "Body Fat Calculator", href: "/tools/body-fat-calculator" },
    { label: "Macro Calculator", href: "/tools/macro-calculator" },
    { label: "One Rep Max", href: "/tools/one-rep-max" },
    { label: "Workout Generator", href: "/tools/workout-generator" },
    { label: "Workout Timer", href: "/tools/workout-timer" },
    { label: "Ideal Weight", href: "/tools/ideal-weight-calculator" },
    { label: "Features", href: "/#features" },
  ],
  train: [
    { label: "Full Body Burn", href: "/train/full-body-burn" },
    { label: "Core Crusher", href: "/train/core-crusher" },
    { label: "Quick Cardio", href: "/train/quick-cardio" },
    { label: "Upper Body Push", href: "/train/upper-body-push" },
    { label: "Lower Body Strength", href: "/train/lower-body-strength" },
    { label: "Full Body Stretch", href: "/train/full-body-stretch" },
    { label: "HIIT Blast", href: "/train/hiit-blast" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "AI vs Personal Trainer", href: "/blog/ai-fitness-coach-vs-personal-trainer" },
    { label: "Best AI Fitness Apps", href: "/blog/best-ai-fitness-apps-2026" },
    { label: "TDEE Guide", href: "/blog/what-is-tdee-and-how-to-calculate" },
    { label: "Protein Guide", href: "/blog/protein-intake-calculator-guide" },
    { label: "Beginner Gym Plan", href: "/blog/beginner-gym-plan" },
    { label: "Build Muscle Fast", href: "/blog/build-muscle-fast" },
    { label: "How to Lose Belly Fat", href: "/blog/how-to-lose-belly-fat" },
    { label: "Women Workout Plan", href: "/blog/women-workout-plan" },
    { label: "Home vs Gym Workout", href: "/blog/home-vs-gym" },
    { label: "Six Pack Workout", href: "/blog/six-pack-workout" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "All Workouts", href: "/workouts/gym" },
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
              AI-powered workout plans for everyone. No signup required.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <Link href="https://twitter.com/getfitai" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-400 hover:bg-orange-500/10 transition-colors">
                <Globe className="w-4 h-4" />
              </Link>
              <Link href="https://github.com/getfitai" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-orange-400 hover:bg-orange-500/10 transition-colors">
                <Share2 className="w-4 h-4" />
              </Link>
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
