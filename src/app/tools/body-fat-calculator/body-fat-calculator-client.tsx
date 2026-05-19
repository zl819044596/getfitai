"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Activity, Info } from "lucide-react";
import { Nav } from "@/components/nav";

export function BodyFatCalculatorClient() {
  const [gender, setGender] = useState("male");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [hip, setHip] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<{
    bodyFat: number;
    category: string;
    leanMass: number;
    fatMass: number;
  } | null>(null);

  const calculate = () => {
    const w = parseFloat(waist);
    const n = parseFloat(neck);
    const h = parseFloat(height);
    const hp = parseFloat(hip) || 0;

    if (!w || !n || !h) return;

    let bodyFat;
    if (gender === "male") {
      bodyFat =
        495 /
          (1.0324 -
            0.19077 * Math.log10(w - n) +
            0.15456 * Math.log10(h)) -
        450;
    } else {
      bodyFat =
        495 /
          (1.29579 -
            0.35004 * Math.log10(w + hp - n) +
            0.221 * Math.log10(h)) -
        450;
    }

    bodyFat = Math.max(2, Math.min(60, bodyFat));

    let category;
    if (gender === "male") {
      if (bodyFat < 6) category = "Essential Fat";
      else if (bodyFat < 14) category = "Athletic";
      else if (bodyFat < 18) category = "Fitness";
      else if (bodyFat < 25) category = "Average";
      else category = "Above Average";
    } else {
      if (bodyFat < 14) category = "Essential Fat";
      else if (bodyFat < 21) category = "Athletic";
      else if (bodyFat < 25) category = "Fitness";
      else if (bodyFat < 32) category = "Average";
      else category = "Above Average";
    }

    const weight = 75;
    const fatMass = Math.round(weight * (bodyFat / 100));
    const leanMass = Math.round(weight - fatMass);

    setResult({
      bodyFat: Math.round(bodyFat * 10) / 10,
      category,
      leanMass,
      fatMass,
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tools
            </Link>
          </div>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-600 mb-6">
              <Activity className="w-4 h-4" />
              <span>Body Fat Calculator</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Calculate Your Body Fat
            </h1>
            <p className="text-lg text-gray-500">
              Estimate your body fat percentage using the US Navy method.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Gender</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setGender("male")}
                  className={`flex-1 py-3 rounded-xl font-medium transition-colors ${
                    gender === "male" ? "bg-black text-white" : "bg-white border border-gray-200"
                  }`}
                >
                  Male
                </button>
                <button
                  onClick={() => setGender("female")}
                  className={`flex-1 py-3 rounded-xl font-medium transition-colors ${
                    gender === "female" ? "bg-black text-white" : "bg-white border border-gray-200"
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Waist (cm)</label>
                <input
                  type="number"
                  value={waist}
                  onChange={(e) => setWaist(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="80"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Neck (cm)</label>
                <input
                  type="number"
                  value={neck}
                  onChange={(e) => setNeck(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="38"
                />
              </div>
              {gender === "female" && (
                <div>
                  <label className="block text-sm font-medium mb-2">Hip (cm)</label>
                  <input
                    type="number"
                    value={hip}
                    onChange={(e) => setHip(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="95"
                  />
                </div>
              )}
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
            </div>

            <button
              onClick={calculate}
              className="w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Calculate Body Fat
            </button>
          </div>

          {result && (
            <div className="space-y-6 mb-8">
              <div className="bg-teal-50 rounded-2xl p-8 text-center">
                <p className="text-sm text-teal-600 mb-2">Body Fat Percentage</p>
                <p className="text-5xl font-bold text-teal-800">{result.bodyFat}%</p>
                <p className="text-sm text-teal-500 mt-2">{result.category}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-sm text-gray-500 mb-1">Lean Mass</div>
                  <div className="text-2xl font-bold">{result.leanMass}kg</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-sm text-gray-500 mb-1">Fat Mass</div>
                  <div className="text-2xl font-bold">{result.fatMass}kg</div>
                </div>
              </div>
            </div>
          )}

          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              How It Works
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We use the US Navy method which estimates body fat based on neck, waist, 
              and hip (for women) circumference measurements. This is a reliable field 
              method that does not require specialized equipment.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
