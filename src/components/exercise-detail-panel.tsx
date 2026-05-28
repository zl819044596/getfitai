"use client"

import { useState } from "react"
import Image from "next/image"
import { CheckCircle, Timer, Dumbbell, AlertTriangle, Info, ChevronRight, ListOrdered, Layers, Activity } from "lucide-react"
import { cn } from "@/lib/utils"
import { getExerciseImage } from "@/lib/exercise-images"

interface Exercise {
  name: string
  sets: number
  reps: string
  rest: string
  weight: string
  notes: string
}

interface ExerciseDetailPanelProps {
  exercise: Exercise | null
  index: number
  total: number
  isCompleted: boolean
}

type ViewMode = "minimal" | "timeline" | "keyframes" | "muscles"

export function ExerciseDetailPanel({ exercise, index, total, isCompleted }: ExerciseDetailPanelProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("minimal")

  if (!exercise) {
    return (
      <div className="relative hidden lg:block">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
          <Image
            src="/images/workout-3.jpg"
            alt="Fitness Training"
            width={600}
            height={750}
            className="w-full h-[700px] object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>
      </div>
    )
  }

  const imageUrl = getExerciseImage(exercise.name)

  return (
    <div className="relative hidden lg:block">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
        {/* Main Image */}
        <Image
          src={imageUrl}
          alt={exercise.name}
          width={600}
          height={750}
          className={cn(
            "w-full h-[700px] object-cover transition-all duration-500",
            isCompleted ? "grayscale-[30%]" : ""
          )}
          key={index}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/20" />

        {/* Top: View Mode Switcher */}
        <div className="absolute top-4 left-4 right-4 flex justify-center">
          <div className="glass rounded-full p-1 flex gap-1">
            {([
              { mode: "minimal" as ViewMode, icon: Layers, label: "Minimal" },
              { mode: "timeline" as ViewMode, icon: ListOrdered, label: "Steps" },
              { mode: "keyframes" as ViewMode, icon: ChevronRight, label: "Keyframes" },
              { mode: "muscles" as ViewMode, icon: Activity, label: "Muscles" },
            ]).map(({ mode, icon: Icon, label }) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                  viewMode === mode
                    ? "bg-orange-500 text-white"
                    : "text-slate-400 hover:text-white"
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Top Right: Status */}
        <div className="absolute top-4 right-4">
          {isCompleted ? (
            <div className="glass rounded-full px-3 py-1.5 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-xs font-medium text-green-400">Completed</span>
            </div>
          ) : (
            <div className="glass rounded-full px-3 py-1.5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-xs font-medium text-orange-400">In Progress</span>
            </div>
          )}
        </div>

        {/* Bottom Content - Dynamic based on view mode */}
        <div className="absolute bottom-0 left-0 right-0">
          {viewMode === "minimal" && <MinimalView exercise={exercise} index={index} total={total} />}
          {viewMode === "timeline" && <TimelineView exercise={exercise} index={index} total={total} />}
          {viewMode === "keyframes" && <KeyframesView exercise={exercise} index={index} total={total} />}
          {viewMode === "muscles" && <MusclesView exercise={exercise} index={index} total={total} />}
        </div>
      </div>
    </div>
  )
}

// ========== MINIMAL VIEW ==========
function MinimalView({ exercise, index, total }: { exercise: Exercise; index: number; total: number }) {
  return (
    <div className="p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
      <div className="text-orange-400 text-xs font-medium mb-2">
        Exercise {index + 1} / {total}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{exercise.name}</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-white flex items-center gap-1.5">
          <Dumbbell className="w-3.5 h-3.5" />
          {exercise.sets} sets
        </span>
        <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-white">{exercise.reps} reps</span>
        <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-white flex items-center gap-1.5">
          <Timer className="w-3.5 h-3.5" />
          Rest {exercise.rest}
        </span>
        {exercise.weight && exercise.weight !== "BW" && (
          <span className="bg-orange-500/20 px-3 py-1 rounded-full text-sm text-orange-300">
            {exercise.weight}
          </span>
        )}
        {exercise.weight === "BW" && (
          <span className="bg-slate-700 px-3 py-1 rounded-full text-sm text-slate-400">Bodyweight</span>
        )}
      </div>

      {exercise.notes && (
        <div className="glass rounded-xl p-4">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-slate-300 leading-relaxed">{exercise.notes}</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ========== TIMELINE VIEW ==========
function TimelineView({ exercise, index, total }: { exercise: Exercise; index: number; total: number }) {
  const steps = generateSteps(exercise.name)

  return (
    <div className="p-6 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent max-h-[400px] overflow-y-auto">
      <div className="text-orange-400 text-xs font-medium mb-3">
        Exercise {index + 1} / {total} · Execution Steps
      </div>

      <div className="space-y-0">
        {steps.map((step, i) => (
          <div key={i}>
            <div className="flex items-start gap-3">
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5",
                  i === 0 ? "bg-orange-500 text-white" : "bg-slate-700 text-slate-300"
                )}
              >
                {i + 1}
              </div>
              <div className="pb-4">
                <div className="text-sm font-medium text-white">{step.title}</div>
                <div className="text-xs text-slate-400 mt-0.5">{step.desc}</div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="w-0.5 h-4 bg-gradient-to-b from-orange-500/50 to-transparent ml-[13px]" />
            )}
          </div>
        ))}
      </div>

      {exercise.notes && (
        <div className="mt-2 glass rounded-xl p-3">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-slate-300">{exercise.notes}</p>
          </div>
        </div>
      )}
    </div>
  )
}

// ========== KEYFRAMES VIEW ==========
function KeyframesView({ exercise, index, total }: { exercise: Exercise; index: number; total: number }) {
  const imageUrl = getExerciseImage(exercise.name)

  return (
    <div className="p-6 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
      <div className="text-orange-400 text-xs font-medium mb-3">
        Exercise {index + 1} / {total} · Keyframes
      </div>

      <div className="flex gap-3 mb-4">
        <div className="flex-1 relative rounded-xl overflow-hidden border-2 border-orange-500/50">
          <Image src={imageUrl} alt="Start Position" width={200} height={140} className="w-full h-28 object-cover" />
          <div className="absolute bottom-2 left-2 bg-black/70 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
            Start
          </div>
        </div>
        <div className="flex items-center">
          <ChevronRight className="w-6 h-6 text-orange-400" />
        </div>
        <div className="flex-1 relative rounded-xl overflow-hidden border-2 border-slate-600">
          <Image src={imageUrl} alt="End Position" width={200} height={140} className="w-full h-28 object-cover" />
          <div className="absolute bottom-2 left-2 bg-black/70 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
            End
          </div>
        </div>
      </div>

      <div className="glass rounded-xl p-3">
        <div className="text-xs font-medium text-white mb-1">Key Cues</div>
        <div className="text-xs text-slate-300">{exercise.notes || getDefaultCues(exercise.name)}</div>
      </div>
    </div>
  )
}

// ========== MUSCLES VIEW ==========
function MusclesView({ exercise, index, total }: { exercise: Exercise; index: number; total: number }) {
  const muscles = getMusclesWorked(exercise.name)

  return (
    <div className="p-6 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
      <div className="text-orange-400 text-xs font-medium mb-3">
        Exercise {index + 1} / {total} · Muscle Activation
      </div>

      <div className="glass rounded-xl p-4 mb-4">
        <div className="text-xs text-slate-400 mb-3 uppercase tracking-wider">Primary Muscles Worked</div>
        <div className="space-y-3">
          {muscles.map((muscle, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: i === 0 ? "#f97316" : i === 1 ? "#fb923c" : "#94a3b8",
                  boxShadow: i === 0 ? "0 0 8px #f97316" : "none",
                }}
              />
              <div className="flex-1">
                <div className="text-sm font-medium">{muscle.name}</div>
                <div className="w-full h-1.5 bg-slate-700 rounded-full mt-1">
                  <div
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: `${muscle.activation}%`,
                      background: i === 0 ? "#f97316" : i === 1 ? "#fb923c" : "#94a3b8",
                    }}
                  />
                </div>
              </div>
              <div className="text-xs text-slate-400">{muscle.activation}%</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {getFormChecks(exercise.name).map((check, i) => (
          <div key={i} className="flex items-center gap-2 text-xs">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-slate-300">{check}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ========== HELPERS ==========

function generateSteps(exerciseName: string): Array<{ title: string; desc: string }> {
  const lower = exerciseName.toLowerCase()

  if (lower.includes("squat")) {
    return [
      { title: "Starting Position", desc: "Feet shoulder-width apart, toes slightly turned out, core engaged" },
      { title: "Squat Down", desc: "Hips back and down, keep back straight, knees follow toe direction" },
      { title: "Bottom Position", desc: "Thighs at least parallel to ground, keep chest up" },
      { title: "Stand Up", desc: "Push through heels, hips forward, return to starting position" },
    ]
  }
  if (lower.includes("deadlift") || lower.includes("rdl")) {
    return [
      { title: "Starting Position", desc: "Feet hip-width apart, barbell close to shins, back straight" },
      { title: "Pull Up", desc: "Hips forward, keep back flat, barbell slides up legs" },
      { title: "Lockout", desc: "Stand tall, shoulders back, glutes tight, don't over-arch" },
      { title: "Lower Down", desc: "Hips back, barbell slides down legs, maintain control" },
    ]
  }
  if (lower.includes("press") || lower.includes("bench")) {
    return [
      { title: "Starting Position", desc: "Lie flat, retract and depress shoulder blades, core stable" },
      { title: "Lower Down", desc: "Control weight slowly to chest, elbows at ~75° angle" },
      { title: "Press Up", desc: "Drive through chest, arms straight but don't lock elbows" },
      { title: "Peak Contraction", desc: "Squeeze chest at top, hold for 1 second" },
    ]
  }
  if (lower.includes("row")) {
    return [
      { title: "Starting Position", desc: "Hinge forward, back flat, core engaged" },
      { title: "Pull Up", desc: "Elbows back and up, squeeze shoulder blades together" },
      { title: "Peak Contraction", desc: "Pause at top for 1 second, feel back squeeze" },
      { title: "Lower Down", desc: "Control weight slowly, maintain back tension" },
    ]
  }
  if (lower.includes("lunge")) {
    return [
      { title: "Starting Position", desc: "Stand with feet together, core engaged, hold dumbbells" },
      { title: "Step Forward", desc: "Take a large step forward, lower back knee toward floor" },
      { title: "Bottom Position", desc: "Front knee at 90°, back knee close to floor but not touching" },
      { title: "Stand Up", desc: "Drive through front foot, return to start, alternate legs" },
    ]
  }

  // Default steps
  return [
    { title: "Starting Position", desc: "Set up in correct starting position, core engaged" },
    { title: "Execute", desc: "Control tempo through the movement, feel target muscles work" },
    { title: "Peak Contraction", desc: "Pause at the top for 1 second, maximize muscle stimulation" },
    { title: "Controlled Return", desc: "Slowly return to starting position, maintain muscle tension" },
  ]
}

function getDefaultCues(exerciseName: string): string {
  const lower = exerciseName.toLowerCase()
  if (lower.includes("squat")) return "Keep back straight · Knees follow toes · Weight on heels"
  if (lower.includes("deadlift")) return "Flat back · Bar close to body · Drive through hips"
  if (lower.includes("press")) return "Retract shoulder blades · Stable core · Control tempo"
  if (lower.includes("row")) return "Flat back · Elbows back · Squeeze shoulder blades"
  if (lower.includes("curl")) return "Upper arms fixed · Control lowering · No swinging"
  return "Control tempo · Feel target muscles · Maintain proper form"
}

function getMusclesWorked(exerciseName: string): Array<{ name: string; activation: number }> {
  const lower = exerciseName.toLowerCase()

  if (lower.includes("squat") || lower.includes("goblet")) {
    return [
      { name: "Quadriceps", activation: 90 },
      { name: "Glutes", activation: 75 },
      { name: "Hamstrings", activation: 50 },
      { name: "Core", activation: 40 },
    ]
  }
  if (lower.includes("deadlift") || lower.includes("rdl")) {
    return [
      { name: "Hamstrings", activation: 90 },
      { name: "Glutes", activation: 85 },
      { name: "Lower Back", activation: 70 },
      { name: "Traps", activation: 50 },
    ]
  }
  if (lower.includes("bench") || lower.includes("chest") || lower.includes("fly")) {
    return [
      { name: "Pectoralis Major", activation: 95 },
      { name: "Front Deltoids", activation: 60 },
      { name: "Triceps", activation: 50 },
    ]
  }
  if (lower.includes("row") || lower.includes("pulldown") || lower.includes("pull")) {
    return [
      { name: "Latissimus Dorsi", activation: 90 },
      { name: "Rhomboids", activation: 75 },
      { name: "Middle Traps", activation: 60 },
      { name: "Biceps", activation: 50 },
    ]
  }
  if (lower.includes("press") || lower.includes("overhead")) {
    return [
      { name: "Front Deltoids", activation: 90 },
      { name: "Side Deltoids", activation: 70 },
      { name: "Triceps", activation: 60 },
      { name: "Upper Chest", activation: 40 },
    ]
  }
  if (lower.includes("curl")) {
    return [
      { name: "Biceps", activation: 95 },
      { name: "Brachialis", activation: 60 },
      { name: "Forearms", activation: 40 },
    ]
  }
  if (lower.includes("lunge")) {
    return [
      { name: "Quadriceps", activation: 85 },
      { name: "Glutes", activation: 80 },
      { name: "Hamstrings", activation: 45 },
    ]
  }

  return [
    { name: "Target Muscle", activation: 80 },
    { name: "Assisting Muscles", activation: 50 },
    { name: "Stabilizer Muscles", activation: 30 },
  ]
}

function getFormChecks(exerciseName: string): string[] {
  const lower = exerciseName.toLowerCase()

  if (lower.includes("squat")) {
    return ["Keep back straight", "Knees follow toes", "Weight on heels", "Squat to parallel"]
  }
  if (lower.includes("deadlift")) {
    return ["Flat back", "Bar close to legs", "Drive through hips", "No rounding"]
  }
  if (lower.includes("press")) {
    return ["Retract shoulder blades", "Stable core", "No shrugging", "Control lowering"]
  }
  if (lower.includes("row")) {
    return ["Flat back", "Elbows back", "Squeeze shoulder blades", "No swinging"]
  }
  if (lower.includes("curl")) {
    return ["Upper arms fixed", "Control lowering", "No swinging", "Peak contraction"]
  }

  return ["Keep core engaged", "Control movement tempo", "Feel target muscles", "Maintain proper form"]
}
