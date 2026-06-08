import { Metadata } from "next";
import { IdealWeightCalculatorClient } from "./ideal-weight-calculator-client";
import { ToolContent } from "@/components/tool-content";

export const metadata: Metadata = {
  title: "Ideal Weight Calculator | GetFitAI",
  description:
    "Calculate your ideal weight for free. Get healthy weight estimates based on BMI and multiple medical formulas. Supports metric and imperial with GetFitAI.",
  alternates: {
    canonical: "https://www.getfitai.io/tools/ideal-weight-calculator/",
  },
  openGraph: {
    url: "https://www.getfitai.io/tools/ideal-weight-calculator",
    images: [
      {
        url: "https://www.getfitai.io/og-image.webp",
        width: 1200,
        height: 630,
        alt: "GetFitAI - Free AI Workout Generator & Fitness Tools",
      },
    ],
  },
};

export default function IdealWeightCalculatorPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section className="pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Ideal Weight Calculator
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Calculate your healthy weight range using BMI and medical formulas.
              </p>
            </div>
            <IdealWeightCalculatorClient />
          </div>
        </section>
      </main>
      <ToolContent title="Understanding Ideal Weight: Complete Guide">
        <article className="prose prose-gray max-w-none">
          <h2>What is Ideal Weight?</h2>
          <p>Ideal weight is a healthy body weight range associated with the lowest risk of weight-related health problems. This calculator uses multiple established medical formulas to give you a comprehensive estimate.</p>

          <h2>The Formulas Used</h2>
          <ul>
            <li><strong>BMI Range</strong>: Based on WHO BMI guidelines (18.5-24.9)</li>
            <li><strong>Robinson (1983)</strong>: Updated Devine formula using median weights</li>
            <li><strong>Miller (1983)</strong>: Regression analysis of actual body weights</li>
            <li><strong>Devine (1974)</strong>: Originally developed for medication dosing</li>
            <li><strong>Hamwi (1964)</strong>: Simple formula still widely used in clinical settings</li>
          </ul>

          <h2>BMI Healthy Weight Range</h2>
          <p>The BMI method calculates the weight range that corresponds to a healthy BMI (18.5-24.9) for your height. While BMI doesn't distinguish muscle from fat, it provides a useful population-level screening tool.</p>

          <h2>Why Different Formulas Give Different Results</h2>
          <p>Each formula was developed using different datasets and methodologies. Some are based on median weights, others on regression analysis of healthy populations. The range across formulas gives you a realistic healthy weight window rather than a single number.</p>

          <h2>Factors Beyond the Scale</h2>
          <ul>
            <li><strong>Body composition</strong>: Two people at the same weight can look very different based on muscle vs fat ratio</li>
            <li><strong>Frame size</strong>: Larger bone structures naturally weigh more</li>
            <li><strong>Age</strong>: Healthy weight ranges may shift slightly with age</li>
            <li><strong>Ethnicity</strong>: Some populations have different healthy BMI thresholds</li>
          </ul>

          <h2>Tips for Reaching Your Healthy Weight</h2>
          <ul>
            <li>Focus on sustainable habits rather than rapid weight changes</li>
            <li>Aim for 0.5-1% of body weight change per week at most</li>
            <li>Combine resistance training with cardio for optimal body composition</li>
            <li>Prioritize protein intake to preserve muscle during weight loss</li>
            <li>Get 7-9 hours of sleep — poor sleep disrupts hunger hormones</li>
          </ul>

          <h2>Related Tools</h2>
          <ul>
            <li><a href="/tools/bmi-calculator">BMI Calculator</a> — Check your current Body Mass Index</li>
            <li><a href="/tools/body-fat-calculator">Body Fat Calculator</a> — Get a more accurate body composition estimate</li>
            <li><a href="/tools/bmr-calculator">BMR Calculator</a> — Understand your calorie needs</li>
          </ul>
        </article>
      </ToolContent>
    </>
  );
}
