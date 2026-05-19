import { Metadata } from "next";
import { TDEECalculatorClient } from "./tdee-calculator-client";

export const metadata: Metadata = {
  title: "Calorie Calculator | GetFitAI",
  description: "Estimate your daily calorie needs based on your goals.",
  alternates: {
    canonical: "https://getfitai.io/tools/tdee-calculator",
  },
};

export default function TDEECalculatorPage() {
  return <TDEECalculatorClient />;
}
