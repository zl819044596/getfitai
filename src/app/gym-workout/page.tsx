"use client";

import { WorkoutForm } from "@/components/workout-form";
import { WorkoutPlan } from "@/components/workout-plan";
import { useState } from "react";
import Link from "next/link";
import {
  Zap,
  ArrowLeft,
  Dumbbell,
  Clock,
  Target,
  Activity,
  ChevronRight,
} from "lucide-react";

export default function GymWorkoutPage() {
  const [plan, setPlan] = useState<any>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">GetFitAI</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-600 mb-6">
              <Dumbbell className="w-4 h-4" />
              <span>Gym Workout</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Gym Workout Generator
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              AI-powered workout plans designed specifically for gym environments. 
              Maximize your time with equipment-based training.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: <Target className="w-5 h-5" />, text: "Equipment-optimized" },
              { icon: <Clock className="w-5 h-5" />, text: "Time-efficient" },
              { icon: <Activity className="w-5 h-5" />, text: "Progressive overload" },
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4">
                <div className="text-black">{benefit.icon}</div>
                <span className="font-medium text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generator */}
      <section className="py-12 bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-black mb-3">
              Generate Your Gym Plan
            </h2>
            <p className="text-gray-500">
              Tell us your goals and we&apos;ll create a plan using gym equipment.
            </p>
          </div>
          <WorkoutForm onPlanGenerated={setPlan} defaultEquipment="full-gym" />
        </div>
      </section>

      {/* Result */}
      {plan && (
        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <WorkoutPlan plan={plan} />
          </div>
        </section>
      )}

      {/* Sample Exercises */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-black mb-8 text-center">
            Popular Gym Exercises
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Bench Press", muscle: "Chest", sets: "4x8-10" },
              { name: "Squat", muscle: "Legs", sets: "4x6-8" },
              { name: "Deadlift", muscle: "Back", sets: "3x5" },
              { name: "Shoulder Press", muscle: "Shoulders", sets: "3x10" },
              { name: "Lat Pulldown", muscle: "Back", sets: "3x12" },
              { name: "Leg Press", muscle: "Legs", sets: "3x12" },
            ].map((exercise, i) => (
              <div key={i} className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                <div>
                  <p className="font-medium">{exercise.name}</p>
                  <p className="text-sm text-gray-500">{exercise.muscle}</p>
                </div>
                <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full">
                  {exercise.sets}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-black mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Do I need a gym membership?",
                a: "Yes, these workouts are designed for gym environments with access to barbells, dumbbells, and machines.",
              },
              {
                q: "How long are the workouts?",
                a: "Most gym workouts range from 45-60 minutes depending on your selected duration.",
              },
              {
                q: "Can beginners use this?",
                a: "Absolutely! Just select 'Beginner' as your experience level and we&apos;ll adjust the exercises accordingly.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to hit the gym?
          </h2>
          <p className="text-gray-400 mb-8">
            Generate your personalized gym workout plan now.
          </p>
          <button
            onClick={() => document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Generate Gym Plan
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
    </main>
  );
}
