import { Metadata } from "next";
import { AboutClient } from "./about-client";

export const metadata: Metadata = {
  title: "About | GetFitAI",
  description: "Making personalized fitness accessible to everyone through the power of AI.",
};

export default function AboutPage() {
  return <AboutClient />;
}
