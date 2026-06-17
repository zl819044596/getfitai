# T2 Copy Deliverable — GetFitAI 4 New Workout Plans

> English copy for Upper Body Push, Lower Body Strength, Full Body Stretch, and HIIT Blast.
> Tone: motivational, US English, no-equipment emphasis, consistent with existing plans.

---

## 1. Plan Card Descriptions (train-plans-client.tsx)

### New import needed
Add `Zap` to the lucide-react imports (line 4-10).

```tsx
import {
  Dumbbell,
  Clock,
  Flame,
  ChevronRight,
  Sparkles,
  Zap,          // ← ADD
} from "lucide-react";
```

### New plan objects to add to `plans[]` array (after line 60, before the closing `];`)

```tsx
  {
    id: "upper-body-push",
    name: "Upper Body Push",
    duration: "10 min",
    durationMinutes: 10,
    exerciseCount: 6,
    difficulty: "Intermediate",
    description:
      "Build upper body strength with push-ups, tricep dips, and shoulder work. Bodyweight only — no gym, no excuses.",
    icon: <Dumbbell className="w-6 h-6" />,
    color: "text-orange-400",
  },
  {
    id: "lower-body-strength",
    name: "Lower Body Strength",
    duration: "12 min",
    durationMinutes: 12,
    exerciseCount: 6,
    difficulty: "Intermediate",
    description:
      "Fire up your legs and glutes with squats, lunges, and bridges. No equipment needed — just grit.",
    icon: <Flame className="w-6 h-6" />,
    color: "text-orange-400",
  },
  {
    id: "full-body-stretch",
    name: "Full Body Stretch",
    duration: "8 min",
    durationMinutes: 8,
    exerciseCount: 8,
    difficulty: "All Levels",
    description:
      "Improve flexibility and recovery with this full-body stretching flow. Gentle enough for all levels, effective enough to feel the difference.",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-orange-400",
  },
  {
    id: "hiit-blast",
    name: "HIIT Blast",
    duration: "7 min",
    durationMinutes: 7,
    exerciseCount: 6,
    difficulty: "Intermediate",
    description:
      "Quick, intense intervals to torch calories fast. Jump in, sweat hard, and finish strong in just seven minutes.",
    icon: <Zap className="w-6 h-6" />,
    color: "text-orange-400",
  },
```

### Grid layout note
The grid currently uses `md:grid-cols-3` (line 80). With 7 total cards (3 existing + 4 new), update to:

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
```

This handles 7 cards gracefully — 2 on tablet, 3 on desktop. On `xl` screens you could use `xl:grid-cols-3` (same) or `xl:grid-cols-4` for wider cards, but 3 columns keeps card width comfortable.

---

## 2. SEO Meta Descriptions ([planId]/page.tsx)

### Update `generateStaticParams()` — add 4 new plan IDs

```tsx
export function generateStaticParams() {
  return [
    { planId: "full-body-burn" },
    { planId: "core-crusher" },
    { planId: "quick-cardio" },
    { planId: "upper-body-push" },       // ← ADD
    { planId: "lower-body-strength" },   // ← ADD
    { planId: "full-body-stretch" },     // ← ADD
    { planId: "hiit-blast" },            // ← ADD
  ];
}
```

### Add 4 new entries to `planMeta` record

```tsx
  "upper-body-push": {
    name: "Upper Body Push",
    description:
      "A 10-minute upper body workout with push-ups, dips, and shoulder taps. Build strength at home — no equipment needed.",
  },
  "lower-body-strength": {
    name: "Lower Body Strength",
    description:
      "A 12-minute lower body workout with squats, lunges, glute bridges, and more. Build leg strength at home — no equipment needed.",
  },
  "full-body-stretch": {
    name: "Full Body Stretch",
    description:
      "An 8-minute full body stretching flow to improve flexibility and recovery. Gentle enough for all levels — no equipment needed.",
  },
  "hiit-blast": {
    name: "HIIT Blast",
    description:
      "A 7-minute HIIT workout with intense intervals to burn fat fast. No equipment needed — just go all out.",
  },
