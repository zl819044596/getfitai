import type { Metadata } from "next";
import { MacroCalculatorClient } from "./macro-calculator-client";
import { ToolContent } from "@/components/tool-content";

export const metadata: Metadata = {
  title: "Macro Calculator — Free Protein, Carbs & Fat | GetFitAI",
  description:
    "Calculate your daily macros for free. Get personalized protein, carb, and fat targets based on your weight and fitness goals. No signup required.",
  alternates: {
    canonical: "https://www.getfitai.io/tools/macro-calculator/",
  },
  openGraph: {
    url: "https://www.getfitai.io/tools/macro-calculator",
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

export default function MacroCalculatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Macro Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Calculate your daily protein, carbs, and fat targets based on your weight and fitness goals.
            </p>
          </div>
          <MacroCalculatorClient />
        </div>
      </section>
      <ToolContent title="Understanding Macros: Complete Guide">
        <article className="prose prose-gray max-w-none">
          <h2>What Are Macros?</h2>
          <p>Macronutrients (macros) are the three main nutrients your body needs in large amounts: <strong>protein, carbohydrates, and fat</strong>. Tracking macros helps you optimize body composition, performance, and overall health.</p>

          <h2>Protein</h2>
          <p>Protein builds and repairs muscle tissue. For active individuals, aim for <strong>1.6-2.2g per kg of body weight</strong>. Higher intake supports muscle growth during bulking and preserves lean mass during cutting.</p>

          <h2>Carbohydrates</h2>
          <p>Carbs are your body's primary energy source. They fuel workouts and replenish glycogen stores. Active individuals typically need <strong>3-5g per kg</strong> depending on training intensity and goals.</p>

          <h2>Fats</h2>
          <p>Dietary fats support hormone production, nutrient absorption, and cell health. Aim for <strong>0.8-1g per kg</strong> of body weight. Going below 15% of total calories can harm hormone levels.</p>

          <h2>How to Use This Calculator</h2>
          <ul>
            <li>Enter your body weight</li>
            <li>Select your goal: lose fat, maintain, or build muscle</li>
            <li>Get personalized daily targets for protein, carbs, and fat</li>
            <li>Track your intake using a food scale and app like MyFitnessPal</li>
          </ul>

          <h2>Macro Ratios by Goal</h2>
          <ul>
            <li><strong>Fat Loss</strong>: High protein (40%), moderate carbs (30%), moderate fat (30%)</li>
            <li><strong>Maintenance</strong>: Balanced (30% protein, 40% carbs, 30% fat)</li>
            <li><strong>Muscle Gain</strong>: High protein (35%), high carbs (45%), moderate fat (20%)</li>
          </ul>

          <h2>Related Tools</h2>
          <ul>
            <li><a href="/tools/calorie-calculator">Calorie Calculator</a> — Calculate your total daily energy expenditure</li>
            <li><a href="/tools/protein-calculator">Protein Calculator</a> — Get precise protein targets</li>
            <li><a href="/tools/tdee-calculator">TDEE Calculator</a> — Find your maintenance calories</li>
          </ul>
        </article>
      </ToolContent>
    </main>
  );
}
