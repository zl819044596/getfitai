"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Loader2, Dumbbell, Target, Clock, Home, Building2 } from "lucide-react";

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

interface WorkoutFormProps {
  onPlanGenerated: (plan: { title: string; duration: string; intensity: string; exercises: { name: string; sets: number; reps: string; rest: string; notes?: string }[]; warmup?: string[]; cooldown?: string[] }) => void;
}

export function WorkoutForm({ onPlanGenerated }: WorkoutFormProps) {
  const [goal, setGoal] = useState("muscle");
  const [experience, setExperience] = useState("beginner");
  const [duration, setDuration] = useState([45]);
  const [equipment, setEquipment] = useState("gym");
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          goal,
          experience,
          duration: duration[0],
          equipment,
        }),
      });
      const data = await res.json();
      onPlanGenerated(data.plan);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-neutral-100 border border-neutral-100 p-8 md:p-10 max-w-2xl mx-auto">
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
              onClick={() => setGoal(g.id)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                goal === g.id
                  ? "bg-black text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              <span className="mr-1">{g.icon}</span>
              {g.label}
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
              onClick={() => setExperience(e.id)}
              className={`p-4 rounded-2xl text-center transition-all duration-200 ${
                experience === e.id
                  ? "bg-black text-white"
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
      <div className="mb-10">
        <label className="flex items-center gap-2 text-sm font-semibold text-neutral-900 mb-4">
          <Home className="w-4 h-4" />
          Available equipment
        </label>
        <div className="grid grid-cols-3 gap-3">
          {equipments.map((eq) => (
            <button
              key={eq.id}
              onClick={() => setEquipment(eq.id)}
              className={`p-4 rounded-2xl text-center transition-all duration-200 ${
                equipment === eq.id
                  ? "bg-black text-white"
                  : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              <div className="flex justify-center mb-2">{eq.icon}</div>
              <div className="font-semibold text-sm">{eq.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Submit */}
      <Button
        onClick={generatePlan}
        disabled={loading}
        className="w-full h-14 text-base font-semibold rounded-full bg-black hover:bg-neutral-800 text-white transition-all duration-300"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Generating your plan...
          </>
        ) : (
          <>Generate Workout Plan</>
        )}
      </Button>
    </div>
  );
}
