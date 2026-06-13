"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Star, Zap, Dumbbell } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#020617]">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Pulse Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-500/5 blur-[120px] animate-pulse-glow pointer-events-none" />

      {/* Orange gradient from top right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Content - 60% */}
          <div className="lg:col-span-3 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-400">Trusted by 50,000+ users</span>
            </motion.div>

            {/* Heading - Outfit font, large, tight */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span className="text-white">Free AI Workout</span>
              <br />
              <span className="gradient-text">Plans & Fitness Tools</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Get personalized AI workout plans and free fitness calculators including BMI, TDEE, body fat, and 1RM. Tell us your fitness goals, equipment, and experience. Get a personalized training plan in 10 seconds. No signup required.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Link
                href="/train"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-full btn-glow animate-pulse-glow"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Start Training Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/workouts/home"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-slate-300 border border-slate-700 hover:border-orange-500/50 hover:text-orange-400 rounded-full transition-all"
              >
                Generate Workout Plan
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-slate-300 border border-slate-700 hover:border-orange-500/50 hover:text-orange-400 rounded-full transition-all"
              >
                Tools
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center glow-sm">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>50K+</div>
                  <div className="text-sm text-slate-500">Plans Generated</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center glow-sm">
                  <Dumbbell className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>15</div>
                  <div className="text-sm text-slate-500">Free Tools</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center glow-sm">
                  <Star className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>4.9★</div>
                  <div className="text-sm text-slate-500">User Rating</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - 40% Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block lg:col-span-2 relative"
          >
            <div className="relative">
              {/* Main Visual - Abstract Fitness Graphic */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border border-orange-500/20 animate-pulse" />
                
                {/* Middle Ring */}
                <div className="absolute inset-8 rounded-full border border-orange-500/30" />
                
                {/* Inner Glow */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-orange-500/20 to-transparent" />
                
                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center glow-md">
                    <Zap className="w-12 h-12 text-orange-400" />
                  </div>
                </div>

                {/* Orbiting Dots */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-orange-400 glow-sm" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4"
                >
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-orange-300 glow-sm" />
                </motion.div>
              </div>

              {/* Floating Card - Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-slate-900/90 backdrop-blur-xl p-4 rounded-xl border border-slate-800 glow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">AI Smart Analysis</div>
                    <div className="text-xs text-slate-400">Personalized Plans</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - Top Right */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur-xl p-3 rounded-xl border border-slate-800 glow-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Star className="w-4 h-4 text-green-400" />
                  </div>
                  <div className="text-xs text-slate-300">Workout Complete!</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
