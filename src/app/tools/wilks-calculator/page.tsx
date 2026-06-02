import { Metadata } from "next";
import { WilksCalculatorClient } from "./wilks-calculator-client";
import { ToolContent } from "@/components/tool-content";

export const metadata: Metadata = {
  title: "Wilks Calculator | GetFitAI",
  description:
    "Calculate your Wilks score for free. Compare strength across body weights with this powerlifting standard. Supports kg and lb units with GetFitAI.",
  alternates: {
    canonical: "https://www.getfitai.io/tools/wilks-calculator/",
  },
  openGraph: {
    url: "https://www.getfitai.io/tools/wilks-calculator",
    images: [
      {
        url: "https://www.getfitai.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GetFitAI - Free AI Workout Generator & Fitness Tools",
      },
    ],
  },
};

export default function WilksCalculatorPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Wilks Calculator
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Calculate your Wilks score to compare strength across different body weights.
              </p>
            </div>
            <WilksCalculatorClient />
          </div>
        </section>
      </main>
      <ToolContent title="Understanding the Wilks Score: Complete Guide">
        <article className="prose prose-gray max-w-none">
          <h2>What is the Wilks Score?</h2>
          <p>The Wilks score is a formula used in powerlifting to compare the strength of lifters across different body weights. It normalizes total weight lifted, allowing fair competition between lighter and heavier athletes.</p>

          <h2>How the Wilks Formula Works</h2>
          <p>The formula uses a 5th-order polynomial based on body weight. The coefficients differ for men and women to account for physiological differences. A higher Wilks score indicates greater relative strength.</p>

          <h2>Wilks Score Benchmarks</h2>
          <ul>
            <li><strong>Below 200</strong>: Beginner lifter</li>
            <li><strong>200-300</strong>: Intermediate lifter</li>
            <li><strong>300-400</strong>: Advanced lifter</li>
            <li><strong>400-500</strong>: Elite lifter</li>
            <li><strong>500+</strong>: World-class strength</li>
          </ul>

          <h2>What Counts Toward Your Total?</h2>
          <p>In powerlifting, your total is the sum of your best successful lifts in three exercises:</p>
          <ul>
            <li><strong>Squat</strong>: The king of lower body strength</li>
            <li><strong>Bench Press</strong>: The standard upper body push movement</li>
            <li><strong>Deadlift</strong>: Tests total body pulling power</li>
          </ul>

          <h2>Limitations of Wilks</h2>
          <ul>
            <li>Favors lighter lifters at the extremes of the weight spectrum</li>
            <li>Does not account for age (use IPF Points or DOTS for age-adjusted scoring)</li>
            <li>Assumes drug-free lifting; enhanced athletes may skew comparisons</li>
          </ul>

          <h2>Tips to Improve Your Wilks Score</h2>
          <ul>
            <li>Focus on technique before adding weight</li>
            <li>Train weaknesses — bring up your lowest lift</li>
            <li>Optimize body composition: more muscle, less fat at the same weight</li>
            <li>Follow a periodized program with planned deloads</li>
          </ul>

          <h2>Related Tools</h2>
          <ul>
            <li><a href="/tools/one-rep-max">1RM Calculator</a> — Estimate your maximum strength</li>
            <li><a href="/tools/plate-calculator">Plate Calculator</a> — Load the bar efficiently</li>
            <li><a href="/tools/bmr-calculator">BMR Calculator</a> — Fuel your training with proper nutrition</li>
          </ul>
        </article>
      </ToolContent>
    </>
  );
}
