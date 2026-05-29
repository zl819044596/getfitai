"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Star, Zap } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right Image Grid - 移到左侧 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                <Image
                  src="/images/hero-fitness.jpg"
                  alt="Fitness Training"
                  fill
                  className="object-cover grayscale"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              </div>
              {/* Secondary Images */}
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl shadow-black/30">
                <Image
                  src="/images/workout-3.jpg"
                  alt="Strength Training"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl shadow-black/30">
                <Image
                  src="/images/workout-4.jpg"
                  alt="Yoga Training"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-slate-900/80 backdrop-blur-xl p-4 rounded-xl shadow-xl border border-slate-700/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">AI Smart Analysis</div>
                  <div className="text-xs text-slate-400">Personalized Plans</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Left Content - 移到右侧 */}
          <div className="text-center lg:text-left order-2">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-400">Trusted by 10,000+ users</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance"
            >
              <span className="text-white">Your Free AI</span>
              <br />
              <span className="gradient-text">Fitness Coach</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Use AI to generate personalized training plans and calculate BMI, TDEE, body fat, and 1RM. No signup required, completely free. Start your fitness journey now with a workout plan built specifically for your goals and equipment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Link
                href="/#generator"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full shadow-xl shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Get My Workout Plan
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">10K+</div>
                  <div className="text-sm text-slate-500">Active Users</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <Star className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">4.9</div>
                  <div className="text-sm text-slate-500">User Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">30s</div>
                  <div className="text-sm text-slate-500">Quick Generation</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
