"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Dumbbell, Timer, Target, Activity, Loader2, CheckCircle, Flame, RotateCcw, Play, Pause, X, Info } from "lucide-react"
import { cn } from "@/lib/utils"

const goals = [
  { id: "muscle", label: "Muscle Gain", icon: "💪" },
  { id: "fatloss", label: "Fat Loss", icon: "🔥" },
  { id: "strength", label: "Strength", icon: "⚡" },
  { id: "endurance", label: "Endurance", icon: "🏃" },
  { id: "maintain", label: "Maintain", icon: "⚖️" },
]

const targetAreas = [
  { id: "full", label: "Full Body", icon: Dumbbell },
  { id: "upper", label: "Upper Body", icon: Activity },
  { id: "lower", label: "Lower Body", icon: Target },
  { id: "core", label: "Core", icon: Target },
]

const levels = [
  { id: "beginner", label: "Beginner", desc: "Just started training" },
  { id: "intermediate", label: "Intermediate", desc: "Training for 6+ months" },
  { id: "advanced", label: "Advanced", desc: "Training for 2+ years" },
]

const equipment = [
  { id: "gym", label: "Full Gym" },
  { id: "dumbbells", label: "Dumbbells Only" },
  { id: "home", label: "Bodyweight / No Equipment" },
]

interface Exercise {
  name: string
  sets: number
  reps: string
  rest: string
  weight: string
  notes: string
}

interface WorkoutPlan {
  title: string
  duration: string
  intensity: string
  difficulty: string
  calories: string
  warmup: string[]
  exercises: Exercise[]
  cooldown: string[]
}

