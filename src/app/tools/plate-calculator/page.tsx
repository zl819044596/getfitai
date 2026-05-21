import { Metadata } from "next";
import { PlateCalculatorClient } from "./plate-calculator-client";
import { ToolContent } from "@/components/tool-content";

export const metadata: Metadata = {
  title: "Plate Calculator | GetFitAI",
  description: "Calculate barbell plate loading with GetFitAI's free plate calculator. Quickly figure out which weight plates to load for your target lifting weight.",
  alternates: {
    canonical: "https://getfitai.io/tools/plate-calculator",
  },
};

export default function PlateCalculatorPage() {
  return (
    <>
      <PlateCalculatorClient />
      <ToolContent title="Plate Calculator: Load the Perfect Weight">
        <article className="prose prose-gray max-w-none">
          <h2>How Barbell Math Works</h2>
          <p>A standard Olympic setup includes a 20 kg (45 lb) barbell and plates loaded evenly on both sides. The key rule: <strong>whatever you add to one side, you must add to the other</strong>.</p>

          <h2>Standard Olympic Plate Sizes</h2>
          <p><strong>Kilogram plates (color-coded):</strong></p>
          <ul>
            <li>25 kg — Red</li>
            <li>20 kg — Blue</li>
            <li>15 kg — Yellow</li>
            <li>10 kg — Green</li>
            <li>5 kg — White</li>
            <li>2.5 kg, 1.25 kg, 0.5 kg — Fractional plates</li>
          </ul>

          <h2>Why Accurate Loading Matters</h2>
          <ul>
            <li><strong>Progressive overload</strong>: Small increments add up over months</li>
            <li><strong>Program compliance</strong>: Hit exact percentages of your 1RM</li>
            <li><strong>Safety</strong>: Uneven loading risks bar tipping and injury</li>
          </ul>

          <h2>Fractional Plates: The Secret Weapon</h2>
          <p>Fractional plates (0.5-2.5 kg) are essential for women, lighter lifters, and advanced trainees. Instead of 5 kg jumps, micro-load with 1-2 kg increments to keep progress steady.</p>

          <h2>Loading Etiquette</h2>
          <ul>
            <li>Strip your bar when done — don't leave plates on</li>
            <li>Return plates to storage, organized by weight</li>
            <li>Don't hoard plates — take only what you need</li>
            <li>Load heavier plates on the inside, lighter plates outside</li>
          </ul>

          <h2>Related Tools</h2>
          <ul>
            <li><a href="/tools/one-rep-max">One Rep Max Calculator</a> — Know your target percentages</li>
            <li><a href="/tools/workout-timer">Workout Timer</a> — Time your rest periods</li>
            <li><a href="/tools/tdee-calculator">TDEE Calculator</a> — Fuel your training</li>
          </ul>
        </article>
      </ToolContent>
    </>
  );
}
