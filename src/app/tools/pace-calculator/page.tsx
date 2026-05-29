import type { Metadata } from "next";
import { PaceCalculatorClient } from "./pace-calculator-client";

export const metadata: Metadata = {
  title: "Running Pace Calculator — Free Pace & Speed | GetFitAI",
  description:
    "Calculate your running pace for free. Get pace per km, pace per mile, and speed based on your distance and time. Works for any race distance.",
  alternates: {
    canonical: "https://getfitai.io/tools/pace-calculator",
  },
  openGraph: {
    url: "https://getfitai.io/tools/pace-calculator",
  },
};

export default function PaceCalculatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Pace Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Calculate your running pace, speed, and split times for any distance.
            </p>
          </div>
          <PaceCalculatorClient />
        </div>
      </section>
    </main>
  );
}
