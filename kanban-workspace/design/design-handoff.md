# Design Handoff — GetFitAI New Workout Plans (T3)

> Visual direction for 4 new plans + grid expansion on `/train` page.
> Delivery: T3 (Design) → T4 (Frontend)
> Written: 2026-06-14
> Inherits: T1 PRD (8–12min/difficulty/exercise spec), T2 Copy (card copy, icons, CTAs)

---

## 1. Design Philosophy

**Extend, don't redesign.** The 4 new plans are content additions to an established page. All visual decisions preserve the existing dark theme + orange accent identity while scaling from 3 to 7 cards. The user should feel "more options" not "new design."

**Guiding principles:**
- Zero disruption to existing 3 plan cards
- All 7 cards feel like siblings (same card DNA: `bg-muted rounded-2xl p-6 border` + hover glow)
- Grid changes are purely responsive layout — no card visual changes
- The "more plans" state is a natural grid expansion (3→4→7), not a toggle or tab

---

## 2. Card Inventory (Before → After)

| State | Plans | Layout |
|-------|-------|--------|
| Before (current) | 3: Full Body Burn, Core Crusher, Quick Cardio | `md:grid-cols-3` (3 cards, perfect fit) |
| After | 7: 3 existing + Upper Body Push, Lower Body Strength, Full Body Stretch, HIIT Blast | `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` (see §3) |

**Existing 3 cards remain UNCHANGED:**
- Same data (name, duration, exercise count, difficulty, description)
- Same icon components (`Flame`, `Dumbbell`, `Sparkles`)
- Same orange accent (`text-orange-400`)

---

## 3. Responsive Grid Strategy

The grid MUST accommodate 7 cards without layout breakage. Current `md:grid-cols-3` leaves 1 card alone on the second row at `md` breakpoint.

### Recommended layout (drop-in change to `grid` className):

```jsx
// Current (before):
<div className="grid md:grid-cols-3 gap-6">

// After:
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
```

### Breakpoint behavior with 7 cards:

| Breakpoint | Columns | Row Distribution |
|------------|---------|-----------------|
| `< 640px` (mobile) | 1 col | 7 rows (full-width stacked) |
| `640px+` (sm) | 2 cols | 3 + 3 + 1 (last card centered or left-aligned via `sm:last:col-span-2 lg:last:col-span-1`) |
| `1024px+` (lg) | 3 cols | 3 + 3 + 1 (last card centered — optional `lg:col-span-1` defaults work) |
| `1280px+` (xl) | 4 cols | 4 + 3 (balanced — best appearance) |

**⚠️ Edge case — last card alignment at `sm` (2 cols):**
The 7th card sits alone on row 4. It will stretch to `col-span-2` unless constrained. Add to the grid div:

```jsx
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6
           [&>:last-child]:sm:col-span-2 [&>:last-child]:lg:col-span-1"
```

Or use a wrapping pattern that auto-balances (see frontend-handoff.md §3).

### Row height consistency
Since cards use `h-full flex flex-col`, all cards in the same row auto-equalize height. No explicit min-height needed.

---

## 4. Card Visual Direction (All Plans)

All 7 cards follow the exact same card visual recipe:

```
┌──────────────────────────────────┐
│  [icon] ← text-orange-400, 6×6  │
│                                  │
│  Plan Name ← text-xl font-bold   │
│                                  │
│  Description ← text-sm muted     │
│  (1-2 lines, flex-1 to push      │
│   meta to bottom)                │
│                                  │
│  ⏱ 10 min   ← muted + orange    │  ← meta group
│  💪 6 exercises                  │
│  🔥 Intermediate                 │
│                                  │
│  Start Workout → ← orange CTA    │
└──────────────────────────────────┘
```

### 4.1 New card data (from T1 + T2)

| Card | Icon | Color | CTA |
|------|------|-------|-----|
| Upper Body Push | `Dumbbell` | `text-orange-400` | "Start Workout" |
| Lower Body Strength | `Flame` | `text-orange-400` | "Start Workout" |
| Full Body Stretch | `Sparkles` | `text-orange-400` | "Start Routine" |
| HIIT Blast | `Zap` | `text-orange-400` | "Start Workout" |

**Icon imports needed** (new icons not currently imported in `train-plans-client.tsx`):
- `Zap` from `lucide-react` (not yet imported — currently imports `Dumbbell, Clock, Flame, ChevronRight, Sparkles`)

### 4.2 Card ordering

Recommended order (alternates difficulty to avoid clustering "Intermediate" badges):

