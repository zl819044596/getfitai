"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dumbbell, Timer, Flame, CheckCircle, RotateCcw,
  Share2, Star, Loader2, CalendarRange
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SavedPlan {
  id: string;
  type?: string;
  plan: {
    title: string;
    duration?: string;
    cycle_length?: string | number;
    days_per_week?: number;
    session_duration?: string | number;
    overview?: string;
    progression_notes?: string[];
    weeks?: {
      week: number;
      focus: string;
      days: {
        day: string;
        focus: string;
        intensity?: string;
        warmup?: string[];
        exercises?: { name: string; sets: number | string; reps: string; rest: string; weight?: string; notes?: string }[];
        cooldown?: string[];
      }[];
    }[];
    intensity?: string;
    difficulty?: string;
    calories?: string;
    warmup?: string[];
    exercises?: { name: string; sets: number; reps: string; rest: string; weight?: string; notes?: string }[];
    cooldown?: string[];
  };
  savedAt: string;
}

export function MyPlanContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [plan, setPlan] = useState<SavedPlan | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    (async () => {
      // Try server first
      try {
        const res = await fetch(`/api/get-plan?id=${encodeURIComponent(id)}`);
        if (res.ok) {
          const data = await res.json() as SavedPlan;
          setPlan(data);
          setLoading(false);
          return;
        }
      } catch {
        // Server unreachable, fall through
      }

      // Fallback to localStorage
      try {
        const raw = localStorage.getItem("getfitai_saved_plans");
        if (raw) {
          const plans: SavedPlan[] = JSON.parse(raw);
          const found = plans.find(p => p.id === id);
          if (found) {
            setPlan(found);
            setLoading(false);
            return;
          }
        }
      } catch {}

      // Not found anywhere
      setLoadError("Plan not found. It may have expired or the link is invalid.");
      setLoading(false);
    })();
  }, [id]);

  const toggleComplete = (index: number) => {
    setCompletedExercises(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-32 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-orange-400" />
      </div>
    );
  }

  if (!id) {
    return (
      <div className="min-h-screen bg-background pt-32">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">No plan selected</h1>
          <p className="text-slate-400 mb-6">Select a plan from your saved plans.</p>
          <Link href="/my-plans">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl">
              View Saved Plans
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="min-h-screen bg-background pt-32">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <Dumbbell className="w-16 h-16 mx-auto text-muted-foreground/30 mb-6" />
          <h1 className="text-2xl font-bold text-white mb-4">{loadError || "Plan not found"}</h1>
          <p className="text-slate-400 mb-6">This plan may have been deleted or the link is invalid.</p>
          <Link href="/my-plans">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl">
              View Saved Plans
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const p = plan.plan;
  const isCycle = Array.isArray(p.weeks) && p.weeks.length > 0;

  if (isCycle) {
    const cycleLength = String(p.cycle_length ?? "4").includes("week")
      ? String(p.cycle_length)
      : `${p.cycle_length ?? 4} weeks`;
    const sessionLength = String(p.session_duration ?? "").match(/min/i)
      ? String(p.session_duration)
      : `${p.session_duration ?? ""} min`;
    return (
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 mb-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-white mb-2">{p.title}</h1>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-white">
                    <CalendarRange className="w-4 h-4" />{cycleLength}
                  </span>
                  {p.session_duration != null && sessionLength && (
                    <span className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-white">
                      <Timer className="w-4 h-4" />{sessionLength}
                    </span>
                  )}
                  {p.days_per_week != null && (
                    <span className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-white">
                      <Dumbbell className="w-4 h-4" />{p.days_per_week}× / week
                    </span>
                  )}
                </div>
              </div>
              <Link
                href="/my-plans"
                className="shrink-0 p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                title="Back to saved plans"
              >
                <RotateCcw className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {p.overview && (
            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-6">
              <p className="leading-7 text-slate-300">{p.overview}</p>
            </div>
          )}

          {/* Weeks */}
          <div className="space-y-5 mb-6">
            {p.weeks?.map((week) => (
              <div key={week.week} className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-700/50 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold">W{week.week}</span>
                  <div>
                    <h4 className="font-semibold text-white">Week {week.week}</h4>
                    {week.focus && <p className="text-sm text-slate-400">{week.focus}</p>}
                  </div>
                </div>
                <div className="grid gap-3 p-4 md:grid-cols-2">
                  {week.days.map((day, dayIndex) => (
                    <details key={dayIndex} className="rounded-xl border border-slate-700/70 bg-slate-950/50" open={week.days.length === 1}>
                      <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3 text-sm font-medium text-white">
                        <span>{day.day}{day.focus ? ` · ${day.focus}` : ""}</span>
                        {day.intensity && (
                          <span className="rounded-full bg-orange-500/15 px-2.5 py-0.5 text-xs font-medium text-orange-300">{day.intensity}</span>
                        )}
                      </summary>
                      <div className="border-t border-slate-700/70 px-4 py-3 space-y-3">
                        {(day.warmup?.length ?? 0) > 0 && (
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">Warm-up</p>
                            <ul className="space-y-1">
                              {day.warmup!.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />{item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {(day.exercises?.length ?? 0) > 0 && (
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">Exercises</p>
                            <div className="space-y-2">
                              {day.exercises!.map((ex, i) => (
                                <div key={i} className="rounded-lg border border-slate-700/60 bg-slate-900/60 p-3">
                                  <div className="flex flex-wrap items-start justify-between gap-2">
                                    <span className="text-sm font-medium text-white">{ex.name}</span>
                                    <span className="text-xs text-slate-400">{ex.sets} sets · {ex.reps} · {ex.rest}{ex.weight ? ` · ${ex.weight}` : ""}</span>
                                  </div>
                                  {ex.notes && <p className="mt-1.5 text-xs text-slate-500">{ex.notes}</p>}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        {(day.cooldown?.length ?? 0) > 0 && (
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">Cool-down</p>
                            <ul className="space-y-1">
                              {day.cooldown!.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                                  <CheckCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />{item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Progression notes */}
          {(p.progression_notes?.length ?? 0) > 0 && (
            <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">How the program progresses</h4>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {p.progression_notes!.map((note, i) => (
                  <div key={i} className="rounded-xl bg-slate-950/50 p-4">
                    <span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-500/15 text-sm font-bold text-orange-300">{i + 1}</span>
                    <p className="text-sm font-semibold text-slate-200">Week {i + 1}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-center mt-8">
            <Link
              href="/my-plans"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm transition-colors"
            >
              ← Back to Saved Plans
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-orange-500 rounded-2xl p-6 mb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">{p.title}</h1>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-white">
                  <Timer className="w-4 h-4" />{p.duration}
                </span>
                <span className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-white">
                  <Flame className="w-4 h-4" />{p.calories}
                </span>
                <span className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-white">
                  {p.difficulty}
                </span>
              </div>
            </div>
            <Link
              href="/my-plans"
              className="shrink-0 p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              title="Back to saved plans"
            >
              <RotateCcw className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>

        {/* Warm-up */}
        {(p.warmup?.length ?? 0) > 0 && (
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-4">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold">W</span>
              Warm-up
            </h4>
            <ul className="space-y-2">
              {p.warmup?.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Exercises */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-4">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold">M</span>
            Main Workout
          </h4>
          <div className="space-y-4">
            {p.exercises?.map((ex, i) => {
              const done = completedExercises.has(i);
              return (
                <div
                  key={i}
                  onClick={() => toggleComplete(i)}
                  className={cn(
                    "p-4 rounded-xl border transition-all cursor-pointer",
                    done
                      ? "bg-green-500/10 border-green-500/30"
                      : "bg-slate-800/50 border-transparent hover:bg-slate-800"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-colors",
                      done ? "bg-green-500 text-white" : "bg-orange-500 text-white"
                    )}>
                      {done ? <CheckCircle className="w-5 h-5" /> : i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <span className={cn("font-medium text-white", done && "line-through text-green-400")}>
                          {ex.name}
                        </span>
                        <span className="text-sm text-slate-400 shrink-0">
                          {ex.weight && ex.weight !== "BW" && `${ex.weight} · `}{ex.sets}×{ex.reps}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                        <span>Rest: {ex.rest}</span>
                        {ex.weight === "BW" && <span className="text-orange-400/60">Bodyweight</span>}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cool-down */}
        {(p.cooldown?.length ?? 0) > 0 && (
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold">C</span>
              Cool-down
            </h4>
            <ul className="space-y-2">
              {p.cooldown?.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Back link */}
        <div className="text-center mt-8">
          <Link
            href="/my-plans"
            className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 text-sm transition-colors"
          >
            ← Back to Saved Plans
          </Link>
        </div>
      </div>
    </section>
  );
}
