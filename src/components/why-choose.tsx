"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Zap, Heart, Award } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "100% Free",
    description: "No hidden fees, no credit card required. All features including the AI workout plan generator and personalized fitness calculators are completely free to use. Generate unlimited workout plans at zero cost.",
  },
  {
    icon: Clock,
    title: "No Signup Required",
    description: "Start using GetFitAI immediately. No account creation, no email verification, no data collection. Just open the site and get your free personalized training plan in under 60 seconds.",
  },
  {
    icon: Zap,
    title: "AI-Powered Personalization",
    description: "Advanced AI algorithms create personalized training plans based on your specific goals, fitness level, and equipment. Unlike generic workout plans, GetFitAI adapts to your body and schedule.",
  },
  {
    icon: Heart,
    title: "Science-Based Training",
    description: "All workout plans follow established exercise science principles including progressive overload, periodization, and optimal recovery. Train smarter, not just harder, with evidence-based fitness programming.",
  },
  {
    icon: Award,
    title: "Trusted by Users Worldwide",
    description: "Join over 10,000 users who have already achieved their fitness goals with GetFitAI. From beginners to advanced athletes, our AI workout plans deliver real results for every fitness level.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-sm font-medium text-primary mb-4">
            Why GetFitAI
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            The Smarter Way to Get Fit
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
