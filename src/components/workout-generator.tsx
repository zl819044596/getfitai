"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Sparkles, Dumbbell, Timer, Target, Activity, Loader2, CheckCircle, Flame, RotateCcw, Play, Pause, X, ChevronRight, ChevronLeft, Users, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { ExerciseDetailPanel } from "@/components/exercise-detail-panel"

const goals = [
  { id: "muscle", label: "Build Muscle", desc: "Hypertrophy & size", icon: "💪" },
  { id: "fatloss", label: "Lose Fat", desc: "Calorie burn & tone", icon: "🔥" },
  { id: "strength", label: "Get Stronger", desc: "Power & progression", icon: "⚡" },
  { id: "endurance", label: "Boost Endurance", desc: "Stamina & cardio", icon: "🏃" },
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

const steps = [
  { id: "goal", label: "Goal" },
  { id: "area", label: "Target" },
  { id: "level", label: "Level" },
  { id: "equipment", label: "Equipment" },
  { id: "duration", label: "Duration" },
]

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
    <div className="mt-3 p-3 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Timer className="w-4 h-4 text-orange-400" />
        <span className="text-sm font-medium text-orange-300">Rest Timer</span>
        <span className="text-lg font-bold text-orange-400 tabular-nums">{formatTime(timeLeft)}</span>
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="p-1.5 rounded-lg hover:bg-orange-500/20 transition-colors"
        >
          {isRunning ? <Pause className="w-4 h-4 text-orange-400" /> : <Play className="w-4 h-4 text-orange-400" />}
        </button>
        <button
          onClick={() => { setIsRunning(false); setTimeLeft(restSeconds) }}
          className="p-1.5 rounded-lg hover:bg-orange-500/20 transition-colors"
        >
          <X className="w-4 h-4 text-orange-400" />
        </button>
      </div>
    </div>
  )
}

