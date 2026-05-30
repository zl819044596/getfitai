import { Metadata } from "next";
import { ToolsClient } from "./tools-client";

export const metadata: Metadata = {
  title: "Fitness Tools | GetFitAI",
  description: "Explore GetFitAI's collection of free fitness calculators and tools. BMI, TDEE, 1RM, body fat, plate calculator, and workout timer — all free.",
  alternates: {
    canonical: "https://getfitai.io/tools",
  },
  openGraph: {
    title: "Fitness Tools | GetFitAI",
    url: "https://getfitai.io/tools",
    images: [
      {
        url: "https://getfitai.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fitness Tools | GetFitAI",
      },
    ],
  },
};

export default function ToolsPage() {
  return <ToolsClient />;
}