function RestTimer({ restSeconds, onComplete }: { restSeconds: number; onComplete?: () => void }) {
  const [timeLeft, setTimeLeft] = useState(restSeconds)
  const [isRunning, setIsRunning] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false)
            onComplete?.()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isRunning, timeLeft, onComplete])

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${m}:${sec.toString().padStart(2, "0")}`
  }

  return (
    <div className="mt-3 p-3 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Timer className="w-4 h-4 text-orange-500" />
        <span className="text-sm font-medium text-orange-600">Rest Timer</span>
        <span className="text-lg font-bold text-orange-600 tabular-nums">{formatTime(timeLeft)}</span>
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="p-1.5 rounded-lg hover:bg-orange-100 transition-colors"
        >
          {isRunning ? <Pause className="w-4 h-4 text-orange-500" /> : <Play className="w-4 h-4 text-orange-500" />}
        </button>
        <button
          onClick={() => { setIsRunning(false); setTimeLeft(restSeconds) }}
          className="p-1.5 rounded-lg hover:bg-orange-100 transition-colors"
        >
          <X className="w-4 h-4 text-orange-500" />
        </button>
      </div>
    </div>
  )
}

export function WorkoutGenerator() {
  const [selectedGoal, setSelectedGoal] = useState<string>("")
  const [selectedArea, setSelectedArea] = useState<string>("")
  const [selectedLevel, setSelectedLevel] = useState<string>("")
  const [selectedEquipment, setSelectedEquipment] = useState<string>("")
  const [duration, setDuration] = useState([45])
  const [notes, setNotes] = useState("")

  const [plan, setPlan] = useState<WorkoutPlan | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(new Set())
  const [activeTimer, setActiveTimer] = useState<number | null>(null)
  const resultRef = useRef<HTMLDivElement>(null)

  const isFormValid = selectedGoal && selectedArea && selectedLevel && selectedEquipment

  async function handleGenerate() {
    if (!isFormValid) return
    setLoading(true)
    setError("")
    setPlan(null)
    setCompletedExercises(new Set())
    setActiveTimer(null)

    try {
      const res = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          goal: selectedGoal,
          experience: selectedLevel,
          duration: duration[0],
          equipment: selectedEquipment,
          targetArea: selectedArea,
          notes: notes || undefined,
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Failed to generate plan")
      }

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let buffer = ""

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          buffer += decoder.decode(value, { stream: true })
        }
      }

      const jsonMatch = buffer.match(/\{[\s\S]*\}/)
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0])
        setPlan(parsed)
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
      } else {
        throw new Error("Invalid response format")
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  function handleReset() {
    setPlan(null)
    setError("")
    setCompletedExercises(new Set())
    setActiveTimer(null)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function toggleComplete(index: number) {
    setCompletedExercises((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
        setActiveTimer(null)
      } else {
        next.add(index)
        const restMatch = plan?.exercises[index]?.rest.match(/(\d+)/)
        if (restMatch) {
          setActiveTimer(index)
        }
      }
      return next
    })
  }

  function parseRestSeconds(restStr: string): number {
    const match = restStr.match(/(\d+)/)
    return match ? parseInt(match[1], 10) : 60
  }

  return (
    <section id="generator" className="py-24 relative bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block lg:sticky lg:top-24"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/workout-3.jpg"
                alt="Fitness Training"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Timer className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Average Workout Duration</div>
                      <div className="text-2xl font-bold text-primary">{duration[0]} min</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form + Result */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Create Your Personalized Workout Plan
            </h2>
            <p className="text-muted-foreground">
              Answer a few simple questions and our AI will generate a personalized workout plan for you in seconds. Whether you want to build muscle, lose fat, or improve endurance, GetFitAI creates a free training program tailored to your fitness level and available equipment.
            </p>
            </div>

            {/* Form Card */}
            <div className="bg-card border border-border rounded-2xl p-6 shadow-lg space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  What is your fitness goal?
                </label>
                <div className="flex flex-wrap gap-2">
                  {goals.map((goal) => (
                    <button
                      key={goal.id}
                      onClick={() => setSelectedGoal(goal.id)}
                      className={cn(
                        "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                        selectedGoal === goal.id
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      )}
                    >
                      {goal.icon} {goal.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Target Area
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {targetAreas.map((area) => {
                    const Icon = area.icon
                    return (
                      <button
                        key={area.id}
                        onClick={() => setSelectedArea(area.id)}
                        className={cn(
                          "flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                          selectedArea === area.id
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        {area.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Experience Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setSelectedLevel(level.id)}
                      className={cn(
                        "flex flex-col items-center px-3 py-3 rounded-xl text-center transition-all",
                        selectedLevel === level.id
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      )}
                    >
                      <span className="font-medium text-sm">{level.label}</span>
                      <span className={cn(
                        "text-xs mt-1",
                        selectedLevel === level.id ? "text-primary-foreground/80" : "text-muted-foreground"
                      )}>
                        {level.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Duration: <span className="text-primary font-bold">{duration[0]}</span> min
                </label>
                <div className="px-2">
                  <Slider
                    value={duration}
                    onValueChange={setDuration}
                    min={15}
                    max={90}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>15 min</span>
                    <span>90 min</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Available Equipment
                </label>
                <div className="flex flex-wrap gap-2">
                  {equipment.map((eq) => (
                    <button
                      key={eq.id}
                      onClick={() => setSelectedEquipment(eq.id)}
                      className={cn(
                        "px-4 py-2 rounded-xl text-sm font-medium transition-all",
                        selectedEquipment === eq.id
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      )}
                    >
                      {eq.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Special Needs or Injuries <span className="text-muted-foreground font-normal">(Optional)</span>
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Example: Lower back issues, avoid deep squats..."
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  rows={2}
                />
              </div>

              <Button
                size="lg"
                onClick={handleGenerate}
                disabled={!isFormValid || loading}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg shadow-xl shadow-primary/25 group rounded-xl disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 w-5 h-5" />
                    Generate Workout Plan
                  </>
                )}
              </Button>

              {!isFormValid && (
                <p className="text-xs text-muted-foreground text-center">
                  Please select all options above to generate your plan
                </p>
              )}

              {error && (
                <div className="p-4 rounded-xl bg-destructive/10 text-destructive text-sm text-center">
                  {error}
                </div>
              )}
            </div>

            {/* Generated Plan Result */}
            <AnimatePresence>
              {plan && (
                <motion.div
                  ref={resultRef}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.5 }}
                  className="mt-8"
                >
                  {/* Plan Header */}
                  <div className="bg-primary text-primary-foreground rounded-2xl p-6 mb-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="inline-flex items-center gap-1 bg-primary-foreground/20 px-3 py-1 rounded-full">
                            <Timer className="w-4 h-4" />
                            {plan.duration}
                          </span>
                          <span className="inline-flex items-center gap-1 bg-primary-foreground/20 px-3 py-1 rounded-full">
                            <Flame className="w-4 h-4" />
                            {plan.calories}
                          </span>
                          <span className="inline-flex items-center gap-1 bg-primary-foreground/20 px-3 py-1 rounded-full">
                            {plan.difficulty}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={handleReset}
                        className="shrink-0 p-2 bg-primary-foreground/20 rounded-lg hover:bg-primary-foreground/30 transition-colors"
                        title="Create new plan"
                      >
                        <RotateCcw className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Warm-up */}
                  <div className="bg-card border border-border rounded-2xl p-6 mb-4">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 text-sm font-bold">W</span>
                      Warm-up
                    </h4>
                    <ul className="space-y-2">
                      {plan.warmup.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Main Workout */}
                  <div className="bg-card border border-border rounded-2xl p-6 mb-4">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">M</span>
                      Main Workout
                    </h4>
                    <div className="space-y-4">
                      {plan.exercises.map((ex, i) => {
                        const isCompleted = completedExercises.has(i)
                        return (
                          <div
                            key={i}
                            className={cn(
                              "p-4 rounded-xl border transition-all cursor-pointer",
                              isCompleted
                                ? "bg-green-50 border-green-200"
                                : "bg-secondary/50 border-transparent hover:bg-secondary"
                            )}
                            onClick={() => toggleComplete(i)}
                          >
                            <div className="flex items-start gap-4">
                              <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-colors",
                                isCompleted
                                  ? "bg-green-500 text-white"
                                  : "bg-primary text-primary-foreground"
                              )}>
                                {isCompleted ? <CheckCircle className="w-5 h-5" /> : i + 1}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2 mb-1">
                                  <h5 className={cn(
                                    "font-semibold",
                                    isCompleted ? "text-green-700 line-through" : "text-foreground"
                                  )}>
                                    {ex.name}
                                  </h5>
                                  {ex.weight && ex.weight !== "BW" && (
                                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                                      {ex.weight}
                                    </span>
                                  )}
                                  {ex.weight === "BW" && (
                                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded">
                                      BW
                                    </span>
                                  )}
                                </div>
                                <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
                                  <span className="bg-muted px-2 py-0.5 rounded-full text-xs">{ex.sets} sets</span>
                                  <span className="bg-muted px-2 py-0.5 rounded-full text-xs">{ex.reps} reps</span>
                                  <span className="bg-muted px-2 py-0.5 rounded-full text-xs">Rest {ex.rest}</span>
                                </div>
                                {ex.notes && (
                                  <p className="text-xs text-muted-foreground mt-2 italic">
                                    {ex.notes}
                                  </p>
                                )}
                              </div>
                            </div>
                            {activeTimer === i && isCompleted && (
                              <RestTimer
                                restSeconds={parseRestSeconds(ex.rest)}
                                onComplete={() => setActiveTimer(null)}
                              />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Cool-down */}
                  <div className="bg-card border border-border rounded-2xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">C</span>
                      Cool-down
                    </h4>
                    <ul className="space-y-2">
                      {plan.cooldown.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <Button
                      onClick={handleReset}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-lg shadow-xl shadow-primary/25"
                    >
                      <RotateCcw className="mr-2 w-5 h-5" />
                      Generate New Plan
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
