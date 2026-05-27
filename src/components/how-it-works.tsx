"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UserCheck, Sparkles, Play } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserCheck,
    title: "Tell Us About Yourself",
    description: "Share your fitness goals, experience level, and available equipment to help our AI understand your needs. Whether you want to lose fat, build muscle, or improve endurance, GetFitAI tailors every recommendation to your specific situation.",
    image: "/images/workout-1.jpg",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Generates Your Free Plan",
    description: "Our AI creates a scientifically sound, personalized training plan based on your specific situation. Each workout plan includes exercise selection, sets, reps, rest periods, and progression rules that adapt as you get stronger.",
    image: "/images/workout-2.jpg",
  },
  {
    number: "03",
    icon: Play,
    title: "Start Training and Track Progress",
    description: "Follow your personalized workout plan and log your sessions. Our AI analyzes your performance and automatically adjusts your training intensity to keep you progressing without burning out. Watch yourself get stronger week by week.",
    image: "/images/workout-5.jpg",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 relative bg-slate-950">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Three Steps to Your Perfect Workout Plan
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 left-[60%] w-full h-[2px] bg-gradient-to-r from-orange-500/50 to-transparent" />
                )}

                <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden relative z-10 hover:border-orange-500/20 transition-all">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <span className="text-4xl font-bold text-slate-700">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
