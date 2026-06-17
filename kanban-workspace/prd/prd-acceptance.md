# PRD & Acceptance Criteria — GetFitAI New Follow-Along Workout Plans

## 1. Overview

**Project:** Add 4 new follow-along workout plans to the `/train` page.

**Current state:**
- 3 existing plans: Full Body Burn (15min), Core Crusher (10min), Quick Cardio (5min)
- YouTube embed system replaces local videos
- Timer + rest timer + phase tracking fully implemented

**Brand:**
- English-speaking market (US/international)
- Dark theme with orange accent (`#f97316` / orange-500)
- Target: home workout for young adults replacing gym visits
- No equipment required (bodyweight only)

---

## 2. New Plans Overview

| # | Plan ID | Name | Duration | Difficulty | Exercises | Total Steps |
|---|---------|------|----------|-----------|-----------|------------|
| 1 | `upper-body-push` | Upper Body Push | 10 min | Intermediate | 6 | 10 |
| 2 | `lower-body-strength` | Lower Body Strength | 12 min | Intermediate | 6 | 11 |
| 3 | `full-body-stretch` | Full Body Stretch | 8 min | All Levels | 8 | 10 |
| 4 | `hiit-blast` | HIIT Blast | 7 min | Intermediate | 6 | 9 |

**After this PRD, the /train page will offer 7 plans** (3 existing + 4 new).

---

## 3. Plan Details — Exercise Sequence, Durations & Form Details

### 3.1 Upper Body Push (10 min)

Focus: push-ups, tricep dips, plank variations, shoulder taps. No equipment needed.

**Phase: Warm-up (1:00 total)**

| Order | Exercise | Duration | Rest |
|-------|----------|----------|------|
| 1 | Arm Circles | 30s | 5s |
| 2 | Shoulder Rolls | 25s | — |

*No warm-up video needed** — short dynamic stretch segment; use a simple placeholder or static image.

**Phase: Main Set (7:00 total)**

| Order | Exercise ID | Display Name | Duration | Rest | Sets | Notes |
|-------|------------|--------------|----------|------|------|-------|
| 3 | pushups | Push-Ups | 40s | 25s | 2 | Standard, chest-to-floor |
| 4 | tricep_dips | Tricep Dips | 40s | 25s | 2 | Chair/edge dips |
| 5 | pike_pushups | Pike Push-Ups | 35s | 20s | 2 | Shoulder focus |
| 6 | shoulder_taps | Shoulder Taps | 30s | 15s | 2 | Plank position |
| 7 | pushups | Push-Ups | 30s | — | 1 | Burnout set |

**Finisher (0:30)**

| Order | Exercise ID | Display Name | Duration |
|-------|------------|--------------|----------|
| 8 | plank | Plank Hold | 30s |

**Total active exercise time:** ~7:30 | **Total elapsed:** ~10:00

**New exercises needed:**
- `tricep_dips` — display: "Tricep Dips" — YouTube ID: `8RmD5bU2nMM`
- `pike_pushups` — display: "Pike Push-Ups" — YouTube ID: `4z8QfB3bXMU`
- `shoulder_taps` — display: "Shoulder Taps" — YouTube ID: `ydJ6z5zFdDs`

---

### 3.2 Lower Body Strength (12 min)

Focus: squats, lunges, glute bridges, supermans, calf raises — lower body strength & endurance.

**Warm-up (1:00)**

| Order | Exercise | Duration | Rest |
|-------|----------|----------|------|
| 1 | Bodyweight Squats (slow) | 30s | 5s |
| 2 | Leg Swings (each side) | 25s | — |

**Main Set (8:30 total)**

| Order | Exercise ID | Display Name | Duration | Rest | Sets | Notes |
|-------|------------|--------------|----------|------|------|-------|
| 3 | squats | Squats | 45s | 20s | 2 | Full depth |
| 4 | lunges | Lunges | 45s | 20s | 2 | Alternate legs |
| 5 | glute_bridges | Glute Bridges | 40s | 20s | 2 | Squeeze at top |
| 6 | supermans | Supermans | 35s | 15s | 2 | Lower back focus |
| 7 | calf_raises | Calf Raises | 30s | 15s | 2 | Slow negative |
| 8 | squat holds | Wall Sit | 30s | — | 1 | Isometric finisher |

