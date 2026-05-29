import type { Metadata } from "next";
import { ProteinCalculatorClient } from "./protein-calculator-client";

export const metadata: Metadata = {
  title: "Protein Calculator — Free Daily Protein Intake | GetFitAI",
  description:
    "Calculate your daily protein needs for free. Get personalized protein targets based on your weight, activity level, and fitness goals. No signup required.",
  alternates: {
    canonical: "https://getfitai.io/tools/protein-calculator",
  },
  openGraph: {
    url: "https://getfitai.io/tools/protein-calculator",
  },
};

export default function ProteinCalculatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Protein Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Calculate your daily protein intake based on your weight, activity level, and fitness goals.
            </p>
          </div>
          <ProteinCalculatorClient />
        </div>
      </section>
    </main>
  );
}
