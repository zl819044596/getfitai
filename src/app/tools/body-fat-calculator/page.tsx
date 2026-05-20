import { Metadata } from "next";
import { BodyFatCalculatorClient } from "./body-fat-calculator-client";
import { ToolContent } from "@/components/tool-content";

export const metadata: Metadata = {
  title: "Body Fat Calculator | GetFitAI",
  description: "Estimate your body fat percentage using multiple methods.",
  alternates: {
    canonical: "https://getfitai.io/tools/body-fat-calculator",
  },
};

export default function BodyFatCalculatorPage() {
  return (
    <>
      <BodyFatCalculatorClient />
      <ToolContent title="Body Fat Percentage: Understanding Your Composition">
        <article className="prose prose-gray max-w-none">
          <h2>What is Body Fat Percentage?</h2>
          <p><strong>Body fat percentage</strong> is the proportion of your total body weight that comes from fat mass. The remainder is lean mass — muscles, bones, organs, and water.</p>

          <h2>Body Fat Categories for Men</h2>
          <ul>
            <li><strong>Essential fat</strong>: 2-5%</li>
            <li><strong>Athletes</strong>: 6-13%</li>
            <li><strong>Fitness</strong>: 14-17%</li>
            <li><strong>Average</strong>: 18-24%</li>
            <li><strong>Obese</strong>: 25%+</li>
          </ul>

          <h2>Body Fat Categories for Women</h2>
          <ul>
            <li><strong>Essential fat</strong>: 10-13%</li>
            <li><strong>Athletes</strong>: 14-20%</li>
            <li><strong>Fitness</strong>: 21-24%</li>
            <li><strong>Average</strong>: 25-31%</li>
            <li><strong>Obese</strong>: 32%+</li>
          </ul>

          <h2>Navy Method</h2>
          <p>Our calculator uses the U.S. Navy Method, which estimates body fat based on neck, waist, and hip measurements. While not as accurate as DEXA scans, it provides reliable estimates with just a tape measure.</p>

          <h2>Measurement Tips</h2>
          <ul>
            <li>Use a flexible tape measure against skin, not over clothing</li>
            <li>Keep the tape level and parallel to the floor</li>
            <li>Don't pull too tight — tape should rest lightly</li>
            <li>Measure in the morning before eating or drinking</li>
            <li>Take 3 measurements and average the results</li>
          </ul>

          <h2>Related Tools</h2>
          <ul>
            <li><a href="/tools/bmi-calculator">BMI Calculator</a> — Quick weight category check</li>
            <li><a href="/tools/tdee-calculator">TDEE Calculator</a> — Calories for body recomposition</li>
            <li><a href="/tools/one-rep-max">One Rep Max Calculator</a> — Track strength while losing fat</li>
          </ul>
        </article>
      </ToolContent>
    </>
  );
}
