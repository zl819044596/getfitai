"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get Your Free Personalized Workout Plan
            </h2>

            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Stop guessing and following generic routines that were never designed for you. GetFitAI delivers a professional-grade, AI-powered workout plan tailored to your body, your goals, and your schedule. Join thousands of users who have already transformed their fitness with personalized AI training. Your first plan is free and takes less than 60 seconds to generate.
            </p>

            <Link
              href="/#generator"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full shadow-xl shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              Generate My Plan
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