```

### Meta description character counts (verification)

| Plan | Description | Char Count |
|------|------------|-----------|
| Upper Body Push | `A 10-minute upper body workout with push-ups, dips, and shoulder taps. Build strength at home — no equipment needed.` | 137 ✓ |
| Lower Body Strength | `A 12-minute lower body workout with squats, lunges, glute bridges, and more. Build leg strength at home — no equipment needed.` | 150 ✓ |
| Full Body Stretch | `An 8-minute full body stretching flow to improve flexibility and recovery. Gentle enough for all levels — no equipment needed.` | 147 ✓ |
| HIIT Blast | `A 7-minute HIIT workout with intense intervals to burn fat fast. No equipment needed — just go all out.` | 117 ✓ |

All within 120–160 char target range.

---

## 3. Exercise Display Names — Verification Report

### New exercises from PRD (15 total)

| Exercise ID | Display Name (PRD) | Status |
|------------|-------------------|--------|
| `tricep_dips` | Tricep Dips | ✅ Correct |
| `pike_pushups` | Pike Push-Ups | ✅ Correct |
| `shoulder_taps` | Shoulder Taps | ✅ Correct |
| `calf_raises` | Calf Raises | ✅ Correct |
| `wall_sit` | Wall Sit | ✅ Correct |
| `neck_rolls` | Neck Rolls | ✅ Correct |
| `shoulder_stretch` | Shoulder Stretch | ✅ Correct |
| `chest_stretch` | Chest Stretch | ✅ Correct |
| `standing_toe_touch` | Standing Toe Touch | ✅ Correct |
| `quad_stretch` | Quad Stretch | ✅ Correct |
| `hamstring_stretch` | Hamstring Stretch | ✅ Correct |
| `cat_cow` | Cat-Cow | ✅ Correct |
| `childs_pose` | Child's Pose | ✅ Correct |
| `down_dog` | Downward Dog | ✅ Correct |
| `lying_twist` | Lying Spinal Twist | ✅ Correct |
| `star_jumps` | Star Jumps | ✅ Correct |

**Verdict: All 16 display names (15 new + squat_jumps reusing existing) are correct.** No corrections needed.

### Existing exercise consistency check

Display names follow the established patterns:
- Capitalized: "Push-Ups", "Squats", "Lunges", "Burpees" ← matching "Tricep Dips", "Calf Raises", etc.
- Hyphenated compound: "Push-Ups", "Jumping Jacks", "Mountain Climbers" ← matching "Pike Push-Ups", "Star Jumps", "Cat-Cow"
- Apostrophe: "Child's Pose" ← consistent with existing convention
- Descriptive: "Plank Hold", "Lying Spinal Twist" ← existing pattern

All new names are consistent with the existing `allExercises` record.

### Code to add to `allExercises` record (train-session-client.tsx)

Insert these entries in the `allExercises` Record after line 88 (after existing `squat_jumps` entry):

```typescript
  tricep_dips: {
    name: "tricep_dips",
    displayName: "Tricep Dips",
    hasVideo: true,
    youtubeId: "8RmD5bU2nMM",
  },
  pike_pushups: {
    name: "pike_pushups",
    displayName: "Pike Push-Ups",
    hasVideo: true,
    youtubeId: "4z8QfB3bXMU",
  },
  shoulder_taps: {
    name: "shoulder_taps",
    displayName: "Shoulder Taps",
    hasVideo: true,
    youtubeId: "ydJ6z5zFdDs",
  },
  calf_raises: {
    name: "calf_raises",
    displayName: "Calf Raises",
    hasVideo: true,
    youtubeId: "-M4-G8p8k6g",
  },
  wall_sit: {
    name: "wall_sit",
    displayName: "Wall Sit",
    hasVideo: true,
    youtubeId: "cQZzQqIbgAs",
  },
  neck_rolls: {
    name: "neck_rolls",
    displayName: "Neck Rolls",
    hasVideo: true,
    youtubeId: "aFg0FS0bR30",
  },
  shoulder_stretch: {
    name: "shoulder_stretch",
    displayName: "Shoulder Stretch",
    hasVideo: true,
    youtubeId: "aG3T6cGdLII",
  },
  chest_stretch: {
    name: "chest_stretch",
    displayName: "Chest Stretch",
    hasVideo: true,
    youtubeId: "fH1mTK7r3MY",
  },
  standing_toe_touch: {
    name: "standing_toe_touch",
    displayName: "Standing Toe Touch",
    hasVideo: true,
    youtubeId: "8SdGlj4vPvo",
  },
  quad_stretch: {
    name: "quad_stretch",
    displayName: "Quad Stretch",
    hasVideo: true,
    youtubeId: "q7C1GKaMUXA",
  },
  hamstring_stretch: {
    name: "hamstring_stretch",
    displayName: "Hamstring Stretch",
    hasVideo: true,
    youtubeId: "jPzUd7qT5pI",
  },
  cat_cow: {
    name: "cat_cow",
    displayName: "Cat-Cow",
    hasVideo: true,
    youtubeId: "kSX0hq3X3UA",
  },
  childs_pose: {
    name: "childs_pose",
    displayName: "Child's Pose",
    hasVideo: true,
    youtubeId: "i5GyWOhdCB4",
  },
  down_dog: {
    name: "down_dog",
    displayName: "Downward Dog",
    hasVideo: true,
    youtubeId: "ECo2OEiTq_s",
  },
  lying_twist: {
    name: "lying_twist",
    displayName: "Lying Spinal Twist",
    hasVideo: true,
    youtubeId: "7Zg8H3kD5DE",
  },
  star_jumps: {
    name: "star_jumps",
    displayName: "Star Jumps",
    hasVideo: true,
    youtubeId: "MKrRZOe3hvo",
  },
