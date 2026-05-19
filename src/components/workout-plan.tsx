"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dumbbell, Clock, Flame, RotateCcw, CheckCircle2, Download, Share2, Mail, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
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
    difficulty?: string;
    calories?: string;
  };
  onRegenerate?: () => void;
  onAdjust?: (direction: "easier" | "harder") => void;
}

export function WorkoutPlan({ plan, onRegenerate, onAdjust }: WorkoutPlanProps) {
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [saved, setSaved] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSending, setEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [adjusting, setAdjusting] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem(`workout-${plan.title}`);
    if (savedState) {
      setCompleted(new Set(JSON.parse(savedState)));
    }
  }, [plan.title]);

  useEffect(() => {
    localStorage.setItem(`workout-${plan.title}`, JSON.stringify(Array.from(completed)));
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
      completed: Array.from(completed),
    };
    plans.unshift(newPlan);
    localStorage.setItem("saved-plans", JSON.stringify(plans.slice(0, 10)));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const sharePlan = () => {
    const text = `My workout plan: ${plan.title}\n${plan.exercises.map(e => `- ${e.name}: ${e.sets} sets x ${e.reps}`).join("\n")}`;
    navigator.clipboard.writeText(text);
    alert("Workout plan copied to clipboard!");
  };

  const sendEmail = async () => {
    if (!email) return;
    setEmailSending(true);
    try {
      const res = await fetch("/api/send-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, plan }),
      });
      if (res.ok) {
        setEmailSent(true);
        setTimeout(() => setEmailSent(false), 3000);
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch {
      alert("Failed to send email. Please try again.");
    } finally {
      setEmailSending(false);
    }
  };

  const handleAdjust = (direction: "easier" | "harder") => {
    setAdjusting(true);
    onAdjust?.(direction);
  };

  const progress = Math.round((completed.size / plan.exercises.length) * 100);

  if (!plan) return null;

  return (
    <div className="space-y-6">
      {/* Plan Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-black mb-3">{plan.title}</h2>
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500 flex-wrap">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {plan.duration}
          </span>
          <span className="flex items-center gap-1">
            <Flame className="w-4 h-4" />
            {plan.intensity}
          </span>
          {plan.difficulty && (
            <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs font-medium">
              {plan.difficulty}
            </span>
          )}
          {plan.calories && (
            <span className="flex items-center gap-1 text-xs text-gray-400">
              ~{plan.calories}
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
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
          href={`mailto:?subject=My Workout Plan: ${plan.title}&body=${plan.exercises.map(e => `- ${e.name}: ${e.sets} sets x ${e.reps}`).join("%0A")}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <Mail className="w-4 h-4" />
          Email
        </a>
      </div>

      {/* Email Input */}
      <div className="bg-gray-50 rounded-2xl p-6">
        <p className="text-sm text-gray-500 mb-3 text-center">
          Want this plan in your inbox?
        </p>
        <div className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-full border border-gray-200 focus:border-black focus:ring-1 focus:ring-black outline-none text-sm"
          />
          <button
            onClick={sendEmail}
            disabled={emailSending || !email}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
              emailSent
                ? "bg-green-100 text-green-700"
                : "bg-black text-white hover:bg-gray-800 disabled:opacity-50"
            }`}
          >
            {emailSending ? "Sending..." : emailSent ? "Sent!" : "Send"}
          </button>
        </div>
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

      {/* Adjust Difficulty */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
        <p className="text-sm text-gray-500 mb-4">Not quite right? Adjust the difficulty:</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => handleAdjust("easier")}
            disabled={adjusting}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            <ChevronDown className="w-4 h-4" />
            Make it Easier
          </button>
          <button
            onClick={() => handleAdjust("harder")}
            disabled={adjusting}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-gray-200 hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            <ChevronUp className="w-4 h-4" />
            Make it Harder
          </button>
        </div>
      </div>

      {/* Regenerate */}
      {onRegenerate && (
        <button
          onClick={onRegenerate}
          className="w-full py-4 text-sm font-medium text-gray-500 hover:text-black transition-colors flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          Generate a completely new plan
        </button>
      )}
    </div>
  );
}
