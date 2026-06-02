import { Metadata } from "next";
import { BmrCalculatorClient } from "./bmr-calculator-client";
import { ToolContent } from "@/components/tool-content";

export const metadata: Metadata = {
  title: "BMR Calculator | GetFitAI",
  description:
    "Calculate your BMR (Basal Metabolic Rate) for free. Find out how many calories your body burns at rest. Includes TDEE estimate with GetFitAI.",
  alternates: {
    canonical: "https://www.getfitai.io/tools/bmr-calculator/",
  },
  openGraph: {
    url: "https://www.getfitai.io/tools/bmr-calculator",
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

export default function BmrCalculatorPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                BMR Calculator
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Calculate your Basal Metabolic Rate and estimated TDEE.
              </p>
            </div>
            <BmrCalculatorClient />
          </div>
        </section>
      </main>
      <ToolContent title="Understanding BMR and TDEE: Complete Guide">
        <article className="prose prose-gray max-w-none">
          <h2>What is BMR?</h2>
          <p>Basal Metabolic Rate (BMR) is the number of calories your body needs to maintain basic life-sustaining functions at complete rest. This includes breathing, circulation, cell production, and temperature regulation.</p>

          <h2>Mifflin-St Jeor Equation</h2>
          <p>This calculator uses the Mifflin-St Jeor formula, widely considered the most accurate BMR estimation:</p>
          <ul>
            <li><strong>Men</strong>: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) + 5</li>
            <li><strong>Women</strong>: BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) - 161</li>
          </ul>

          <h2>What is TDEE?</h2>
          <p>Total Daily Energy Expenditure (TDEE) is your BMR multiplied by an activity factor. It represents the total calories you burn in a day including exercise and daily movement.</p>

          <h2>Activity Multipliers</h2>
          <ul>
            <li><strong>Sedentary</strong>: BMR × 1.2 (little to no exercise)</li>
            <li><strong>Lightly active</strong>: BMR × 1.375 (1-3 days/week)</li>
            <li><strong>Moderately active</strong>: BMR × 1.55 (3-5 days/week)</li>
            <li><strong>Very active</strong>: BMR × 1.725 (6-7 days/week)</li>
            <li><strong>Extremely active</strong>: BMR × 1.9 (physical job + training)</li>
          </ul>

          <h2>How to Use BMR for Weight Goals</h2>
          <ul>
            <li><strong>Weight loss</strong>: Eat 300-500 calories below TDEE for sustainable fat loss</li>
            <li><strong>Maintenance</strong>: Eat at your TDEE to maintain current weight</li>
            <li><strong>Muscle gain</strong>: Eat 200-300 calories above TDEE with adequate protein</li>
          </ul>

          <h2>Factors That Affect BMR</h2>
          <ul>
            <li>Age — BMR decreases by about 2% per decade after 20</li>
            <li>Muscle mass — More muscle increases BMR significantly</li>
            <li>Genetics — Some people naturally burn more calories at rest</li>
            <li>Hormones — Thyroid function heavily influences metabolic rate</li>
            <li>Climate — Cold environments can slightly increase BMR</li>
          </ul>

          <h2>Related Tools</h2>
          <ul>
            <li><a href="/tools/tdee-calculator">TDEE Calculator</a> — Detailed daily energy expenditure with activity levels</li>
            <li><a href="/tools/macro-calculator">Macro Calculator</a> — Break down calories into protein, carbs, and fats</li>
            <li><a href="/tools/calorie-calculator">Calorie Calculator</a> — Full calorie needs analysis</li>
          </ul>
        </article>
      </ToolContent>
    </>
  );
}