| Position | Plan | Duration | Difficulty |
|----------|------|----------|------------|
| 1 | Quick Cardio | 5 min | Beginner |
| 2 | Upper Body Push | 10 min | Intermediate |
| 3 | Core Crusher | 10 min | Intermediate |
| 4 | Lower Body Strength | 12 min | Intermediate |
| 5 | Full Body Burn | 15 min | Intermediate |
| 6 | Full Body Stretch | 8 min | All Levels |
| 7 | HIIT Blast | 7 min | Intermediate |

This order: (a) starts with the easiest/shortest plan, (b) clusters Full Body Burn next to Full Body Stretch as a logical pair (workout + recovery), (c) ends with the most intense/tempting option (HIIT).

---

## 5. Session Player — No Visual Changes

The session player (`train-session-client.tsx`) requires ZERO visual design changes. All 4 new plans use:
- Same timer UI (circular/bar progress — unchanged)
- Same rest timer overlay (unchanged)
- Same YouTube embed player (unchanged)
- Same completion screen (unchanged)

Only data changes (exercise arrays, step sequences) — see frontend-handoff.md.

---

## 6. "More Plans" Grid Expansion

The phrase "more plans" refers to the physical grid expansion, not a UI toggle. When frontend adds 4 new entries to the `plans` array, the responsive grid automatically accommodates them:

**Visual impact at each breakpoint:**

- **Mobile (<640px):** Users scroll through a clean 7-row list. No visual difference from 3-card scroll, just more content.
- **Tablet (640-1023px):** 2-column grid, 3 full rows + 1 partial. The asymmetry signals "there's more content" naturally.
- **Desktop (1024-1279px):** 3-column grid, 2 full rows + 1 card. The single card on the last row is centered and looks intentional.
- **Wide (1280px+):** 4-column grid, 2 rows — perfectly balanced. This is the ideal state.

**No "Show More" / "See All" / pagination needed.** 7 cards load above the fold on all breakpoints and the grid is the content.

---

## 7. Motion & Micro-interactions

All new cards inherit existing motion patterns — no new animations needed:

| Element | Animation | Implementation |
|---------|-----------|---------------|
| Card hover | Border shifts to `border-orange-500/40`, subtle glow overlay | CSS class `.card-glow` |
| CTA hover | Icon shifts right `group-hover:translate-x-0.5` | Tailwind transition |
| Page load | No staggered entrance (fallback rendered) | — |
| Button press | Scale 0.98 | CSS class `.btn-glow:active` |
| Timer transition | Immediate countdown start | JS state change |

---

## 8. Accessibility Considerations

| Area | Compliance | Notes |
|------|-----------|-------|
| Color contrast | All text passes WCAG AA on `#0a0e1a` bg | Orange text on dark bg: ratio ~7:1 at text-orange-400 on bg-background |
| Touch targets | Buttons are `py-4` (56px+ touch zone) | Passes WCAG 2.5.8 (minimum 44px) |
| Focus indicators | Ring uses `hsl(var(--ring))` which is orange | Visible on dark backgrounds |
| Screen reader | All CTA links have text content | No icon-only CTAs |
| Motion | Reduced motion — no parallax, no scale on prefers-reduced-motion | Cards use border-color transitions only |

---

## 9. Open Issues

| # | Issue | Owner | Status |
|---|-------|-------|--------|
| 1 | Card description may overflow at <320px viewport — frontend to test with `line-clamp-2` or `truncate` fallback | T4 (Frontend) | Needs verification |
| 2 | 7th card alignment at `sm:grid-cols-2` — see §3 for `[&>:last-child]` workaround | T4 (Frontend) | Documented |
| 3 | "Start Routine" vs "Start Workout" for Full Body Stretch — consistency confirmed (T2 copy doc) | ✅ Resolved in T2 |
| 4 | Full Body Stretch already uses `Sparkles` icon — Quick Cardio currently also uses `Sparkles`. Consider swapping Quick Cardio to `HeartPulse` or `Activity` for visual variety across 7 cards | T3→T4 | Optional (design review) |

---

## Appendix A: Visual Before/After

```
Before (3 cards — md:grid-cols-3):
  [Full Body Burn]  [Core Crusher]   [Quick Cardio]

After (7 cards — xl:grid-cols-4):
  [Quick Cardio]  [Upper Body Push] [Core Crusher]  [Lower Body Str.]
  [Full Body Burn][Full Body Stretch][HIIT Blast]
```

All cards visually identical in style — only content and icon differs.
