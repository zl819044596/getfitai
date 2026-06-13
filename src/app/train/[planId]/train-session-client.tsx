"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  Play,
  Pause,
  SkipForward,
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  Dumbbell,
  Clock,
  Volume2,
  VolumeX,
} from "lucide-react";

/* ─── Exercise Metadata ─── */

interface ExerciseMeta {
  name: string;
  displayName: string;
  hasVideo: boolean;
}

const allExercises: Record<string, ExerciseMeta> = {
  pushups: { name: "pushups", displayName: "Push-Ups", hasVideo: true },
  squats: { name: "squats", displayName: "Squats", hasVideo: true },
  lunges: { name: "lunges", displayName: "Lunges", hasVideo: true },
  plank: { name: "plank", displayName: "Plank Hold", hasVideo: true },
  burpees: { name: "burpees", displayName: "Burpees", hasVideo: true },
  mountain_climbers: {
    name: "mountain_climbers",
    displayName: "Mountain Climbers",
    hasVideo: true,
  },
  jumping_jacks: {
    name: "jumping_jacks",
    displayName: "Jumping Jacks",
    hasVideo: true,
  },
  high_knees: {
    name: "high_knees",
    displayName: "High Knees",
    hasVideo: true,
  },
  glute_bridges: {
    name: "glute_bridges",
    displayName: "Glute Bridges",
    hasVideo: true,
  },
  supermans: { name: "supermans", displayName: "Supermans", hasVideo: true },
  squat_jumps: {
    name: "squat_jumps",
    displayName: "Squat Jumps",
    hasVideo: false,
  },
};

/* ─── Step Types ─── */

type Step =
  | { type: "exercise"; ex: ExerciseMeta; duration: number; phase: string }
  | { type: "rest"; duration: number };

/* ─── Workout Plans ─── */

interface WorkoutPlan {
  id: string;
  name: string;
  totalMinutes: number;
  steps: Step[];
}

const workoutPlans: WorkoutPlan[] = [
  {
    id: "full-body-burn",
    name: "Full Body Burn",
    totalMinutes: 15,
    steps: [
      { type: "exercise", ex: allExercises.jumping_jacks, duration: 30, phase: "warmup" },
      { type: "rest", duration: 5 },
      { type: "exercise", ex: allExercises.high_knees, duration: 30, phase: "warmup" },
      { type: "rest", duration: 10 },
      { type: "exercise", ex: allExercises.squats, duration: 45, phase: "main" },
      { type: "rest", duration: 20 },
      { type: "exercise", ex: allExercises.pushups, duration: 45, phase: "main" },
      { type: "rest", duration: 20 },
      { type: "exercise", ex: allExercises.lunges, duration: 45, phase: "main" },
      { type: "rest", duration: 20 },
      { type: "exercise", ex: allExercises.mountain_climbers, duration: 45, phase: "main" },
      { type: "rest", duration: 20 },
      { type: "exercise", ex: allExercises.glute_bridges, duration: 45, phase: "main" },
      { type: "rest", duration: 20 },
      { type: "exercise", ex: allExercises.supermans, duration: 45, phase: "main" },
      { type: "rest", duration: 10 },
      { type: "exercise", ex: allExercises.plank, duration: 30, phase: "finisher" },
    ],
  },
  {
    id: "core-crusher",
    name: "Core Crusher",
    totalMinutes: 10,
    steps: [
      { type: "exercise", ex: allExercises.glute_bridges, duration: 30, phase: "warmup" },
      { type: "rest", duration: 5 },
      { type: "exercise", ex: allExercises.supermans, duration: 30, phase: "warmup" },
      { type: "rest", duration: 10 },
      { type: "exercise", ex: allExercises.plank, duration: 45, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.mountain_climbers, duration: 45, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.lunges, duration: 45, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.squats, duration: 45, phase: "main" },
      { type: "rest", duration: 10 },
      { type: "exercise", ex: allExercises.plank, duration: 30, phase: "finisher" },
    ],
  },
  {
    id: "quick-cardio",
    name: "Quick Cardio",
    totalMinutes: 5,
    steps: [
      { type: "exercise", ex: allExercises.jumping_jacks, duration: 40, phase: "main" },
      { type: "rest", duration: 10 },
      { type: "exercise", ex: allExercises.high_knees, duration: 40, phase: "main" },
      { type: "rest", duration: 10 },
      { type: "exercise", ex: allExercises.burpees, duration: 30, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.mountain_climbers, duration: 40, phase: "main" },
      { type: "rest", duration: 10 },
      { type: "exercise", ex: allExercises.squat_jumps, duration: 30, phase: "main" },
    ],
  },
];

