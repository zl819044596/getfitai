"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Dumbbell, Clock, Flame, CheckCircle2, Download, Share2, Mail,
  ChevronDown, ChevronUp, Sparkles, Timer, Settings, X, Play, Pause, RotateCcw,
  HelpCircle, ExternalLink, AlertTriangle, Zap, ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Exercise {
  name: string
  sets: number
  reps: string
  rest: string
  weight?: string
  notes?: string
}

interface ExerciseDetail {
  steps: string[]
  mistakes: string[]
  videoQuery: string
}

const EXERCISE_DETAILS: Record<string, ExerciseDetail> = {
  "push-up": {
    steps: ["Hands shoulder-width apart, body in a straight line", "Lower down with control, chest close to floor", "Push back up, arms straight but not locked"],
    mistakes: ["Hips sag or pike up", "Elbows flare out too wide (keep ~45°)", "Half reps, chest doesn't reach down"],
    videoQuery: "push up proper form tutorial",
  },
  "pull-up": {
    steps: ["Overhand grip, slightly wider than shoulders, hang freely", "Pull with lats until chin clears the bar", "Lower with control until arms fully extend"],
    mistakes: ["Swinging body for momentum (kipping)", "Half reps, arms don't straighten", "Shrugging shoulders, not engaging back"],
    videoQuery: "pull up proper form tutorial",
  },
  "squat": {
    steps: ["Feet shoulder-width, toes slightly outward", "Hinge hips and bend knees, track knees over toes", "Squat until thighs are at least parallel, stand and squeeze glutes"],
    mistakes: ["Knees cave inward", "Heels lift off ground", "Rounded back, not keeping spine neutral"],
    videoQuery: "squat proper form tutorial",
  },
  "deadlift": {
    steps: ["Feet hip-width, barbell close to shins", "Chest up, shoulders back, core tight", "Drive hips forward, bar travels up legs, squeeze glutes at top"],
    mistakes: ["Rounded lower back", "Bar drifts away from body", "Knees extend too early, no hip drive"],
    videoQuery: "deadlift proper form tutorial",
  },
  "bench press": {
    steps: ["Retract shoulder blades, puff chest up", "Grip slightly wider than shoulders, lower to mid-chest", "Press up, arms angle ~45° from body"],
    mistakes: ["Wrists bent back too far", "Bouncing bar off chest", "Butt lifts off bench"],
    videoQuery: "bench press proper form tutorial",
  },
  "lunge": {
    steps: ["Step forward with one foot into a long stride", "Both knees bend to ~90°, back knee near floor", "Drive through front foot to stand, repeat on other side"],
    mistakes: ["Front knee goes too far past toes", "Torso leaning forward or backward", "Step too short, excess knee stress"],
    videoQuery: "lunge proper form tutorial",
  },
  "plank": {
    steps: ["Forearms on ground, elbows directly under shoulders", "Body in a straight line, core engaged", "Breathe steadily, don't hold breath"],
    mistakes: ["Hips hike up or sag down", "Head drops down", "Holding breath"],
    videoQuery: "plank proper form tutorial",
  },
  "burpee": {
    steps: ["Stand, squat down and place hands on floor", "Jump feet back to plank position", "Do a push-up, jump feet back in, jump up"],
    mistakes: ["Back collapses during plank", "Landing heavily, no soft knees", "Skipping the push-up (half rep)"],
    videoQuery: "burpee proper form tutorial",
  },
  "shoulder press": {
    steps: ["Dumbbells at shoulder height, palms facing forward", "Press straight up until arms are extended", "Lower with control to starting position"],
    mistakes: ["Excessive lower back arch", "Elbows flare too wide", "Using leg drive to cheat"],
    videoQuery: "shoulder press dumbbell form tutorial",
  },
  "bicep curl": {
    steps: ["Stand with dumbbells at your sides", "Keep upper arms fixed, curl forearms up", "Squeeze at the top for 1 second, lower slowly"],
    mistakes: ["Swinging body back and forth", "Elbows drift forward", "Dropping weight too fast, no control"],
    videoQuery: "bicep curl proper form tutorial",
  },
  "tricep dip": {
    steps: ["Hands on edge behind you, legs straight or bent", "Lower until upper arms are parallel to floor", "Press up using triceps"],
    mistakes: ["Shoulders sink too low", "Elbows flare out wide", "Half reps"],
    videoQuery: "tricep dip proper form tutorial",
  },
  "leg raise": {
    steps: ["Lie on back or hang, legs straight", "Use lower abs to lift legs to ~90°", "Lower with control, no swinging"],
    mistakes: ["Lower back arches off ground", "Using momentum to swing", "Legs don't lift high enough"],
    videoQuery: "leg raise proper form tutorial",
  },
  "mountain climber": {
    steps: ["Plank position, core tight", "Alternate driving knees toward chest", "Keep upper body stable, don't raise hips"],
    mistakes: ["Hips raised too high", "Upper body shifting side to side", "Moving too fast, losing control"],
    videoQuery: "mountain climber proper form tutorial",
  },
  "jumping jack": {
    steps: ["Stand with arms at sides", "Jump feet apart while raising arms overhead", "Jump back to starting position"],
    mistakes: ["Landing heavily", "Arms don't fully reach overhead", "Uneven rhythm"],
    videoQuery: "jumping jack proper form tutorial",
  },
  "high knees": {
    steps: ["Run in place, lift knees as high as possible", "Pump arms in rhythm", "Land on forefeet, light and bouncy"],
    mistakes: ["Hunching forward", "Knees not lifted high enough", "Landing flat-footed and heavy"],
    videoQuery: "high knees proper form tutorial",
  },
  "russian twist": {
    steps: ["Sit with knees bent, lean back slightly", "Clasp hands or hold weight, twist side to side", "Eyes follow hands, core drives the motion"],
    mistakes: ["Only moving arms, not torso", "Heels on floor for leverage", "Twisting range too small"],
    videoQuery: "russian twist proper form tutorial",
  },
  "glute bridge": {
    steps: ["Lie on back, knees bent, feet flat", "Drive hips up using glutes, body in straight line", "Squeeze glutes for 2 seconds at top, lower slowly"],
    mistakes: ["Excessive lower back arch", "Feet too far or too close", "Using lower back instead of glutes"],
    videoQuery: "glute bridge proper form tutorial",
  },
  "lat pulldown": {
    steps: ["Wide grip on bar, seated firmly, thighs fixed", "Pull with lats down to collarbone level", "Control the return, arms fully extend"],
    mistakes: ["Leaning back excessively to cheat", "Pulling with arms instead of back", "Returning too fast"],
    videoQuery: "lat pulldown proper form tutorial",
  },
  "row": {
    steps: ["Hinge at hips ~45°, back flat", "Pull dumbbell/barbell toward sides of abdomen", "Retract shoulder blades, squeeze at top"],
    mistakes: ["Rounded back", "Pulling with arms, back not engaged", "Body rocking up and down"],
    videoQuery: "bent over row proper form tutorial",
  },
  "chest fly": {
    steps: ["Lie or stand, elbows slightly bent", "Open arms wide like hugging a big tree", "Squeeze chest to bring arms together"],
    mistakes: ["Elbows too straight", "Range of motion too small", "Using shoulders instead of chest"],
    videoQuery: "chest fly proper form tutorial",
  },
}

