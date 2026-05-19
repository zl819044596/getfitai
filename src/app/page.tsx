"use client";

import { WorkoutForm } from "@/components/workout-form";
import { WorkoutPlan } from "@/components/workout-plan";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { ToolsPreview } from "@/components/tools-preview";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { useState } from "react";

export default function Home() {
  const [plan, setPlan] = useState<{
    title: string;
    duration: string;
    intensity: string;
    exercises: {
      name: string;
      sets: number;
      reps: string;
      rest: string;
      notes?: string;
    }[];
    warmup?: string[];
    cooldown?: string[];
  } | null>(null);

  const scrollToGenerator = () => {
    setPlan(null);
    setTimeout(() => {
      document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <Hero />

      {/* Generator Section */}
      <section id="generator" className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black mb-3">Create your workout plan</h2>
            <p className="text-gray-500">
              Answer a few questions and get a personalized plan in seconds.
            </p>
          </div>
          <WorkoutForm onPlanGenerated={setPlan} />
        </div>
      </section>

      {/* Workout Plan Result */}
      {plan && (
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <WorkoutPlan
              plan={plan}
              onRegenerate={scrollToGenerator}
              onAdjust={scrollToGenerator}
            />
          </div>
        </section>
      )}

      <HowItWorks />
      <Features />
      <ToolsPreview />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
