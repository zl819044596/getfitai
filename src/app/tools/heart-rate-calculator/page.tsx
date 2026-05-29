import type { Metadata } from "next";
import { HeartRateCalculatorClient } from "./heart-rate-calculator-client";

export const metadata: Metadata = {
  title: "Heart Rate Zone Calculator — Free Training Zones | GetFitAI",
  description:
    "Calculate your heart rate zones for free. Get personalized fat burn, cardio, and peak zones based on your age. Optimize your training intensity.",
  alternates: {
    canonical: "https://getfitai.io/tools/heart-rate-calculator",
  },
  openGraph: {
    url: "https://getfitai.io/tools/heart-rate-calculator",
  },
};

export default function HeartRateCalculatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Heart Rate Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Calculate your target heart rate zones for fat burn, cardio, and peak performance.
            </p>
          </div>
          <HeartRateCalculatorClient />
        </div>
      </section>
    </main>
  );
}
