import type { Metadata } from "next";
import HomeClient from "./home-client";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "GetFitAI - Free AI Workout Plans & Fitness Calculators",
  description:
    "GetFitAI: Free AI workout plans & fitness calculators. Personalized training for muscle building, fat loss & strength. No signup needed.",
  alternates: {
    canonical: "https://www.getfitai.io/",
  },
  openGraph: {
    title: "GetFitAI - Free AI Workout Plans & Fitness Calculators",
    description: "Free AI-powered workout plans and fitness calculators. Personalized training plans for muscle building, fat loss, and strength.",
    url: "https://www.getfitai.io",
    images: [
      {
        url: "https://www.getfitai.io/og-image.webp",
        width: 1200,
        height: 630,
        alt: "GetFitAI - Free AI Workout Plans & Fitness Calculators",
      },
    ],
  },
};

export default function Home() {
  const breadcrumb = breadcrumbList([
    { name: "Home", url: "https://www.getfitai.io/" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <HomeClient />
    </>
  );
}
