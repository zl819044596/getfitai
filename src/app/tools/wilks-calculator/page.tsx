import type { Metadata } from "next";
import { WilksCalculatorClient } from "./wilks-calculator-client";

export const metadata: Metadata = {
  title: "Wilks Calculator — Free Strength Score | GetFitAI",
  description:
    "Calculate your Wilks score for free. Compare strength across body weights with this powerlifting standard. Supports kg and lb.",
  alternates: {
    canonical: "https://getfitai.io/tools/wilks-calculator",
  },
  openGraph: {
    url: "https://getfitai.io/tools/wilks-calculator",
  },
};

export default function WilksCalculatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Wilks Calculator
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Calculate your Wilks score to compare strength across different body weights.
            </p>
          </div>
          <WilksCalculatorClient />
        </div>
      </section>
    </main>
  );
}
