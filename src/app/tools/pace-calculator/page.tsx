import { Metadata } from "next";
import { PaceCalculatorClient } from "./pace-calculator-client";
import { ToolContent } from "@/components/tool-content";

export const metadata: Metadata = {
  title: "Running Pace Calculator | GetFitAI",
  description:
    "Calculate your running pace for free. Get pace per km, pace per mile, and speed based on your distance and time. Works for any race distance with GetFitAI.",
  alternates: {
    canonical: "https://getfitai.io/tools/pace-calculator",
  },
  openGraph: {
    url: "https://getfitai.io/tools/pace-calculator",
    images: [
      {
        url: "https://getfitai.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GetFitAI - Free AI Workout Generator & Fitness Tools",
      },
    ],
  },
};

export default function PaceCalculatorPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Pace Calculator
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Calculate your running pace, speed, and split times for any distance.
              </p>
            </div>
            <PaceCalculatorClient />
          </div>
        </section>
      </main>
      <ToolContent title="Understanding Running Pace: Complete Guide">
        <article className="prose prose-gray max-w-none">
          <h2>What is Running Pace?</h2>
          <p>Running pace is the time it takes to cover a specific distance, typically expressed as minutes per kilometer (min/km) or minutes per mile (min/mile). It's one of the most important metrics for runners to track progress and plan races.</p>

          <h2>Common Race Distances and Target Paces</h2>
          <ul>
            <li><strong>5K</strong>: 3.1 miles — Popular beginner race distance</li>
            <li><strong>10K</strong>: 6.2 miles — Tests speed and endurance balance</li>
            <li><strong>Half Marathon</strong>: 13.1 miles — Requires dedicated training</li>
            <li><strong>Marathon</strong>: 26.2 miles — The ultimate endurance challenge</li>
          </ul>

          <h2>How to Use This Calculator</h2>
          <p>Enter your race distance and finish time to get your average pace. Use this to:</p>
          <ul>
            <li>Plan training runs at the correct intensity</li>
            <li>Set realistic race time goals</li>
            <li>Compare performances across different distances</li>
            <li>Convert between metric and imperial units</li>
          </ul>

          <h2>Pace vs Speed</h2>
          <p>While pace is time per unit distance (min/km), speed is distance per unit time (km/h). Lower pace numbers mean faster running. This calculator provides both metrics for complete analysis.</p>

          <h2>Tips for Improving Your Pace</h2>
          <ul>
            <li>Incorporate interval training to build speed</li>
            <li>Run tempo workouts at lactate threshold pace</li>
            <li>Build aerobic base with long slow distance runs</li>
            <li>Include strength training to improve running economy</li>
            <li>Ensure adequate rest and recovery between hard sessions</li>
          </ul>

          <h2>Related Tools</h2>
          <ul>
            <li><a href="/tools/heart-rate-calculator">Heart Rate Calculator</a> — Train in the right intensity zones</li>
            <li><a href="/tools/calorie-calculator">Calorie Calculator</a> — Fuel your runs properly</li>
            <li><a href="/tools/bmr-calculator">BMR Calculator</a> — Understand your energy needs</li>
          </ul>
        </article>
      </ToolContent>
    </>
  );
}
