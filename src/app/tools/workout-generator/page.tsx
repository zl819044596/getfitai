import type { Metadata } from "next";
import { WorkoutGenerator } from "@/components/workout-generator";

export const metadata: Metadata = {
  title: "AI Workout Generator — Free Personalized Plans | GetFitAI",
  description:
    "Generate personalized workout plans with AI. Choose your goal, experience level, and equipment. Get a custom training plan in seconds. No signup required.",
  alternates: {
    canonical: "https://getfitai.io/tools/workout-generator",
  },
  openGraph: {
    url: "https://getfitai.io/tools/workout-generator",
  },
};

export default function WorkoutGeneratorPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              AI Workout Generator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Answer a few questions and get a personalized workout plan built by AI. 
              Tailored to your goals, experience, and available equipment.
            </p>
          </div>
          <WorkoutGenerator />
        </div>
      </section>
    </main>
  );
}
