"use client";

import Link from "next/link";
import { Activity, Calculator, ArrowRight, TrendingUp, Timer, Dumbbell, Flame, Heart, Scale } from "lucide-react";

const tools = [
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "Workout Generator",
    description: "Generate personalized AI workout plans tailored to your goals and equipment.",
    href: "/tools/workout-generator",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Macro Calculator",
    description: "Calculate your daily protein, carbs, and fat targets for any fitness goal.",
    href: "/tools/macro-calculator",
  },
  {
    icon: <Flame className="w-6 h-6" />,
    title: "Calorie Calculator",
    description: "Calculate your BMR, TDEE, and daily calorie needs based on your activity level.",
    href: "/tools/calorie-calculator",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Protein Calculator",
    description: "Calculate your optimal daily protein intake based on weight and goals.",
    href: "/tools/protein-calculator",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Heart Rate Calculator",
    description: "Calculate your target heart rate zones for fat burn, cardio, and peak training.",
    href: "/tools/heart-rate-calculator",
  },
  {
    icon: <Timer className="w-6 h-6" />,
    title: "Pace Calculator",
    description: "Calculate your running pace, speed, and split times for any distance.",
    href: "/tools/pace-calculator",
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "Wilks Calculator",
    description: "Calculate your Wilks score to compare strength across different body weights.",
    href: "/tools/wilks-calculator",
  },
  {
    icon: <Flame className="w-6 h-6" />,
    title: "BMR Calculator",
    description: "Calculate your Basal Metabolic Rate and estimated daily calorie burn.",
    href: "/tools/bmr-calculator",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Ideal Weight Calculator",
    description: "Calculate your healthy weight range using BMI and medical formulas.",
    href: "/tools/ideal-weight-calculator",
  },
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
