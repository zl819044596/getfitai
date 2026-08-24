"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CalendarRange,
  Check,
  ChevronDown,
  ChevronUp,
  ClipboardCopy,
  Clock3,
  Dumbbell,
  Loader2,
  LogIn,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useAuth } from "@/components/auth-context";
import { cn } from "@/lib/utils";

const goals = [
  { id: "muscle", label: "Build Muscle" },
  { id: "fatloss", label: "Lose Fat" },
  { id: "strength", label: "Get Stronger" },
  { id: "endurance", label: "Boost Endurance" },
];

const targetAreas = [
  { id: "full", label: "Full Body" },
  { id: "upper", label: "Upper" },
  { id: "lower", label: "Lower" },
  { id: "core", label: "Core" },
];

const experienceLevels = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

const equipmentOptions = [
  { id: "gym", label: "Full Gym" },
  { id: "dumbbells", label: "Dumbbells Only" },
  { id: "home", label: "Bodyweight" },
];

type CycleExercise = {
  name: string;
  sets: number | string;
  reps: string;
  rest: string;
  weight: string;
  notes: string;
};

type CycleDay = {
  day: string;
  focus: string;
  intensity: string;
  warmup: string[];
  exercises: CycleExercise[];
  cooldown: string[];
};

type CycleWeek = {
  week: number;
  focus: string;
  days: CycleDay[];
};

type CyclePlan = {
  title: string;
  cycle_length: string | number;
  days_per_week: number;
  session_duration: string | number;
  goal: string;
  overview: string;
  progression_notes: string[];
  weeks: CycleWeek[];
};

type Gate = "signin" | "upgrade" | null;

function ChoiceGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-slate-200">{label}</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={cn(
              "rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors",
              value === option.id
                ? "border-orange-500 bg-orange-500/15 text-orange-200"
                : "border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-600 hover:bg-slate-800",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function GatePanel({ gate }: { gate: Exclude<Gate, null> }) {
  const { login } = useAuth();
  const signIn = gate === "signin";

  return (
    <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 text-center shadow-xl shadow-slate-950/20 sm:p-8">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
        {signIn ? <LogIn className="h-6 w-6" /> : <ShieldCheck className="h-6 w-6" />}
      </div>
      <h2 className="text-2xl font-bold text-white">
        {signIn ? "Sign in to generate your 4-week program" : "4-week programs are a Pro feature"}
      </h2>
      {signIn ? (
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400">
          Sign in to create, save, and revisit your personalized progressive training programs.
        </p>
      ) : (
        <>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400">
            Unlock a complete training cycle instead of a single workout.
          </p>
          <ul className="mx-auto mt-5 max-w-sm space-y-2 text-left text-sm text-slate-300">
            {["Structured progressive plan", "Weekly progression built in", "Upper/lower & PPL splits"].map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-orange-400" />
                {feature}
              </li>
            ))}
          </ul>
        </>
      )}
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        {signIn ? (
          <Button onClick={login} className="rounded-xl bg-orange-500 text-white hover:bg-orange-600">
            <LogIn className="mr-2 h-4 w-4" />
            Continue with Google
          </Button>
        ) : (
          <Link href="/pricing" className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600">
            Upgrade to Pro — $8.99/mo
          </Link>
        )}
        <Link href="/pricing" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-orange-300">
          See pricing →
        </Link>
      </div>
    </div>
  );
}

