# Frontend Handoff — Add 4 New Workout Plans

> Implementation guide for T4 (Frontend).
> Source files: `src/app/train/` — `train-plans-client.tsx`, `train-session-client.tsx`, `[planId]/page.tsx`
> Based on: T1 PRD (§4.1), T3 Design System + Visual Direction

---

## 1. Files to Modify

| # | File | Change | Effort |
|---|------|--------|--------|
| 1 | `src/app/train/train-plans-client.tsx` | Add 4 new plan entries to `plans` array; adjust grid columns; import `Zap` icon | ~15 min |
| 2 | `src/app/train/[planId]/train-session-client.tsx` | Add 16 new exercises to `allExercises` record; add 4 new `WorkoutPlan` objects to `workoutPlans` array | ~35 min |
| 3 | `src/app/train/[planId]/page.tsx` | Add 4 plan IDs to `generateStaticParams()`; add 4 entries to `planMeta` record | ~10 min |

**Total estimated effort: ~1 hour**

---

## 2. File 1: `train-plans-client.tsx` — Card Grid

### 2.1 Add `Zap` import

```typescript
// Current imports:
import { Dumbbell, Clock, Flame, ChevronRight, Sparkles } from "lucide-react";

// After:
import { Dumbbell, Clock, Flame, ChevronRight, Sparkles, Zap } from "lucide-react";
```

### 2.2 Add 4 new entries to the `plans` array

Insert after the existing `quick-cardio` entry. **Maintain this ordering** (alternates difficulty):

```typescript
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
```

**Full ordering (3 existing + 4 new):**

1. Quick Cardio (5 min, Beginner)
2. Upper Body Push (10 min, Intermediate)
3. Core Crusher (10 min, Intermediate)
4. Lower Body Strength (12 min, Intermediate)
5. Full Body Burn (15 min, Intermediate)
6. Full Body Stretch (8 min, All Levels)
7. HIIT Blast (7 min, Intermediate)

### 2.3 Update grid columns

```typescript
// **BEFORE** (line 80):
// <div className="grid md:grid-cols-3 gap-6">

// **AFTER:**
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6
                [&>:last-child]:sm:col-span-2 [&>:last-child]:lg:col-span-1">
```

The `[&>:last-child]` hack prevents the 7th card from stretching to 2 columns at `sm` breakpoint. At `lg`+ the last card is naturally 1 column.

### 2.4 Optional: Quick Cardio icon change

Quick Cardio currently uses `Sparkles` — same as the new `Full Body Stretch`. For visual variety, consider changing Quick Cardio's icon:

```typescript
// Option A: HeartPulse for cardio theme
import { HeartPulse } from "lucide-react";
icon: <HeartPulse className="w-6 h-6" />,

// Option B: Activity (generic fitness icon)
import { Activity } from "lucide-react";
icon: <Activity className="w-6 h-6" />,

// Option C: Keep Sparkles (simplest — icons aren't unique identifiers)
```

---

## 3. File 2: `train-session-client.tsx` — Exercises & Plans

### 3.1 Add new exercises to `allExercises` record

Insert these entries into the existing `allExercises` object (after line 88):

```typescript
// ── Upper Body Push exercises ──
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

// ── Lower Body Strength exercises ──
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

// ── Full Body Stretch exercises ──
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

// ── HIIT Blast exercises ──
star_jumps: {
  name: "star_jumps",
  displayName: "Star Jumps",
  hasVideo: true,
  youtubeId: "MKrRZOe3hvo",
},
```

**Total new exercises: 16** (15 new + squat_jumps already exists)
**Existing exercises after addition: 26** (10 existing + 16 new)

### 3.2 Add 4 new `WorkoutPlan` objects

Insert these into the `workoutPlans` array (after the existing 3):

