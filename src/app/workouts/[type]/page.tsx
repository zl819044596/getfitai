import { notFound } from "next/navigation";
import { WorkoutLanding } from "@/components/workout-landing";
import { workoutConfigs } from "@/lib/workout-configs";

export function generateStaticParams() {
  return [
    { type: "gym" },
    { type: "home" },
    { type: "beginner" },
  ];
}

export function generateMetadata({ params }: { params: { type: string } }) {
  const config = workoutConfigs[params.type];
  if (!config) return {};

  return {
    title: `${config.title} | GetFitAI`,
    description: config.description,
  };
}

export default function WorkoutPage({ params }: { params: { type: string } }) {
  const config = workoutConfigs[params.type];

  if (!config) {
    notFound();
  }

  return <WorkoutLanding config={config} />;
}
