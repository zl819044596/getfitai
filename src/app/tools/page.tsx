import { Metadata } from "next";
import { ToolsClient } from "./tools-client";

export const metadata: Metadata = {
  title: "Fitness Tools | GetFitAI",
  description: "Explore GetFitAI's collection of free fitness calculators and tools. BMI, TDEE, 1RM, body fat, plate calculator, and workout timer — all free.",
  alternates: {
    canonical: "https://getfitai.io/tools",
  },
  openGraph: {
    url: "https://getfitai.io/tools",
  },
};

export default function ToolsPage() {
  return <ToolsClient />;
}
