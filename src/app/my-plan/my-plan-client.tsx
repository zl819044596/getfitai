"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Flame, Dumbbell, CheckCircle, RotateCcw, Timer, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  weight: string;
  notes: string;
}

interface WorkoutPlan {
  title: string;
  duration: string;
  intensity: string;
  difficulty: string;
  calories: string;
  warmup: string[];
  exercises: Exercise[];
  cooldown: string[];
}

interface SavedPlan {
  id: string;
  plan: WorkoutPlan;
  savedAt: string;
  goal: string;
  experience: string;
  duration: number;
  equipment: string;
}

export function MyPlanClient() {
  const searchParams = useSearchParams();
  const [plan, setPlan] = useState<SavedPlan | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const id = searchParams.get("id");
    if (!id) {
      setNotFound(true);
      return;
    }
    try {
      const raw = localStorage.getItem("getfitai_saved_plans");
      const plans: SavedPlan[] = raw ? JSON.parse(raw) : [];
      const found = plans.find((p) => p.id === id);
      if (found) {
        setPlan(found);
      } else {
        setNotFound(true);
      }
    } catch {
      setNotFound(true);
    }
  }, [searchParams]);

  if (notFound) {
    return (
      <main className="min-h-screen bg-[#020617] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-slate-800">
            <Dumbbell className="w-10 h-10 text-orange-500" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Plan Not Found
          </h1>
          <p className="text-lg text-slate-400 mb-8 max-w-md mx-auto">
            This plan was saved in a different browser or has been removed. Generate a new one!
          </p>
          <Link
            href="/tools/workout-generator"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Generate New Plan
          </Link>
        </div>
      </main>
    );
  }

  if (!plan) {
    return (
      <main className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  const { plan: p } = plan;

  return (
    <main className="min-h-screen bg-[#020617] pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4">
        {/* Back link */}
        <Link
          href="/tools/workout-generator"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-orange-400 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Generator
        </Link>

        {/* Header */}
        <div className="bg-orange-500 rounded-2xl p-6 mb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">{p.title}</h1>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-white">
                  <Timer className="w-4 h-4" />
                  {p.duration}
                </span>
                <span className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-white">
                  <Flame className="w-4 h-4" />
                  {p.calories}
                </span>
                <span className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-white">
                  {p.difficulty}
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href).then(() => {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                });
              }}
              className="shrink-0 p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              title={copied ? "Copied!" : "Copy link"}
            >
              <Share2 className={`w-5 h-5 text-white ${copied ? "opacity-60" : ""}`} />
            </button>
          </div>
        </div>

        {/* Warm-up */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-4">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold">W</span>
            Warm-up
          </h2>
          <ul className="space-y-2">
            {p.warmup.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-400">
                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Workout */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-4">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold">M</span>
            Main Workout
          </h2>
          <div className="space-y-3">
            {p.exercises.map((ex, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/30"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-sm font-bold text-white shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white mb-1">{ex.name}</h3>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-400">
                      <span className="bg-slate-700 px-2 py-0.5 rounded-full text-xs">{ex.sets} sets</span>
                      <span className="bg-slate-700 px-2 py-0.5 rounded-full text-xs">{ex.reps} reps</span>
                      <span className="bg-slate-700 px-2 py-0.5 rounded-full text-xs">Rest {ex.rest}</span>
                      {ex.weight && ex.weight !== "BW" && (
                        <span className="bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded-full text-xs">{ex.weight}</span>
                      )}
                    </div>
                    {ex.notes && (
                      <p className="text-xs text-slate-500 mt-1 italic">{ex.notes}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cool-down */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold">C</span>
            Cool-down
          </h2>
          <ul className="space-y-2">
            {p.cooldown.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-400">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center space-y-3">
          <Link
            href="/tools/workout-generator"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-4 text-lg font-bold shadow-xl shadow-orange-500/25 transition-colors"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <RotateCcw className="w-5 h-5" />
            Generate New Plan
          </Link>
        </div>
      </div>
    </main>
  );
}
