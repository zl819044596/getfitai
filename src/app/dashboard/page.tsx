"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Award, CalendarDays, ChevronLeft, ChevronRight, Clock3, Dumbbell, Flame, LockKeyhole, Trophy } from "lucide-react";

type Badge = {
  code: string;
  name: string;
  icon: string;
  description: string;
  earned_at: number | null;
};

type ProgressData = {
  stats: { total_workouts: number; total_minutes: number; xp: number; current_streak: number; best_streak: number };
  level: { level: number; xp_into_level: number; xp_for_next: number };
  badges: Badge[];
  calendar: { date: string; count: number }[];
  recent_workouts: { id: string; title: string; duration_minutes: number; completed_at: number; rpe?: string | null }[];
};

const badgeFallbacks: Omit<Badge, "earned_at">[] = [
  { code: "first_workout", name: "First Steps", icon: "🔥", description: "Log your first workout" },
  { code: "streak_3", name: "On a Roll", icon: "⚡", description: "Train for 3 days in a row" },
  { code: "streak_7", name: "Week Warrior", icon: "🏅", description: "Keep a 7-day streak" },
  { code: "workouts_10", name: "Double Digits", icon: "💪", description: "Complete 10 workouts" },
  { code: "workouts_25", name: "Committed", icon: "🎯", description: "Complete 25 workouts" },
  { code: "minutes_300", name: "Time Well Spent", icon: "⏱", description: "Train for 300 minutes" },
  { code: "level_5", name: "Rising Star", icon: "🌟", description: "Reach level 5" },
  { code: "streak_30", name: "Unstoppable", icon: "👑", description: "Keep a 30-day streak" },
];

const rpeLabels: Record<string, string> = { easy: "轻松 💚", moderate: "适中 💛", hard: "吃力 🔥" };

function dateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function monthTitle(date: Date) {
  return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
}

function formatWorkoutDate(timestamp: number) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(new Date(timestamp * 1000));
}

