import { Metadata } from "next";
import { HomeClient } from "./home-client";

export const metadata: Metadata = {
  title: "GetFitAI - AI Workout Generator",
  description: "Generate personalized workout plans with AI. No signup required.",
};

export default function Home() {
  return <HomeClient />;
}
