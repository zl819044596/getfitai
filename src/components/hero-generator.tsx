"use client";

import { useState, useRef, useEffect } from "react";
import {
  Sparkles, Timer, Flame, Loader2, CheckCircle, RotateCcw,
  Dumbbell, Star, Share2
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useAuth } from "@/components/auth-context";
import { trackGeneratePlanStarted, trackPlanGenerated } from "@/lib/analytics";

const goals = [
  { id: "muscle", label: "💪 Build Muscle" },
  { id: "fatloss", label: "🔥 Lose Fat" },
  { id: "strength", label: "⚡ Get Stronger" },
  { id: "endurance", label: "🏃 Endurance" },
];

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

export function HeroGenerator() {
  const { quota, isPro } = useAuth();
  const [goal, setGoal] = useState("");
  const [duration, setDuration] = useState(30);
  const [showMore, setShowMore] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("beginner");
  const [selectedEquipment, setSelectedEquipment] = useState("home");
  const [selectedArea, setSelectedArea] = useState("full");

  const [plan, setPlan] = useState<WorkoutPlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [quotaExceeded, setQuotaExceeded] = useState(false);

  const levels = [
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
  ];
  const equipments = [
    { id: "home", label: "No Equipment" },
    { id: "dumbbells", label: "Dumbbells" },
    { id: "gym", label: "Full Gym" },
  ];

  async function handleGenerate() {
    if (!goal) return;
    if (!isPro && quota?.remaining === 0) {
      setQuotaExceeded(true);
      return;
    }
    setQuotaExceeded(false);
    setLoading(true);
    setError("");

    trackGeneratePlanStarted({
      goal,
      experience: selectedLevel,
      duration,
      equipment: selectedEquipment,
    });

    try {
      const res = await fetch(
        "/api/generate-plan",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            goal,
            experience: selectedLevel,
            duration,
            equipment: selectedEquipment,
            targetArea: selectedArea,
          }),
        }
      );

      if (res.status === 402) {
        setQuotaExceeded(true);
        return;
      }

      if (!res.ok) {
        const errData = await res.json().catch(() => ({})) as any;
        throw new Error(errData.error || "Failed to generate");
      }

      const parsed: WorkoutPlan = await res.json();
      setPlan(parsed);
      trackPlanGenerated({
        goal,
        experience: selectedLevel,
        duration,
        equipment: selectedEquipment,
        exercise_count: parsed.exercises?.length || 0,
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setPlan(null);
    setError("");
  }

  // Show plan result
  if (plan) {
    return (
      <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden max-w-md mx-auto shadow-2xl">
        {/* Header */}
        <div className="bg-orange-500 p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="font-bold text-white text-sm truncate">{plan.title}</h3>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                <span className="inline-flex items-center gap-0.5 bg-white/20 px-2 py-0.5 rounded-full text-[10px] text-white">
                  <Timer className="w-3 h-3" />
                  {plan.duration}
                </span>
                <span className="inline-flex items-center gap-0.5 bg-white/20 px-2 py-0.5 rounded-full text-[10px] text-white">
                  <Flame className="w-3 h-3" />
                  {plan.calories}
                </span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] text-white">
                  {plan.difficulty}
                </span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="shrink-0 p-1.5 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              title="Generate new plan"
            >
              <RotateCcw className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>

        {/* Exercises preview */}
        <div className="p-4">
          <p className="text-xs text-slate-400 font-medium mb-2 uppercase tracking-wider">Exercises</p>
          <div className="space-y-1.5">
            {plan.exercises.slice(0, 5).map((ex, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/50 rounded-lg px-3 py-2"
              >
                <span className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                  {i + 1}
                </span>
                <span className="flex-1 truncate">{ex.name}</span>
                <span className="text-slate-500 shrink-0">
                  {ex.sets}&times;{ex.reps}
                </span>
              </div>
            ))}
            {plan.exercises.length > 5 && (
              <p className="text-[10px] text-slate-500 text-center">+{plan.exercises.length - 5} more exercises</p>
            )}
          </div>

          {/* Warmup / Cooldown */}
          {plan.warmup.length > 0 && (
            <details className="mt-3 group">
              <summary className="text-xs text-slate-500 cursor-pointer hover:text-slate-400 transition-colors">
                Warm-up ({plan.warmup.length})
              </summary>
              <ul className="mt-1.5 space-y-0.5">
                {plan.warmup.map((item, i) => (
                  <li key={i} className="text-[11px] text-slate-400 flex items-start gap-1.5">
                    <CheckCircle className="w-3 h-3 text-orange-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          )}
          {plan.cooldown.length > 0 && (
            <details className="mt-1.5 group">
              <summary className="text-xs text-slate-500 cursor-pointer hover:text-slate-400 transition-colors">
                Cool-down ({plan.cooldown.length})
              </summary>
              <ul className="mt-1.5 space-y-0.5">
                {plan.cooldown.map((item, i) => (
                  <li key={i} className="text-[11px] text-slate-400 flex items-start gap-1.5">
                    <CheckCircle className="w-3 h-3 text-green-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="px-4 pb-4">
          <button
            onClick={handleReset}
            className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-xl transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5 inline mr-1.5" />
            Generate New Plan
          </button>
          <p className="text-[10px] text-slate-600 text-center mt-2">
            Free &bull; AI-powered &bull; Sign in to save
          </p>
        </div>
      </div>
    );
  }

  // Show form
  return (
    <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-5 max-w-md mx-auto shadow-2xl">
      <h3 className="text-lg font-bold text-white mb-1">Create Your Plan</h3>
      <p className="text-xs text-slate-400 mb-4">Pick your goal. Get a plan in seconds.</p>

      {/* Goal selection */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {goals.map((g) => (
          <button
            key={g.id}
            onClick={() => setGoal(g.id)}
            className={cn(
              "px-3 py-2.5 rounded-xl border text-xs font-medium text-left transition-all",
              goal === g.id
                ? "border-orange-500 bg-orange-500/10 text-orange-300"
                : "border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-600"
            )}
          >
            {g.label}
          </button>
        ))}
      </div>

      {/* Duration slider */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="text-slate-400">Duration</span>
          <span className="text-orange-400 font-bold">{duration} min</span>
        </div>
        <input
          type="range"
          min={15}
          max={90}
          step={5}
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="w-full h-1.5 bg-slate-700 rounded-full appearance-none cursor-pointer accent-orange-500"
        />
        <div className="flex justify-between text-[10px] text-slate-600 mt-0.5">
          <span>15m</span>
          <span>90m</span>
        </div>
      </div>

      {/* More options toggle */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="text-xs text-slate-500 hover:text-slate-400 mb-3 transition-colors"
      >
        {showMore ? "▲ Hide options" : "▼ More options"}
      </button>

      {showMore && (
        <div className="space-y-3 mb-4 animate-in slide-in-from-top-2">
          {/* Level */}
          <div>
            <p className="text-xs text-slate-400 mb-1.5">Experience</p>
            <div className="flex gap-1.5">
              {levels.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setSelectedLevel(l.id)}
                  className={cn(
                    "flex-1 px-2 py-1.5 rounded-lg border text-[11px] font-medium transition-all",
                    selectedLevel === l.id
                      ? "border-orange-500 bg-orange-500/10 text-orange-300"
                      : "border-slate-700 bg-slate-800/50 text-slate-400 hover:border-slate-600"
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
          {/* Equipment */}
          <div>
            <p className="text-xs text-slate-400 mb-1.5">Equipment</p>
            <div className="flex gap-1.5">
              {equipments.map((e) => (
                <button
                  key={e.id}
                  onClick={() => setSelectedEquipment(e.id)}
                  className={cn(
                    "flex-1 px-2 py-1.5 rounded-lg border text-[11px] font-medium transition-all",
                    selectedEquipment === e.id
                      ? "border-orange-500 bg-orange-500/10 text-orange-300"
                      : "border-slate-700 bg-slate-800/50 text-slate-400 hover:border-slate-600"
                  )}
                >
                  {e.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Generate button */}
      <button
        onClick={handleGenerate}
        disabled={!goal || loading || quotaExceeded}
        className={cn(
          "w-full py-3 rounded-xl text-sm font-bold transition-all",
          goal && !loading && !quotaExceeded
            ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25"
            : "bg-slate-800 text-slate-500 cursor-not-allowed"
        )}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 inline animate-spin mr-1.5" />
            Generating...
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4 inline mr-1.5" />
            Generate My Plan
          </>
        )}
      </button>

      {error && (
        <div className="mt-3 p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] text-center">
          {error}
        </div>
      )}

      {quotaExceeded && (
        <div className="mt-3 rounded-lg border border-orange-500/30 bg-orange-500/10 p-3 text-center">
          <p className="text-[11px] font-semibold text-orange-100">Free limit reached — Upgrade to Pro</p>
          <Link href="/pricing" className="mt-0.5 inline-block text-[11px] font-bold text-orange-300 hover:text-orange-200">Get unlimited workout plans →</Link>
        </div>
      )}

      <p className="text-[10px] text-slate-600 text-center mt-3">
        Free &bull; AI personalized &bull; Sign in to save
      </p>
    </div>
  );
}
