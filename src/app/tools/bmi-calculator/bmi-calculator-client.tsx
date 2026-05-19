"use client";

import { useState } from "react";
import Link from "next/link";
import { Activity, ArrowLeft, Calculator, Info } from "lucide-react";
import { Nav } from "@/components/nav";

export function BMICalculatorClient() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<null | { bmi: number; category: string; color: string }>(null);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      const bmi = w / (h * h);
      let category = "";
      let color = "";
      if (bmi < 18.5) { category = "Underweight"; color = "text-blue-600"; }
      else if (bmi < 25) { category = "Normal weight"; color = "text-green-600"; }
      else if (bmi < 30) { category = "Overweight"; color = "text-yellow-600"; }
      else { category = "Obese"; color = "text-red-600"; }
      setResult({ bmi: Math.round(bmi * 10) / 10, category, color });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-600 mb-6">
              <Calculator className="w-4 h-4" />
              <span>BMI Calculator</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Calculate Your BMI</h1>
            <p className="text-lg text-gray-500">Enter your height and weight to get your Body Mass Index.</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="175"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="70"
                />
              </div>
            </div>
            <button
              onClick={calculateBMI}
              className="w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Calculate BMI
            </button>
          </div>

          {result && (
            <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-8">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Your BMI</p>
                <p className="text-5xl font-bold text-black mb-2">{result.bmi}</p>
                <p className={`text-lg font-medium ${result.color}`}>{result.category}</p>
              </div>
            </div>
          )}

          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              BMI Categories
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Underweight</span><span className="text-blue-600">&lt; 18.5</span></div>
              <div className="flex justify-between"><span>Normal weight</span><span className="text-green-600">18.5 - 24.9</span></div>
              <div className="flex justify-between"><span>Overweight</span><span className="text-yellow-600">25 - 29.9</span></div>
              <div className="flex justify-between"><span>Obese</span><span className="text-red-600">≥ 30</span></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
