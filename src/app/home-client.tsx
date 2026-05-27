"use client";

import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { ToolsPreview } from "@/components/tools-preview";
import { WorkoutGenerator } from "@/components/workout-generator";
import { WhyChoose } from "@/components/why-choose";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";

export default function HomeClient() {
  return (
    <main className="bg-background">
      <Hero />
      <HowItWorks />
      <Features />
      <ToolsPreview />
      <WorkoutGenerator />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <CTASection />
    </main>
  );
}
