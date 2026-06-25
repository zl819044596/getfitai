import { Metadata } from "next";
import { TrainPlans } from "./train-plans-client";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Follow-Along Workouts | GetFitAI",
  description:
    "Home workout plans with video demonstrations. Full Body Burn, Core Crusher, and Quick Cardio — no equipment needed. Follow along with real-time timers.",
  alternates: {
    canonical: "https://www.getfitai.io/train/",
  },
  openGraph: {
    title: "Follow-Along Workouts | GetFitAI",
    description:
      "Home workout plans with video demonstrations and real-time timers. No equipment needed.",
    url: "https://www.getfitai.io/train",
    images: [
      {
        url: "https://www.getfitai.io/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Follow-Along Workouts | GetFitAI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Follow-Along Workouts | GetFitAI",
    description:
      "Home workout plans with video demonstrations and real-time timers. No equipment needed.",
    images: ["https://www.getfitai.io/og-image.webp"],
  },
};

export default function TrainPage() {
  const breadcrumb = breadcrumbList([
    { name: "Home", url: "https://www.getfitai.io/" },
    { name: "Workouts", url: "https://www.getfitai.io/train/" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <TrainPlans />
    </>
  );
}
