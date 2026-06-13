import { Metadata } from "next";
import { TrainSession } from "./train-session-client";

// Define params for all 3 workout plans
export function generateStaticParams() {
  return [
    { planId: "full-body-burn" },
    { planId: "core-crusher" },
    { planId: "quick-cardio" },
  ];
}

const planMeta: Record<string, { name: string; description: string }> = {
  "full-body-burn": {
    name: "Full Body Burn",
    description:
      "A complete 15-minute full-body workout combining strength and cardio moves. No equipment needed.",
  },
  "core-crusher": {
    name: "Core Crusher",
    description:
      "A focused 10-minute core workout targeting abs, obliques, and lower back. No equipment needed.",
  },
  "quick-cardio": {
    name: "Quick Cardio",
    description:
      "A rapid-fire 5-minute cardio blast to get your heart pumping fast. No equipment needed.",
  },
};

export function generateMetadata({
  params,
}: {
  params: { planId: string };
}): Metadata {
  const meta = planMeta[params.planId];
  if (!meta) {
    return {
      title: "Workout Not Found | GetFitAI",
    };
  }

  return {
    title: `${meta.name} | Follow-Along Workout | GetFitAI`,
    description: meta.description,
    alternates: {
      canonical: `https://www.getfitai.io/train/${params.planId}/`,
    },
    openGraph: {
      title: `${meta.name} | GetFitAI`,
      description: meta.description,
      url: `https://www.getfitai.io/train/${params.planId}/`,
    },
  };
}

export default function TrainSessionPage() {
  return <TrainSession />;
}
