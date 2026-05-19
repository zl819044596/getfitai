import { Metadata } from "next";
import { OneRepMaxClient } from "./one-rep-max-client";

export const metadata: Metadata = {
  title: "1RM Calculator | GetFitAI",
  description: "Estimate your one-rep max based on your current lifting stats.",
  alternates: {
    canonical: "https://getfitai.io/tools/one-rep-max",
  },
};

export default function OneRepMaxPage() {
  return <OneRepMaxClient />;
}
