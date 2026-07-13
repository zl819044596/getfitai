import { Metadata } from "next";
import { TrainSession } from "./train-session-client";
import { JsonLd } from "@/components/json-ld";
import { FavoriteButton } from "@/components/favorite-button";
import { breadcrumbList } from "@/lib/schema";

// Define params for all 12 workout plans
export function generateStaticParams() {
  return [
    { planId: "full-body-burn" },
    { planId: "core-crusher" },
    { planId: "quick-cardio" },
    { planId: "upper-body-push" },
    { planId: "lower-body-strength" },
    { planId: "full-body-stretch" },
    { planId: "hiit-blast" },
    { planId: "leg-day" },
    { planId: "back-and-biceps" },
    { planId: "chest-triceps" },
    { planId: "morning-wake-up" },
    { planId: "evening-wind-down" },
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
  "leg-day": {
    name: "Leg Day",
    description:
      "Squats, lunges, glute bridges, calf raises, and isometric wall sits for powerful legs — 15 minutes, bodyweight only.",
  },
  "back-and-biceps": {
    name: "Back & Biceps",
    description:
      "Superset bodyweight rows with towel bicep curls for a focused upper-body pump — 10 minutes, bodyweight only.",
  },
  "chest-triceps": {
    name: "Chest & Triceps",
    description:
      "Push-up variations from wide to diamond, plus dips and pikes — 10 minutes, no equipment needed.",
  },
  "morning-wake-up": {
    name: "Morning Wake-Up",
    description:
      "A gentle continuous-flow routine — neck rolls to lying twists — to wake up your body in 5 minutes.",
  },
  "evening-wind-down": {
    name: "Evening Wind-Down",
    description:
      "Deep breathing to happy baby — unwind from head to toe with this calming 8-minute flow.",
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
      images: [
        {
          url: "https://www.getfitai.io/og-image.webp",
          width: 1200,
          height: 630,
          alt: `${meta.name} | GetFitAI`,
        },
      ],
    },
  };
}

export default function TrainSessionPage() {
  // Breadcrumb uses planMeta which is defined above
  const breadcrumb = breadcrumbList([
    { name: "Home", url: "https://www.getfitai.io/" },
    { name: "Workouts", url: "https://www.getfitai.io/train/" },
  ]);

  return (
    <div className="relative">
      <JsonLd data={breadcrumb} />
      <TrainSession />
      <div className="fixed top-20 right-4 z-50">
        <FavoriteButton />
      </div>
    </div>
  );
}
