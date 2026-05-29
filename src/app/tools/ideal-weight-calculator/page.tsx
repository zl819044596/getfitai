import type { Metadata } from "next";
import { IdealWeightCalculatorClient } from "./ideal-weight-calculator-client";

export const metadata: Metadata = {
  title: "Ideal Weight Calculator — Free Healthy Weight Range | GetFitAI",
  description:
    "Calculate your ideal weight for free. Get healthy weight estimates based on BMI and multiple medical formulas. Supports metric and imperial.",
  alternates: {
    canonical: "https://getfitai.io/tools/ideal-weight-calculator",
  },
  openGraph: {
    url: "https://getfitai.io/tools/ideal-weight-calculator",
  },
};

export default function IdealWeightCalculatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ideal Weight Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Calculate your healthy weight range using BMI and medical formulas.
            </p>
          </div>
          <IdealWeightCalculatorClient />
        </div>
      </section>
    </main>
  );
}
