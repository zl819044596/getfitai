import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "GetFitAI - Free AI Workout Plans & Fitness Calculators",
  description:
    "GetFitAI: Free AI-powered workout plans and fitness calculators including BMI, TDEE, body fat, and 1RM. No signup required. Build muscle, lose fat, and get stronger with personalized training plans.",
  alternates: {
    canonical: "https://getfitai.io",
  },
  openGraph: {
    url: "https://getfitai.io",
  },
};

export default function Home() {
  return <HomeClient />;
}
