"use client";

import Link from "next/link";
import { Calculator, ArrowRight, Activity, TrendingUp, Timer, Dumbbell, Flame } from "lucide-react";

const tools = [
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index and understand your weight category.",
    href: "/tools/bmi-calculator",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "1RM Calculator",
    description: "Estimate your one-rep max based on your current lifting stats.",
    href: "#",
  },
  {
    icon: <Timer className="w-6 h-6" />,
    title: "Workout Timer",
    description: "Interval timer for HIIT, Tabata, and circuit training.",
    href: "#",
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "Plate Calculator",
    description: "Figure out which plates to load for your target weight.",
    href: "#",
  },
  {
    icon: <Flame className="w-6 h-6" />,
    title: "Calorie Calculator",
    description: "Estimate your daily calorie needs based on your goals.",
    href: "#",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Body Fat Calculator",
    description: "Estimate your body fat percentage using multiple methods.",
    href: "#",
  },
];

export function ToolsClient() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">GetFitAI</span>
          </Link>
        </div>
      </nav>

      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Fitness Tools</h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Free calculators and tools to help you track your fitness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {tools.map((tool, i) => (
              <Link
                key={i}
                href={tool.href}
                className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="text-black">{tool.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{tool.title}</h3>
                  <p className="text-gray-500 text-sm">{tool.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
