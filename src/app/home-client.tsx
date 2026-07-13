"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, Dumbbell, Flame, ChevronRight, Star } from "lucide-react";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { ToolsPreview } from "@/components/tools-preview";
import { WorkoutGenerator } from "@/components/workout-generator";
import { WhyChoose } from "@/components/why-choose";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { getFavorites } from "@/lib/favorites";
import { plans, type PlanCard } from "@/app/train/train-plans-client";

export default function HomeClient() {
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Read on mount
    setFavoriteIds(new Set(getFavorites()));

    const handleStorage = () => {
      setFavoriteIds(new Set(getFavorites()));
    };

    // Listen for storage changes from other tabs
    window.addEventListener("storage", handleStorage);
    // Also refresh when user returns to this tab
    window.addEventListener("focus", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("focus", handleStorage);
    };
  }, []);

  const favoritePlans = plans.filter((p) => favoriteIds.has(p.id));

  return (
    <main className="bg-background">
      {/* Your Favorites section — only renders when favorites exist */}
      {favoritePlans.length > 0 && (
        <section className="pt-24 pb-6 md:pt-32 md:pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Your Favorites
              </h2>
            </div>
            <p className="text-sm text-muted-foreground ml-7 mb-6">
              Star your go-to plans for instant access
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favoritePlans.map((plan: PlanCard) => (
                <Link
                  key={plan.id}
                  href={`/train/${plan.id}`}
                  className="group block"
                >
                  <div className="bg-muted rounded-2xl p-6 border border-border hover:border-orange-500/40 transition-all duration-300 card-glow h-full flex flex-col relative overflow-hidden">
                    {/* Video background on hover */}
                    {plan.videoSrc && (
                      <video
                        src={plan.videoSrc}
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      />
                    )}
                    {/* Star indicator */}
                    <div className="absolute top-3 right-3 z-10">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </div>
                    {/* Icon */}
                    <div className={`mb-4 ${plan.color}`}>{plan.icon}</div>
                    {/* Name */}
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {plan.description}
                    </p>
                    {/* Meta */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-orange-400" />
                        <span>{plan.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Dumbbell className="w-4 h-4 text-orange-400" />
                        <span>{plan.exerciseCount} exercises</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Flame className="w-4 h-4 text-orange-400" />
                        <span>{plan.difficulty}</span>
                      </div>
                    </div>
                    {/* CTA */}
                    <div className="flex items-center gap-1 text-orange-400 font-medium text-sm group-hover:gap-2 transition-all">
                      <span>{plan.cta || "Start Workout"}</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Hero />

      {/* Popular Workouts — quick entry to follow-along training */}
      <section className="py-16 md:py-20 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 rounded-full bg-orange-500/10 text-sm font-medium text-orange-400 mb-3">
              Follow-Along Workouts
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Start Training in Seconds
            </h2>
            <p className="text-slate-400 mt-3 max-w-lg mx-auto">
              Video-led workouts with real-time timers. Pick one and press play.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.slice(0, 4).map((plan: PlanCard) => (
              <Link
                key={plan.id}
                href={`/train/${plan.id}`}
                className="group block"
              >
                <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-5 hover:border-orange-500/40 transition-all duration-300 card-glow h-full flex flex-col">
                  <div className={`mb-3 ${plan.color}`}>{plan.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-slate-400 mb-3 flex-1 line-clamp-2">{plan.description}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {plan.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Dumbbell className="w-3.5 h-3.5" />
                      {plan.exerciseCount} exercises
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-orange-400 font-medium text-sm group-hover:gap-2 transition-all">
                    <span>{plan.cta || "Start Workout"}</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/train"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors"
            >
              View All Workouts
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Features />
      <ToolsPreview />
      <WorkoutGenerator />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <CTASection />
    </main>
  );
}