function getExerciseDetail(name: string): ExerciseDetail | null {
  const key = Object.keys(EXERCISE_DETAILS).find(k =>
    name.toLowerCase().includes(k)
  )
  return key ? EXERCISE_DETAILS[key] : null
}

function getYouTubeSearchUrl(query: string): string {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
}

interface WorkoutPlanProps {
  plan: {
    title: string
    duration: string
    intensity: string
    exercises: Exercise[]
    warmup?: string[]
    cooldown?: string[]
    difficulty?: string
    calories?: string
  }
  onRegenerate?: () => void
  onAdjust?: (direction: "easier" | "harder") => void
}

export function WorkoutPlan({ plan, onRegenerate, onAdjust }: WorkoutPlanProps) {
  const [completed, setCompleted] = useState<Set<number>>(new Set())
  const [saved, setSaved] = useState(false)
  const [email, setEmail] = useState("")
  const [emailSending, setEmailSending] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [adjusting, setAdjusting] = useState(false)
  const [exerciseData, setExerciseData] = useState<Exercise[]>(plan.exercises)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [activeRestIndex, setActiveRestIndex] = useState<number | null>(null)
  const [restTimeLeft, setRestTimeLeft] = useState(0)
  const [restRunning, setRestRunning] = useState(false)
  const restIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const playBeep = useCallback((freq = 800, duration = 0.3) => {
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.frequency.value = freq
      gain.gain.value = 0.3
      osc.start()
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration)
      osc.stop(ctx.currentTime + duration)
    } catch {
      // Audio not supported
    }
  }, [])

  useEffect(() => {
    const savedState = localStorage.getItem(`workout-${plan.title}`)
    if (savedState) {
      setCompleted(new Set(JSON.parse(savedState)))
    }
  }, [plan.title])

  useEffect(() => {
    localStorage.setItem(`workout-${plan.title}`, JSON.stringify(Array.from(completed)))
  }, [completed, plan.title])

  useEffect(() => {
    if (restRunning && restTimeLeft > 0) {
      restIntervalRef.current = setInterval(() => {
        setRestTimeLeft((prev) => {
          if (prev <= 1) {
            setRestRunning(false)
            playBeep(1200, 0.5)
            return 0
          }
          if (prev <= 4 && prev > 1) playBeep(1000, 0.15)
          return prev - 1
        })
      }, 1000)
    } else {
      if (restIntervalRef.current) clearInterval(restIntervalRef.current)
    }
    return () => {
      if (restIntervalRef.current) clearInterval(restIntervalRef.current)
    }
  }, [restRunning, restTimeLeft, playBeep])

  const startRest = (index: number, restSeconds: number) => {
    if (restIntervalRef.current) clearInterval(restIntervalRef.current)
    setActiveRestIndex(index)
    setRestTimeLeft(restSeconds)
    setRestRunning(true)
    playBeep(600, 0.2)
  }

  const pauseRest = () => setRestRunning(false)
  const resumeRest = () => setRestRunning(true)
  const stopRest = () => {
    setRestRunning(false)
    setRestTimeLeft(0)
    setActiveRestIndex(null)
  }

  const parseRestSeconds = (rest: string) => {
    const match = rest.match(/(\d+)/)
    return match ? parseInt(match[1]) : 60
  }

  const toggleExercise = (index: number) => {
    const newCompleted = new Set(completed)
    if (newCompleted.has(index)) {
      newCompleted.delete(index)
      stopRest()
    } else {
      newCompleted.add(index)
      const restSec = parseRestSeconds(exerciseData[index]?.rest || "60s")
      startRest(index, restSec)
    }
    setCompleted(newCompleted)
  }

  const savePlan = () => {
    const plans = JSON.parse(localStorage.getItem("saved-plans") || "[]")
    const newPlan = {
      ...plan,
      exercises: exerciseData,
      savedAt: new Date().toISOString(),
      completed: Array.from(completed),
    }
    plans.unshift(newPlan)
    localStorage.setItem("saved-plans", JSON.stringify(plans.slice(0, 10)))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const sharePlan = () => {
    const text = `My workout plan: ${plan.title}\n${exerciseData.map(e => `- ${e.name}: ${e.sets} sets x ${e.reps}${e.weight ? ` @ ${e.weight}` : ""}`).join("\n")}`
    navigator.clipboard.writeText(text)
    alert("Workout plan copied to clipboard!")
  }

  const sendEmail = async () => {
    if (!email) return
    setEmailSending(true)
    setEmailSent(false)
    try {
      const res = await fetch("/api/send-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, plan: { ...plan, exercises: exerciseData } }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.success) {
        setEmailSent(true)
        setEmail("")
        setTimeout(() => setEmailSent(false), 3000)
      } else {
        alert(data.error || "Failed to send email. Please try again.")
      }
    } catch {
      alert("Failed to send email. Please try again.")
    } finally {
      setEmailSending(false)
    }
  }

  const handleAdjust = (direction: "easier" | "harder") => {
    setAdjusting(true)
    onAdjust?.(direction)
  }

  const updateExercise = (index: number, field: keyof Exercise, value: string | number) => {
    const updated = [...exerciseData]
    updated[index] = { ...updated[index], [field]: value }
    setExerciseData(updated)
  }

  const progress = Math.round((completed.size / exerciseData.length) * 100)

  if (!plan) return null

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Plan Header - Orange Card */}
      <div className="bg-primary text-primary-foreground rounded-2xl p-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">{plan.title}</h2>
          <div className="flex items-center justify-center gap-3 text-sm flex-wrap">
            <span className="inline-flex items-center gap-1 bg-primary-foreground/20 px-3 py-1 rounded-full">
              <Clock className="w-4 h-4" />
              {plan.duration}
            </span>
            <span className="inline-flex items-center gap-1 bg-primary-foreground/20 px-3 py-1 rounded-full">
              <Flame className="w-4 h-4" />
              {plan.intensity}
            </span>
            {plan.difficulty && (
              <span className="inline-flex items-center gap-1 bg-primary-foreground/20 px-3 py-1 rounded-full">
                {plan.difficulty}
              </span>
            )}
            {plan.calories && (
              <span className="inline-flex items-center gap-1 bg-primary-foreground/20 px-3 py-1 rounded-full">
                ~{plan.calories}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Button
          onClick={savePlan}
          variant={saved ? "default" : "default"}
          className={cn(
            "rounded-full px-5 py-2.5 text-sm font-medium",
            saved
              ? "bg-green-100 text-green-700 hover:bg-green-100"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          <Download className="w-4 h-4 mr-2" />
          {saved ? "Saved!" : "Save Plan"}
        </Button>
        <Button
          onClick={sharePlan}
          variant="outline"
          className="rounded-full px-5 py-2.5 text-sm font-medium border-border hover:bg-secondary"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Copy Plan
        </Button>
        <Button
          variant="outline"
          className="rounded-full px-5 py-2.5 text-sm font-medium border-border hover:bg-secondary"
          onClick={() => {
            window.location.href = `mailto:?subject=My Workout Plan: ${plan.title}&body=${exerciseData.map(e => `- ${e.name}: ${e.sets} sets x ${e.reps}${e.weight ? ` @ ${e.weight}` : ""}`).join("%0A")}`
          }}
        >
          <Mail className="w-4 h-4 mr-2" />
          Email
        </Button>
      </div>

      {/* Email Input */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <p className="text-sm text-muted-foreground mb-3 text-center">
          Want this plan in your inbox?
        </p>
        <div className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-full border border-border bg-background focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
          />
          <Button
            onClick={sendEmail}
            disabled={emailSending || !email}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-medium",
              emailSent
                ? "bg-green-100 text-green-700 hover:bg-green-100"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            {emailSending ? "Sending..." : emailSent ? "Sent!" : "Send"}
          </Button>
        </div>
      </div>

      {/* Warmup */}
      {plan.warmup && plan.warmup.length > 0 && (
        <div className="bg-card border border-border rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 text-sm font-bold">W</span>
            Warm-up
          </h4>
          <ul className="space-y-2">
            {plan.warmup.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Exercises */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide px-1">
          Main Workout — Tap to mark complete
        </h4>

        {exerciseData.map((exercise, index) => {
          const detail = getExerciseDetail(exercise.name)
          const isExpanded = expandedIndex === index
          const isCompleted = completed.has(index)

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "bg-card border rounded-2xl p-5 transition-all duration-300",
                isCompleted
                  ? "border-green-200 bg-green-50/50"
                  : "border-border hover:shadow-md"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  {/* Name + Check + How-to */}
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <button
                      onClick={() => toggleExercise(index)}
                      className={cn(
                        "font-semibold text-left transition-colors",
                        isCompleted ? "text-green-600 line-through" : "text-foreground"
                      )}
                    >
                      {exercise.name}
                    </button>
                    {isCompleted && (
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    )}
                    {detail && (
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                        className={cn(
                          "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium transition-colors",
                          isExpanded
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        )}
                      >
                        <HelpCircle className="w-3 h-3" />
                        {isExpanded ? "Close" : "How to"}
                      </button>
                    )}
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-muted px-2 py-0.5 rounded-full text-xs text-muted-foreground">{exercise.sets} sets</span>
                    <span className="bg-muted px-2 py-0.5 rounded-full text-xs text-muted-foreground">{exercise.reps}</span>
                    <span className="bg-muted px-2 py-0.5 rounded-full text-xs text-muted-foreground">Rest {exercise.rest}</span>
                    {exercise.weight && (
                      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">
                        {exercise.weight}
                      </span>
                    )}
                  </div>

                  {/* Notes */}
                  {exercise.notes && (
                    <p className="text-sm text-muted-foreground">{exercise.notes}</p>
                  )}

                  {/* Rest Timer */}
                  {activeRestIndex === index && restTimeLeft > 0 && (
                    <div className="mt-3 bg-orange-50 rounded-xl p-3 flex items-center justify-between border border-orange-200">
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
                    className="p-1.5 hover:bg-secondary rounded-lg transition-colors"
                  >
                    <Settings className={cn("w-4 h-4", editingIndex === index ? "text-foreground" : "text-muted-foreground")} />
                  </button>
                  {!isCompleted && (
                    <button
                      onClick={() => toggleExercise(index)}
                      className="p-1.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Exercise Detail Panel */}
              <AnimatePresence>
                {isExpanded && detail && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-border space-y-4 overflow-hidden"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1.5">
                        <Dumbbell className="w-4 h-4" />
                        Steps
                      </h4>
                      <ol className="space-y-1.5">
                        {detail.steps.map((step, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-xs text-muted-foreground font-mono mt-0.5 shrink-0">{i + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                        Common Mistakes
                      </h4>
                      <ul className="space-y-1">
                        {detail.mistakes.map((m, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-amber-400 mt-0.5 shrink-0">✗</span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={getYouTubeSearchUrl(detail.videoQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Watch video tutorial on YouTube
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Edit Panel */}
              <AnimatePresence>
                {editingIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-3 overflow-hidden"
                  >
                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">Sets</label>
                      <input
                        type="number"
                        value={exercise.sets}
                        onChange={(e) => updateExercise(index, "sets", parseInt(e.target.value) || 1)}
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">Reps</label>
                      <input
                        type="text"
                        value={exercise.reps}
                        onChange={(e) => updateExercise(index, "reps", e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">Rest</label>
                      <input
                        type="text"
                        value={exercise.rest}
                        onChange={(e) => updateExercise(index, "rest", e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">Weight</label>
                      <input
                        type="text"
                        value={exercise.weight || ""}
                        onChange={(e) => updateExercise(index, "weight", e.target.value)}
                        placeholder="e.g. 20kg"
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:border-primary focus:outline-none"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* Cooldown */}
      {plan.cooldown && plan.cooldown.length > 0 && (
        <div className="bg-card border border-border rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">C</span>
            Cool-down
          </h4>
          <ul className="space-y-2">
            {plan.cooldown.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Progress */}
      <div className="bg-card border border-border rounded-2xl p-6 text-center">
        <p className="text-sm text-muted-foreground mb-2">Workout Progress</p>
        <p className="text-3xl font-bold text-foreground">
          {progress}%
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {completed.size} / {exerciseData.length} exercises completed
        </p>
        <div className="w-full bg-secondary rounded-full h-2 mt-4">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        {progress === 100 && (
          <p className="text-green-600 font-medium mt-3">🎉 Workout complete! Great job!</p>
        )}
      </div>

      {/* Adjust Difficulty */}
      <div className="bg-card border border-border rounded-2xl p-6 text-center">
        <p className="text-sm text-muted-foreground mb-4">Not quite right? Adjust the difficulty:</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => handleAdjust("easier")}
            disabled={adjusting}
            variant="outline"
            className="rounded-full px-5 py-2.5 border-border hover:bg-secondary"
          >
            <ChevronDown className="w-4 h-4 mr-2" />
            Make it Easier
          </Button>
          <Button
            onClick={() => handleAdjust("harder")}
            disabled={adjusting}
            variant="outline"
            className="rounded-full px-5 py-2.5 border-border hover:bg-secondary"
          >
            <ChevronUp className="w-4 h-4 mr-2" />
            Make it Harder
          </Button>
        </div>
      </div>

      {/* Regenerate */}
      {onRegenerate && (
        <button
          onClick={onRegenerate}
          className="w-full py-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          Generate a completely new plan
        </button>
      )}
    </motion.div>
  )
}
