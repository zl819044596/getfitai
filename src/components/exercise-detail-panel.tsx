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
              { mode: "minimal" as ViewMode, icon: Layers, label: "简洁" },
              { mode: "timeline" as ViewMode, icon: ListOrdered, label: "步骤" },
              { mode: "keyframes" as ViewMode, icon: ChevronRight, label: "关键帧" },
              { mode: "muscles" as ViewMode, icon: Activity, label: "肌肉" },
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
              <span className="text-xs font-medium text-green-400">已完成</span>
            </div>
          ) : (
            <div className="glass rounded-full px-3 py-1.5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-xs font-medium text-orange-400">进行中</span>
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
        动作 {index + 1} / {total}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{exercise.name}</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-white flex items-center gap-1.5">
          <Dumbbell className="w-3.5 h-3.5" />
          {exercise.sets} 组
        </span>
        <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-white">{exercise.reps} 次</span>
        <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-white flex items-center gap-1.5">
          <Timer className="w-3.5 h-3.5" />
          休息 {exercise.rest}
        </span>
        {exercise.weight && exercise.weight !== "BW" && (
          <span className="bg-orange-500/20 px-3 py-1 rounded-full text-sm text-orange-300">
            {exercise.weight}
          </span>
        )}
        {exercise.weight === "BW" && (
          <span className="bg-slate-700 px-3 py-1 rounded-full text-sm text-slate-400">自重</span>
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
        动作 {index + 1} / {total} · 执行步骤
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
        动作 {index + 1} / {total} · 关键帧
      </div>

      <div className="flex gap-3 mb-4">
        <div className="flex-1 relative rounded-xl overflow-hidden border-2 border-orange-500/50">
          <Image src={imageUrl} alt="起始位置" width={200} height={140} className="w-full h-28 object-cover" />
          <div className="absolute bottom-2 left-2 bg-black/70 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
            起始
          </div>
        </div>
        <div className="flex items-center">
          <ChevronRight className="w-6 h-6 text-orange-400" />
        </div>
        <div className="flex-1 relative rounded-xl overflow-hidden border-2 border-slate-600">
          <Image src={imageUrl} alt="结束位置" width={200} height={140} className="w-full h-28 object-cover" />
          <div className="absolute bottom-2 left-2 bg-black/70 text-slate-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
            结束
          </div>
        </div>
      </div>

      <div className="glass rounded-xl p-3">
        <div className="text-xs font-medium text-white mb-1">要点提示</div>
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
        动作 {index + 1} / {total} · 肌肉刺激
      </div>

      <div className="glass rounded-xl p-4 mb-4">
        <div className="text-xs text-slate-400 mb-3 uppercase tracking-wider">主要刺激肌肉</div>
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
      { title: "起始姿势", desc: "双脚与肩同宽，脚尖微外展，核心收紧" },
      { title: "下蹲", desc: "臀部向后向下坐，保持背部挺直，膝盖沿脚尖方向" },
      { title: "底部位置", desc: "大腿至少与地面平行，保持胸部挺起" },
      { title: "站起", desc: "脚跟发力推地，臀部向前推，回到起始位置" },
    ]
  }
  if (lower.includes("deadlift") || lower.includes("rdl")) {
    return [
      { title: "起始姿势", desc: "双脚与髋同宽，杠铃贴近小腿，背部挺直" },
      { title: "拉起", desc: "臀部向前推，背部保持平直，杠铃沿腿部上滑" },
      { title: "锁定", desc: "站直，肩膀后收，臀部收紧，不要过度后仰" },
      { title: "下放", desc: "臀部向后推，杠铃沿腿部缓慢下放，保持控制" },
    ]
  }
  if (lower.includes("press") || lower.includes("bench")) {
    return [
      { title: "起始姿势", desc: "躺平，肩胛骨收紧下沉，核心稳定" },
      { title: "下放", desc: "控制重量缓慢下放至胸部，肘部约 75° 角" },
      { title: "推起", desc: "胸部发力推起，手臂伸直但不锁死肘关节" },
      { title: "顶峰收缩", desc: "在顶部挤压胸部，保持 1 秒" },
    ]
  }
  if (lower.includes("row")) {
    return [
      { title: "起始姿势", desc: "身体前倾，背部平直，核心收紧" },
      { title: "拉起", desc: "肘部向后上方拉，肩胛骨向中间挤压" },
      { title: "顶峰收缩", desc: "在顶部停顿 1 秒，感受背部收缩" },
      { title: "下放", desc: "控制重量缓慢下放，保持背部张力" },
    ]
  }
  if (lower.includes("lunge")) {
    return [
      { title: "起始姿势", desc: "双脚并拢站立，核心收紧，双手持哑铃" },
      { title: "跨步", desc: "一脚向前迈出一大步，后膝向地面下沉" },
      { title: "底部位置", desc: "前膝呈 90°，后膝接近地面但不触地" },
      { title: "站起", desc: "前脚发力推地，回到起始位置，交替进行" },
    ]
  }

  // Default steps
  return [
    { title: "起始姿势", desc: "调整至正确起始位置，核心收紧" },
    { title: "执行动作", desc: "控制节奏完成动作，感受目标肌肉发力" },
    { title: "顶峰收缩", desc: "在动作顶点停顿 1 秒，最大化肌肉刺激" },
    { title: "控制还原", desc: "缓慢还原至起始位置，保持肌肉张力" },
  ]
}