**Finisher (0:30)**

| Order | Exercise ID | Display Name | Duration |
|-------|------------|--------------|----------|
| 9 | glute_bridges | Glute Bridges | 30s | slow pulse hold |

**Total active exercise time:** ~9:00 | **Total elapsed:** ~12:00

**New exercises needed:**
- `calf_raises` — display: "Calf Raises" — YouTube ID: `-M4-G8p8k6g`
- `wall_sit` — display: "Wall Sit" — YouTube ID: `cQZzQqIbgAs`

---

### 3.3 Full Body Stretch (8 min)

Focus: full-body flexibility, post-workout recovery. Slow, controlled, all-levels.

**Structure: standing → ground, one continuous flow.** No rest between stretches — hold each position.

| Order | Exercise ID | Display Name | Duration | Phase | Notes |
|-------|------------|--------------|----------|-------|-------|
| 1 | neck_rolls | Neck Rolls | 30s | warmup | Slow circles each direction |
| 2 | shoulder_stretch | Shoulder Stretch | 30s | main | Cross-body arm pull (each side) |
| 3 | chest_stretch | Chest Stretch | 30s | main | Hands behind back, open chest |
| 4 | standing_toe_touch | Standing Toe Touch | 40s | main | Fold forward, relax neck |
| 5 | quad_stretch | Quad Stretch | 40s | main | Stand on one leg (each side) |
| 6 | hamstring_stretch | Hamstring Stretch | 40s | main | Leg elevated or seated forward fold |
| 7 | cat_cow | Cat-Cow | 30s | main | Spine mobility on all fours |
| 8 | childs_pose | Child's Pose | 30s | cooldown | Rest position, deep breathing |
| 9 | down_dog | Downward Dog | 30s | cooldown | Pedal feet, open hamstrings |
| 10 | lying_twist | Lying Spinal Twist | 30s | cooldown | Each side, release lower back |

**Total elapsed:** ~8:00 (no rest intervals — continuous flow)

**New exercises needed:**
- `neck_rolls` — display: "Neck Rolls" — YouTube ID: `aFg0FS0bR30`
- `shoulder_stretch` — display: "Shoulder Stretch" — YouTube ID: `aG3T6cGdLII`
- `chest_stretch` — display: "Chest Stretch" — YouTube ID: `fH1mTK7r3MY`
- `standing_toe_touch` — display: "Standing Toe Touch" — YouTube ID: `8SdGlj4vPvo`
- `quad_stretch` — display: "Quad Stretch" — YouTube ID: `q7C1GKaMUXA`
- `hamstring_stretch` — display: "Hamstring Stretch" — YouTube ID: `jPzUd7qT5pI`
- `cat_cow` — display: "Cat-Cow" — YouTube ID: `kSX0hq3X3UA`
- `childs_pose` — display: "Child's Pose" — YouTube ID: `i5GyWOhdCB4`
- `down_dog` — display: "Downward Dog" — YouTube ID: `ECo2OEiTq_s`
- `lying_twist` — display: "Lying Spinal Twist" — YouTube ID: `7Zg8H3kD5DE`

---

### 3.4 HIIT Blast (7 min)

Focus: high-intensity intervals, fat burn, cardiovascular conditioning. 40s work / 15s rest pattern.

**No warm-up (first exercise becomes warmup round).**

| Order | Exercise ID | Display Name | Duration | Rest | Phase | Notes |
|-------|------------|--------------|----------|------|-------|-------|
| 1 | jumping_jacks | Jumping Jacks | 40s | 15s | warmup | Moderate pace as warm-in |
| 2 | burpees | Burpees | 40s | 15s | main | Full burpee, no pushup option |
| 3 | high_knees | High Knees | 40s | 15s | main | Max pace |
| 4 | squat_jumps | Squat Jumps | 35s | 15s | main | Land soft, explode up |
| 5 | mountain_climbers | Mountain Climbers | 40s | 15s | main | Drive knees hard |
| 6 | star_jumps | Star Jumps | 30s | — | finisher | All-out finish |

**Total active exercise time:** ~4:30 | **Total elapsed:** ~7:00 (high density — short rests)

