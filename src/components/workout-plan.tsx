"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dumbbell, Clock, Flame, CheckCircle2, Download, Share2, Mail,
  ChevronDown, ChevronUp, Sparkles, Timer, Settings, X, Play, Pause, RotateCcw,
  HelpCircle, ExternalLink, AlertTriangle,
} from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";

interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  weight?: string;
  notes?: string;
}

interface ExerciseDetail {
  steps: string[];
  mistakes: string[];
  videoQuery: string;
}

// Built-in exercise knowledge base for common movements
const EXERCISE_DETAILS: Record<string, ExerciseDetail> = {
  "push-up": {
    steps: ["双手与肩同宽撑地，身体成一条直线", "吸气下放，胸部贴近地面", "呼气推起，手臂伸直但不锁死"],
    mistakes: ["腰部塌陷或臀部抬高", "手肘过度外展（应与身体约45°）", "只做半程，胸部没下去"],
    videoQuery: "push up proper form tutorial",
  },
  "pull-up": {
    steps: ["正握单杠，略宽于肩，身体悬垂", "背阔肌发力拉起，下巴过杠", "控制下放至手臂完全伸直"],
    mistakes: ["借助身体摆动（甩腿）", "只做半程，手臂没伸直", "耸肩，没沉肩收背"],
    videoQuery: "pull up proper form tutorial",
  },
  "squat": {
    steps: ["双脚与肩同宽，脚尖微外展", "屈髋屈膝下蹲，膝盖与脚尖方向一致", "蹲至大腿至少与地面平行，站起夹臀"],
    mistakes: ["膝盖内扣", "脚跟离地", "弯腰弓背，没保持脊柱中立"],
    videoQuery: "squat proper form tutorial",
  },
  "deadlift": {
    steps: ["双脚与髋同宽，杠铃贴近小腿", "挺胸沉肩，核心收紧", "伸髋站起，杠铃沿腿上升，顶峰夹臀"],
    mistakes: ["圆背弯腰", "杠铃远离身体", "伸膝过早，臀部没发力"],
    videoQuery: "deadlift proper form tutorial",
  },
  "bench press": {
    steps: ["肩胛骨收紧下沉，胸部挺起", "握距略宽于肩，下放至胸骨下方", "推起时手臂与身体约45°角"],
    mistakes: ["手腕过度弯曲", "杠铃在胸口弹起", "臀部离开凳面"],
    videoQuery: "bench press proper form tutorial",
  },
  "lunge": {
    steps: ["单脚向前迈出一大步", "前后膝均屈膝90°，后膝接近地面", "前脚蹬地站起，换腿重复"],
    mistakes: ["前膝超过脚尖太多", "上身前倾或后仰", "步距太小，膝盖受力过大"],
    videoQuery: "lunge proper form tutorial",
  },
  "plank": {
    steps: ["前臂撑地，肘在肩膀正下方", "身体成一条直线，核心收紧", "保持呼吸，不要憋气"],
    mistakes: ["臀部抬高或塌陷", "头部下垂", "憋气不呼吸"],
    videoQuery: "plank proper form tutorial",
  },
  "burpee": {
    steps: ["站立，下蹲双手撑地", "双脚后跳成俯卧撑姿势", "做一个俯卧撑，双脚跳回，起身跳起"],
    mistakes: ["背部塌陷", "落地太重，没缓冲", "省略俯卧撑（只做半程）"],
    videoQuery: "burpee proper form tutorial",
  },
  "shoulder press": {
    steps: ["哑铃举至肩高，掌心向前", "垂直向上推起，手臂伸直", "控制下放至起始位置"],
    mistakes: ["腰部过度反弓", "手肘过度外展", "借助腿部晃动"],
    videoQuery: "shoulder press dumbbell form tutorial",
  },
  "bicep curl": {
    steps: ["站姿，哑铃置于身体两侧", "固定上臂，仅前臂向上弯举", "顶峰收缩1秒，缓慢下放"],
    mistakes: ["身体前后晃动借力", "手肘前移", "下放太快，没控制"],
    videoQuery: "bicep curl proper form tutorial",
  },
  "tricep dip": {
    steps: ["双手撑于身后边缘，双腿伸直或屈膝", "屈肘下放，上臂与地面平行", "肱三头肌发力推起"],
    mistakes: ["肩部过度下沉", "手肘过度外展", "只做半程"],
    videoQuery: "tricep dip proper form tutorial",
  },
  "leg raise": {
    steps: ["仰卧或悬垂，双腿伸直", "用下腹力量抬起双腿至约90°", "控制下放，不要借助惯性"],
    mistakes: ["腰部离开地面（拱腰）", "借助摆动惯性", "腿没抬够高度"],
    videoQuery: "leg raise proper form tutorial",
  },
  "mountain climber": {
    steps: ["俯卧撑姿势，核心收紧", "交替提膝向胸部", "保持上身稳定，臀部不要抬高"],
    mistakes: ["臀部抬太高", "上身左右晃动", "动作太快失去控制"],
    videoQuery: "mountain climber proper form tutorial",
  },
  "jumping jack": {
    steps: ["站立，双手放于身体两侧", "跳起同时双脚分开、双手举过头顶", "再次跳起回到起始姿势"],
    mistakes: ["落地太重", "手臂没完全举高", "节奏不均匀"],
    videoQuery: "jumping jack proper form tutorial",
  },
  "high knees": {
    steps: ["原地跑步，膝盖尽量抬高", "摆臂配合，保持节奏", "前脚掌着地，轻盈弹跳"],
    mistakes: ["弯腰驼背", "膝盖抬不够高", "全脚掌重重落地"],
    videoQuery: "high knees proper form tutorial",
  },
  "russian twist": {
    steps: ["坐姿屈膝，上身稍后仰", "双手合十或持重物，左右转体", "眼睛跟随双手，核心发力"],
    mistakes: ["只靠手臂摆动", "脚跟着地借力", "转体幅度太小"],
    videoQuery: "russian twist proper form tutorial",
  },
  "glute bridge": {
    steps: ["仰卧屈膝，双脚踩地", "臀部发力顶起，身体成一条直线", "顶峰夹臀2秒，缓慢下放"],
    mistakes: ["腰部过度反弓", "脚距太远或太近", "用腰顶而不是臀"],
    videoQuery: "glute bridge proper form tutorial",
  },
  "lat pulldown": {
    steps: ["宽握横杆，坐稳，大腿固定", "背阔肌发力下拉至锁骨位置", "控制回放，手臂伸直"],
    mistakes: ["身体过度后仰借力", "用手臂拉而不是背", "回放太快"],
    videoQuery: "lat pulldown proper form tutorial",
  },
  "row": {
    steps: ["俯身约45°，背部平直", "哑铃/杠铃拉向腹部两侧", "肩胛骨后收，顶峰挤压"],
    mistakes: ["弯腰弓背", "用手臂拉，没启动背部", "身体上下晃动"],
    videoQuery: "bent over row proper form tutorial",
  },
  "chest fly": {
    steps: ["仰卧或站姿，微屈肘", "像抱大树一样打开双臂", "胸肌发力合拢，顶峰挤压"],
    mistakes: ["手肘伸太直", "幅度太小", "用肩而不是胸发力"],
    videoQuery: "chest fly proper form tutorial",
  },
};

