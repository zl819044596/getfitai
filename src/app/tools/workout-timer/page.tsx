import { Metadata } from "next";
import { WorkoutTimerClient } from "./workout-timer-client";
import { ToolContent } from "@/components/tool-content";

export const metadata: Metadata = {
  title: "Workout Timer | GetFitAI",
  description: "Use GetFitAI's free workout timer for HIIT, Tabata, and circuit training. Customizable interval timer to optimize your training sessions.",
  alternates: {
    canonical: "https://getfitai.io/tools/workout-timer",
  },
  openGraph: {
    url: "https://getfitai.io/tools/workout-timer",
    images: [
      {
        url: "https://getfitai.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GetFitAI - Free AI Workout Generator & Fitness Tools",
      },
    ],
  },
};

export default function WorkoutTimerPage() {
  return (
    <>
      <WorkoutTimerClient />
      <ToolContent title="Workout Timer: Master Your Training Intervals">
        <article className="prose prose-gray max-w-none">
          <h2>Why Rest Periods Matter</h2>
          <p>The length of your rest determines how much ATP your muscles regenerate, how much your nervous system recovers, and what training adaptation you trigger. Rest too long and you lose intensity; too short and you can't lift enough weight.</p>

          <h2>Optimal Rest by Goal</h2>
          <ul>
            <li><strong>Strength (1-5 reps)</strong>: 3-5 minutes — Full phosphocreatine recovery</li>
            <li><strong>Hypertrophy (6-12 reps)</strong>: 60-90 seconds — Keep metabolic stress high</li>
            <li><strong>Endurance (12+ reps)</strong>: 30-60 seconds — Maintain elevated heart rate</li>
            <li><strong>Power training</strong>: 2-5 minutes — Full neural recovery</li>
          </ul>

          <h2>Popular Interval Protocols</h2>
          <ul>
            <li><strong>Tabata</strong>: 20s work / 10s rest × 8 rounds (4 minutes)</li>
            <li><strong>EMOM</strong>: Every minute on the minute — new set at :00</li>
            <li><strong>AMRAP</strong>: As many rounds as possible in set time</li>
            <li><strong>German Volume Training</strong>: 10×10 with 60-90s rest</li>
          </ul>

          <h2>Timer Discipline Tips</h2>
          <ul>
            <li>Don't rush heavy sets — safety first</li>
            <li>Don't rest too long on light sets — set a hard limit</li>
            <li>Use rest for setup and visualization, not scrolling</li>
            <li>Pair exercises (supersets) to save time</li>
          </ul>

          <h2>Related Tools</h2>
          <ul>
            <li><a href="/tools/one-rep-max">One Rep Max Calculator</a> — Calculate working weights</li>
            <li><a href="/tools/plate-calculator">Plate Calculator</a> — Load the bar quickly</li>
            <li><a href="/tools/tdee-calculator">TDEE Calculator</a> — Fuel your training sessions</li>
          </ul>
        </article>
      </ToolContent>
    </>
  );
}