/* ─── Helpers ─── */

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function playBeep() {
  try {
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 880;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
  } catch {
    // Audio not available
  }
}

type AppStatus = "ready" | "exercise" | "rest" | "next-up" | "complete";

/* ─── Component ─── */

export function TrainSession() {
  const params = useParams();
  const planId = params.planId as string;

  const plan = workoutPlans.find((p) => p.id === planId);

  const videoRef = useRef<HTMLVideoElement>(null);
  const nextUpTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [status, setStatus] = useState<AppStatus>("ready");
  const [isPaused, setIsPaused] = useState(false);
  const [muted, setMuted] = useState(false);
  const [elapsedExercises, setElapsedExercises] = useState(0);

  const totalExercises = plan
    ? plan.steps.filter((s) => s.type === "exercise").length
    : 0;

  // Reset when plan changes
  useEffect(() => {
    setCurrentStepIdx(0);
    setTimeRemaining(0);
    setStatus("ready");
    setIsPaused(false);
    setMuted(false);
    setElapsedExercises(0);
  }, [planId]);

  // Countdown timer
  useEffect(() => {
    if (status !== "exercise" && status !== "rest") return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [status, currentStepIdx]);

  // Handle step transitions when timer hits 0
  const advanceToNext = useCallback(() => {
    if (nextUpTimerRef.current) {
      clearTimeout(nextUpTimerRef.current);
      nextUpTimerRef.current = null;
    }
    if (!plan) return;

    const nextIdx = currentStepIdx + 1;
    if (nextIdx >= plan.steps.length) {
      setStatus("complete");
      saveToLocalStorage(plan.name, elapsedExercises, plan.totalMinutes);
      return;
    }

    const nextStep = plan.steps[nextIdx];
    setCurrentStepIdx(nextIdx);
    setIsPaused(false);

    if (nextStep.type === "exercise") {
      setTimeRemaining(nextStep.duration);
      setStatus("exercise");
    } else {
      setTimeRemaining(nextStep.duration);
      setStatus("rest");
    }
  }, [currentStepIdx, plan, elapsedExercises]);

  useEffect(() => {
    if (timeRemaining > 0) return;
    if (status === "ready" || status === "complete") return;

    const step = plan?.steps[currentStepIdx];
    if (!step) return;

    if (status === "exercise") {
      playBeep();
      setElapsedExercises((prev) => prev + 1);
      setStatus("next-up");
      nextUpTimerRef.current = setTimeout(() => {
        advanceToNext();
      }, 3000);
    } else if (status === "rest") {
      advanceToNext();
    }
  }, [timeRemaining]);

  useEffect(() => {
    return () => {
      if (nextUpTimerRef.current) clearTimeout(nextUpTimerRef.current);
    };
  }, []);

  // Control video playback
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (status === "exercise" && !isPaused) {
      vid.currentTime = 0;
      vid.play().catch(() => {});
    } else {
      vid.pause();
    }
  }, [status, isPaused, currentStepIdx]);

  const handleStart = useCallback(() => {
    if (!plan) return;
    const firstStep = plan.steps[0];
    if (firstStep.type === "exercise") {
      setTimeRemaining(firstStep.duration);
      setStatus("exercise");
      setIsPaused(false);
    }
  }, [plan]);

  const handleSkip = useCallback(() => {
    if (nextUpTimerRef.current) {
      clearTimeout(nextUpTimerRef.current);
      nextUpTimerRef.current = null;
    }
    const step = plan?.steps[currentStepIdx];
    if (!step) return;

    if (step.type === "exercise" && status === "exercise") {
      const nextIdx = currentStepIdx + 1;
      if (nextIdx >= plan.steps.length) {
        setStatus("complete");
        saveToLocalStorage(plan.name, elapsedExercises + 1, plan.totalMinutes);
        return;
      }
      const nextStep = plan.steps[nextIdx];
      setCurrentStepIdx(nextIdx);
      setElapsedExercises((prev) => prev + 1);
      setIsPaused(false);
      if (nextStep.type === "exercise") {
        setTimeRemaining(nextStep.duration);
        setStatus("exercise");
      } else {
        setTimeRemaining(nextStep.duration);
        setStatus("rest");
      }
    } else if (step.type === "rest") {
      advanceToNext();
    } else if (status === "next-up") {
      advanceToNext();
    }
  }, [currentStepIdx, plan, status, elapsedExercises, advanceToNext]);

  const handleTogglePause = useCallback(() => {
    setIsPaused((p) => !p);
  }, []);

  const handleRestart = useCallback(() => {
    setCurrentStepIdx(0);
    setTimeRemaining(0);
    setStatus("ready");
    setIsPaused(false);
    setElapsedExercises(0);
    if (nextUpTimerRef.current) {
      clearTimeout(nextUpTimerRef.current);
      nextUpTimerRef.current = null;
    }
  }, []);

  const currentStep = plan?.steps[currentStepIdx];
  const inExerciseView = status === "exercise" && currentStep?.type === "exercise";

  const progress =
    totalExercises > 0
      ? Math.min((elapsedExercises / totalExercises) * 100, 100)
      : 0;

  /* ────── NOT FOUND ────── */
  if (!plan) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Workout Not Found</h1>
          <p className="text-muted-foreground mb-6">The workout plan you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/train"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Workouts
          </Link>
        </div>
      </main>
    );
  }

  /* ────── READY STATE ────── */
  if (status === "ready") {
    const exerciseSteps = plan.steps.filter((s) => s.type === "exercise") as {
      type: "exercise";
      ex: ExerciseMeta;
      duration: number;
      phase: string;
    }[];

    return (
      <main className="min-h-screen bg-background">
        <div className="max-w-lg mx-auto px-4 pt-20 pb-12">
          <Link
            href="/train"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Plans
          </Link>
          <div className="bg-muted rounded-2xl p-8 border border-border text-center">
            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
              <Dumbbell className="w-8 h-8 text-orange-400" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{plan.name}</h1>
            <p className="text-muted-foreground text-sm mb-6">
              {plan.totalMinutes} min &middot; {totalExercises} exercises
            </p>
            <div className="text-left mb-8">
              {(["warmup", "main", "finisher"] as const).map((phase) => {
                const phaseExercises = exerciseSteps.filter((s) => s.phase === phase);
                if (phaseExercises.length === 0) return null;
                return (
                  <div key={phase} className="mb-4">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      {phase === "warmup" ? "Warm Up" : phase === "main" ? "Main Set" : "Finisher"}
                    </h3>
                    <ul className="space-y-1">
                      {phaseExercises.map((s, i) => (
                        <li key={i} className="flex items-center justify-between text-sm">
                          <span className="text-foreground">{s.ex.displayName}</span>
                          <span className="text-muted-foreground">{s.duration}s</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            <button
              onClick={handleStart}
              className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg py-4 rounded-xl transition-all btn-glow"
            >
              <Play className="w-5 h-5" />
              Start Workout
            </button>
          </div>
        </div>
      </main>
    );
  }

  /* ────── COMPLETE STATE ────── */
  if (status === "complete") {
    return (
      <main className="min-h-screen bg-background">
        <div className="max-w-lg mx-auto px-4 pt-20 pb-12">
          <div className="bg-muted rounded-2xl p-8 border border-border text-center">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Workout Complete!</h1>
            <p className="text-muted-foreground mb-6">
              Great job! You completed {plan.name} ({elapsedExercises} of {totalExercises} exercises)
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={handleRestart}
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition-all btn-glow"
              >
                <RotateCcw className="w-5 h-5" />
                Do It Again
              </button>
              <Link
                href="/train"
                className="flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-foreground font-semibold py-4 rounded-xl border border-border transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                More Workouts
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  /* ────── ACTIVE WORKOUT ────── */
  const showRest = status === "rest";
  const showNextUp = status === "next-up";
  const showExercise = inExerciseView;

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-lg mx-auto px-0 sm:px-4 pt-16 pb-8">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 sm:px-0 mb-3">
          <Link
            href="/train"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Exit
          </Link>
          <button
            onClick={() => setMuted((m) => !m)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>

        {/* Progress bar */}
        <div className="px-4 sm:px-0 mb-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
            <span>
              Exercise {Math.min(elapsedExercises + (showExercise ? 1 : 0), totalExercises)} of {totalExercises}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* ── REST VIEW ── */}
        {showRest && (
          <div className="mx-4 sm:mx-0 rounded-2xl bg-slate-900/80 backdrop-blur border border-slate-800 p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-orange-400" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Rest</h2>
            <p className="text-5xl font-bold text-orange-400 font-mono mb-4">
              {formatTime(timeRemaining)}
            </p>
            <button
              onClick={handleSkip}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
            >
              Skip Rest
            </button>
          </div>
        )}

        {/* ── NEXT UP ── */}
        {showNextUp && (
          <div className="mx-4 sm:mx-0 rounded-2xl bg-slate-900/80 backdrop-blur border border-slate-800 p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
              <Dumbbell className="w-8 h-8 text-orange-400" />
            </div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Next Up</p>
            <p className="text-2xl font-bold text-foreground mb-4">
              {(() => {
                const next = plan.steps[currentStepIdx + 1];
                if (next?.type === "exercise") return next.ex.displayName;
                return "";
              })()}
            </p>
            <button
              onClick={handleSkip}
              className="text-sm text-orange-400 hover:text-orange-300 transition-colors underline underline-offset-2"
            >
              Skip to Next
            </button>
          </div>
        )}

        {/* ── EXERCISE VIEW ── */}
        {showExercise && currentStep?.type === "exercise" && (
          <div className="px-4 sm:px-0">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {currentStep.phase === "warmup" ? "Warm Up" : currentStep.phase === "main" ? "Main Set" : "Finisher"}
                </p>
                <h2 className="text-xl font-bold text-foreground">{currentStep.ex.displayName}</h2>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-orange-400 font-mono">{formatTime(timeRemaining)}</p>
                <p className="text-xs text-muted-foreground">{currentStep.duration}s</p>
              </div>
            </div>

            {/* Video */}
            <div className="relative rounded-2xl overflow-hidden bg-black mb-4 h-[60vh] max-h-[500px] min-h-[320px]">
              {currentStep.ex.hasVideo ? (
                <video
                  ref={videoRef}
                  src={`/videos/exercises/${currentStep.ex.name}.mp4`}
                  className="w-full h-full object-contain"
                  muted={muted}
                  loop
                  playsInline
                  controls={false}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-900">
                  <div className="text-center">
                    <Dumbbell className="w-12 h-12 text-orange-400 mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">{currentStep.ex.displayName}</p>
                    <p className="text-xs text-muted-foreground mt-1">Follow along: {currentStep.duration}s</p>
                  </div>
                </div>
              )}
              <div className="absolute top-3 left-3">
                <span className="text-xs font-medium bg-black/60 backdrop-blur text-white px-2.5 py-1 rounded-lg">
                  {currentStep.phase === "warmup" ? "🔥 Warm Up" : currentStep.phase === "main" ? "💪 Main" : "🏁 Finisher"}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <button
                onClick={handleTogglePause}
                className="w-14 h-14 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-all btn-glow"
                aria-label={isPaused ? "Play" : "Pause"}
              >
                {isPaused ? <Play className="w-6 h-6 ml-0.5" /> : <Pause className="w-6 h-6" />}
              </button>
              <button
                onClick={handleSkip}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground border border-border transition-colors text-sm font-medium"
              >
                <SkipForward className="w-4 h-4" />
                Skip
              </button>
            </div>

            {isPaused && (
              <div className="text-center">
                <p className="text-muted-foreground text-sm">Press play to continue</p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

/* ─── Local Storage ─── */

interface WorkoutRecord {
  date: string;
  planName: string;
  exercisesCompleted: number;
  duration: number;
}

function saveToLocalStorage(planName: string, exercisesCompleted: number, duration: number) {
  try {
    const record: WorkoutRecord = {
      date: new Date().toISOString(),
      planName,
      exercisesCompleted,
      duration,
    };
    const raw = localStorage.getItem("getfitai_workouts");
    const history: WorkoutRecord[] = raw ? JSON.parse(raw) : [];
    history.push(record);
    localStorage.setItem("getfitai_workouts", JSON.stringify(history));
  } catch {
    // localStorage not available
  }
}
