import { Metadata } from "next";
import { OneRepMaxClient } from "./one-rep-max-client";
import { ToolContent } from "@/components/tool-content";

export const metadata: Metadata = {
  title: "1RM Calculator | GetFitAI",
  description: "Calculate your one-rep max (1RM) with GetFitAI's free strength calculator. Estimate your maximum lifting capacity based on your current reps and weight.",
  alternates: {
    canonical: "https://getfitai.io/tools/one-rep-max",
  },
};

export default function OneRepMaxPage() {
  return (
    <>
      <OneRepMaxClient />
      <ToolContent title="One Rep Max: Find Your True Strength">
        <article className="prose prose-gray max-w-none">
          <h2>What is One Rep Max?</h2>
          <p>Your <strong>One Repetition Maximum (1RM)</strong> is the maximum weight you can lift for a single repetition with proper form. It's the gold standard for measuring absolute strength.</p>

          <h2>Why 1RM Matters</h2>
          <ul>
            <li><strong>Program design</strong>: Most strength programs use percentages of 1RM</li>
            <li><strong>Progress tracking</strong>: Consistent metric across different rep ranges</li>
            <li><strong>Safety</strong>: Estimate max without risky maximal attempts</li>
          </ul>

          <h2>Popular Formulas</h2>
          <ul>
            <li><strong>Epley</strong>: 1RM = weight × (1 + reps/30)</li>
            <li><strong>Brzycki</strong>: 1RM = weight ÷ (1.0278 - 0.0278 × reps)</li>
            <li><strong>Lombardi</strong>: 1RM = weight × reps^0.10</li>
          </ul>

          <h2>Accuracy by Rep Range</h2>
          <ul>
            <li><strong>1-3 reps</strong>: Very high accuracy (±2-3%)</li>
            <li><strong>4-6 reps</strong>: High accuracy (±3-5%)</li>
            <li><strong>7-10 reps</strong>: Moderate accuracy (±5-8%)</li>
            <li><strong>11+ reps</strong>: Lower accuracy — not recommended</li>
          </ul>

          <h2>Training Percentages</h2>
          <ul>
            <li><strong>95-100%</strong>: 1-2 reps — Maximal strength</li>
            <li><strong>85-90%</strong>: 3-5 reps — Heavy strength work</li>
            <li><strong>75-85%</strong>: 6-8 reps — Strength-hypertrophy</li>
            <li><strong>65-75%</strong>: 8-12 reps — Hypertrophy</li>
          </ul>

          <h2>Related Tools</h2>
          <ul>
            <li><a href="/tools/plate-calculator">Plate Calculator</a> — Load the bar with the right plates</li>
            <li><a href="/tools/workout-timer">Workout Timer</a> — Time your rest periods</li>
            <li><a href="/tools/tdee-calculator">TDEE Calculator</a> — Fuel your strength gains</li>
          </ul>
        </article>
      </ToolContent>
    </>
  );
}
