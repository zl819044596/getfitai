import type { Metadata } from "next";
import { MacroCalculatorClient } from "./macro-calculator-client";

export const metadata: Metadata = {
  title: "Macro Calculator — Free Protein, Carbs & Fat | GetFitAI",
  description:
    "Calculate your daily macros for free. Get personalized protein, carb, and fat targets based on your weight and fitness goals. No signup required.",
  alternates: {
    canonical: "https://getfitai.io/tools/macro-calculator",
  },
  openGraph: {
    url: "https://getfitai.io/tools/macro-calculator",
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
    </main>
  );
}
