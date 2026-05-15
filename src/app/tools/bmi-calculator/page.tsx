"use client";

import { useState } from "react";
import Link from "next/link";
import { Activity, ArrowLeft, Calculator, Info, Heart, TrendingUp, AlertCircle } from "lucide-react";

export default function BMICalculatorPage() {
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">GetFitAI</span>
          </Link>
          <Link href="/tools" className="text-sm text-gray-500 hover:text-black">
            All Tools
          </Link>
        </div>
      </nav>

      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600 mb-4">
              Free Fitness Tool
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              BMI Calculator
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Calculate your Body Mass Index to understand your weight category and get personalized recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="175"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="70"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none transition-colors"
                  />
                </div>
                <button
                  onClick={calculateBMI}
                  className="w-full py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  Calculate BMI
                </button>
              </div>

              {result && (
                <div className="mt-8 text-center p-6 bg-white rounded-2xl">
                  <p className="text-sm text-gray-500 mb-1">Your BMI</p>
                  <p className="text-4xl font-bold text-black mb-2">{result.bmi}</p>
                  <p className={`text-lg font-medium ${result.color}`}>{result.category}</p>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-4">BMI Categories</h3>
                <div className="space-y-3">
                  {[
                    { range: "< 18.5", label: "Underweight", color: "bg-blue-100 text-blue-700" },
                    { range: "18.5 - 24.9", label: "Normal weight", color: "bg-green-100 text-green-700" },
                    { range: "25 - 29.9", label: "Overweight", color: "bg-yellow-100 text-yellow-700" },
                    { range: "≥ 30", label: "Obese", color: "bg-red-100 text-red-700" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{item.range}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.color}`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-4">Health Tips</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 mt-0.5 text-gray-400" />
                    Maintain a balanced diet rich in vegetables and lean proteins
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 mt-0.5 text-gray-400" />
                    Exercise at least 150 minutes per week
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 text-gray-400" />
                    Consult a doctor before starting any new fitness program
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get a personalized workout plan</h2>
          <p className="text-gray-400 mb-8">
            Based on your BMI and fitness goals, our AI will create a custom training plan just for you.
          </p>
          <Link
            href="/"
            className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Generate Workout Plan
            <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
          </Link>
        </div>
      </section>
    </main>
  );
}