function getDefaultCues(exerciseName: string): string {
  const lower = exerciseName.toLowerCase()
  if (lower.includes("squat")) return "保持背部挺直 · 膝盖沿脚尖方向 · 重心在脚跟"
  if (lower.includes("deadlift")) return "背部平直 · 杠铃贴近身体 · 臀部发力"
  if (lower.includes("press")) return "肩胛骨收紧 · 核心稳定 · 控制节奏"
  if (lower.includes("row")) return "背部平直 · 肘部向后拉 · 肩胛骨挤压"
  if (lower.includes("curl")) return "上臂固定 · 控制下放 · 不要借力"
  return "控制节奏 · 感受目标肌肉发力 · 保持正确姿势"
}

function getMusclesWorked(exerciseName: string): Array<{ name: string; activation: number }> {
  const lower = exerciseName.toLowerCase()

  if (lower.includes("squat") || lower.includes("goblet")) {
    return [
      { name: "股四头肌", activation: 90 },
      { name: "臀大肌", activation: 75 },
      { name: "腘绳肌", activation: 50 },
      { name: "核心肌群", activation: 40 },
    ]
  }
  if (lower.includes("deadlift") || lower.includes("rdl")) {
    return [
      { name: "腘绳肌", activation: 90 },
      { name: "臀大肌", activation: 85 },
      { name: "下背部", activation: 70 },
      { name: "斜方肌", activation: 50 },
    ]
  }
  if (lower.includes("bench") || lower.includes("chest") || lower.includes("fly")) {
    return [
      { name: "胸大肌", activation: 95 },
      { name: "三角肌前束", activation: 60 },
      { name: "肱三头肌", activation: 50 },
    ]
  }
  if (lower.includes("row") || lower.includes("pulldown") || lower.includes("pull")) {
    return [
      { name: "背阔肌", activation: 90 },
      { name: "菱形肌", activation: 75 },
      { name: "斜方肌中部", activation: 60 },
      { name: "肱二头肌", activation: 50 },
    ]
  }
  if (lower.includes("press") || lower.includes("overhead")) {
    return [
      { name: "三角肌前束", activation: 90 },
      { name: "三角肌中束", activation: 70 },
      { name: "肱三头肌", activation: 60 },
      { name: "上胸", activation: 40 },
    ]
  }
  if (lower.includes("curl")) {
    return [
      { name: "肱二头肌", activation: 95 },
      { name: "肱肌", activation: 60 },
      { name: "前臂肌群", activation: 40 },
    ]
  }
  if (lower.includes("lunge")) {
    return [
      { name: "股四头肌", activation: 85 },
      { name: "臀大肌", activation: 80 },
      { name: "腘绳肌", activation: 45 },
    ]
  }

  return [
    { name: "目标肌群", activation: 80 },
    { name: "辅助肌群", activation: 50 },
    { name: "稳定肌群", activation: 30 },
  ]
}

function getFormChecks(exerciseName: string): string[] {
  const lower = exerciseName.toLowerCase()

  if (lower.includes("squat")) {
    return ["背部挺直", "膝盖对齐脚尖", "重心在脚跟", "下蹲至平行"]
  }
  if (lower.includes("deadlift")) {
    return ["背部平直", "杠铃贴腿", "臀部发力", "不弓背"]
  }
  if (lower.includes("press")) {
    return ["肩胛骨收紧", "核心稳定", "不耸肩", "控制下放"]
  }
  if (lower.includes("row")) {
    return ["背部平直", "肘部向后", "挤压肩胛骨", "不借力"]
  }
  if (lower.includes("curl")) {
    return ["上臂固定", "控制下放", "不借力", "顶峰收缩"]
  }

  return ["保持核心收紧", "控制动作节奏", "感受目标肌肉", "保持正确姿势"]
}