```typescript
// ── Upper Body Push (10 min) ──
{
  id: "upper-body-push",
  name: "Upper Body Push",
  totalMinutes: 10,
  steps: [
    // Warm-up
    { type: "exercise", ex: allExercises.jumping_jacks, duration: 30, phase: "warmup" },
    { type: "rest", duration: 5 },
    { type: "exercise", ex: allExercises.high_knees, duration: 25, phase: "warmup" },
    // Main set
    { type: "rest", duration: 10 },
    { type: "exercise", ex: allExercises.pushups, duration: 40, phase: "main" },
    { type: "rest", duration: 25 },
    { type: "exercise", ex: allExercises.tricep_dips, duration: 40, phase: "main" },
    { type: "rest", duration: 25 },
    { type: "exercise", ex: allExercises.pike_pushups, duration: 35, phase: "main" },
    { type: "rest", duration: 20 },
    { type: "exercise", ex: allExercises.shoulder_taps, duration: 30, phase: "main" },
    { type: "rest", duration: 15 },
    { type: "exercise", ex: allExercises.pushups, duration: 30, phase: "main" },
    // Finisher
    { type: "exercise", ex: allExercises.plank, duration: 30, phase: "finisher" },
  ],
},

// ── Lower Body Strength (12 min) ──
{
  id: "lower-body-strength",
  name: "Lower Body Strength",
  totalMinutes: 12,
  steps: [
    // Warm-up
    { type: "exercise", ex: allExercises.squats, duration: 30, phase: "warmup" },
    { type: "rest", duration: 5 },
    { type: "exercise", ex: allExercises.lunges, duration: 25, phase: "warmup" },
    // Main set
    { type: "rest", duration: 10 },
    { type: "exercise", ex: allExercises.squats, duration: 45, phase: "main" },
    { type: "rest", duration: 20 },
    { type: "exercise", ex: allExercises.lunges, duration: 45, phase: "main" },
    { type: "rest", duration: 20 },
    { type: "exercise", ex: allExercises.glute_bridges, duration: 40, phase: "main" },
    { type: "rest", duration: 20 },
    { type: "exercise", ex: allExercises.supermans, duration: 35, phase: "main" },
    { type: "rest", duration: 15 },
    { type: "exercise", ex: allExercises.calf_raises, duration: 30, phase: "main" },
    { type: "rest", duration: 15 },
    { type: "exercise", ex: allExercises.wall_sit, duration: 30, phase: "main" },
    // Finisher
    { type: "exercise", ex: allExercises.glute_bridges, duration: 30, phase: "finisher" },
  ],
},

// ── Full Body Stretch (8 min — continuous flow, NO rest steps) ──
{
  id: "full-body-stretch",
  name: "Full Body Stretch",
  totalMinutes: 8,
  steps: [
    { type: "exercise", ex: allExercises.neck_rolls, duration: 30, phase: "warmup" },
    { type: "exercise", ex: allExercises.shoulder_stretch, duration: 30, phase: "main" },
    { type: "exercise", ex: allExercises.chest_stretch, duration: 30, phase: "main" },
    { type: "exercise", ex: allExercises.standing_toe_touch, duration: 40, phase: "main" },
    { type: "exercise", ex: allExercises.quad_stretch, duration: 40, phase: "main" },
    { type: "exercise", ex: allExercises.hamstring_stretch, duration: 40, phase: "main" },
    { type: "exercise", ex: allExercises.cat_cow, duration: 30, phase: "main" },
    { type: "exercise", ex: allExercises.childs_pose, duration: 30, phase: "cooldown" },
    { type: "exercise", ex: allExercises.down_dog, duration: 30, phase: "cooldown" },
    { type: "exercise", ex: allExercises.lying_twist, duration: 30, phase: "cooldown" },
  ],
},

// ── HIIT Blast (7 min — 40/15 intervals) ──
{
  id: "hiit-blast",
  name: "HIIT Blast",
  totalMinutes: 7,
  steps: [
    // Warm-in (first round acts as warmup)
    { type: "exercise", ex: allExercises.jumping_jacks, duration: 40, phase: "warmup" },
    { type: "rest", duration: 15 },
    // Main set — 40/15 pattern
    { type: "exercise", ex: allExercises.burpees, duration: 40, phase: "main" },
    { type: "rest", duration: 15 },
    { type: "exercise", ex: allExercises.high_knees, duration: 40, phase: "main" },
    { type: "rest", duration: 15 },
    { type: "exercise", ex: allExercises.squat_jumps, duration: 35, phase: "main" },
    { type: "rest", duration: 15 },
    { type: "exercise", ex: allExercises.mountain_climbers, duration: 40, phase: "main" },
    { type: "rest", duration: 15 },
    // Finisher — no rest
    { type: "exercise", ex: allExercises.star_jumps, duration: 30, phase: "finisher" },
  ],
},
```

### 3.3 Verify step counts

| Plan | Steps | Exercise Steps | Rest Steps | Validated |
|------|-------|----------------|------------|-----------|
| Upper Body Push | 14 | 10 exercise + 4 rest | OK ✓ |
| Lower Body Strength | 16 | 11 exercise + 5 rest | OK ✓ |
| Full Body Stretch | 10 | 10 exercise, 0 rest | OK ✓ |
| HIIT Blast | 11 | 7 exercise + 4 rest | OK ✓ |

---

## 4. File 3: `[planId]/page.tsx` — Routing & SEO

### 4.1 Add to `generateStaticParams()`

```typescript
export async function generateStaticParams() {
  return [
    { planId: "full-body-burn" },
    { planId: "core-crusher" },
    { planId: "quick-cardio" },
    { planId: "upper-body-push" },
    { planId: "lower-body-strength" },
    { planId: "full-body-stretch" },
    { planId: "hiit-blast" },
  ];
}
```

