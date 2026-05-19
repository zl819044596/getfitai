"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Dumbbell, Info } from "lucide-react";
import { Nav } from "@/components/nav";

const STANDARD_PLATES = [20, 15, 10, 5, 2.5, 1.25, 0.5];
const BUMPER_PLATES = [25, 20, 15, 10, 5, 2.5];

export function PlateCalculatorClient() {
  const [targetWeight, setTargetWeight] = useState("");
  const [barWeight, setBarWeight] = useState("20");
  const [plateType, setPlateType] = useState("standard");
  const [result, setResult] = useState<{
    perSide: number;
    plates: { weight: number; count: number }[];
    remainder: number;
  } | null>(null);

  const calculate = () => {
    const target = parseFloat(targetWeight);
    const bar = parseFloat(barWeight);

    if (!target || target <= bar) return;

    const plates = plateType === "standard" ? STANDARD_PLATES : BUMPER_PLATES;
    let remaining = (target - bar) / 2;
    const breakdown: { weight: number; count: number }[] = [];

    for (const plate of plates) {
      const count = Math.floor(remaining / plate);
      if (count > 0) {
        breakdown.push({ weight: plate, count });
        remaining -= count * plate;
      }
    }

    setResult({
      perSide: (target - bar) / 2,
      plates: breakdown,
      remainder: Math.round(remaining * 100) / 100,
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
              <Dumbbell className="w-4 h-4" />
              <span>Plate Calculator</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Calculate Your Plates
            </h1>
            <p className="text-lg text-gray-500">
              Figure out which plates to load for your target weight.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Target Weight (kg)</label>
                <input
                  type="number"
                  value={targetWeight}
                  onChange={(e) => setTargetWeight(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bar Weight (kg)</label>
                <select
                  value={barWeight}
                  onChange={(e) => setBarWeight(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black bg-white"
                >
                  <option value="20">Olympic Bar (20kg)</option>
                  <option value="15">Women&apos;s Bar (15kg)</option>
                  <option value="10">Training Bar (10kg)</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Plate Type</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setPlateType("standard")}
                  className={`flex-1 py-3 rounded-xl font-medium transition-colors ${
                    plateType === "standard" ? "bg-black text-white" : "bg-white border border-gray-200"
                  }`}
                >
                  Standard
                </button>
                <button
                  onClick={() => setPlateType("bumper")}
                  className={`flex-1 py-3 rounded-xl font-medium transition-colors ${
                    plateType === "bumper" ? "bg-black text-white" : "bg-white border border-gray-200"
                  }`}
                >
                  Bumper
                </button>
              </div>
            </div>

            <button
              onClick={calculate}
              className="w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Calculate Plates
            </button>
          </div>

          {result && (
            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 rounded-2xl p-8 text-center">
                <p className="text-sm text-blue-600 mb-2">Weight Per Side</p>
                <p className="text-5xl font-bold text-blue-800">{result.perSide}kg</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Plate Breakdown (per side)</h3>
                {result.plates.length > 0 ? (
                  <div className="space-y-3">
                    {result.plates.map((p) => (
                      <div key={p.weight} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                        <span className="font-medium">{p.weight}kg plate</span>
                        <span className="text-xl font-bold">× {p.count}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No plates needed.</p>
                )}
                {result.remainder > 0 && (
                  <p className="mt-4 text-sm text-yellow-600">
                    Remainder: {result.remainder}kg (adjust with smaller plates or micro plates)
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              How It Works
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Enter your target weight and bar type. We calculate the optimal plate 
              combination per side using standard Olympic plate sizes. Standard plates 
              include 20, 15, 10, 5, 2.5, 1.25, 0.5kg. Bumper plates include 25, 20, 15, 10, 5, 2.5kg.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
