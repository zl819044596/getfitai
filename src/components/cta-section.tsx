"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#020617]">
      {/* Radial Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-orange-500/10 blur-[150px] animate-pulse-glow pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Start Your Free Fitness Journey
              <br />
              <span className="gradient-text">With AI Workout Plans</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto"
            >
              Get your personalized AI workout plan and access free fitness calculators. No credit card. No signup. Start your training today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/workouts/home"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-full btn-glow animate-pulse-glow"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Generate My Plan
                <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
