import { Metadata } from "next";
import { TDEECalculatorClient } from "./tdee-calculator-client";
import { ToolContent } from "@/components/tool-content";

export const metadata: Metadata = {
  title: "Calorie Calculator | GetFitAI",
  description: "Estimate your daily calorie needs with GetFitAI's free TDEE calculator. Calculate your Total Daily Energy Expenditure based on activity level and goals.",
  alternates: {
    canonical: "https://www.getfitai.io/tools/tdee-calculator",
  },
  openGraph: {
    url: "https://www.getfitai.io/tools/tdee-calculator",
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

export default function TDEECalculatorPage() {
  return (
    <>
      <TDEECalculatorClient />
      <ToolContent title="TDEE: Calculate Your Daily Energy Expenditure">
        <article className="prose prose-gray max-w-none">
          <h2>What is TDEE?</h2>
          <p><strong>Total Daily Energy Expenditure (TDEE)</strong> is the total calories your body burns in 24 hours. It includes basal metabolic rate, digestion, exercise, and daily movement.</p>

          <h2>TDEE Components</h2>
          <ul>
            <li><strong>BMR (60-75%)</strong>: Energy for basic life functions</li>
            <li><strong>TEF (~10%)</strong>: Calories burned digesting food</li>
            <li><strong>EAT (varies)</strong>: Structured exercise</li>
            <li><strong>NEAT (varies)</strong>: Daily movement like walking and fidgeting</li>
          </ul>

          <h2>Activity Multipliers</h2>
          <ul>
            <li><strong>Sedentary</strong>: 1.2 — Little to no exercise</li>
            <li><strong>Lightly Active</strong>: 1.375 — Light exercise 1-3 days/week</li>
            <li><strong>Moderately Active</strong>: 1.55 — Moderate exercise 3-5 days/week</li>
            <li><strong>Very Active</strong>: 1.725 — Hard exercise 6-7 days/week</li>
            <li><strong>Extremely Active</strong>: 1.9 — Physical job + hard training</li>
          </ul>

          <h2>Adjusting for Goals</h2>
          <ul>
            <li><strong>Lose weight</strong>: TDEE - 300 to 500 calories</li>
            <li><strong>Maintain weight</strong>: Eat at TDEE</li>
            <li><strong>Build muscle</strong>: TDEE + 200 to 300 calories</li>
          </ul>

          <h2>Common Mistakes</h2>
          <ul>
            <li>Overestimating activity level — most people are less active than they think</li>
            <li>Not recalculating as weight changes</li>
            <li>Ignoring NEAT — daily steps matter significantly</li>
            <li>Being too aggressive with deficits</li>
          </ul>

          <h2>Related Tools</h2>
          <ul>
            <li><a href="/tools/bmi-calculator">BMI Calculator</a> — Check your weight category</li>
            <li><a href="/tools/body-fat-calculator">Body Fat Calculator</a> — More accurate body composition</li>
            <li><a href="/tools/one-rep-max">One Rep Max Calculator</a> — Measure strength potential</li>
          </ul>
        </article>
      </ToolContent>
    </>
  );
}
