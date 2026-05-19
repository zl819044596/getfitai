import { Metadata } from "next";
import { BodyFatCalculatorClient } from "./body-fat-calculator-client";

export const metadata: Metadata = {
  title: "Body Fat Calculator | GetFitAI",
  description: "Estimate your body fat percentage using multiple methods.",
  alternates: {
    canonical: "https://getfitai.io/tools/body-fat-calculator",
  },
};

export default function BodyFatCalculatorPage() {
  return <BodyFatCalculatorClient />;
}
