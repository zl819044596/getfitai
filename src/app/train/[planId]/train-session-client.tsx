"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { ExerciseVideo } from "@/components/exercise-video";
import {
  Play,
  Pause,
  SkipForward,
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  Dumbbell,
  Clock,
} from "lucide-react";
import { trackWorkoutStarted, trackWorkoutCompleted } from "@/lib/analytics";
import { getExerciseImage } from "@/lib/exercise-images";

/* ─── Exercise Metadata ─── */

interface ExerciseMeta {
  name: string;
  displayName: string;
  hasVideo: boolean;
  videoUrl: string;
}

const allExercises: Record<string, ExerciseMeta> = {
  pushups: {
    name: "pushups",
    displayName: "Push-Ups",
    hasVideo: true,
    videoUrl: "/videos/train/full-body-burn/pushups.mp4",
  },
  squats: {
    name: "squats",
    displayName: "Squats",
    hasVideo: true,
    videoUrl: "/videos/train/full-body-burn/squats.mp4",
  },
  lunges: {
    name: "lunges",
    displayName: "Lunges",
    hasVideo: true,
    videoUrl: "/videos/train/full-body-burn/lunges.mp4",
  },
  plank: {
    name: "plank",
    displayName: "Plank Hold",
    hasVideo: true,
    videoUrl: "/videos/train/full-body-burn/plank.mp4",
  },
  burpees: {
    name: "burpees",
    displayName: "Burpees",
    hasVideo: true,
    videoUrl: "/videos/train/full-body-burn/burpees.mp4",
  },
  mountain_climbers: {
    name: "mountain_climbers",
    displayName: "Mountain Climbers",
    hasVideo: true,
    videoUrl: "/videos/train/full-body-burn/mountain_climbers.mp4",
  },
  jumping_jacks: {
    name: "jumping_jacks",
    displayName: "Jumping Jacks",
    hasVideo: true,
    videoUrl: "/videos/train/full-body-burn/jumping_jacks.mp4",
  },
  high_knees: {
    name: "high_knees",
    displayName: "High Knees",
    hasVideo: true,
    videoUrl: "/videos/train/full-body-burn/high_knees.mp4",
  },
  glute_bridges: {
    name: "glute_bridges",
    displayName: "Glute Bridges",
    hasVideo: true,
    videoUrl: "/videos/train/full-body-burn/glute_bridges.mp4",
  },
  supermans: { name: "supermans", displayName: "Supermans", hasVideo: false, videoUrl: "" },
  squat_jumps: {
    name: "squat_jumps",
    displayName: "Squat Jumps",
    hasVideo: false,
    videoUrl: "",
  },

  // ── Upper Body Push exercises ──
  tricep_dips: {
    name: "tricep_dips",
    displayName: "Tricep Dips",
    hasVideo: false,
    videoUrl: "",
  },
  pike_pushups: {
    name: "pike_pushups",
    displayName: "Pike Push-Ups",
    hasVideo: false,
    videoUrl: "",
  },
  shoulder_taps: {
    name: "shoulder_taps",
    displayName: "Shoulder Taps",
    hasVideo: false,
    videoUrl: "",
  },

  // ── Lower Body Strength exercises ──
  calf_raises: {
    name: "calf_raises",
    displayName: "Calf Raises",
    hasVideo: false,
    videoUrl: "",
  },
  wall_sit: {
    name: "wall_sit",
    displayName: "Wall Sit",
    hasVideo: false,
    videoUrl: "",
  },

  donkey_kicks: {
    name: "donkey_kicks",
    displayName: "Donkey Kicks",
    hasVideo: false,
    videoUrl: "",
  },

  // ── Full Body Stretch exercises ──
  neck_rolls: {
    name: "neck_rolls",
    displayName: "Neck Rolls",
    hasVideo: false,
    videoUrl: "",
  },
  shoulder_stretch: {
    name: "shoulder_stretch",
    displayName: "Shoulder Stretch",
    hasVideo: false,
    videoUrl: "",
  },
  chest_stretch: {
    name: "chest_stretch",
    displayName: "Chest Stretch",
    hasVideo: false,
    videoUrl: "",
  },
  standing_toe_touch: {
    name: "standing_toe_touch",
    displayName: "Standing Toe Touch",
    hasVideo: false,
    videoUrl: "",
  },
  quad_stretch: {
    name: "quad_stretch",
    displayName: "Quad Stretch",
    hasVideo: false,
    videoUrl: "",
  },
  hamstring_stretch: {
    name: "hamstring_stretch",
    displayName: "Hamstring Stretch",
    hasVideo: false,
    videoUrl: "",
  },
  cat_cow: {
    name: "cat_cow",
    displayName: "Cat-Cow",
    hasVideo: false,
    videoUrl: "",
  },
  childs_pose: {
    name: "childs_pose",
    displayName: "Child's Pose",
    hasVideo: false,
    videoUrl: "",
  },
  down_dog: {
    name: "down_dog",
    displayName: "Downward Dog",
    hasVideo: false,
    videoUrl: "",
  },
  lying_twist: {
    name: "lying_twist",
    displayName: "Lying Spinal Twist",
    hasVideo: false,
    videoUrl: "",
  },

  // ── HIIT Blast exercises ──
  star_jumps: {
    name: "star_jumps",
    displayName: "Star Jumps",
    hasVideo: false,
    videoUrl: "",
  },

  // ── Back & Biceps exercises ──
  bodyweight_rows: {
    name: "bodyweight_rows",
    displayName: "Bodyweight Rows",
    hasVideo: false,
    videoUrl: "",
  },
  bicep_curls: {
    name: "bicep_curls",
    displayName: "Towel Bicep Curls",
    hasVideo: false,
    videoUrl: "",
  },

  // ── Chest & Triceps exercises ──
  arm_circles: {
    name: "arm_circles",
    displayName: "Arm Circles",
    hasVideo: false,
    videoUrl: "",
  },
  wide_pushups: {
    name: "wide_pushups",
    displayName: "Wide Push-Ups",
    hasVideo: false,
    videoUrl: "",
  },
  diamond_pushups: {
    name: "diamond_pushups",
    displayName: "Diamond Push-Ups",
    hasVideo: false,
    videoUrl: "",
  },
  decline_pushups: {
    name: "decline_pushups",
    displayName: "Decline Push-Ups",
    hasVideo: false,
    videoUrl: "",
  },

  // ── Evening Wind-Down exercises ──
  deep_breathing: {
    name: "deep_breathing",
    displayName: "Deep Breathing",
    hasVideo: false,
    videoUrl: "",
  },
  seated_forward_fold: {
    name: "seated_forward_fold",
    displayName: "Seated Forward Fold",
    hasVideo: false,
    videoUrl: "",
  },
  happy_baby: {
    name: "happy_baby",
    displayName: "Happy Baby",
    hasVideo: false,
    videoUrl: "",
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
  videoSrc?: string;
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

  // ── Upper Body Push (10 min) ──
  {
    id: "upper-body-push",
    name: "Upper Body Push",
    totalMinutes: 10,
    steps: [
      // Warm-up
      { type: "exercise", ex: allExercises.jumping_jacks, duration: 30, phase: "warmup" },
      { type: "rest", duration: 5 },
      { type: "exercise", ex: allExercises.high_knees, duration: 25, phase: "warmup" },
      // Main set
      { type: "rest", duration: 10 },
      { type: "exercise", ex: allExercises.pushups, duration: 40, phase: "main" },
      { type: "rest", duration: 25 },
      { type: "exercise", ex: allExercises.tricep_dips, duration: 40, phase: "main" },
      { type: "rest", duration: 25 },
      { type: "exercise", ex: allExercises.pike_pushups, duration: 35, phase: "main" },
      { type: "rest", duration: 20 },
      { type: "exercise", ex: allExercises.shoulder_taps, duration: 30, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.pushups, duration: 30, phase: "main" },
      // Finisher
      { type: "exercise", ex: allExercises.plank, duration: 30, phase: "finisher" },
    ],
  },

  // ── Lower Body Strength (12 min) ──
  {
    id: "lower-body-strength",
    name: "Lower Body Strength",
    totalMinutes: 12,
    steps: [
      // Warm-up
      { type: "exercise", ex: allExercises.squats, duration: 30, phase: "warmup" },
      { type: "rest", duration: 5 },
      { type: "exercise", ex: allExercises.lunges, duration: 25, phase: "warmup" },
      // Main set
      { type: "rest", duration: 10 },
      { type: "exercise", ex: allExercises.squats, duration: 45, phase: "main" },
      { type: "rest", duration: 20 },
      { type: "exercise", ex: allExercises.lunges, duration: 45, phase: "main" },
      { type: "rest", duration: 20 },
      { type: "exercise", ex: allExercises.glute_bridges, duration: 40, phase: "main" },
      { type: "rest", duration: 20 },
      { type: "exercise", ex: allExercises.supermans, duration: 35, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.calf_raises, duration: 30, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.wall_sit, duration: 30, phase: "main" },
      // Finisher
      { type: "exercise", ex: allExercises.glute_bridges, duration: 30, phase: "finisher" },
    ],
  },

  // ── Leg Day (15 min) ──
  {
    id: "leg-day",
    name: "Leg Day",
    totalMinutes: 15,
    steps: [
      // Warm-up — leg activation
      { type: "exercise", ex: allExercises.squats, duration: 30, phase: "warmup" },
      { type: "rest", duration: 5 },
      { type: "exercise", ex: allExercises.lunges, duration: 25, phase: "warmup" },
      { type: "rest", duration: 10 },
      // Main set 1 — compound + glutes + calves
      { type: "exercise", ex: allExercises.squats, duration: 45, phase: "main" },
      { type: "rest", duration: 20 },
      { type: "exercise", ex: allExercises.lunges, duration: 40, phase: "main" },
      { type: "rest", duration: 20 },
      { type: "exercise", ex: allExercises.glute_bridges, duration: 40, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.calf_raises, duration: 30, phase: "main" },
      { type: "rest", duration: 15 },
      // Main set 2 — strength + glute isolation + endurance
      { type: "exercise", ex: allExercises.squats, duration: 40, phase: "main" },
      { type: "rest", duration: 20 },
      { type: "exercise", ex: allExercises.donkey_kicks, duration: 35, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.wall_sit, duration: 30, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.glute_bridges, duration: 35, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.calf_raises, duration: 25, phase: "main" },
      // Finisher — explosive + isometric burn
      { type: "exercise", ex: allExercises.squat_jumps, duration: 20, phase: "finisher" },
      { type: "exercise", ex: allExercises.wall_sit, duration: 25, phase: "finisher" },
    ],
  },

  // ── Full Body Stretch (8 min — continuous flow, NO rest steps) ──
  {
    id: "full-body-stretch",
    name: "Full Body Stretch",
    totalMinutes: 8,
    steps: [
      { type: "exercise", ex: allExercises.neck_rolls, duration: 30, phase: "warmup" },
      { type: "exercise", ex: allExercises.shoulder_stretch, duration: 30, phase: "main" },
      { type: "exercise", ex: allExercises.chest_stretch, duration: 30, phase: "main" },
      { type: "exercise", ex: allExercises.standing_toe_touch, duration: 40, phase: "main" },
      { type: "exercise", ex: allExercises.quad_stretch, duration: 40, phase: "main" },
      { type: "exercise", ex: allExercises.hamstring_stretch, duration: 40, phase: "main" },
      { type: "exercise", ex: allExercises.cat_cow, duration: 30, phase: "main" },
      { type: "exercise", ex: allExercises.childs_pose, duration: 30, phase: "cooldown" },
      { type: "exercise", ex: allExercises.down_dog, duration: 30, phase: "cooldown" },
      { type: "exercise", ex: allExercises.lying_twist, duration: 30, phase: "cooldown" },
    ],
  },

  // ── HIIT Blast (7 min — 40/15 intervals) ──
  {
    id: "hiit-blast",
    name: "HIIT Blast",
    totalMinutes: 7,
    steps: [
      // Warm-in (first round acts as warmup)
      { type: "exercise", ex: allExercises.jumping_jacks, duration: 40, phase: "warmup" },
      { type: "rest", duration: 15 },
      // Main set — 40/15 pattern
      { type: "exercise", ex: allExercises.burpees, duration: 40, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.high_knees, duration: 40, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.squat_jumps, duration: 35, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.mountain_climbers, duration: 40, phase: "main" },
      { type: "rest", duration: 15 },
      // Finisher — no rest
      { type: "exercise", ex: allExercises.star_jumps, duration: 30, phase: "finisher" },
    ],
  },

  // ── Back & Biceps (10 min — superset rows + curls) ──
  {
    id: "back-and-biceps",
    name: "Back & Biceps",
    totalMinutes: 10,
    steps: [
      // Warm-up
      { type: "exercise", ex: allExercises.jumping_jacks, duration: 30, phase: "warmup" },
      { type: "rest", duration: 5 },
      { type: "exercise", ex: allExercises.supermans, duration: 30, phase: "warmup" },
      { type: "rest", duration: 20 },
      // Main — 4 superset rounds: bodyweight rows + towel bicep curls
      { type: "exercise", ex: allExercises.bodyweight_rows, duration: 40, phase: "main" },
      { type: "rest", duration: 20 },
      { type: "exercise", ex: allExercises.bicep_curls, duration: 40, phase: "main" },
      { type: "rest", duration: 20 },
      { type: "exercise", ex: allExercises.bodyweight_rows, duration: 40, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.bicep_curls, duration: 40, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.bodyweight_rows, duration: 40, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.bicep_curls, duration: 40, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.bodyweight_rows, duration: 35, phase: "main" },
      { type: "rest", duration: 10 },
      { type: "exercise", ex: allExercises.bicep_curls, duration: 35, phase: "main" },
      { type: "rest", duration: 5 },
      // Finisher
      { type: "exercise", ex: allExercises.plank, duration: 30, phase: "finisher" },
    ],
  },

  // ── Chest & Triceps (10 min — push-up variations) ──
  {
    id: "chest-triceps",
    name: "Chest & Triceps",
    totalMinutes: 10,
    steps: [
      // Warm-up
      { type: "exercise", ex: allExercises.arm_circles, duration: 30, phase: "warmup" },
      { type: "rest", duration: 5 },
      { type: "exercise", ex: allExercises.arm_circles, duration: 35, phase: "warmup" },
      { type: "rest", duration: 10 },
      // Main — push-up variations + dips
      { type: "exercise", ex: allExercises.wide_pushups, duration: 40, phase: "main" },
      { type: "rest", duration: 20 },
      { type: "exercise", ex: allExercises.pushups, duration: 40, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.diamond_pushups, duration: 35, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.decline_pushups, duration: 35, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.tricep_dips, duration: 35, phase: "main" },
      { type: "rest", duration: 15 },
      { type: "exercise", ex: allExercises.pike_pushups, duration: 35, phase: "main" },
      { type: "rest", duration: 0 },
      // Finisher
      { type: "exercise", ex: allExercises.plank, duration: 60, phase: "finisher" },
    ],
  },

  // ── Morning Wake-Up (5 min — continuous flow, no rest) ──
  {
    id: "morning-wake-up",
    name: "Morning Wake-Up",
    totalMinutes: 5,
    steps: [
      { type: "exercise", ex: allExercises.neck_rolls, duration: 30, phase: "warmup" },
      { type: "exercise", ex: allExercises.shoulder_stretch, duration: 30, phase: "main" },
      { type: "exercise", ex: allExercises.chest_stretch, duration: 30, phase: "main" },
      { type: "exercise", ex: allExercises.cat_cow, duration: 30, phase: "main" },
      { type: "exercise", ex: allExercises.down_dog, duration: 30, phase: "main" },
      { type: "exercise", ex: allExercises.standing_toe_touch, duration: 40, phase: "main" },
      { type: "exercise", ex: allExercises.childs_pose, duration: 30, phase: "cooldown" },
      { type: "exercise", ex: allExercises.lying_twist, duration: 40, phase: "cooldown" },
    ],
  },

  // ── Evening Wind-Down (8 min — continuous flow, no rest) ──
  {
    id: "evening-wind-down",
    name: "Evening Wind-Down",
    totalMinutes: 8,
    steps: [
      // Breathe & Release (2:00)
      { type: "exercise", ex: allExercises.deep_breathing, duration: 60, phase: "warmup" },
      { type: "exercise", ex: allExercises.neck_rolls, duration: 35, phase: "warmup" },
      { type: "exercise", ex: allExercises.shoulder_stretch, duration: 35, phase: "warmup" },
      // Spine & Hips (2:05)
      { type: "exercise", ex: allExercises.cat_cow, duration: 45, phase: "main" },
      { type: "exercise", ex: allExercises.seated_forward_fold, duration: 45, phase: "main" },
      { type: "exercise", ex: allExercises.standing_toe_touch, duration: 45, phase: "main" },
      // Deep Unwind (1:30)
      { type: "exercise", ex: allExercises.childs_pose, duration: 40, phase: "main" },
      { type: "exercise", ex: allExercises.hamstring_stretch, duration: 40, phase: "main" },
      { type: "exercise", ex: allExercises.happy_baby, duration: 40, phase: "main" },
      // Final Rest (2:25)
      { type: "exercise", ex: allExercises.lying_twist, duration: 50, phase: "cooldown" },
      { type: "exercise", ex: allExercises.deep_breathing, duration: 45, phase: "cooldown" },
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

  const nextUpTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [status, setStatus] = useState<AppStatus>("ready");
  const [isPaused, setIsPaused] = useState(false);
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
      // Track workout completed
      trackWorkoutCompleted(plan.id, plan.totalMinutes, elapsedExercises / totalExercises);
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


  const handleStart = useCallback(() => {
    if (!plan) return;
    const firstStep = plan.steps[0];
    if (firstStep.type === "exercise") {
      setTimeRemaining(firstStep.duration);
      setStatus("exercise");
      setIsPaused(false);
      // Track workout started
      trackWorkoutStarted(plan.id, plan.name);
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
        // Track workout completed (skip on last exercise)
        trackWorkoutCompleted(plan.id, plan.totalMinutes, elapsedExercises / totalExercises);
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

            {/* Exercise visual — local clips loop inline; posters handle unavailable media. */}
            <div className="relative rounded-2xl overflow-hidden bg-black mb-4 h-[60vh] max-h-[500px] min-h-[320px]">
              <ExerciseVideo
                videoUrl={currentStep.ex.videoUrl}
                poster={
                  currentStep.ex.hasVideo
                    ? `/images/train/full-body-burn/${currentStep.ex.name}.jpg`
                    : getExerciseImage(currentStep.ex.displayName)
                }
                title={currentStep.ex.displayName}
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute top-3 left-3 z-20">
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