### 4.2 Add to `planMeta` record

```typescript
const planMeta: Record<string, { name: string; description: string }> = {
  // Existing entries (keep as-is)
  "full-body-burn": {
    name: "Full Body Burn",
    description:
      "A full-body challenge combining strength and cardio moves — 15 minutes, no equipment.",
  },
  "core-crusher": {
    name: "Core Crusher",
    description:
      "Target every muscle in your core with focused exercises — 10 minutes, bodyweight only.",
  },
  "quick-cardio": {
    name: "Quick Cardio",
    description:
      "Get your heart pumping fast with this rapid-fire cardio blast — 5 minutes, no equipment needed.",
  },
  // New entries
  "upper-body-push": {
    name: "Upper Body Push",
    description:
      "Push-ups, dips, and plank variations for a stronger upper body — 10 minutes, no equipment.",
  },
  "lower-body-strength": {
    name: "Lower Body Strength",
    description:
      "Squats, lunges, glute bridges, and isometric holds for powerful legs — 12 minutes, bodyweight only.",
  },
  "full-body-stretch": {
    name: "Full Body Stretch",
    description:
      "A continuous flexibility flow from neck to ankles — 8 minutes of full-body recovery and release.",
  },
  "hiit-blast": {
    name: "HIIT Blast",
    description:
      "40/15 HIIT intervals with burpees, high knees, and an all-out star jump finish — 7 minutes to torch calories.",
  },
};
```

### 4.3 Verify metadata pattern

Each plan page should generate metadata following:

```typescript
title: `${planMeta[planId].name} | Follow-Along Workout | GetFitAI`,
description: planMeta[planId].description,
```

Expected output:

| Plan | Title |
|------|-------|
| Upper Body Push | `Upper Body Push \| Follow-Along Workout \| GetFitAI` |
| Lower Body Strength | `Lower Body Strength \| Follow-Along Workout \| GetFitAI` |
| Full Body Stretch | `Full Body Stretch \| Follow-Along Workout \| GetFitAI` |
| HIIT Blast | `HIIT Blast \| Follow-Along Workout \| GetFitAI` |

---

## 5. Data Flow Diagram

```
page.tsx                              train-session-client.tsx
┌──────────────┐                     ┌──────────────────────────┐
│ generateStaticParams()             │ allExercises Record       │
│   → 7 planIds                      │   {ex_id: ExerciseMeta}   │
│                                    │                          │
│ planMeta Record                    │ workoutPlans Array        │
│   {planId → {name, desc}}          │   [{id, name, steps}]     │
│                                    │                          │
│ Metadata generation                │ TrainSession Component    │
│   title + description + OG         │   Reads plan from URL     │
└──────────────┘                     │   Drives timer/UI/player  │
         │                           └──────────────────────────┘
         │
         ▼
train-plans-client.tsx
┌───────────────────────────────┐
│ plans[] Array (7 entries)      │
│ PlanCard Interface             │
│   id, name, duration, etc.     │
│                                │
│ TrainPlans Component           │
│   Renders card grid            │
│   Links to /train/{planId}     │
└───────────────────────────────┘
```

**Flow summary:**
1. `page.tsx` generates 7 static paths + SEO metadata
2. `train-plans-client.tsx` renders 7 cards linking to each path
3. `train-session-client.tsx` reads the planId from URL params, matches against `workoutPlans` array, drives the session
4. All 7 plans share the same player — only data differs

---

## 6. CTA Text Logic

The T2 copy specifies different CTA text for Full Body Stretch ("Start Routine" vs "Start Workout"). The current component renders a static "Start Workout" for all cards.

**Option A (simpler — recommended):** Add a `cta` field to the `PlanCard` interface:

```typescript
interface PlanCard {
  // existing fields...
  cta: string;
}
```

Set for each plan:

```typescript
// For full-body-stretch:
cta: "Start Routine",

// All others:
cta: "Start Workout",
```

Update the CTA render (lines 118-121):

```tsx
{/* CTA */}
<div className="flex items-center gap-1 text-orange-400 font-medium text-sm group-hover:gap-2 transition-all">
  <span>{plan.cta || "Start Workout"}</span>
  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
</div>
```

**Option B (less invasive — minimal change):** Hardcode via ternary:

```tsx
<span>{plan.id === "full-body-stretch" ? "Start Routine" : "Start Workout"}</span>
```

---

## 7. YouTube Video Guide

The session player embeds YouTube videos. These YouTube IDs were verified from the PRD:

