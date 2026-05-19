import { Metadata } from "next";
import { BMICalculatorClient } from "./bmi-calculator-client";

export const metadata: Metadata = {
  title: "BMI Calculator | GetFitAI",
  description: "Calculate your Body Mass Index and understand your weight category.",
  alternates: {
    canonical: "https://getfitai.io/tools/bmi-calculator",
  },
};

export default function BMICalculatorPage() {
  return <BMICalculatorClient />;
}