**New exercises needed:**
- `star_jumps` — display: "Star Jumps" — YouTube ID: `MKrRZOe3hvo`

---

## 4. Implementation Requirements

### 4.1 Frontend Changes

| File | Changes Required |
|------|-----------------|
| `src/app/train/train-plants-client.tsx` | Add 4 new `PlanCard` entries to the `plans` array (keep existing 3, add 4 new) |
| `src/app/train/[planId]/train-session-client.tsx` | Add new exercise entries to `allExercises` record + add 4 new `WorkoutPlan` objects to `workoutPlans` array |
| `src/app/train/[planId]/page.tsx` | Add new plan IDs to `generateStaticParams()` + add 4 new entries to `planMeta` record |

### 4.2 New Exercise YouTube IDs to Add

```typescript
// In allExercises Record<string, ExerciseMeta>
tricep_dips:      { name: "tricep_dips",     displayName: "Tricep Dips",      hasVideo: true, youtubeId: "8RmD5bU2nMM" },
pike_pushups:     { name: "pike_pushups",    displayName: "Pike Push-Ups",   hasVideo: true, youtubeId: "4z8QfB3bXMU" },
shoulder_taps:    { name: "shoulder_taps",   displayName: "Shoulder Taps",   hasVideo: true, youtubeId: "ydJ6z5zFdDs" },
calf_raises:      { name: "calf_raises",     displayName: "Calf Raises",     hasVideo: true, youtubeId: "-M4-G8p8k6g" },
wall_sit:         { name: "wall_sit",        displayName: "Wall Sit",        hasVideo: true, youtubeId: "cQZzQqIbgAs" },
neck_rolls:       { name: "neck_rolls",      displayName: "Neck Rolls",      hasVideo: true, youtubeId: "aFg0FS0bR30" },
shoulder_stretch: { name: "shoulder_stretch",displayName: "Shoulder Stretch", hasVideo: true, youtubeId: "aG3T6cGdLII" },
chest_stretch:    { name: "chest_stretch",   displayName: "Chest Stretch",   hasVideo: true, youtubeId: "fH1mTK7r3MY" },
standing_toe_touch: { name: "standing_toe_touch", displayName: "Standing Toe Touch", hasVideo: true, youtubeId: "8SdGlj4vPvo" },
quad_stretch:     { name: "quad_stretch",    displayName: "Quad Stretch",    hasVideo: true, youtubeId: "q7C1GKaMUXA" },
hamstring_stretch:{ name: "hamstring_stretch",displayName: "Hamstring Stretch",hasVideo: true, youtubeId: "jPzUd7qT5pI" },
cat_cow:          { name: "cat_cow",         displayName: "Cat-Cow",         hasVideo: true, youtubeId: "kSX0hq3X3UA" },
childs_pose:      { name: "childs_pose",     displayName: "Child's Pose",    hasVideo: true, youtubeId: "i5GyWOhdCB4" },
down_dog:         { name: "down_dog",        displayName: "Downward Dog",    hasVideo: true, youtubeId: "ECo2OEiTq_s" },
lying_twist:      { name: "lying_twist",     displayName: "Lying Spinal Twist",hasVideo: true, youtubeId: "7Zg8H3kD5DE" },
star_jumps:       { name: "star_jumps",      displayName: "Star Jumps",      hasVideo: true, youtubeId: "MKrRZOe3hvo" },
```

**Total new exercises:** 15
**Total exercises in system after addition:** 25

### 4.3 Design System Notes

| Aspect | Details |
|--------|---------|
| Cards | Same card style as existing — `bg-muted rounded-2xl p-6 border` with hover glow |
| Icons | Upper Body → `Dumbbell`; Lower Body → `Flame`; Stretch → `Sparkles`; HIIT → `Zap` |
| Colors | All cards use `text-orange-400` accent |
| Session | Same timer/rest/video player — no new UI components needed |

---

## 5. Acceptance Criteria

### 5.1 Content Verification (Copy)

- [ ] All 4 new plan cards render correctly on `/train` with name, duration, exercise count, difficulty badge, icon, and description
- [ ] Descriptions are in English, consistent tone with existing plans (motivational, no-equipment emphasis)
- [ ] Plan card grid adjusts to 4 columns on large screens (currently `md:grid-cols-3`) → needs change to `md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` or similar responsive grid with 7 total cards
- [ ] Page title and subtitle unchanged

