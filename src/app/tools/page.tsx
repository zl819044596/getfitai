"use client";

import Link from "next/link";
import {

  Calculator,
  ArrowRight,
  Activity,
  TrendingUp,
  Timer,
  Dumbbell,
  Flame,
} from "lucide-react";

const tools = [
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index and understand your weight category.",
    href: "/tools/bmi-calculator",
    color: "bg-blue-50 text-blue-600",
    status: "Live",
  },
  {
    icon: <Flame className="w-6 h-6" />,
    title: "TDEE Calculator",
    description: "Calculate your Total Daily Energy Expenditure and daily calorie needs.",
    href: "#",
    color: "bg-orange-50 text-orange-600",
    status: "Coming Soon",
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "1RM Calculator",
    description: "Estimate your one-rep max based on your current lifting numbers.",
    href: "#",
    color: "bg-purple-50 text-purple-600",
    status: "Coming Soon",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Macro Calculator",
    description: "Calculate your optimal protein, carb, and fat intake.",
    href: "#",
    color: "bg-green-50 text-green-600",
    status: "Coming Soon",
  },
  {
    icon: <Timer className="w-6 h-6" />,
    title: "Workout Timer",
    description: "Interval timer for HIIT, Tabata, and circuit training.",
    href: "#",
    color: "bg-red-50 text-red-600",
    status: "Coming Soon",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Body Fat Calculator",
    description: "Estimate your body fat percentage using various methods.",
    href: "#",
    color: "bg-teal-50 text-teal-600",
    status: "Coming Soon",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
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

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Fitness Tools
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Free calculators and tools to help you track your fitness journey and optimize your training.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <div
                key={i}
                className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tool.color}`}>
                    {tool.icon}
                  </div>
                  {tool.status === "Coming Soon" && (
                    <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                      {tool.status}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-lg text-black mb-2">
                  {tool.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {tool.description}
                </p>
                {tool.status === "Live" ? (
                  <Link
                    href={tool.href}
                    className="inline-flex items-center text-sm font-medium text-black hover:gap-2 transition-all"
                  >
                    Try it now
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                ) : (
                  <span className="text-sm text-gray-400">
                    Coming soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to start training?
          </h2>
          <p className="text-gray-400 mb-8">
            Generate a personalized workout plan tailored to your goals and fitness level.
          </p>
          <Link
            href="/"
            className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Generate Workout
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}
