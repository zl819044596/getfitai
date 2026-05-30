"use client";

import { motion } from "framer-motion";
import { Star, Quote, TrendingDown, Clock, TrendingUp } from "lucide-react";

const testimonials = [
  {
    content: "Lost 12 lbs in 6 weeks following the AI-generated plan. The workouts adapt as I get stronger — no plateau.",
    author: "Sarah M.",
    role: "Home Gym User",
    metric: "-12 lbs",
    metricLabel: "in 6 weeks",
    metricIcon: TrendingDown,
    rating: 5,
    highlight: true, // Larger card
  },
  {
    content: "Finally consistent with my workouts. The plan fits my schedule perfectly — 30 min, 4x a week.",
    author: "Mike T.",
    role: "Busy Professional",
    metric: "4x/week",
    metricLabel: "consistency",
    metricIcon: Clock,
    rating: 5,
    highlight: false,
  },
  {
    content: "Better than my $200/month trainer. The AI knew exactly when to increase weight and when to deload.",
    author: "Jessica K.",
    role: "Intermediate Lifter",
    metric: "$200/mo",
    metricLabel: "saved",
    metricIcon: TrendingUp,
    rating: 5,
    highlight: false,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-orange-500/10 text-sm font-medium text-orange-400 mb-4">
            Reviews
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Real Results
          </h2>
        </motion.div>

        {/* Staggered Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const MetricIcon = testimonial.metricIcon;
            return (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 relative card-glow ${
                  testimonial.highlight ? "md:row-span-1" : ""
                }`}
                style={{
                  marginTop: index === 1 ? "2rem" : index === 2 ? "1rem" : "0",
                }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <Quote className="w-8 h-8 text-slate-700" />
                </div>

                {/* Metric Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
                  <MetricIcon className="w-4 h-4 text-orange-400" />
                  <span className="text-sm font-bold text-orange-400">{testimonial.metric}</span>
                  <span className="text-xs text-slate-500">{testimonial.metricLabel}</span>
                </div>

                {/* Content */}
                <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-slate-400">
                      {testimonial.role}
                    </div>
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