### 5.2 Functional Verification (Session Player)

- [ ] All 4 new plan detail pages load at `/train/upper-body-push`, `/train/lower-body-strength`, `/train/full-body-stretch`, `/train/hiit-blast`
- [ ] Ready state screen shows correct phase breakdown (warmup / main / finisher) for each plan
- [ ] Start button begins the workout sequence correctly
- [ ] Timer counts down correctly for each exercise duration
- [ ] Rest timer triggers between exercises per spec
- [ ] Videos embed and autoplay for exercises with `hasVideo: true`
- [ ] Exercises without videos (warmup segments) show placeholder icon correctly
- [ ] Skip and Pause controls work
- [ ] Workout completion flow works (completion screen, save to localStorage)
- [ ] `next-up` transition screen shows correct next exercise name

### 5.3 Exercise-Specific Verification

**Upper Body Push (10min):**
- [ ] 8 total steps (6 exercise + 2 rest) — verify step count
- [ ] push-ups, tricep dips, pike push-ups, shoulder taps sequence correct
- [ ] Plank finisher is 30s

**Lower Body Strength (12min):**
- [ ] 11 total steps (7 exercise + 4 rest) — verify
- [ ] Wall sit finisher has no rest after it (last exercise)
- [ ] Calf raises and wall sit videos load correctly

**Full Body Stretch (8min):**
- [ ] 10 total steps — all exercise type, no rest steps
- [ ] All 10 stretch exercises have video IDs
- [ ] Phase labeling: warmup → main → cooldown

**HIIT Blast (7min):**
- [ ] 9 total steps (6 exercise + 3 rest) — verify
- [ ] Consistent 40s work / 15s rest pattern for first 5 exercises
- [ ] Star jumps as finisher — 30s no rest
- [ ] Squat jumps uses existing entry (no video — placeholder works)

### 5.4 SEO & Metadata Verification

- [ ] `/train/[planId]/page.tsx` `generateStaticParams()` includes all 4 new planId values
- [ ] `planMeta` record has entries for all new plans with name + description
- [ ] Metadata titles follow pattern: `"{Name} | Follow-Along Workout | GetFitAI"`
- [ ] Canonical URLs use correct format: `https://www.getfitai.io/train/{planId}/`
- [ ] OpenGraph tags present for each plan page

### 5.5 Grid Layout Verification

- [ ] Train plans page grid accommodates 7 cards without layout breakage
- [ ] Change `md:grid-cols-3` to `md:grid-cols-2 lg:grid-cols-3` (or auto-fit) to handle 7 cards gracefully
- [ ] All card content (icon, name, meta, CTA) renders correctly at all breakpoints

### 5.6 Regression Verification

- [ ] Existing 3 plans (Full Body Burn, Core Crusher, Quick Cardio) still load and work correctly
- [ ] Existing exercise YouTube IDs unchanged
- [ ] Workout history / localStorage still functions
- [ ] No console errors on plan page load or during workout

---

## 6. Effort Estimate

| Area | Estimated Effort |
|------|-----------------|
| Data: add exercises to `allExercises` record | ~15 min |
| Data: add 4 workout plans to `workoutPlans` array | ~20 min |
| UI: add 4 plan cards to `train-plans-client.tsx` | ~15 min |
| Routing: update `generateStaticParams` + `planMeta` | ~10 min |
| Grid: adjust responsive columns for 7 cards | ~5 min |
| Testing: manual verification of all 4 plans | ~20 min |
| **Total** | **~1.5 hrs** |

---

## 7. Files to Modify

| File | What to Change |
|------|---------------|
| `src/app/train/train-plans-client.tsx` | Add 4 new `PlanCard` objects to `plans` array |
| `src/app/train/[planId]/train-session-client.tsx` | Add 16 new exercise entries to `allExercises` + 4 new `WorkoutPlan` objects to `workoutPlans` |
| `src/app/train/[planId]/page.tsx` | Add 4 planIds to `generateStaticParams()` + 4 entries to `planMeta` |
