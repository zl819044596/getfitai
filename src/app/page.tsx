import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "GetFitAI - Free AI Workout Plans & Fitness Calculators",
  description:
    "GetFitAI: Free AI-powered workout plans and fitness calculators including BMI, TDEE, body fat, and 1RM. No signup required.",
  alternates: {
    canonical: "https://getfitai.io",
  },
  openGraph: {
    url: "https://getfitai.io",
    images: [
      {
        url: "https://getfitai.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GetFitAI - Free AI Workout Plans & Fitness Calculators",
      },
    ],
  },
};

export default function Home() {
  return <HomeClient />;
}
