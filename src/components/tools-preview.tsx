"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Scale, Flame, Percent, Dumbbell } from "lucide-react";
import Link from "next/link";

const tools = [
  {
    icon: Scale,
    title: "BMI Calculator",
    description: "Quickly check if your weight is in a healthy range. Enter height and weight to get your BMI index and personalized recommendations instantly.",
    href: "/tools/bmi-calculator",
    image: "/images/blog/build-muscle.jpg",
  },
  {
    icon: Flame,
    title: "TDEE Calculator",
    description: "Accurately calculate your daily total energy expenditure. Get precise calorie needs based on age, gender, weight, height, and activity level.",
    href: "/tools/tdee-calculator",
    image: "/images/blog/lose-belly-fat.jpg",
  },
  {
    icon: Percent,
    title: "Body Fat Calculator",
    description: "Track what really matters. Estimate body fat percentage using multiple validated formulas, focusing on fat loss rather than just scale weight.",
    href: "/tools/body-fat-calculator",
    image: "/images/blog/home-vs-gym.jpg",
  },
  {
    icon: Dumbbell,
    title: "1RM Calculator",
    description: "Train smart, progress safely. Predict your maximum strength for any exercise and program workouts at optimal intensity.",
    href: "/tools/one-rep-max",
    image: "/images/blog/meal-prep.jpg",
  },
];

export function ToolsPreview() {
  return (
    <section id="tools" className="py-24 relative bg-slate-950">
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Accurate, Fast, No Signup Required
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            All calculators use validated formulas and provide instant results to help you make informed fitness decisions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={tool.href}
                  className="group block bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all hover:shadow-xl hover:shadow-orange-500/10"
                >
                  {/* Image Header */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={tool.image}
                      alt={tool.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-4">
                      {tool.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-orange-400">
                      Try It Free
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
