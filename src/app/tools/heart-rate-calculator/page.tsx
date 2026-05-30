import { Metadata } from "next";
import { HeartRateCalculatorClient } from "./heart-rate-calculator-client";
import { ToolContent } from "@/components/tool-content";

export const metadata: Metadata = {
  title: "Heart Rate Zone Calculator | GetFitAI",
  description:
    "Calculate your target heart rate zones for free. Get personalized fat burn, cardio, and peak zones based on your age. Optimize your training intensity with GetFitAI.",
  alternates: {
    canonical: "https://getfitai.io/tools/heart-rate-calculator",
  },
  openGraph: {
    url: "https://getfitai.io/tools/heart-rate-calculator",
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

export default function HeartRateCalculatorPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Heart Rate Calculator
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Calculate your target heart rate zones for fat burn, cardio, and peak performance.
              </p>
            </div>
            <HeartRateCalculatorClient />
          </div>
        </section>
      </main>
      <ToolContent title="Understanding Heart Rate Zones: Complete Guide">
        <article className="prose prose-gray max-w-none">
          <h2>What Are Heart Rate Zones?</h2>
          <p>Heart rate zones are ranges of beats per minute (BPM) that correspond to different training intensities. Training in specific zones helps you achieve different fitness goals more efficiently.</p>

          <h2>The Five Heart Rate Zones</h2>
          <ul>
            <li><strong>Zone 1 (Very Light)</strong>: 50-60% of max HR — Recovery and warm-up</li>
            <li><strong>Zone 2 (Light)</strong>: 60-70% of max HR — Fat burning and endurance base</li>
            <li><strong>Zone 3 (Moderate)</strong>: 70-80% of max HR — Aerobic fitness and efficiency</li>
            <li><strong>Zone 4 (Hard)</strong>: 80-90% of max HR — Anaerobic capacity and threshold</li>
            <li><strong>Zone 5 (Maximum)</strong>: 90-95% of max HR — Peak performance and speed</li>
          </ul>

          <h2>How to Calculate Max Heart Rate</h2>
          <p>The most common formula is: <strong>Max HR = 220 - age</strong>. While simple, this is an estimate. For more accuracy, consider a stress test or use the Tanaka formula: 208 - (0.7 × age).</p>

          <h2>Why Zone Training Matters</h2>
          <ul>
            <li><strong>Fat Burn (Zone 2)</strong>: Your body uses a higher percentage of fat for fuel at lower intensities</li>
            <li><strong>Cardio Health (Zone 3)</strong>: Builds aerobic base and improves heart efficiency</li>
            <li><strong>Performance (Zones 4-5)</strong>: Increases lactate threshold and VO2 max</li>
          </ul>

          <h2>Tips for Effective Heart Rate Training</h2>
          <ul>
            <li>Invest in a reliable heart rate monitor (chest strap or optical wrist sensor)</li>
            <li>Spend 80% of training time in Zones 1-2 for endurance building</li>
            <li>Use Zones 4-5 sparingly (about 20% of training) to avoid overtraining</li>
            <li>Factor in heart rate drift — your HR rises over long sessions even at constant pace</li>
          </ul>

          <h2>Related Tools</h2>
          <ul>
            <li><a href="/tools/pace-calculator">Pace Calculator</a> — Calculate your running pace and split times</li>
            <li><a href="/tools/bmr-calculator">BMR Calculator</a> — Find your daily calorie burn at rest</li>
            <li><a href="/tools/calorie-calculator">Calorie Calculator</a> — Estimate total daily energy expenditure</li>
          </ul>
        </article>
      </ToolContent>
    </>
  );
}
