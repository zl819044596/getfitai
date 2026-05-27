"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Calculator, Target, Dumbbell, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Workout Plans",
    description: "Stop guessing which exercises to do. Our AI generates scientifically personalized training plans based on your fitness goals, experience level, and available equipment. Every workout plan is tailored specifically to you.",
  },
  {
    icon: Calculator,
    title: "Free Fitness Calculators",
    description: "Accurately calculate BMI, TDEE, body fat percentage, and one-rep max without complex formulas. Get data-driven support for your training and diet decisions with our free fitness calculator suite.",
  },
  {
    icon: Target,
    title: "Personalized Insights",
    description: "Every body is unique. Our AI analyzes your data to provide personalized fitness recommendations and workout plans that truly work for your specific body type, schedule, and training history.",
  },
  {
    icon: Dumbbell,
    title: "Equipment Adaptation",
    description: "Whether you have a full commercial gym, only dumbbells at home, or just your bodyweight, GetFitAI creates efficient workout plans tailored to your exact equipment situation. No excuses.",
  },
  {
    icon: Clock,
    title: "Time Optimization",
    description: "15 minutes or 90 minutes? Our AI optimizes every minute of your workout based on your schedule. Get maximum results in minimum time with personalized training plans that fit your life.",
  },
  {
    icon: TrendingUp,
    title: "Progressive Training",
    description: "All workout plans follow progressive overload principles to ensure continuous improvement while avoiding injury and plateaus. Your personalized plan grows with you as you get stronger.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-orange-500/10 text-sm font-medium text-orange-400 mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything You Need for Your Fitness Journey
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From AI-generated training plans to accurate fitness calculators, GetFitAI provides all the tools you need to reach your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-4 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-all">
                  <Icon className="w-7 h-7 text-orange-400 transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