function getExerciseDetail(name: string): ExerciseDetail | null {
  const key = Object.keys(EXERCISE_DETAILS).find(k =>
    name.toLowerCase().includes(k)
  );
  return key ? EXERCISE_DETAILS[key] : null;
}

function getYouTubeSearchUrl(query: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
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

  // Per-exercise editable state
  const [exerciseData, setExerciseData] = useState<Exercise[]>(plan.exercises);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Detail expand state
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Rest timer state
  const [activeRestIndex, setActiveRestIndex] = useState<number | null>(null);
  const [restTimeLeft, setRestTimeLeft] = useState(0);
  const [restRunning, setRestRunning] = useState(false);
  const restIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Sound
  const playBeep = useCallback((freq = 800, duration = 0.3) => {
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = freq;
      gain.gain.value = 0.3;
      osc.start();
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio not supported
    }
  }, []);

  useEffect(() => {
    const savedState = localStorage.getItem(`workout-${plan.title}`);
    if (savedState) {
      setCompleted(new Set(JSON.parse(savedState)));
    }
  }, [plan.title]);

  useEffect(() => {
    localStorage.setItem(`workout-${plan.title}`, JSON.stringify(Array.from(completed)));
  }, [completed, plan.title]);

  // Rest timer effect
  useEffect(() => {
    if (restRunning && restTimeLeft > 0) {
      restIntervalRef.current = setInterval(() => {
        setRestTimeLeft((prev) => {
          if (prev <= 1) {
            setRestRunning(false);
            playBeep(1200, 0.5);
            return 0;
          }
          if (prev <= 4 && prev > 1) playBeep(1000, 0.15);
          return prev - 1;
        });
      }, 1000);
    } else {
      if (restIntervalRef.current) clearInterval(restIntervalRef.current);
    }
    return () => {
      if (restIntervalRef.current) clearInterval(restIntervalRef.current);
    };
  }, [restRunning, restTimeLeft, playBeep]);

  const startRest = (index: number, restSeconds: number) => {
    if (restIntervalRef.current) clearInterval(restIntervalRef.current);
    setActiveRestIndex(index);
    setRestTimeLeft(restSeconds);
    setRestRunning(true);
    playBeep(600, 0.2);
  };

  const pauseRest = () => setRestRunning(false);
  const resumeRest = () => setRestRunning(true);
  const stopRest = () => {
    setRestRunning(false);
    setRestTimeLeft(0);
    setActiveRestIndex(null);
  };

  const parseRestSeconds = (rest: string) => {
    const match = rest.match(/(\d+)/);
    return match ? parseInt(match[1]) : 60;
  };

  const toggleExercise = (index: number) => {
    const newCompleted = new Set(completed);
    if (newCompleted.has(index)) {
      newCompleted.delete(index);
      stopRest();
    } else {
      newCompleted.add(index);
      // Auto-start rest timer for next exercise
      const restSec = parseRestSeconds(exerciseData[index]?.rest || "60s");
      startRest(index, restSec);
    }
    setCompleted(newCompleted);
  };

  const savePlan = () => {
    const plans = JSON.parse(localStorage.getItem("saved-plans") || "[]");
    const newPlan = {
      ...plan,
      exercises: exerciseData,
      savedAt: new Date().toISOString(),
      completed: Array.from(completed),
    };
    plans.unshift(newPlan);
    localStorage.setItem("saved-plans", JSON.stringify(plans.slice(0, 10)));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const sharePlan = () => {
    const text = `My workout plan: ${plan.title}\n${exerciseData.map(e => `- ${e.name}: ${e.sets} sets x ${e.reps}${e.weight ? ` @ ${e.weight}` : ""}`).join("\n")}`;
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
        body: JSON.stringify({ email, plan: { ...plan, exercises: exerciseData } }),
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

  const updateExercise = (index: number, field: keyof Exercise, value: string | number) => {
    const updated = [...exerciseData];
    updated[index] = { ...updated[index], [field]: value };
    setExerciseData(updated);
  };

  const progress = Math.round((completed.size / exerciseData.length) * 100);

  if (!plan) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

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
          href={`mailto:?subject=My Workout Plan: ${plan.title}&body=${exerciseData.map(e => `- ${e.name}: ${e.sets} sets x ${e.reps}${e.weight ? ` @ ${e.weight}` : ""}`).join("%0A")}`}
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
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Warm-up</h3>
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

        {exerciseData.map((exercise, index) => {
          const detail = getExerciseDetail(exercise.name);
          const isExpanded = expandedIndex === index;

          return (
            <Card
              key={index}
              className={`border-gray-100 shadow-sm transition-all duration-300 ${
                completed.has(index)
                  ? "bg-gray-50 border-gray-200"
                  : "bg-white hover:shadow-md"
              }`}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* Name + Check + How-to */}
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <button
                        onClick={() => toggleExercise(index)}
                        className={`font-semibold text-left transition-colors ${
                          completed.has(index) ? "text-gray-400 line-through" : "text-black"
                        }`}
                      >
                        {exercise.name}
                      </button>
                      {completed.has(index) && (
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                      )}
                      {detail && (
                        <button
                          onClick={() => setExpandedIndex(isExpanded ? null : index)}
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium transition-colors ${
                            isExpanded
                              ? "bg-black text-white"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          <HelpCircle className="w-3 h-3" />
                          {isExpanded ? "Close" : "How to"}
                        </button>
                      )}
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                        {exercise.sets} sets
                      </Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                        {exercise.reps}
                      </Badge>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                        Rest {exercise.rest}
                      </Badge>
                      {exercise.weight && (
                        <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                          {exercise.weight}
                        </Badge>
                      )}
                    </div>

                    {/* Notes — 1 sentence key tip */}
                    {exercise.notes && (
                      <p className="text-sm text-gray-500">{exercise.notes}</p>
                    )}

                    {/* Rest Timer */}
                    {activeRestIndex === index && restTimeLeft > 0 && (
                      <div className="mt-3 bg-orange-50 rounded-xl p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Timer className="w-4 h-4 text-orange-600" />
                          <span className="text-sm text-orange-600 font-medium">Rest Timer</span>
                          <span className="text-lg font-bold text-orange-800 font-mono">
                            {formatTime(restTimeLeft)}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={restRunning ? pauseRest : resumeRest}
                            className="p-1.5 hover:bg-orange-100 rounded-lg transition-colors"
                          >
                            {restRunning ? <Pause className="w-4 h-4 text-orange-600" /> : <Play className="w-4 h-4 text-orange-600" />}
                          </button>
                          <button
                            onClick={stopRest}
                            className="p-1.5 hover:bg-orange-100 rounded-lg transition-colors"
                          >
                            <X className="w-4 h-4 text-orange-600" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right side actions */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => setEditingIndex(editingIndex === index ? null : index)}
                      className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Settings className={`w-4 h-4 ${editingIndex === index ? "text-black" : "text-gray-400"}`} />
                    </button>
                    {!completed.has(index) && (
                      <button
                        onClick={() => toggleExercise(index)}
                        className="p-1.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Exercise Detail Panel */}
                {isExpanded && detail && (
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
                    {/* Steps */}
                    <div>
                      <h4 className="text-sm font-semibold text-black mb-2 flex items-center gap-1.5">
                        <Dumbbell className="w-4 h-4" />
                        Steps
                      </h4>
                      <ol className="space-y-1.5">
                        {detail.steps.map((step, i) => (
                          <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-xs text-gray-400 font-mono mt-0.5 shrink-0">{i + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Common Mistakes */}
                    <div>
                      <h4 className="text-sm font-semibold text-black mb-2 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                        Common Mistakes
                      </h4>
                      <ul className="space-y-1">
                        {detail.mistakes.map((m, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-amber-400 mt-0.5 shrink-0">✗</span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Video Link */}
                    <a
                      href={getYouTubeSearchUrl(detail.videoQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Watch video tutorial on YouTube
                    </a>
                  </div>
                )}

                {/* Edit Panel */}
                {editingIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Sets</label>
                      <input
                        type="number"
                        value={exercise.sets}
                        onChange={(e) => updateExercise(index, "sets", parseInt(e.target.value) || 1)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-black focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Reps</label>
                      <input
                        type="text"
                        value={exercise.reps}
                        onChange={(e) => updateExercise(index, "reps", e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-black focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Rest</label>
                      <input
                        type="text"
                        value={exercise.rest}
                        onChange={(e) => updateExercise(index, "rest", e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-black focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Weight</label>
                      <input
                        type="text"
                        value={exercise.weight || ""}
                        onChange={(e) => updateExercise(index, "weight", e.target.value)}
                        placeholder="e.g. 20kg"
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-black focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Cooldown */}
      {plan.cooldown && plan.cooldown.length > 0 && (
        <Card className="border-gray-100 shadow-sm">
          <CardContent className="p-5">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Cool-down</h3>
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
          {completed.size} / {exerciseData.length} exercises completed
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
