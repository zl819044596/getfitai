import { Metadata } from "next";
import { ToolsClient } from "./tools-client";

export const metadata: Metadata = {
  title: "Fitness Tools | GetFitAI",
  description: "Free fitness calculators and tools to help you track your progress.",
};

export default function ToolsPage() {
  return <ToolsClient />;
}
