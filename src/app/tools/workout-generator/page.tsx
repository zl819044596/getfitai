import type { Metadata } from "next";
import { WorkoutGenerator } from "@/components/workout-generator";
import { ToolContent } from "@/components/tool-content";

export const metadata: Metadata = {
  title: "AI Workout Generator — Free Personalized Plans | GetFitAI",
  description:
    "Generate personalized workout plans with AI. Choose your goal, experience level, and equipment. Get a custom training plan in seconds. No signup required.",
  alternates: {
    canonical: "https://www.getfitai.io/tools/workout-generator",
  },
  openGraph: {
    url: "https://www.getfitai.io/tools/workout-generator",
    images: [
      {
        url: "https://www.getfitai.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GetFitAI - Free AI Workout Generator & Fitness Tools",
      },
    ],
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
      <ToolContent title="How AI Workout Generator Works">
        <article className="prose prose-gray max-w-none">
          <h2>What is the AI Workout Generator?</h2>
          <p>Our AI Workout Generator creates <strong>personalized training plans</strong> based on your fitness goals, experience level, available equipment, and time constraints. No generic templates — every plan is built specifically for you.</p>

          <h2>How It Works</h2>
          <ol>
            <li><strong>Choose Your Goal</strong>: Build muscle, lose fat, gain strength, or improve endurance</li>
            <li><strong>Set Your Level</strong>: Beginner, intermediate, or advanced — the AI adjusts volume and intensity accordingly</li>
            <li><strong>Pick Equipment</strong>: Full gym, dumbbells only, or bodyweight — we adapt every exercise</li>
            <li><strong>Set Duration</strong>: 30, 45, or 60 minute sessions</li>
            <li><strong>Get Your Plan</strong>: AI generates a complete workout with sets, reps, rest periods, and exercise notes</li>
          </ol>

          <h2>Why Use AI for Workout Planning?</h2>
          <ul>
            <li><strong>Personalization</strong>: Unlike static templates, AI adapts to your specific situation</li>
            <li><strong>Progression</strong>: Plans include progressive overload principles to ensure continuous improvement</li>
            <li><strong>Variety</strong>: AI prevents plateaus by varying exercises, rep ranges, and training splits</li>
            <li><strong>No Guesswork</strong>: Every exercise includes proper form cues and substitution options</li>
          </ul>

          <h2>Sample Workout Plans</h2>
          <p>The generator creates various training splits:</p>
          <ul>
            <li><strong>Full Body</strong>: 3x per week, perfect for beginners and busy schedules</li>
            <li><strong>Upper/Lower Split</strong>: 4x per week, balanced frequency for intermediates</li>
            <li><strong>Push/Pull/Legs</strong>: 6x per week, maximum volume for advanced lifters</li>
            <li><strong>Bodyweight Only</strong>: No equipment needed, train anywhere</li>
          </ul>

          <h2>Related Tools</h2>
          <ul>
            <li><a href="/tools/one-rep-max">One Rep Max Calculator</a> — Calculate your strength potential</li>
            <li><a href="/tools/macro-calculator">Macro Calculator</a> — Optimize your nutrition</li>
            <li><a href="/tools/workout-timer">Workout Timer</a> — Time your rest periods and intervals</li>
          </ul>
        </article>
      </ToolContent>
    </main>
  );
}
