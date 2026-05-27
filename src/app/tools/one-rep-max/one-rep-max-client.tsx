"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, TrendingUp, Info } from "lucide-react";

export function OneRepMaxClient() {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [result, setResult] = useState<{
    oneRepMax: number;
    percentages: { percent: number; weight: number }[];
  } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const r = parseFloat(reps);

    if (!w || !r || r < 1 || r > 30) return;

    // Epley formula: 1RM = w * (1 + r/30)
    const oneRepMax = Math.round(w * (1 + r / 30));

    const percentages = [95, 90, 85, 80, 75, 70, 65, 60, 55, 50].map((p) => ({
      percent: p,
      weight: Math.round(oneRepMax * (p / 100)),
    }));

    setResult({ oneRepMax, percentages });
  };

  return (
    <main className="min-h-screen bg-background">
<section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tools
            </Link>
          </div>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/80 text-sm font-medium text-muted-foreground mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>1RM Calculator</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Calculate Your 1RM
            </h1>
            <p className="text-lg text-muted-foreground">
              Estimate your maximum lift based on your current performance.
            </p>
          </div>

          <div className="bg-muted rounded-2xl p-8 mb-8">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Weight Lifted (kg/lbs)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="80"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Reps Performed (1-30)</label>
                <input
                  type="number"
                  value={reps}
                  onChange={(e) => setReps(e.target.value)}
                  min="1"
                  max="30"
                  className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="5"
                />
              </div>
            </div>
            <button
              onClick={calculate}
              className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              Calculate 1RM
            </button>
          </div>

          {result && (
            <div className="space-y-6 mb-8">
              <div className="bg-primary/10 rounded-2xl p-8 text-center">
                <p className="text-sm text-primary mb-2">Estimated One Rep Max</p>
                <p className="text-5xl font-bold text-purple-800">{result.oneRepMax}</p>
                <p className="text-sm text-primary">kg/lbs</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Training Percentages</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {result.percentages.map((p) => (
                    <div key={p.percent} className="bg-muted rounded-xl p-4 text-center">
                      <div className="text-sm text-muted-foreground">{p.percent}%</div>
                      <div className="text-xl font-bold">{p.weight}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="bg-muted rounded-2xl p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              How It Works
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We use the Epley formula: <strong>1RM = Weight × (1 + Reps/30)</strong>. 
              This is one of the most accurate methods for estimating your maximum strength 
              based on sub-maximal performance. For best results, use a weight you can lift 
              for 1-10 reps.
            </p>
          </div>
        </div>
      </section>
</main>
  );
}
