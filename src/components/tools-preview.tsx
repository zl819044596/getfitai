"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity, Flame, PercentCircle, Gauge, Heart, Timer, Dumbbell, Scale } from "lucide-react";
import Link from "next/link";

const tools = [
  {
    icon: Activity,
    title: "BMI Calculator",
    description: "Check if your weight is in a healthy range instantly.",
    href: "/tools/bmi-calculator",
  },
  {
    icon: Flame,
    title: "Calorie Calculator",
    description: "Calculate your daily calorie needs based on activity.",
    href: "/tools/calorie-calculator",
  },
  {
    icon: PercentCircle,
    title: "Body Fat Calculator",
    description: "Estimate body fat percentage with validated formulas.",
    href: "/tools/body-fat-calculator",
  },
  {
    icon: Gauge,
    title: "1RM Calculator",
    description: "Predict your max strength for any exercise.",
    href: "/tools/one-rep-max",
  },
  {
    icon: Heart,
    title: "Heart Rate Calculator",
    description: "Find your target heart rate zones for training.",
    href: "/tools/heart-rate-calculator",
  },
  {
    icon: Scale,
    title: "Protein Calculator",
    description: "Get your optimal daily protein intake.",
    href: "/tools/protein-calculator",
  },
];

export function ToolsPreview() {
  return (
    <section id="tools" className="py-24 relative bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-orange-500/10 text-sm font-medium text-orange-400 mb-4">
            Free Fitness Tools
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            15 Free Fitness Tools
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            All calculators use validated formulas. No signup, no ads, instant results.
          </p>
        </motion.div>

        {/* 2x3 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={tool.href}
                  className="group block bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 card-glow h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover:bg-orange-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 
                        className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {tool.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors"
          >
            View All 15 Tools
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