function CalendarMonth({ month, checkedIn }: { month: Date; checkedIn: Map<string, number> }) {
  const start = new Date(month.getFullYear(), month.getMonth(), 1);
  const end = new Date(month.getFullYear(), month.getMonth() + 1, 0);
  const today = dateKey(new Date());
  const cells = Array.from({ length: start.getDay() + end.getDate() }, (_, index) => {
    const day = index - start.getDay() + 1;
    return day > 0 ? new Date(month.getFullYear(), month.getMonth(), day) : null;
  });

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5">
      <h3 className="mb-4 text-base font-bold text-white">{monthTitle(month)}</h3>
      <div className="mb-2 grid grid-cols-7 text-center text-[10px] font-semibold uppercase tracking-wide text-slate-500">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => <span key={day}>{day}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {cells.map((date, index) => {
          if (!date) return <span key={`empty-${index}`} />;
          const key = dateKey(date);
          const count = checkedIn.get(key) ?? 0;
          const isToday = key === today;
          return (
            <div key={key} title={count ? `${count} workout${count > 1 ? "s" : ""}` : undefined} className={`flex aspect-square items-center justify-center rounded-lg text-xs font-semibold transition-colors ${count ? "bg-orange-500 text-white shadow-sm shadow-orange-950/50" : "bg-slate-800/70 text-slate-500"} ${isToday ? "ring-2 ring-orange-300 ring-offset-2 ring-offset-slate-900" : ""}`}>
              {date.getDate()}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function DashboardPage() {
  const [data, setData] = useState<ProgressData | null>(null);
  const [status, setStatus] = useState<"loading" | "unauthenticated" | "ready" | "error">("loading");
  const [calendarMonth, setCalendarMonth] = useState(() => new Date(new Date().getFullYear(), new Date().getMonth(), 1));

  const loadProgress = useCallback(async () => {
    setStatus("loading");
    try {
      const response = await fetch("/api/progress", { credentials: "include", cache: "no-store" });
      if (response.status === 401) {
        setStatus("unauthenticated");
        return;
      }
      if (!response.ok) throw new Error("Failed to load progress");
      setData(await response.json() as ProgressData);
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }, []);

  useEffect(() => { void loadProgress(); }, [loadProgress]);

  const checkedIn = useMemo(() => new Map(data?.calendar.map((entry) => [entry.date, entry.count]) ?? []), [data]);
  const badges = useMemo(() => {
    const received = data?.badges ?? [];
    const knownCodes = new Set(received.map((badge) => badge.code));
    return [...received, ...badgeFallbacks.filter((badge) => !knownCodes.has(badge.code)).map((badge) => ({ ...badge, earned_at: null }))].slice(0, 8);
  }, [data]);
  const xpPercent = data ? Math.min((data.level.xp_into_level / Math.max(data.level.xp_for_next, 1)) * 100, 100) : 0;
  const remainingXp = data ? Math.max(data.level.xp_for_next - data.level.xp_into_level, 0) : 0;
  const calendarMonths = useMemo(() => [-2, -1, 0].map((offset) => new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + offset, 1)), [calendarMonth]);

  if (status === "loading") {
    return <main className="min-h-screen bg-[#020617] px-4 pb-16 pt-28"><div className="mx-auto max-w-6xl animate-pulse space-y-5"><div className="h-44 rounded-3xl bg-slate-900" /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{Array.from({ length: 4 }, (_, i) => <div key={i} className="h-28 rounded-2xl bg-slate-900" />)}</div></div></main>;
  }

  if (status === "unauthenticated") {
    return <main className="flex min-h-screen items-center justify-center bg-[#020617] px-4 pt-16"><div className="max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-8 text-center shadow-2xl"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400"><LockKeyhole className="h-7 w-7" /></div><h1 className="mt-5 text-2xl font-bold text-white">登录查看训练进度</h1><p className="mt-3 text-slate-400">保存训练记录、追踪连续打卡，并解锁你的成就徽章。</p><Link href="/login?next=%2Fdashboard" className="mt-7 inline-flex rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white hover:bg-orange-600">去登录</Link></div></main>;
  }

  if (status === "error" || !data) {
    return <main className="flex min-h-screen items-center justify-center bg-[#020617] px-4 pt-16"><div className="text-center"><p className="text-lg font-semibold text-white">无法加载训练进度</p><button onClick={() => void loadProgress()} className="mt-4 rounded-xl bg-orange-500 px-4 py-2 text-sm font-bold text-white hover:bg-orange-600">重试</button></div></main>;
  }

  return (
    <main className="min-h-screen bg-[#020617] px-4 pb-16 pt-28 text-slate-100 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-7"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-400">Your progress</p><h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Build your streak, one workout at a time.</h1></header>

        <section className="rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/20 via-slate-900 to-slate-900 p-6 shadow-xl shadow-black/20 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center"><div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-orange-500 text-3xl font-black text-white shadow-lg shadow-orange-950/30">LV {data.level.level}</div><div className="min-w-0 flex-1"><div className="flex items-end justify-between gap-4"><div><h2 className="text-xl font-bold text-white">Level {data.level.level}</h2><p className="mt-1 text-sm text-slate-400">{remainingXp > 0 ? `下一级还需 ${remainingXp} XP` : "已达到本级经验目标"}</p></div><span className="text-sm font-bold text-orange-300">{data.level.xp_into_level} / {data.level.xp_for_next} XP</span></div><div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-950/80"><div className="h-full rounded-full bg-orange-500 transition-all" style={{ width: `${xpPercent}%` }} /></div></div></div>
        </section>

        <section className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[{ icon: Flame, label: "当前连续", value: `${data.stats.current_streak} 天`, color: "text-orange-400" }, { icon: Trophy, label: "最佳连续", value: `${data.stats.best_streak} 天`, color: "text-amber-300" }, { icon: Dumbbell, label: "总训练次数", value: data.stats.total_workouts, color: "text-sky-300" }, { icon: Clock3, label: "总分钟", value: data.stats.total_minutes, color: "text-violet-300" }].map(({ icon: Icon, label, value, color }) => <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5"><Icon className={`h-5 w-5 ${color}`} /><p className="mt-4 text-2xl font-bold text-white">{value}</p><p className="mt-1 text-sm text-slate-400">{label}</p></div>)}
        </section>

        <section className="mt-8"><div className="mb-4 flex items-center justify-between"><div><h2 className="text-xl font-bold text-white">打卡日历</h2><p className="mt-1 text-sm text-slate-400">橙色代表完成训练，圆环代表今天。</p></div><div className="flex gap-2"><button aria-label="查看上个月" onClick={() => setCalendarMonth((month) => new Date(month.getFullYear(), month.getMonth() - 1, 1))} className="rounded-lg border border-slate-700 p-2 text-slate-300 hover:border-orange-400 hover:text-orange-300"><ChevronLeft className="h-4 w-4" /></button><button aria-label="查看下个月" onClick={() => setCalendarMonth((month) => new Date(month.getFullYear(), month.getMonth() + 1, 1))} className="rounded-lg border border-slate-700 p-2 text-slate-300 hover:border-orange-400 hover:text-orange-300"><ChevronRight className="h-4 w-4" /></button></div></div><div className="grid gap-4 lg:grid-cols-3">{calendarMonths.map((month) => <CalendarMonth key={`${month.getFullYear()}-${month.getMonth()}`} month={month} checkedIn={checkedIn} />)}</div></section>

        <section className="mt-8"><div className="mb-4 flex items-center gap-2"><Award className="h-5 w-5 text-orange-400" /><h2 className="text-xl font-bold text-white">徽章墙</h2></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{badges.map((badge) => { const earned = badge.earned_at !== null; return <article key={badge.code} className={`relative rounded-2xl border p-4 ${earned ? "border-orange-500/30 bg-orange-500/10" : "border-slate-800 bg-slate-900/60 grayscale opacity-65"}`}><span className="text-3xl">{badge.icon}</span>{!earned && <LockKeyhole className="absolute right-4 top-4 h-4 w-4 text-slate-500" />}<h3 className="mt-3 font-bold text-white">{badge.name}</h3><p className="mt-1 text-sm leading-relaxed text-slate-400">{badge.description}</p></article>; })}</div></section>

        <section className="mt-8"><div className="mb-4 flex items-center gap-2"><CalendarDays className="h-5 w-5 text-orange-400" /><h2 className="text-xl font-bold text-white">最近训练</h2></div><div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">{data.recent_workouts.slice(0, 7).length ? data.recent_workouts.slice(0, 7).map((workout) => <div key={workout.id} className="flex items-center gap-4 border-b border-slate-800 px-4 py-4 last:border-0 sm:px-5"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400"><Dumbbell className="h-5 w-5" /></div><div className="min-w-0 flex-1"><p className="truncate font-semibold text-white">{workout.title}</p><p className="mt-1 text-sm text-slate-500">{formatWorkoutDate(workout.completed_at)} · {workout.duration_minutes} 分钟</p></div>{workout.rpe ? <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300">{rpeLabels[workout.rpe] ?? workout.rpe}</span> : null}</div>) : <div className="px-5 py-10 text-center text-sm text-slate-400">完成第一次训练后，记录会显示在这里。</div>}</div></section>
      </div>
    </main>
  );
}
