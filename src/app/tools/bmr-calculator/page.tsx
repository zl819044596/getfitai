import type { Metadata } from "next";
import { BmrCalculatorClient } from "./bmr-calculator-client";

export const metadata: Metadata = {
  title: "BMR Calculator — Free Basal Metabolic Rate | GetFitAI",
  description:
    "Calculate your BMR (Basal Metabolic Rate) for free. Find out how many calories your body burns at rest. Includes TDEE estimate.",
  alternates: {
    canonical: "https://getfitai.io/tools/bmr-calculator",
  },
  openGraph: {
    url: "https://getfitai.io/tools/bmr-calculator",
  },
};

export default function BmrCalculatorPage() {
  return (
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
  );
}
