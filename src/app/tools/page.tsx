import { Metadata } from "next";
import { ToolsClient } from "./tools-client";

export const metadata: Metadata = {
  title: "Fitness Tools | GetFitAI",
  description: "Free fitness calculators and tools to help you track your progress.",
  alternates: {
    canonical: "https://getfitai.io/tools",
  },
};

export default function ToolsPage() {
  return <ToolsClient />;
}
