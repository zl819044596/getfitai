"use client";

import Link from "next/link";
import {
  Dumbbell,
  Clock,
  Flame,
  ChevronRight,
  Sparkles,
  Zap,
} from "lucide-react";

interface PlanCard {
  id: string;
  name: string;
  duration: string;
  durationMinutes: number;
  exerciseCount: number;
  difficulty: "Beginner" | "Intermediate" | "All Levels";
  description: string;
  icon: React.ReactNode;
  color: string;
  cta?: string;
}

const plans: PlanCard[] = [
  {
    id: "full-body-burn",
    name: "Full Body Burn",
    duration: "15 min",
    durationMinutes: 15,
    exerciseCount: 8,
    difficulty: "Intermediate",
    description:
      "A complete full-body workout combining strength and cardio moves. Warm up, hit every major muscle group, then finish with a plank hold.",
    icon: <Flame className="w-6 h-6" />,
    color: "text-orange-400",
  },
  {
    id: "core-crusher",
    name: "Core Crusher",
    duration: "10 min",
    durationMinutes: 10,
    exerciseCount: 6,
    difficulty: "Intermediate",
    description:
      "Target your abs, obliques, and lower back with this focused core session. No equipment, just serious burn.",
    icon: <Dumbbell className="w-6 h-6" />,
    color: "text-orange-400",
  },
  {
    id: "quick-cardio",
    name: "Quick Cardio",
    duration: "5 min",
    durationMinutes: 5,
    exerciseCount: 5,
    difficulty: "Beginner",
    description:
      "Need a quick sweat? This rapid-fire cardio blast gets your heart pumping fast. Perfect for a morning boost or lunch break.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-orange-400",
  },
  {
    id: "upper-body-push",
    name: "Upper Body Push",
    duration: "10 min",
    durationMinutes: 10,
    exerciseCount: 6,
    difficulty: "Intermediate",
    description:
      "Push-ups, dips & plank variations for a stronger upper body",
    icon: <Dumbbell className="w-6 h-6" />,
    color: "text-orange-400",
  },
  {
    id: "lower-body-strength",
    name: "Lower Body Strength",
    duration: "12 min",
    durationMinutes: 12,
    exerciseCount: 7,
    difficulty: "Intermediate",
    description:
      "Squats, lunges, glute bridges & more for powerful legs",
    icon: <Flame className="w-6 h-6" />,
    color: "text-orange-400",
  },
  {
    id: "full-body-stretch",
    name: "Full Body Stretch",
    duration: "8 min",
    durationMinutes: 8,
    exerciseCount: 10,
    difficulty: "All Levels",
    description:
      "A continuous flow from neck to ankles — unwind and recover",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-orange-400",
    cta: "Start Routine",
  },
  {
    id: "hiit-blast",
    name: "HIIT Blast",
    duration: "7 min",
    durationMinutes: 7,
    exerciseCount: 6,
    difficulty: "Intermediate",
    description:
      "40/15 intervals — jumping jacks to star jumps, all-out finish",
    icon: <Zap className="w-6 h-6" />,
    color: "text-orange-400",
  },
];

export function TrainPlans() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Follow-Along Training
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pick a plan, press play, and follow the video demonstrations.
              Your personal workout session — no gym required.
            </p>
          </div>

          {/* Plan Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6
                [&>:last-child]:sm:col-span-2 [&>:last-child]:lg:col-span-1">
            {plans.map((plan) => (
              <Link
                key={plan.id}
                href={`/train/${plan.id}`}
                className="group block"
              >
                <div className="bg-muted rounded-2xl p-6 border border-border hover:border-orange-500/40 transition-all duration-300 card-glow h-full flex flex-col">
                  {/* Icon */}
                  <div className={`mb-4 ${plan.color}`}>{plan.icon}</div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {plan.description}
                  </p>

                  {/* Meta */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-orange-400" />
                      <span>{plan.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Dumbbell className="w-4 h-4 text-orange-400" />
                      <span>{plan.exerciseCount} exercises</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Flame className="w-4 h-4 text-orange-400" />
                      <span>{plan.difficulty}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-1 text-orange-400 font-medium text-sm group-hover:gap-2 transition-all">
                    <span>{plan.cta || "Start Workout"}</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-muted rounded-2xl p-6 md:p-8 border border-border">
            <h2 className="text-lg font-semibold text-foreground mb-3">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold mb-2">
                  1
                </div>
                <p className="text-muted-foreground">
                  Pick a workout plan that fits your schedule and goal.
                </p>
              </div>
              <div>
                <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold mb-2">
                  2
                </div>
                <p className="text-muted-foreground">
                  Follow the video demo for each exercise. The timer keeps you
                  on track.
                </p>
              </div>
              <div>
                <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold mb-2">
                  3
                </div>
                <p className="text-muted-foreground">
                  Complete the session and track your progress. No equipment
                  needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
