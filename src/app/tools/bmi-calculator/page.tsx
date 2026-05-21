import { Metadata } from "next";
import { BMICalculatorClient } from "./bmi-calculator-client";
import { ToolContent } from "@/components/tool-content";

export const metadata: Metadata = {
  title: "BMI Calculator | GetFitAI",
  description: "Calculate your Body Mass Index (BMI) with GetFitAI's free calculator. Understand your weight category and get personalized health insights instantly.",
  alternates: {
    canonical: "https://getfitai.io/tools/bmi-calculator",
  },
};

export default function BMICalculatorPage() {
  return (
    <>
      <BMICalculatorClient />
      <ToolContent title="Understanding BMI: Complete Guide">
        <article className="prose prose-gray max-w-none">
          <h2>What is BMI?</h2>
          <p>Body Mass Index (BMI) is a simple calculation using your height and weight to estimate body fat levels. The formula is: <strong>BMI = weight (kg) ÷ height² (m²)</strong>.</p>

          <h2>BMI Categories</h2>
          <ul>
            <li><strong>Underweight</strong>: Below 18.5</li>
            <li><strong>Normal weight</strong>: 18.5 – 24.9</li>
            <li><strong>Overweight</strong>: 25.0 – 29.9</li>
            <li><strong>Obese</strong>: 30.0 and above</li>
          </ul>

          <h2>Why BMI Matters</h2>
          <p>Your BMI indicates potential health risks. Underweight may signal malnutrition, while overweight and obese categories increase risk of heart disease, type 2 diabetes, and certain cancers.</p>

          <h2>Limitations of BMI</h2>
          <ul>
            <li>Does not distinguish muscle from fat — athletes may have high BMI despite low body fat</li>
            <li>Does not account for fat distribution — belly fat is more dangerous</li>
            <li>Varies by ethnicity — Asian populations may have higher health risks at lower BMIs</li>
          </ul>

          <h2>Tips for Maintaining Healthy BMI</h2>
          <ul>
            <li>Eat a balanced diet rich in whole foods, fruits, and vegetables</li>
            <li>Exercise regularly — aim for at least 150 minutes of moderate activity per week</li>
            <li>Get enough sleep — poor sleep is linked to weight gain</li>
            <li>Manage stress — chronic stress can lead to emotional eating</li>
          </ul>

          <h2>Related Tools</h2>
          <ul>
            <li><a href="/tools/tdee-calculator">TDEE Calculator</a> — Calculate your daily calorie needs</li>
            <li><a href="/tools/body-fat-calculator">Body Fat Calculator</a> — Get a more accurate body composition estimate</li>
            <li><a href="/tools/one-rep-max">One Rep Max Calculator</a> — Find your strength potential</li>
          </ul>
        </article>
      </ToolContent>
    </>
  );
}
