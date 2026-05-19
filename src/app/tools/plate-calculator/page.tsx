import { Metadata } from "next";
import { PlateCalculatorClient } from "./plate-calculator-client";

export const metadata: Metadata = {
  title: "Plate Calculator | GetFitAI",
  description: "Figure out which plates to load for your target weight.",
  alternates: {
    canonical: "https://getfitai.io/tools/plate-calculator",
  },
};

export default function PlateCalculatorPage() {
  return <PlateCalculatorClient />;
}
