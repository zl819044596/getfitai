"use client";

import Link from "next/link";
import { Activity, Calculator, ArrowRight, TrendingUp, Timer, Dumbbell, Flame } from "lucide-react";

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
    href: "/tools/one-rep-max",
  },
  {
    icon: <Timer className="w-6 h-6" />,
    title: "Workout Timer",
    description: "Interval timer for HIIT, Tabata, and circuit training.",
    href: "/tools/workout-timer",
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "Plate Calculator",
    description: "Figure out which plates to load for your target weight.",
    href: "/tools/plate-calculator",
  },
  {
    icon: <Flame className="w-6 h-6" />,
    title: "Calorie Calculator",
    description: "Estimate your daily calorie needs based on your goals.",
    href: "/tools/tdee-calculator",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Body Fat Calculator",
    description: "Estimate your body fat percentage using multiple methods.",
    href: "/tools/body-fat-calculator",
  },
];

export function ToolsClient() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Fitness Tools</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Free calculators and tools to help you track your fitness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {tools.map((tool, i) => (
              <Link
                key={i}
                href={tool.href}
                className="flex items-start gap-4 bg-muted rounded-2xl p-6 hover:bg-muted/80 transition-colors"
              >
                <div className="text-primary">{tool.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1 text-foreground">{tool.title}</h3>
                  <p className="text-muted-foreground text-sm">{tool.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
