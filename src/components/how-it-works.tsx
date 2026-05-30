"use client";

import { motion } from "framer-motion";
import { UserCheck, Sparkles, Play } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserCheck,
    title: "Set Your Goals",
    description: "Choose your fitness goal — build muscle, lose fat, or improve endurance. Tell us your experience level and available equipment.",
    size: "large", // Takes 2 columns
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Choose Equipment",
    description: "Select what you have — full gym, dumbbells only, or just bodyweight.",
    size: "small",
  },
  {
    number: "03",
    icon: Play,
    title: "Get Your Plan",
    description: "AI generates your personalized workout in 10 seconds. Start training immediately.",
    size: "small",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 relative bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-orange-500/10 text-sm font-medium text-orange-400 mb-4">
            How It Works
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Three Steps to Your Plan
          </h2>
        </motion.div>

        {/* Non-symmetric Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Step 1 - Large, takes visual priority */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="md:col-span-2 md:row-span-2"
          >
            <div className="h-full bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden relative z-10 card-glow p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center glow-sm">
                    <UserCheck className="w-8 h-8 text-orange-400" />
                  </div>
                  <span 
                    className="text-6xl font-black text-slate-800"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    01
                  </span>
                </div>
                <h3 
                  className="text-2xl lg:text-3xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Set Your Goals
                </h3>
                <p className="text-slate-400 leading-relaxed text-lg max-w-lg">
                  Choose your fitness goal — build muscle, lose fat, or improve endurance. Tell us your experience level and available equipment. Our AI uses this to build a plan that fits your life.
                </p>
              </div>
              
              {/* Animated connection line */}
              <div className="hidden md:block absolute bottom-8 right-0 translate-x-1/2 w-24 h-[2px] bg-gradient-to-r from-orange-500/50 to-transparent" />
            </div>
          </motion.div>

          {/* Step 2 - Small, offset */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:mt-12"
          >
            <div className="h-full bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden relative z-10 card-glow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-orange-400" />
                </div>
                <span 
                  className="text-4xl font-black text-slate-800"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  02
                </span>
              </div>
              <h3 
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Choose Equipment
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Select what you have — full gym, dumbbells only, or just bodyweight.
              </p>
            </div>
          </motion.div>

          {/* Step 3 - Small, aligned with step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:mt-12"
          >
            <div className="h-full bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden relative z-10 card-glow p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <Play className="w-6 h-6 text-orange-400" />
                </div>
                <span 
                  className="text-4xl font-black text-slate-800"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  03
                </span>
              </div>
              <h3 
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Get Your Plan
              </h3>
              <p className="text-slate-400 leading-relaxed">
                AI generates your personalized workout in 10 seconds. Start training immediately.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
