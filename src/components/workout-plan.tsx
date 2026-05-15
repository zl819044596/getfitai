"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Clock, Flame, RotateCcw, CheckCircle2, Download, Share2, Mail, History } from "lucide-react";
import { useState, useEffect } from "react";

interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  notes?: string;
}

interface WorkoutPlanProps {
  plan: {
    title: string;
    duration: string;
    intensity: string;
    exercises: Exercise[];
    warmup?: string[];
    cooldown?: string[];
  };
}

export function WorkoutPlan({ plan }: WorkoutPlanProps) {
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [saved, setSaved] = useState(false);

  // Load completed state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem(`workout-${plan.title}`);
    if (savedState) {
      setCompleted(new Set(JSON.parse(savedState)));
    }
  }, [plan.title]);

  // Save completed state to localStorage
  useEffect(() => {
    localStorage.setItem(`workout-${plan.title}`, JSON.stringify([...completed]));
  }, [completed, plan.title]);

  const toggleExercise = (index: number) => {
    const newCompleted = new Set(completed);
    if (newCompleted.has(index)) {
      newCompleted.delete(index);
    } else {
      newCompleted.add(index);
    }
    setCompleted(newCompleted);
  };

  const savePlan = () => {
    const plans = JSON.parse(localStorage.getItem("saved-plans") || "[]");
    const newPlan = {
      ...plan,
      savedAt: new Date().toISOString(),
      completed: [...completed],
    };
    plans.unshift(newPlan);
    localStorage.setItem("saved-plans", JSON.stringify(plans.slice(0, 10))); // Keep last 10
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const sharePlan = () => {
    const text = `My workout plan: ${plan.title}\n${plan.exercises.map(e => `- ${e.name}: ${e.sets} sets x ${e.reps}`).join("\n")}`;
    navigator.clipboard.writeText(text);
    alert("Workout plan copied to clipboard!");
  };

  const progress = Math.round((completed.size / plan.exercises.length) * 100);

  if (!plan) return null;

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Plan Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-black mb-3">{plan.title}</h2>
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {plan.duration}
          </span>
          <span className="flex items-center gap-1">
            <Flame className="w-4 h-4" />
            {plan.intensity}
          </span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={savePlan}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
            saved
              ? "bg-green-100 text-green-700"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          <Download className="w-4 h-4" />
          {saved ? "Saved!" : "Save Plan"}
        </button>
        <button
          onClick={sharePlan}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <Share2 className="w-4 h-4" />
          Copy Plan
        </button>
        <a
          href="mailto:?subject=My Workout Plan&body=Check out my workout plan!"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <Mail className="w-4 h-4" />
          Email
        </a>
      </div>

      {/* Warmup */}
      {plan.warmup && plan.warmup.length > 0 && (
        <Card className="border-gray-100 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Warm-up
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {plan.warmup.map((item, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Exercises */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide px-1">
          Main Workout — Tap to mark complete
        </h3>
        
        {plan.exercises.map((exercise, index) => (
          <Card
            key={index}
            className={`border-gray-100 shadow-sm cursor-pointer transition-all duration-300 ${
              completed.has(index)
                ? "bg-gray-50 border-gray-200"
                : "bg-white hover:shadow-md"
            }`}
            onClick={() => toggleExercise(index)}
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className={`font-semibold ${completed.has(index) ? "text-gray-400 line-through" : "text-black"}`}>
                      {exercise.name}
                    </h4>
                    {completed.has(index) && (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                      {exercise.sets} sets
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                      {exercise.reps}
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                      Rest {exercise.rest}
                    </Badge>
                  </div>
                  
                  {exercise.notes && (
                    <p className="text-sm text-gray-500 mt-2">{exercise.notes}</p>
                  )}
                </div>
                
                <Dumbbell className={`w-5 h-5 mt-1 ${completed.has(index) ? "text-gray-300" : "text-gray-400"}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cooldown */}
      {plan.cooldown && plan.cooldown.length > 0 && (
        <Card className="border-gray-100 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Cool-down
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {plan.cooldown.map((item, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-gray-400 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Progress */}
      <div className="bg-gray-50 rounded-2xl p-6 text-center">
        <p className="text-sm text-gray-500 mb-2">Workout Progress</p>
        <p className="text-3xl font-bold text-black">
          {progress}%
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {completed.size} / {plan.exercises.length} exercises completed
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
          <div
            className="bg-black h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        {progress === 100 && (
          <p className="text-green-600 font-medium mt-3">🎉 Workout complete! Great job!</p>
        )}
      </div>

      {/* Regenerate */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-full py-4 text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center justify-center gap-2"
      >
        <RotateCcw className="w-4 h-4" />
        Generate a different plan
      </button>
    </div>
  );
}