export function CycleGenerator() {
  const { user, isPro, loading: authLoading } = useAuth();
  const [goal, setGoal] = useState("muscle");
  const [targetArea, setTargetArea] = useState("full");
  const [experience, setExperience] = useState("intermediate");
  const [equipment, setEquipment] = useState("gym");
  const [sessionsPerWeek, setSessionsPerWeek] = useState([4]);
  const [sessionLength, setSessionLength] = useState([45]);
  const [notes, setNotes] = useState("");
  const [plan, setPlan] = useState<CyclePlan | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [gate, setGate] = useState<Gate>(null);
  const [selectedWeek, setSelectedWeek] = useState(0);
  const [view, setView] = useState<"week" | "month">("week");
  const [expandedDays, setExpandedDays] = useState<Set<string>>(new Set());
  const [planId, setPlanId] = useState("");
  const [copied, setCopied] = useState(false);

  const showGate: Gate = gate ?? (user === null ? "signin" : !isPro ? "upgrade" : null);
  const cycleLengthLabel = String(plan?.cycle_length ?? "4").includes("week")
    ? String(plan?.cycle_length)
    : `${plan?.cycle_length ?? 4} weeks`;
  const sessionDurationLabel = String(plan?.session_duration ?? "").match(/min/i)
    ? String(plan?.session_duration)
    : `${plan?.session_duration ?? sessionLength[0]} min`;

  function generatePlanId() {
    return `cycle_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
  }

  function savePlanToStorage(planData: CyclePlan) {
    const id = generatePlanId();
    const record = {
      id,
      plan: planData,
      savedAt: new Date().toISOString(),
      goal,
      experience,
      duration: sessionLength[0],
      equipment,
      type: "cycle",
    };

    try {
      const raw = localStorage.getItem("getfitai_saved_plans");
      const plans: unknown[] = raw ? JSON.parse(raw) : [];
      plans.unshift(record);
      localStorage.setItem("getfitai_saved_plans", JSON.stringify(plans.slice(0, 20)));
      setPlanId(id);
    } catch {
      // The generated plan remains visible even when browser storage is unavailable.
    }

    if (user) {
      fetch("/api/save-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      }).catch(() => console.warn("Failed to save cycle plan to server; local copy is still available."));
    }
  }

  async function handleGenerate() {
    setLoading(true);
    setError("");
    setGate(null);

    try {
      const response = await fetch("/api/generate-cycle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          goal,
          targetArea,
          experience,
          equipment,
          daysPerWeek: sessionsPerWeek[0],
          duration: sessionLength[0],
          notes: notes || undefined,
        }),
      });

      if (response.status === 401) {
        setGate("signin");
        return;
      }
      if (response.status === 403) {
        setGate("upgrade");
        return;
      }
      if (response.status === 429) {
        setError("You’ve reached the generation limit. Please wait a moment and try again.");
        return;
      }
      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error || "Failed to generate your program.");
      }

      const data = (await response.json()) as CyclePlan;
      setPlan(data);
      setSelectedWeek(0);
      setView("week");
      setExpandedDays(new Set());
      savePlanToStorage(data);
      setTimeout(() => document.getElementById("cycle-result")?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setPlan(null);
    setError("");
    setGate(null);
    setPlanId("");
    setCopied(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function copyPlanLink() {
    if (!planId) return;
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/my-plan?id=${encodeURIComponent(planId)}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Could not copy the plan link. Please try again.");
    }
  }

  if (authLoading) {
    return (
      <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/60 text-sm text-slate-400">
        <Loader2 className="mr-2 h-4 w-4 animate-spin text-orange-400" />
        Checking your account…
      </div>
    );
  }

  if (showGate) return <GatePanel gate={showGate} />;

  return (
    <div className="space-y-8">
      {!plan && (
        <div className="rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-5 shadow-xl shadow-slate-950/25 sm:p-7">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400"><CalendarRange className="h-5 w-5" /></div>
            <div>
              <h2 className="font-semibold text-white">Build your training cycle</h2>
              <p className="text-sm text-slate-400">A practical plan with four weeks of progression.</p>
            </div>
          </div>

          <div className="space-y-5">
            <ChoiceGroup label="Goal" options={goals} value={goal} onChange={setGoal} />
            <ChoiceGroup label="Target Area" options={targetAreas} value={targetArea} onChange={setTargetArea} />
            <ChoiceGroup label="Experience" options={experienceLevels} value={experience} onChange={setExperience} />
            <ChoiceGroup label="Equipment" options={equipmentOptions} value={equipment} onChange={setEquipment} />

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-4">
                <div className="mb-4 flex items-center justify-between"><span className="text-sm font-medium text-slate-200">Sessions per week</span><span className="font-semibold text-orange-300">{sessionsPerWeek[0]}</span></div>
                <Slider value={sessionsPerWeek} onValueChange={setSessionsPerWeek} min={2} max={6} step={1} />
                <div className="mt-2 flex justify-between text-xs text-slate-500"><span>2 days</span><span>6 days</span></div>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-4">
                <div className="mb-4 flex items-center justify-between"><span className="text-sm font-medium text-slate-200">Session length</span><span className="font-semibold text-orange-300">{sessionLength[0]} min</span></div>
                <Slider value={sessionLength} onValueChange={setSessionLength} min={15} max={90} step={5} />
                <div className="mt-2 flex justify-between text-xs text-slate-500"><span>15 min</span><span>90 min</span></div>
              </div>
            </div>

            <div>
              <label htmlFor="cycle-notes" className="mb-2 block text-sm font-medium text-slate-200">Notes <span className="font-normal text-slate-500">(optional)</span></label>
              <textarea id="cycle-notes" value={notes} onChange={(event) => setNotes(event.target.value)} rows={3} placeholder="Injuries, schedule preferences, exercises to avoid…" className="w-full resize-none rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-orange-500/60 focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
            </div>

            {error && <div className="rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-center text-sm text-red-300">{error}</div>}

            <Button onClick={handleGenerate} disabled={loading} className="w-full rounded-xl bg-orange-500 py-6 text-base font-semibold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600">
              {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Generating your program…</> : <><Sparkles className="mr-2 h-4 w-4" />Generate 4-Week Program</>}
            </Button>
          </div>
        </div>
      )}

      {plan && (
        <div id="cycle-result" className="space-y-6">
          <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-white shadow-xl shadow-orange-500/20">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-orange-100">Your progressive program</p>
                <h2 className="text-2xl font-bold sm:text-3xl">{plan.title}</h2>
              </div>
              <Button variant="secondary" onClick={reset} className="rounded-xl bg-white/20 text-white hover:bg-white/30 hover:text-white"><RefreshCw className="mr-2 h-4 w-4" />Generate new program</Button>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-sm">
              <span className="rounded-full bg-white/20 px-3 py-1"><CalendarRange className="mr-1 inline h-4 w-4" />{cycleLengthLabel}</span>
              <span className="rounded-full bg-white/20 px-3 py-1"><Clock3 className="mr-1 inline h-4 w-4" />{sessionDurationLabel}</span>
              <span className="rounded-full bg-white/20 px-3 py-1"><Dumbbell className="mr-1 inline h-4 w-4" />{plan.days_per_week} × week</span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5 text-slate-300"><p className="leading-7">{plan.overview}</p></div>

          {planId && <div className="flex flex-col gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between"><span className="text-emerald-200">Saved in this browser{user ? " and your account" : ""}.</span><button onClick={copyPlanLink} className="inline-flex items-center font-medium text-emerald-300 hover:text-emerald-200"><ClipboardCopy className="mr-1.5 h-4 w-4" />{copied ? "Copied!" : "Copy plan link"}</button></div>}

          <div className="flex rounded-xl border border-slate-700 bg-slate-900 p-1">
            {(["week", "month"] as const).map((item) => <button key={item} onClick={() => setView(item)} className={cn("flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors", view === item ? "bg-orange-500 text-white" : "text-slate-400 hover:text-slate-200")}>{item === "week" ? "Week view" : "Month view"}</button>)}
          </div>

          {view === "week" ? (
            <div className="space-y-4">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {plan.weeks.map((week, index) => <button key={`${week.week}-${index}`} onClick={() => setSelectedWeek(index)} className={cn("shrink-0 rounded-lg border px-4 py-2 text-sm font-medium", selectedWeek === index ? "border-orange-500 bg-orange-500/15 text-orange-200" : "border-slate-700 bg-slate-900 text-slate-400 hover:text-slate-200")}>Week {week.week}</button>)}
              </div>
              {plan.weeks[selectedWeek] && <div className="space-y-4">
                <div><h3 className="text-xl font-bold text-white">Week {plan.weeks[selectedWeek].week}</h3><p className="mt-1 text-sm text-slate-400">{plan.weeks[selectedWeek].focus}</p></div>
                <div className="grid gap-4 md:grid-cols-2">
                  {plan.weeks[selectedWeek].days.map((day, dayIndex) => {
                    const key = `${selectedWeek}-${dayIndex}`;
                    const expanded = expandedDays.has(key);
                    return <article key={key} className="overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70">
                      <button type="button" onClick={() => setExpandedDays((current) => { const next = new Set(current); if (next.has(key)) next.delete(key); else next.add(key); return next; })} className="flex w-full items-start justify-between gap-3 p-5 text-left">
                        <div><h4 className="font-semibold text-white">{day.day}</h4><p className="mt-1 text-sm text-slate-400">{day.focus}</p></div>
                        <div className="flex items-center gap-2"><span className="rounded-full bg-orange-500/15 px-2.5 py-1 text-xs font-medium text-orange-300">{day.intensity}</span>{expanded ? <ChevronUp className="mt-1 h-4 w-4 text-slate-400" /> : <ChevronDown className="mt-1 h-4 w-4 text-slate-400" />}</div>
                      </button>
                      {expanded && <div className="border-t border-slate-700/70 px-5 py-4">
                        {day.warmup?.length > 0 && <PlanList title="Warm-up" items={day.warmup} />}
                        <div className="mt-4"><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Exercises</p><div className="space-y-2">{day.exercises?.map((exercise, exerciseIndex) => <div key={`${exercise.name}-${exerciseIndex}`} className="rounded-xl border border-slate-700/70 bg-slate-950/50 p-3"><div className="flex flex-wrap items-start justify-between gap-2"><p className="font-medium text-white">{exercise.name}</p><div className="flex flex-wrap gap-1.5 text-xs"><Badge>{exercise.sets} sets</Badge><Badge>{exercise.reps}</Badge><Badge>{exercise.rest}</Badge>{exercise.weight && <Badge>{exercise.weight}</Badge>}</div></div>{exercise.notes && <p className="mt-2 text-xs leading-5 text-slate-400">{exercise.notes}</p>}</div>)}</div></div>
                        {day.cooldown?.length > 0 && <PlanList title="Cooldown" items={day.cooldown} />}
                      </div>}
                    </article>;
                  })}
                </div>
              </div>}
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {plan.weeks.map((week, index) => <article key={`${week.week}-${index}`} className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5"><p className="text-sm font-semibold text-orange-300">Week {week.week}</p><h3 className="mt-1 font-semibold text-white">{week.focus}</h3><div className="mt-4 flex flex-wrap gap-2">{week.days.map((day, dayIndex) => <span key={`${day.day}-${dayIndex}`} className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-300">{day.day} · {day.focus}</span>)}</div>{plan.progression_notes[index] && <p className="mt-4 border-t border-slate-700/70 pt-4 text-sm leading-6 text-slate-400">{plan.progression_notes[index]}</p>}</article>)}
            </div>
          )}

          <section className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-2"><Zap className="h-5 w-5 text-orange-400" /><h3 className="text-xl font-bold text-white">How your program progresses</h3></div>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{plan.progression_notes.map((note, index) => <li key={`${note}-${index}`} className="rounded-xl bg-slate-950/50 p-4"><span className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-500/15 text-sm font-bold text-orange-300">{index + 1}</span><p className="text-sm font-semibold text-slate-200">Week {index + 1}</p><p className="mt-1 text-sm leading-6 text-slate-400">{note}</p></li>)}</ol>
          </section>
        </div>
      )}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-md bg-slate-800 px-2 py-1 text-slate-300">{children}</span>;
}

function PlanList({ title, items }: { title: string; items: string[] }) {
  return <div className="mt-4"><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</p><ul className="space-y-1.5">{items.map((item, index) => <li key={`${item}-${index}`} className="flex gap-2 text-sm text-slate-400"><Target className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-400" />{item}</li>)}</ul></div>;
}
