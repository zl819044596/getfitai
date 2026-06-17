import { Metadata } from "next";
import { TrainSession } from "./train-session-client";

// Define params for all 7 workout plans
export function generateStaticParams() {
  return [
    { planId: "full-body-burn" },
    { planId: "core-crusher" },
    { planId: "quick-cardio" },
    { planId: "upper-body-push" },
    { planId: "lower-body-strength" },
    { planId: "full-body-stretch" },
    { planId: "hiit-blast" },
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
  "upper-body-push": {
    name: "Upper Body Push",
    description:
      "Push-ups, dips, and plank variations for a stronger upper body — 10 minutes, no equipment.",
  },
  "lower-body-strength": {
    name: "Lower Body Strength",
    description:
      "Squats, lunges, glute bridges, and isometric holds for powerful legs — 12 minutes, bodyweight only.",
  },
  "full-body-stretch": {
    name: "Full Body Stretch",
    description:
      "A continuous flexibility flow from neck to ankles — 8 minutes of full-body recovery and release.",
  },
  "hiit-blast": {
    name: "HIIT Blast",
    description:
      "40/15 HIIT intervals with burpees, high knees, and an all-out star jump finish — 7 minutes to torch calories.",
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
