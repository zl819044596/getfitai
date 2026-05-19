import { Metadata } from "next";
import { WorkoutTimerClient } from "./workout-timer-client";

export const metadata: Metadata = {
  title: "Workout Timer | GetFitAI",
  description: "Interval timer for HIIT, Tabata, and circuit training.",
  alternates: {
    canonical: "https://getfitai.io/tools/workout-timer",
  },
};

export default function WorkoutTimerPage() {
  return <WorkoutTimerClient />;
}
