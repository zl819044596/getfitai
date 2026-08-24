"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Loader2, Dumbbell, Target, Clock, Home, Building2, MessageSquare, Sparkles } from "lucide-react";

const goals = [
  { id: "muscle", label: "Build Muscle", icon: "💪" },
  { id: "fatloss", label: "Lose Fat", icon: "🔥" },
  { id: "strength", label: "Gain Strength", icon: "⚡" },
  { id: "endurance", label: "Endurance", icon: "🏃" },
  { id: "maintain", label: "Maintain", icon: "⚖️" },
];

const experiences = [
  { id: "beginner", label: "Beginner", desc: "New to training" },
  { id: "intermediate", label: "Intermediate", desc: "6+ months" },
  { id: "advanced", label: "Advanced", desc: "2+ years" },
];

const equipments = [
  { id: "gym", label: "Full Gym", icon: <Building2 className="w-5 h-5" /> },
  { id: "dumbbells", label: "Dumbbells Only", icon: <Dumbbell className="w-5 h-5" /> },
  { id: "home", label: "Home / No Equipment", icon: <Home className="w-5 h-5" /> },
];

const targetAreas = [
  { id: "full", label: "Full Body", icon: "🏋️" },
  { id: "upper", label: "Upper Body", icon: "💪" },
  { id: "lower", label: "Lower Body", icon: "🦵" },
  { id: "core", label: "Core / Abs", icon: "🎯" },
];

interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  weight?: string;
  notes?: string;
}

interface WorkoutFormProps {
  onPlanGenerated: (plan: {
    title: string;
    duration: string;
    intensity: string;
    exercises: Exercise[];
    warmup?: string[];
    cooldown?: string[];
  }) => void;
  defaultEquipment?: string;
}

function extractPlan(text: string) {
  try {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return null;
    return JSON.parse(jsonMatch[0]);
  } catch {
    return null;
  }
}

export function WorkoutForm({ onPlanGenerated, defaultEquipment }: WorkoutFormProps) {
  const [goal, setGoal] = useState("muscle");
  const [experience, setExperience] = useState("beginner");
  const [duration, setDuration] = useState([45]);
  const [equipment, setEquipment] = useState(defaultEquipment || "gym");
  const [targetArea, setTargetArea] = useState("full");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [error, setError] = useState<string | null>(null);

  const generatePlan = async () => {
    setLoading(true);
    setStreamingText("");
    setError(null);
    try {
      const res = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          goal,
          experience,
          duration: duration[0],
          equipment,
          targetArea,
          notes: notes.trim() || undefined,
        }),
      });

      if (!res.ok) throw new Error("Failed to generate");

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No reader");

      const decoder = new TextDecoder();
      let raw = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        raw += decoder.decode(value, { stream: true });
        setStreamingText(raw);
      }

      const plan = extractPlan(raw);
      if (plan) {
        onPlanGenerated(plan);
      } else {
        setError("Failed to parse the generated plan. Please try again.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl shadow-xl shadow-neutral-100 border border-neutral-100 p-6 sm:p-8 md:p-10 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-black mb-2">
            AI is creating your plan
          </h3>
          <p className="text-sm text-gray-500">
            Analyzing your profile and building a personalized workout...
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 min-h-[200px] max-h-[400px] overflow-y-auto">
          {streamingText ? (
            <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">
              {streamingText}
            </pre>
          ) : (
            <div className="space-y-3 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          Generating your personalized workout plan...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-neutral-100 border border-neutral-100 p-6 sm:p-8 md:p-10 max-w-2xl mx-auto">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
          {error}
          <button
            onClick={() => setError(null)}
            className="ml-2 underline hover:no-underline"
          >
            Dismiss
          </button>
        </div>
      )}
      {/* Goal */}
      <div className="mb-8">
        <label className="flex items-center gap-2 text-sm font-semibold text-neutral-900 mb-4">
          <Target className="w-4 h-4" />
          What&apos;s your goal?
        </label>
        <div className="flex flex-wrap gap-2">
          {goals.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setGoal(g.id)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                goal === g.id
                  ? "bg-black text-white shadow-lg shadow-black/10"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              <span className="mr-1">{g.icon}</span>
              {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Target Area */}
      <div className="mb-8">
        <label className="flex items-center gap-2 text-sm font-semibold text-neutral-900 mb-4">
          <Dumbbell className="w-4 h-4" />
          Target area
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {targetAreas.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => setTargetArea(a.id)}
              className={`p-3 rounded-2xl text-center transition-all duration-200 ${
                targetArea === a.id
                  ? "bg-black text-white shadow-lg shadow-black/10"
                  : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              <div className="text-lg mb-1">{a.icon}</div>
              <div className="font-medium text-xs">{a.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <label className="flex items-center gap-2 text-sm font-semibold text-neutral-900 mb-4">
          <Dumbbell className="w-4 h-4" />
          Experience level
        </label>
        <div className="grid grid-cols-3 gap-3">
          {experiences.map((e) => (
            <button
              key={e.id}
              type="button"
              onClick={() => setExperience(e.id)}
              className={`p-4 rounded-2xl text-center transition-all duration-200 ${
                experience === e.id
                  ? "bg-black text-white shadow-lg shadow-black/10"
                  : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              <div className="font-semibold text-sm">{e.label}</div>
              <div className={`text-xs mt-1 ${experience === e.id ? "text-neutral-300" : "text-neutral-400"}`}>
                {e.desc}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div className="mb-8">
        <label className="flex items-center gap-2 text-sm font-semibold text-neutral-900 mb-4">
          <Clock className="w-4 h-4" />
          Workout duration: <span className="text-black">{duration[0]} min</span>
        </label>
        <Slider
          value={duration}
          onValueChange={setDuration}
          min={15}
          max={90}
          step={5}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-neutral-400 mt-2">
          <span>15 min</span>
          <span>90 min</span>
        </div>
      </div>

      {/* Equipment */}
      <div className="mb-8">
        <label className="flex items-center gap-2 text-sm font-semibold text-neutral-900 mb-4">
          <Home className="w-4 h-4" />
          Available equipment
        </label>
        <div className="grid grid-cols-3 gap-3">
          {equipments.map((eq) => (
            <button
              key={eq.id}
              type="button"
              onClick={() => setEquipment(eq.id)}
              className={`p-4 rounded-2xl text-center transition-all duration-200 ${
                equipment === eq.id
                  ? "bg-black text-white shadow-lg shadow-black/10"
                  : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              <div className="flex justify-center mb-2">{eq.icon}</div>
              <div className="font-semibold text-sm">{eq.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div className="mb-10">
        <label className="flex items-center gap-2 text-sm font-semibold text-neutral-900 mb-4">
          <MessageSquare className="w-4 h-4" />
          Injuries or preferences <span className="text-neutral-400 font-normal">(optional)</span>
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="e.g., lower back pain, prefer bodyweight only, knee injury..."
          rows={2}
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-black focus:ring-1 focus:ring-black outline-none text-sm resize-none transition-colors placeholder:text-neutral-300"
        />
      </div>

      {/* Submit */}
      <Button
        onClick={generatePlan}
        disabled={loading}
        className="w-full h-14 text-base font-semibold rounded-full bg-black hover:bg-neutral-800 text-white transition-all duration-300 shadow-lg shadow-black/10"
      >
        Generate Workout Plan
      </Button>
    </div>
  );
}
