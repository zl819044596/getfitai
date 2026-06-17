# Copy Handoff — GetFitAI New Workout Plans

> Delivery: T2 (Copywriting) → T3 (Design) → T4 (Frontend)
> Written: 2026-06-14
> Copywriter: content profile
> Market: English, US/international

---

## 1. Deliverables Summary

| File | Content | Status |
|------|---------|--------|
| `plan-descriptions.md` | Full English copy for all 4 plans — headlines, subtitles, taglines, CTAs, value props, target audience, key differentiators, exercise sequences | ✅ Complete |
| `plan-names.md` | Internationalized name validation with SEO analysis, country notes, French Canadian translations | ✅ Complete |
| `copy-handoff.md` | This document — handoff rules, file-to-component mapping, content constants | ✅ Complete |

---

## 2. Copy → Component Mapping

Each new plan needs copy in exactly **3 frontend locations** (mapped from the PRD's `planMeta`, `plans array`, and card UI):

### A. Plan Meta in `page.tsx` — `planMeta` record

For SEO metadata (title, description) and breadcrumbs. Copy to use:

```typescript
planMeta: {
  'upper-body-push': {
    name: 'Upper Body Push',
    description: 'Push-ups, dips, and plank variations for a stronger upper body — 10 minutes, no equipment.',
  },
  'lower-body-strength': {
    name: 'Lower Body Strength',
    description: 'Squats, lunges, glute bridges, and isometric holds for powerful legs — 12 minutes, bodyweight only.',
  },
  'full-body-stretch': {
    name: 'Full Body Stretch',
    description: 'A continuous flexibility flow from neck to ankles — 8 minutes of full-body recovery and release.',
  },
  'hiit-blast': {
    name: 'HIIT Blast',
    description: '40/15 HIIT intervals with burpees, high knees, and an all-out star jump finish — 7 minutes to torch calories.',
  },
}
```

Metadata title pattern (from PRD §5.4):
```
`{Name} | Follow-Along Workout | GetFitAI`
```

### B. Plan Cards in `train-plans-client.tsx` — `plans` array

Each card needs: `id`, `name`, `duration`, `difficulty`, `exercises`, `steps`, `description` (short tagline for card), `icon`.

```typescript
{
  id: 'upper-body-push',
  name: 'Upper Body Push',
  duration: 10,
  difficulty: 'intermediate',
  exercises: 6,
  steps: 8,
  description: 'Push-ups, dips & plank variations for a stronger upper body',
  icon: Dumbbell,
},
{
  id: 'lower-body-strength',
  name: 'Lower Body Strength',
  duration: 12,
  difficulty: 'intermediate',
  exercises: 7,
  steps: 9,
  description: 'Squats, lunges, glute bridges & more for powerful legs',
  icon: Flame,
},
{
  id: 'full-body-stretch',
  name: 'Full Body Stretch',
  duration: 8,
  difficulty: 'all',
  exercises: 10,
  steps: 10,
  description: 'A continuous flow from neck to ankles — unwind and recover',
  icon: Sparkles,
},
{
  id: 'hiit-blast',
  name: 'HIIT Blast',
  duration: 7,
  difficulty: 'intermediate',
  exercises: 6,
  steps: 6,
  description: '40/15 intervals — jumping jacks to star jumps, all-out finish',
  icon: Zap,
},
```

### C. Card CTA (button text)

| Plan | CTA |
|------|-----|
| Upper Body Push | "Start Workout" |
| Lower Body Strength | "Start Workout" |
| Full Body Stretch | "Start Routine" |
| HIIT Blast | "Start Workout" |

**Rationale:** "Start Routine" for Full Body Stretch signals a different experience (flow/stretch vs. rep-based) and sets user expectation of a continuous, non-interval session. All others use "Start Workout" to maintain consistency with existing plans.

---

## 3. Tone & Style Guide

| Rule | Example |
|------|---------|
| Active voice, present tense | "Build real upper body strength" (not "This workout builds…") |
| Second-person implied | "Push through push-ups" (addresses "you" directly) |
| Sentence fragments OK in UI | "No equipment, no gym, no excuses" |
| Avoid exclamation marks in description | Use in CTAs or celebration screens only |
| No puns, no branded workout names | "Upper Body Push" — not "Armageddon" or "Guns Out" |
| Duration-first for value | "10 focused minutes" — time is the primary value prop for home exercisers |
| "Bodyweight" over "no equipment" | "Nothing but your bodyweight" sounds positive; "no equipment" sounds like a lack |
| "Follow-along" in SEO copy | Matches existing site language |

### Do NOT use

- Gender-specific language (no "his/her", "guys", "ladies")
- Gym jargon without context (no "AMRAP", "EMOM", "RPE" — save for pro settings)
- Calories-burned claims (legal risk without per-user data)
- "Lose weight" / "get shredded" / "beach body" (body-image negative)
- "Easy" (undermines the effort users put in)
- "Miracle" / "magic" / "secret" (overpromise, undermines credibility)

---

## 4. Design Handoff Notes

| Aspect | Detail |
|--------|--------|
| **Card layout** | All new cards match existing card style: `bg-muted rounded-2xl p-6 border` with hover glow effect (from PRD §4.3) |
| **Difficulty badges** | Use existing badge component. Upper Body Push → "Intermediate", Lower Body Strength → "Intermediate", Full Body Stretch → "All Levels", HIIT Blast → "Intermediate" |
| **Icons** | Upper Body Push → `Dumbbell`; Lower Body Strength → `Flame`; Full Body Stretch → `Sparkles`; HIIT Blast → `Zap` (consistent with PRD spec) |
| **Grid adjustment** | Need to update `md:grid-cols-3` → `md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` (or auto-fit) for 7 total cards |
| **Ordering** | Recommended: Quick Cardio → Upper Body Push → Core Crusher → Lower Body Strength → Full Body Burn → Full Body Stretch → HIIT Blast. Strategy: alternate difficulty and time lengths to avoid a wall of "Intermediate" cards. |

---

## 5. SEO Metadata Verification

| Plan | Meta Title | Meta Description |
|------|-----------|-----------------|
| Upper Body Push | Upper Body Push \| Follow-Along Workout \| GetFitAI | Push-ups, dips, and plank variations for a stronger upper body — 10 minutes, no equipment. |
| Lower Body Strength | Lower Body Strength \| Follow-Along Workout \| GetFitAI | Squats, lunges, glute bridges, and isometric holds for powerful legs — 12 minutes, bodyweight only. |
| Full Body Stretch | Full Body Stretch \| Follow-Along Workout \| GetFitAI | A continuous flexibility flow from neck to ankles — 8 minutes of full-body recovery and release. |
| HIIT Blast | HIIT Blast \| Follow-Along Workout \| GetFitAI | 40/15 HIIT intervals with burpees, high knees, and an all-out star jump finish — 7 minutes to torch calories. |

---

## 6. Open Issues

| # | Issue | Status |
|---|-------|--------|
| 1 | Card ordering in grid with 7 plans — recommend alternating difficulty to avoid clustering Intermediate cards | ✅ Resolved in §4 |
| 2 | French Canadian (CA) landing page — see plan-names.md for bilingual recommendations | ✅ Documented |
| 3 | Plan description length may need trimming for very small card layouts (< 320px) — frontend to confirm | 🔄 Needs frontend review |
| 4 | "Start Routine" vs "Start Workout" for Full Body Stretch — consistency check with existing UX patterns | 🔄 Needs designer confirmation |

---

## 7. Parent Task Context

This handoff feeds from **T1 (PRD)** at `/Volumes/Data/GitHub/GetFitAI/kanban-workspace/prd/prd-acceptance.md` and flows into:
- **T3 (Design)** — next in pipeline — uses plan-descriptions.md for card copy and plan-names.md for icon assignments
- **T4 (Frontend)** — uses the copy alongside the PRD exercise specs for implementation

Pipeline status updated in `stage-status.md` (from T1).