export function WorkoutGenerator() {
  const [currentStep, setCurrentStep] = useState(0)
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
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null)
  const resultRef = useRef<HTMLDivElement>(null)

  const isFormValid = selectedGoal && selectedArea && selectedLevel && selectedEquipment

  const progress = ((currentStep + 1) / steps.length) * 100

  function canProceed(step: number) {
    switch (step) {
      case 0: return !!selectedGoal
      case 1: return !!selectedArea
      case 2: return !!selectedLevel
      case 3: return !!selectedEquipment
      case 4: return true
      default: return false
    }
  }

  function handleNext() {
    if (currentStep < steps.length - 1 && canProceed(currentStep)) {
      setCurrentStep(currentStep + 1)
    }
  }

  function handleBack() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

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
        const data = await res.json().catch(() => ({})) as { error?: string }
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
        try {
          const parsed = JSON.parse(jsonMatch[0])
          setPlan(parsed)
          setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
          }, 100)
        } catch (parseErr: any) {
          console.error("JSON parse error:", parseErr.message, "Buffer:", buffer.substring(0, 500))
          throw new Error("Failed to parse workout plan. Please try again.")
        }
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
    setSelectedExercise(null)
    setCurrentStep(0)
    setSelectedGoal("")
    setSelectedArea("")
    setSelectedLevel("")
    setSelectedEquipment("")
    setDuration([45])
    setNotes("")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function toggleComplete(index: number) {
    setSelectedExercise(index)
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

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4" translate="no">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-3">I want to...</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {goals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => setSelectedGoal(goal.id)}
                  translate="no"
                  className={cn(
                    "flex flex-col items-center gap-2 p-5 rounded-xl border text-center transition-all",
                    selectedGoal === goal.id
                      ? "border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/20"
                      : "border-slate-700 bg-slate-800/50 hover:border-slate-600 hover:bg-slate-800"
                  )}
                >
                  <div className="text-3xl">{goal.icon}</div>
                  <div className="font-semibold text-white text-sm">{goal.label}</div>
                  <div className="text-xs text-slate-400">{goal.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-4" translate="no">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Target Area</h3>
              <p className="text-sm text-slate-400">Which body parts do you want to focus on?</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {targetAreas.map((area) => {
                const Icon = area.icon
                return (
                  <button
                    key={area.id}
                    onClick={() => setSelectedArea(area.id)}
                    translate="no"
                    className={cn(
                      "flex flex-col items-center gap-2 p-5 rounded-xl border text-center transition-all",
                      selectedArea === area.id
                        ? "border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/20"
                        : "border-slate-700 bg-slate-800/50 hover:border-slate-600 hover:bg-slate-800"
                    )}
                  >
                    <Icon className={cn("w-7 h-7", selectedArea === area.id ? "text-orange-400" : "text-slate-400")} />
                    <span className="font-medium text-white text-sm">{area.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4" translate="no">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Experience Level</h3>
              <p className="text-sm text-slate-400">How long have you been training?</p>
            </div>
            <div className="space-y-3">
              {levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  translate="no"
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all",
                    selectedLevel === level.id
                      ? "border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/20"
                      : "border-slate-700 bg-slate-800/50 hover:border-slate-600 hover:bg-slate-800"
                  )}
                >
                  <div className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
                    selectedLevel === level.id ? "border-orange-500 bg-orange-500" : "border-slate-500"
                  )}>
                    {selectedLevel === level.id && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{level.label}</div>
                    <div className="text-sm text-slate-400">{level.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4" translate="no">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Available Equipment</h3>
              <p className="text-sm text-slate-400">What do you have access to?</p>
            </div>
            <div className="space-y-3">
              {equipment.map((eq) => (
                <button
                  key={eq.id}
                  onClick={() => setSelectedEquipment(eq.id)}
                  translate="no"
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all",
                    selectedEquipment === eq.id
                      ? "border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/20"
                      : "border-slate-700 bg-slate-800/50 hover:border-slate-600 hover:bg-slate-800"
                  )}
                >
                  <div className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
                    selectedEquipment === eq.id ? "border-orange-500 bg-orange-500" : "border-slate-500"
                  )}>
                    {selectedEquipment === eq.id && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <span className="font-semibold text-white">{eq.label}</span>
                </button>
              ))}
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6" translate="no">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Workout Duration</h3>
              <p className="text-sm text-slate-400">How much time do you have?</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-orange-400">{duration[0]}</span>
                <span className="text-lg text-slate-400 ml-1">minutes</span>
              </div>
              <div className="px-2">
                <Slider
                  value={duration}
                  onValueChange={setDuration}
                  min={15}
                  max={90}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>15 min</span>
                  <span>90 min</span>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Special Needs or Injuries <span className="text-slate-500 font-normal">(Optional)</span>
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Example: Lower back issues, avoid deep squats..."
                translate="no"
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500/50 resize-none"
                rows={2}
              />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section id="generator" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px]">
          {/* Left - Form */}
          <div
            className="transition-opacity duration-500"
            style={{ opacity: 1 }}
          >
            {!plan && (
              <>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight" translate="no">
                  AI builds your<br />
                  <span className="text-orange-500">perfect workout</span>
                </h1>
                <p className="text-lg text-slate-400 mb-8" translate="no">
                  Answer 5 questions. Get a personalized program in seconds. Free.
                </p>
              </>
            )}

            {/* Stepper */}
            {!plan && (
              <div className="mb-6" translate="no">
                <div className="flex items-center justify-between mb-2">
                  {steps.map((step, index) => (
                    <div key={step.id} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div
                          className={cn(
                            "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all",
                            index < currentStep
                              ? "bg-orange-500 text-white"
                              : index === currentStep
                                ? "bg-orange-500 text-white ring-2 ring-orange-500/30"
                                : "bg-slate-800 text-slate-500 border border-slate-700"
                          )}
                        >
                          {index < currentStep ? (
                            <CheckCircle className="w-3.5 h-3.5" />
                          ) : (
                            index + 1
                          )}
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={cn(
                            "w-6 sm:w-10 h-0.5 mx-1 transition-all",
                            index < currentStep ? "bg-orange-500" : "bg-slate-800"
                          )}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="w-full h-0.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-500 transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Form Card */}
            {!plan && (
              <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6" translate="no">
                <div
                  key={currentStep}
                  className="transition-all duration-200"
                  style={{
                    opacity: 1,
                    transform: 'translateX(0)',
                  }}
                >
                  {renderStepContent()}
                </div>

                {/* Navigation Buttons */}
                <div className="mt-6 flex items-center justify-between">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    translate="no"
                    className="rounded-xl px-6 border-slate-700 bg-slate-800/50 text-white hover:bg-slate-800 hover:text-white disabled:opacity-30"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back
                  </Button>

                  {currentStep < steps.length - 1 ? (
                    <Button
                      onClick={handleNext}
                      disabled={!canProceed(currentStep)}
                      translate="no"
                      className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 disabled:opacity-30"
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleGenerate}
                      disabled={!isFormValid || loading}
                      translate="no"
                      className="bg-orange-500 hover:bg-orange-600 text-white py-5 px-8 text-base shadow-xl shadow-orange-500/25 rounded-xl disabled:opacity-30"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Zap className="mr-2 w-4 h-4" />
                          Generate My Plan
                        </>
                      )}
                    </Button>
                  )}
                </div>

                {error && (
                  <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                    {error}
                  </div>
                )}
              </div>
            )}

            {/* Generated Plan Result */}
            <div
              ref={resultRef}
              className={cn(
                "transition-all duration-500",
                plan ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none absolute"
              )}
            >
              {plan && (
                <>
                  {/* Plan Header */}
                  <div className="bg-orange-500 rounded-2xl p-6 mb-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                          <span className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-white">
                            <Timer className="w-4 h-4" />
                            {plan.duration}
                          </span>
                          <span className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-white">
                            <Flame className="w-4 h-4" />
                            {plan.calories}
                          </span>
                          <span className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-white">
                            {plan.difficulty}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={handleReset}
                        className="shrink-0 p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                        title="Create new plan"
                      >
                        <RotateCcw className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Warm-up */}
                  <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-4">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold">W</span>
                      Warm-up
                    </h4>
                    <ul className="space-y-2">
                      {plan.warmup.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400">
                          <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Main Workout */}
                  <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-4">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold">M</span>
                      Main Workout
                    </h4>
                    <div className="space-y-4">
                      {plan.exercises.map((ex, i) => {
                        const isCompleted = completedExercises.has(i)
                        const isSelected = selectedExercise === i
                        return (
                          <div
                            key={i}
                            className={cn(
                              "p-4 rounded-xl border transition-all cursor-pointer",
                              isCompleted
                                ? "bg-green-500/10 border-green-500/30"
                                : isSelected
                                  ? "bg-orange-500/10 border-orange-500/50"
                                  : "bg-slate-800/50 border-transparent hover:bg-slate-800"
                            )}
                            onClick={() => toggleComplete(i)}
                          >
                            <div className="flex items-start gap-4">
                              <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-colors",
                                isCompleted
                                  ? "bg-green-500 text-white"
                                  : "bg-orange-500 text-white"
                              )}>
                                {isCompleted ? <CheckCircle className="w-5 h-5" /> : i + 1}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2 mb-1">
                                  <h5 className={cn(
                                    "font-semibold",
                                    isCompleted ? "text-green-400 line-through" : "text-white"
                                  )}>
                                    {ex.name}
                                  </h5>
                                  {ex.weight && ex.weight !== "BW" && (
                                    <span className="text-xs font-medium text-orange-400 bg-orange-500/10 px-2 py-1 rounded">
                                      {ex.weight}
                                    </span>
                                  )}
                                  {ex.weight === "BW" && (
                                    <span className="text-xs font-medium text-slate-500 bg-slate-700 px-2 py-1 rounded">
                                      BW
                                    </span>
                                  )}
                                </div>
                                <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-400">
                                  <span className="bg-slate-700 px-2 py-0.5 rounded-full text-xs">{ex.sets} sets</span>
                                  <span className="bg-slate-700 px-2 py-0.5 rounded-full text-xs">{ex.reps} reps</span>
                                  <span className="bg-slate-700 px-2 py-0.5 rounded-full text-xs">Rest {ex.rest}</span>
                                </div>
                                {ex.notes && (
                                  <p className="text-xs text-slate-500 mt-2 italic">
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
                  <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold">C</span>
                      Cool-down
                    </h4>
                    <ul className="space-y-2">
                      {plan.cooldown.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-400">
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
                      translate="no"
                      className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-orange-500/25"
                    >
                      <RotateCcw className="mr-2 w-5 h-5" />
                      Generate New Plan
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right - Exercise Detail Panel */}
          <ExerciseDetailPanel
            exercise={selectedExercise !== null && plan ? plan.exercises[selectedExercise] : null}
            index={selectedExercise ?? 0}
            total={plan?.exercises.length ?? 0}
            isCompleted={selectedExercise !== null && plan ? completedExercises.has(selectedExercise) : false}
          />
        </div>
      </div>
    </section>
  )
}
