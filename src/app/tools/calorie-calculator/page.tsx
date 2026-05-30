import type { Metadata } from "next";
import { CalorieCalculatorClient } from "./calorie-calculator-client";

export const metadata: Metadata = {
  title: "Calorie Calculator — Free TDEE & Daily Calories | GetFitAI",
  description:
    "Calculate your daily calorie needs for free. Get your BMR, TDEE, and personalized calorie target based on your activity level. No signup required.",
  alternates: {
    canonical: "https://getfitai.io/tools/calorie-calculator",
  },
  openGraph: {
    url: "https://getfitai.io/tools/calorie-calculator",
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

export default function CalorieCalculatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Calorie Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Calculate your BMR, TDEE, and daily calorie target based on your activity level and goals.
            </p>
          </div>
          <CalorieCalculatorClient />
        </div>
      </section>
    </main>
  );
}
