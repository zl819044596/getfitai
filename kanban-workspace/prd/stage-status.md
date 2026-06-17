# Stage Status — GetFitAI New Workout Plans

## Pipeline Flow

```
T1 PRD/Acceptance ──► T2 Copywriting ──► T3 Design Handoff ──► T4 Frontend + Deploy
    [YOU ARE HERE]
```

---

## T1 — PRD & Acceptance Criteria  ✅ COMPLETE

**Artifacts:**
- `prd-acceptance.md` — Full PRD with exercise details, timings, difficulty, acceptance criteria
- `stage-status.md` — This file

**Deliverables produced:**
- 4 new plan definitions with full exercise sequences
- 15 new exercise entries with YouTube IDs
- Implementation notes for all 3 files to modify
- Acceptance criteria covering content, functional, SEO, regression, layout

---

## T2 — Copywriting  ✅ COMPLETE

**Input:** `prd-acceptance.md`
**Artifact:** `t2-copy-deliverable.md`
**Deliverables produced:**
- 4 plan card descriptions (copy ready for train-plans-client.tsx)
- 4 SEO meta descriptions (copy ready for [planId]/page.tsx planMeta)
- 15 exercise display names verified — 0 corrections needed ✓
- Icon suggestions for all 4 plans (Dumbbell, Flame, Sparkles, Zap)
- Full code blocks with import changes, grid fix, and allEntries additions

---

## T3 — Design Handoff

**Input:** Updated copy + frozen plan data
**Focus:** Visual design consistency for the new cards
**Note:** No new UI components needed — existing card + session patterns apply
**Potential visual elements:**
- Card icons for each plan
- Color coordination (existing cards use orange — keep consistent)

---

## T4 — Frontend Implementation + Deploy

**Files to modify:**
| File | Changes |
|------|---------|
| `train-plans-client.tsx` | Add 4 plan card objects to `plans` array |
| `train-session-client.tsx` | Add 15 new exercises to `allExercises` + 4 workout plans to `workoutPlans` |
| `[planId]/page.tsx` | Add 4 planIds to `generateStaticParams()` + 4 entries to `planMeta` |

**Responsive grid change:**
- Current: `md:grid-cols-3` — only works for exactly 3 cards
- Recommended: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` for 7 cards

**Deploy:** Standard Cloudflare Pages deploy from repo.

---

## Plan Summary (all 4 new plans)

| Plan | Duration | Difficulty | Exercises | Steps | Est. Active |
|------|----------|-----------|-----------|-------|------------|
| Upper Body Push | 10 min | Intermediate | 6 | 10 | ~7:30 |
| Lower Body Strength | 12 min | Intermediate | 6 | 11 | ~9:00 |
| Full Body Stretch | 8 min | All Levels | 10 | 10 | ~8:00 |
| HIIT Blast | 7 min | Intermediate | 6 | 9 | ~4:30 |
| **Totals** | **37 min** | — | **28** | **40** | **~29:00** |

## New Exercises to Add (15 total)

```
tricep_dips, pike_pushups, shoulder_taps, calf_raises, wall_sit,
neck_rolls, shoulder_stretch, chest_stretch, standing_toe_touch,
quad_stretch, hamstring_stretch, cat_cow, childs_pose, down_dog,
lying_twist, star_jumps
```

## Gate Check — Ready for T2?

- [x] All 4 plans defined with exercise sequences
- [x] YouTube IDs sourced for all new exercises
- [x] Files to modify identified
- [x] Acceptance criteria documented
- [x] Grid layout change identified
- [x] No new UI components needed — pure data addition