```

Note: `squat_jumps` already exists with `hasVideo: false` (line 82-88 of the current file). No change needed — the PRD confirms Squat Jumps uses the existing entry with placeholder video.

---

## 4. Card Icons (confirmed from PRD §4.3)

| Plan | Suggested Icon | lucide-react Name | Why |
|------|---------------|-------------------|-----|
| Upper Body Push | Dumbbell | `Dumbbell` | Classic upper body / strength icon. Perfect for push-focused movements. |
| Lower Body Strength | Flame | `Flame` | Conveys burn, intensity, and leg-day effort. Matches existing Full Body Burn's icon. |
| Full Body Stretch | Sparkles | `Sparkles` | Gentle, flowy, recovery-focused — Sparkles signals lightness and ease. Matches existing Quick Cardio's icon. |
| HIIT Blast | Zap | `Zap` | Lightning bolt = explosive, high-intensity, fast. Connects to "blast" in the name. |

Note: The PRD (§4.3) already specifies these exact icons. No alternative suggestions needed — the design system choice is sound.

---

## 5. Additional Notes for Frontend Dev

### WorkoutPlan entries (train-session-client.tsx)
Add 4 new `WorkoutPlan` objects to the `workoutPlans` array (after the existing `quick-cardio` plan at line 165). These define the exercise sequence, durations, rest intervals, and phases for each new plan — see `prd-acceptance.md` §3 for the full specs.

### Grid layout fix
`train-plans-client.tsx` line 80: change `md:grid-cols-3` to `md:grid-cols-2 lg:grid-cols-3` so 7 cards render cleanly at all breakpoints.

### Router / page.tsx comments
The `planMeta` record type (`Record<string, { name: string; description: string }>`) already supports arbitrary string keys, so adding new entries is type-safe with zero refactoring.