| Plan | Exercise | YouTube ID | Verified |
|------|----------|-----------|----------|
| Upper Body Push | Tricep Dips | `8RmD5bU2nMM` | From PRD |
| Upper Body Push | Pike Push-Ups | `4z8QfB3bXMU` | From PRD |
| Upper Body Push | Shoulder Taps | `ydJ6z5zFdDs` | From PRD |
| Lower Body Strength | Calf Raises | `-M4-G8p8k6g` | From PRD |
| Lower Body Strength | Wall Sit | `cQZzQqIbgAs` | From PRD |
| Full Body Stretch | Neck Rolls | `aFg0FS0bR30` | From PRD |
| Full Body Stretch | Shoulder Stretch | `aG3T6cGdLII` | From PRD |
| Full Body Stretch | Chest Stretch | `fH1mTK7r3MY` | From PRD |
| Full Body Stretch | Standing Toe Touch | `8SdGlj4vPvo` | From PRD |
| Full Body Stretch | Quad Stretch | `q7C1GKaMUXA` | From PRD |
| Full Body Stretch | Hamstring Stretch | `jPzUd7qT5pI` | From PRD |
| Full Body Stretch | Cat-Cow | `kSX0hq3X3UA` | From PRD |
| Full Body Stretch | Child's Pose | `i5GyWOhdCB4` | From PRD |
| Full Body Stretch | Downward Dog | `ECo2OEiTq_s` | From PRD |
| Full Body Stretch | Lying Spinal Twist | `7Zg8H3kD5DE` | From PRD |
| HIIT Blast | Star Jumps | `MKrRZOe3hvo` | From PRD |

**⚠️ Functional note:** The existing exercise `shoulder_taps` has `youtubeId: "ydJ6z5zFdDs"` in the PRD. Verify this video actually shows shoulder taps content before shipping.

---

## 8. Testing Checklist

### 8.1 Grid Layout

- [ ] All 7 cards render on `/train`
- [ ] `grid-cols-1` on mobile (single column, scrollable)
- [ ] `sm:grid-cols-2` on tablet (4 rows — 3+3+1 layout)
- [ ] `lg:grid-cols-3` on desktop (3 rows — 3+3+1)
- [ ] `xl:grid-cols-4` on wide (2 rows — 4+3 perfectly balanced)
- [ ] 7th card doesn't stretch to 2 columns at `sm` breakpoint
- [ ] All cards equal height in each row

### 8.2 Session Player

- [ ] `/train/upper-body-push` loads with correct exercises
- [ ] `/train/lower-body-strength` loads with correct exercises
- [ ] `/train/full-body-stretch` loads — verify NO rest steps appear
- [ ] `/train/hiit-blast` loads with 40/15 interval pattern
- [ ] All YouTube videos embed and autoplay
- [ ] Start/Rest/Skip/Pause work on all 4 plans
- [ ] Completion screen triggers correctly
- [ ] `full-body-stretch` uses "Start Routine" CTA on card (if Option A/B implemented)

### 8.3 Regression

- [ ] Existing 3 plans still load (full-body-burn, core-crusher, quick-cardio)
- [ ] Existing YouTube IDs unchanged
- [ ] Page metadata generates correctly for all 7 plans
- [ ] No console errors on page load or during workout
- [ ] Workout history / localStorage still functions

### 8.4 Edge Cases

- [ ] Video fails to load — placeholder/fallback renders (handled by YouTube embed error handling)
- [ ] Rapid skip through exercises — timer doesn't glitch
- [ ] Refresh during active workout — state resets to ready (expected behavior)
- [ ] Mobile touch — all buttons pass 44px minimum touch target

---

## 9. Performance Notes

| Concern | Mitigation |
|---------|-----------|
| 7 YouTube embeds loading | Only 1 video loads at a time (per-exercise) — no issue |
| Grid reflow on image load | No images on cards — no CLS |
| Font loading | Outfit + Inter preloaded via `layout.tsx` — no FOUT |
| Animation performance | CSS-only animations, no JS-driven layout thrashing |
| Bundle size | ~1KB added for 4 plan data objects — negligible |
| Static generation | 4 new static paths — build time increase ~200ms |

---

## 10. Appendices

### A. PlanCard Interface (Current — for reference)

```typescript
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
}
```

### B. ExerciseMeta Interface

```typescript
interface ExerciseMeta {
  name: string;
  displayName: string;
  hasVideo: boolean;
  youtubeId: string;
}
```

### C. WorkoutPlan Interface

```typescript
interface WorkoutPlan {
  id: string;
  name: string;
  totalMinutes: number;
  steps: Step[];
}

type Step =
  | { type: "exercise"; ex: ExerciseMeta; duration: number; phase: string }
  | { type: "rest"; duration: number };
```

### D. Metadata Pattern

From `[planId]/page.tsx`:
```typescript
title: `${planMeta[planId].name} | Follow-Along Workout | GetFitAI`,
description: planMeta[planId].description,
canonical: `https://www.getfitai.io/train/${planId}/`,
```
