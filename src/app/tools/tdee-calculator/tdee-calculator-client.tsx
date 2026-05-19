"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Flame, Info } from "lucide-react";
import { Nav } from "@/components/nav";

export function TDEECalculatorClient() {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("1.55");
  const [result, setResult] = useState<{
    bmr: number;
    tdee: number;
    goals: { label: string; calories: number }[];
  } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const act = parseFloat(activity);

    if (!w || !h || !a) return;

    // Mifflin-St Jeor Equation
    let bmr;
    if (gender === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    const tdee = Math.round(bmr * act);

    setResult({
      bmr: Math.round(bmr),
      tdee,
      goals: [
        { label: "Aggressive Weight Loss", calories: tdee - 750 },
        { label: "Moderate Weight Loss", calories: tdee - 500 },
        { label: "Mild Weight Loss", calories: tdee - 250 },
        { label: "Maintain Weight", calories: tdee },
        { label: "Mild Weight Gain", calories: tdee + 250 },
        { label: "Moderate Weight Gain", calories: tdee + 500 },
      ],
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
              <Flame className="w-4 h-4" />
              <span>Calorie Calculator</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Calculate Your Daily Calories
            </h1>
            <p className="text-lg text-gray-500">
              Calculate your Total Daily Energy Expenditure and daily calorie needs.
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
                <label className="block text-sm font-medium mb-2">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="25"
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
                <label className="block text-sm font-medium mb-2">Activity Level</label>
                <select
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black bg-white"
                >
                  <option value="1.2">Sedentary (little to no exercise)</option>
                  <option value="1.375">Lightly Active (1-3 days/week)</option>
                  <option value="1.55">Moderately Active (3-5 days/week)</option>
                  <option value="1.725">Very Active (6-7 days/week)</option>
                  <option value="1.9">Super Active (physical job + training)</option>
                </select>
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Calculate Calories
            </button>
          </div>

          {result && (
            <div className="space-y-6 mb-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-orange-50 rounded-2xl p-8 text-center">
                  <p className="text-sm text-orange-600 mb-2">BMR</p>
                  <p className="text-4xl font-bold text-orange-800">{result.bmr}</p>
                  <p className="text-sm text-orange-500">calories/day</p>
                </div>
                <div className="bg-orange-50 rounded-2xl p-8 text-center">
                  <p className="text-sm text-orange-600 mb-2">TDEE</p>
                  <p className="text-4xl font-bold text-orange-800">{result.tdee}</p>
                  <p className="text-sm text-orange-500">calories/day</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Daily Calorie Targets</h3>
                <div className="space-y-3">
                  {result.goals.map((goal) => (
                    <div key={goal.label} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                      <span className="font-medium">{goal.label}</span>
                      <span className="text-xl font-bold">{goal.calories} cal</span>
                    </div>
                  ))}
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
              We use the Mifflin-St Jeor equation to calculate your Basal Metabolic Rate (BMR), 
              then multiply by your activity level to get your Total Daily Energy Expenditure (TDEE). 
              This gives you a personalized calorie target based on your goal.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
