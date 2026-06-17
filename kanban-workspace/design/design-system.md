# Design System Specification — GetFitAI

> Canonical design token reference for all `/train` page components.
> Source of truth: `globals.css` CSS variables + `tailwind.config.js` extensions.
> Last updated: 2026-06-14 | Coverage: Extended for 7-plan grid

---

## 1. Color System

### 1.1 Semantic Palette

All colors are defined as HSL CSS variables in `globals.css`. Tailwind `hsl(var(--name))` maps them at build time.

| Token | HSL Value | Tailwind | Rendered Color | Usage |
|-------|-----------|----------|---------------|-------|
| `--background` | `222 47% 4%` | `bg-background` | `#060a12` | Page/section backgrounds |
| `--foreground` | `210 20% 96%` | `text-foreground` | `#f2f5f9` | Primary body text |
| `--card` | `222 47% 7%` | `bg-card` | `#0a101f` | Card backgrounds (currently unused — see §1.3) |
| `--card-foreground` | `210 20% 96%` | `text-card-foreground` | `#f2f5f9` | Text on card bg |
| `--muted` | `217 33% 17%` | `bg-muted` | `#1d2434` | Card backgrounds (current de facto card bg) |
| `--muted-foreground` | `215 20% 55%` | `text-muted-foreground` | `#7d8899` | Secondary text, metadata, labels |
| `--primary` | `24 95% 53%` | `bg-primary` / `text-primary` | `#f97316` | CTAs, accent icons, interactive highlights |
| `--primary-foreground` | `0 0% 100%` | `text-primary-foreground` | `#ffffff` | Text on primary bg |
| `--secondary` | `217 33% 17%` | `bg-secondary` | `#1d2434` | Secondary UI (identical to muted) |
| `--accent` | `217 33% 17%` | `bg-accent` | `#1d2434` | Accent surfaces |
| `--destructive` | `0 84% 60%` | `bg-destructive` | `#ef4444` | Errors, deletion actions |
| `--ring` | `24 95% 53%` | `ring-primary` | `#f97316` | Focus rings |
| `--border` | `217 33% 17%` | `border-border` | `#1d2434` | Card borders, dividers |

### 1.2 Orange Accent — Usage Tokens

The orange accent is GetFitAI's primary brand color. It appears in specific, intentional locations:

| Element | Tailwind Class | Visual |
|---------|---------------|--------|
| Card icon | `text-orange-400` | `#fb923c` (slightly lighter for icon legibility on dark bg) |
| Meta icons (clock, dumbbell, flame) | `text-orange-400` | `#fb923c` |
| CTA link text | `text-orange-400` | `#fb923c` |
| CTA button bg | `bg-orange-500` | `#f97316` |
| CTA button hover | `hover:bg-orange-600` | `#ea580c` |
| Card hover border | `hover:border-orange-500/40` | Orange at 40% opacity |
| Step number circle | `bg-orange-500/20 text-orange-400` | 20% opacity orange fill |
| Glow shadow | `rgb(249 115 22 / 0.2)` | `--glow-sm` base |
| Ready state icon circle | `bg-orange-500/20` | 20% fill circle |
| Complete state | `bg-green-500/20 text-green-400` | Green (not orange — separate state) |

**⚠️ Important:** Do NOT use `text-orange-400` for card name/title text. Headlines use `text-foreground` (white). Orange is accent only — icons, CTAs, decorative dots.

### 1.3 Card Background vs Card Token

The current code uses `bg-muted` (not `bg-card`) for card backgrounds. The `--card` token exists but is unused. **Recommendation:** Keep using `bg-muted` for backward compatibility. The `--card` token is available if a lighter/darker card variant is needed in the future (e.g., selected state cards at `222 47% 10%`).

---

## 2. Typography

### 2.1 Font Family

| Role | Font | CSS Variable | Source |
|------|------|-------------|--------|
| Headings (h1–h6) | Outfit | `--font-heading` | Google Fonts via `layout.tsx` |
| Body text | Inter | `--font-body` | Google Fonts via `layout.tsx` |

### 2.2 Type Scale (Train Page)

| Element | Class | Size | Weight | Letter-spacing | Line-height |
|---------|-------|------|--------|----------------|-------------|
| Page title (h1) | `text-4xl md:text-5xl font-bold` | 2.25rem / 3rem | 700 | -0.02em | 1.1 |
| Page subtitle | `text-lg` | 1.125rem | 400 | normal | 1.5 |
| Card name (h3) | `text-xl font-bold` | 1.25rem | 700 | -0.02em | 1.1 |
| Card description | `text-sm text-muted-foreground` | 0.875rem | 400 | normal | 1.5 |
| Card meta | `text-sm text-muted-foreground` | 0.875rem | 400 | normal | 1.4 |
| Card CTA | `text-sm font-medium` | 0.875rem | 500 | normal | 1 |
| "How It Works" heading | `text-lg font-semibold` | 1.125rem | 600 | -0.02em | 1.1 |
| "How It Works" body | `text-sm text-muted-foreground` | 0.875rem | 400 | normal | 1.5 |
| Step number circle | `font-bold` | — | 700 | normal | 1 |
| Ready state plan name | `text-2xl md:text-3xl font-bold` | 1.5rem / 1.875rem | 700 | -0.02em | 1.1 |
| Phase heading (Warm Up / Main Set / Finisher) | `text-xs font-semibold uppercase tracking-wider` | 0.75rem | 600 | 0.05em | 1.2 |

### 2.3 Monospace / Numbers

Times and durations use body font (Inter) — no monospace needed. Timers in session player use Inter for the digital timer display.

---

## 3. Spacing System

Spacing follows Tailwind's default scale (multiples of 4px/0.25rem). Key measurements:

### 3.1 Grid & Layout

| Element | Property | Value |
|---------|----------|-------|
| Page max-width | `container` class + `max-w-4xl` | 896px |
| Section padding top | `pt-24 md:pt-32` | 96px / 128px |
| Section padding bottom | `pb-12 md:pb-16` | 48px / 64px |
| Content padding (mobile) | `px-4 sm:px-6` | 16px / 24px |
| Grid gap | `gap-6` | 24px |

### 3.2 Card Internal Spacing

```
┌──── p-6 (24px) ──────────────────┐
│                                   │
│  mb-4 (16px) ─ icon              │
│                                   │
│  mb-2 (8px)  ─ name              │
│                                   │
│  mb-4 (16px) ─ description       │
│               (flex-1 stretch)    │
│                                   │
│  mb-4 (16px) ─ meta group        │
│  space-y-2 (8px gap between       │
│  meta rows)                       │
│                                   │
│  ──────────── CTA (auto)         │
└───────────────────────────────────┘
```

### 3.3 Session Ready State

| Element | Spacing |
|---------|---------|
| Container padding | `p-8` (32px) |
| Icon circle size | `w-16 h-16` |
| Icon circle margin | `mb-4` (16px) |
| Name → meta gap | `mb-2` (8px) |
| Meta → phase list gap | `mb-6` (24px) |
| Phase heading → exercises | `mb-2` (8px) |
| Exercise items gap | `space-y-1` |
| Phase sections gap | `mb-4` (16px) |
| Phase list → CTA button | `mb-8` (32px) |
| Button padding | `py-4` (16px vertical) |

### 3.4 "How It Works" Section

| Element | Spacing |
|---------|---------|
| Container padding | `p-6 md:p-8` (24px / 32px) |
| Section → grid | `mb-3` (12px) heading |
| Grid gap | `gap-6` (24px) |
| Number circle | `w-8 h-8` + `mb-2` |

---

## 4. Component Library

### 4.1 Plan Card (`PlanCard`)

```
Component: PlanCard
Props: id, name, duration, durationMinutes, exerciseCount, difficulty, description, icon, color
Container: <Link> wrapping <div className="bg-muted rounded-2xl p-6 border border-border 
           hover:border-orange-500/40 transition-all duration-300 card-glow h-full flex flex-col">
```

**States:**

| State | Visual |
|-------|--------|
| Default | `bg-muted` background, `border-border` subtle border |
| Hover | Border shifts to `border-orange-500/40`, `box-shadow: var(--glow-sm)` via `.card-glow` |
| Focus | Ring is `hsl(var(--ring))` — orange, visible via native `<Link>` focus |
| Active (press) | `.btn-glow:active` → `scale(0.98)` via parent `.btn-glow` class on CTA |
| Touch (mobile) | No press state — system tap highlight. Ensure `min-height: 44px` on CTA |

### 4.2 Difficulty Badge

Currently rendered as text in meta (`Flame` icon + `{plan.difficulty}` text). No badge component exists.

**Recommendation:** Keep text-only difficulty display for speed of implementation. If badge is desired later, use:

```
<div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium 
                bg-orange-500/10 text-orange-400">
  Intermediate
</div>
```

With per-difficulty variants:

| Difficulty | Classes |
|------------|---------|
| Beginner | `bg-green-500/10 text-green-400` |
| Intermediate | `bg-orange-500/10 text-orange-400` |
| All Levels | `bg-blue-500/10 text-blue-400` |

### 4.3 CTA Button (Session Page)

```
<button className="w-full flex items-center justify-center gap-2 
                    bg-orange-500 hover:bg-orange-600 text-white font-semibold 
                    text-lg py-4 rounded-xl transition-all btn-glow">
```

| State | Visual |
|-------|--------|
| Default | Solid orange `#f97316`, white text |
| Hover | Darker orange `#ea580c`, `--glow-md` shadow, scale 1.02 |
| Active (press) | Scale 0.98 |
| Disabled | N/A — no disabled state in session player |

### 4.4 "Back to Plans" Link

```
<Link className="inline-flex items-center gap-1 text-sm text-muted-foreground 
                 hover:text-foreground transition-colors">
```

Standard text link — no orange accent needed. `icons: ArrowLeft`.

### 4.5 Info Box ("How It Works")

```
<div className="bg-muted rounded-2xl p-6 md:p-8 border border-border">
```

Same card DNA as plan cards but without hover glow. Numbered circles use `bg-orange-500/20 text-orange-400`.

### 4.6 Step Number Circle (Info Box)

```
<div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 
                flex items-center justify-center font-bold mb-2">
```

### 4.7 Phase Label (Ready State)

```
<h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
  Warm Up | Main Set | Finisher
</h3>
```

### 4.8 Completion State

```
<div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
  <CheckCircle2 className="w-10 h-10 text-green-400" />
</div>
```

Green state (not orange) — differentiates completion from action.

---

## 5. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | 0.625rem (10px) | Base radius |
| `rounded-2xl` | 16px | Cards, info box, session container |
| `rounded-xl` | 12px | Buttons |
| `rounded-full` | 9999px | Icons, step numbers, difficulty badges |

---

## 6. Shadow & Glow System

| Token | Value | Usage |
|-------|-------|-------|
| `--glow-sm` | `0 0 20px rgba(249, 115, 22, 0.2)` | Card hover glow |
| `--glow-md` | `0 0 40px rgba(249, 115, 22, 0.3)` | Button hover glow |
| `--glow-lg` | `0 0 80px rgba(249, 115, 22, 0.4)` | Hero/heroine sections |
| `.card-glow:hover` | Border + glow-sm | Card interaction |
| `.btn-glow:hover` | glow-md + scale(1.02) | Button interaction |

**⚠️ No drop-shadow on cards.** The glow is `box-shadow` only — no z-axis elevation via `shadow-*` classes. This keeps the flat design aesthetic.

---

## 7. Icon System

### 7.1 Provider
All icons use [Lucide React](https://lucide.dev) v0.400+ via `lucide-react`.

### 7.2 Icon Inventory (Train Page)

| Component | Icon | Size | Color |
|-----------|------|------|-------|
| Card icon | Per plan (see §4) | `w-6 h-6` | `text-orange-400` |
| Duration meta | `Clock` | `w-4 h-4` | `text-orange-400` |
| Exercise count meta | `Dumbbell` | `w-4 h-4` | `text-orange-400` |
| Difficulty meta | `Flame` | `w-4 h-4` | `text-orange-400` |
| CTA arrow | `ChevronRight` | `w-4 h-4` | `text-orange-400` |
| Session page icon (ready) | `Dumbbell` | `w-8 h-8` | `text-orange-400` |
| Back link | `ArrowLeft` | `w-4 h-4` | `text-muted-foreground` |
| Start button | `Play` | `w-5 h-5` | `text-white` |
| Pause button | `Pause` | `w-5 h-5` | Current foreground |
| Skip button | `SkipForward` | — | — |
| Restart button | `RotateCcw` | `w-5 h-5` | — |
| Completion check | `CheckCircle2` | `w-10 h-10` | `text-green-400` |

### 7.3 Per-Plan Icon Assignment

| Plan | Icon Component | Already Imported? |
|------|---------------|-------------------|
| Full Body Burn (existing) | `Flame` | ✅ Yes |
| Core Crusher (existing) | `Dumbbell` | ✅ Yes |
| Quick Cardio (existing) | `Sparkles` | ✅ Yes |
| Upper Body Push (new) | `Dumbbell` | ✅ Yes (duplicate — OK) |
| Lower Body Strength (new) | `Flame` | ✅ Yes (duplicate — OK) |
| Full Body Stretch (new) | `Sparkles` | ✅ Yes (duplicate — OK) |
| HIIT Blast (new) | `Zap` | **❌ Needs import** |

**New import needed in `train-plans-client.tsx`:**
```typescript
import { Dumbbell, Clock, Flame, ChevronRight, Sparkles, Zap } from "lucide-react";
```

**⚠️ Icon variety concern:** Quick Cardio and Full Body Stretch both use `Sparkles`. Consider swapping Quick Cardio to `HeartPulse` or `Activity` for visual variety. This is an optional design decision.

---

## 8. Responsive Breakpoints

| Breakpoint | Tailwind | Min Width | Columns | Card Appearance |
|------------|----------|-----------|---------|----------------|
| Mobile | Default | 0 | 1 | Full-width stacked |
| Tablet | `sm` | 640px | 2 | Side-by-side |
| Desktop | `lg` | 1024px | 3 | Three columns |
| Wide | `xl` | 1280px | 4 | Four columns (ideal for 7) |

**Content adjustments per breakpoint:**

| Element | Mobile (<640px) | Tablet (640+) | Desktop (1024+) |
|---------|----------------|---------------|-----------------|
| Page title | `text-4xl` | `text-4xl` | `text-5xl` |
| Section padding top | `pt-24` | `pt-24` | `pt-32` |
| Content padding | `px-4` | `px-4` | `px-6` |
| Info box padding | `p-6` | `p-6` | `p-8` |
| Card text | All visible | All visible | All visible |
| Card CTA | Always visible | Always visible | Always visible |

---

## 9. Motion Tokens

| Animation | Duration | Easing | Usage |
|-----------|----------|--------|-------|
| Card border color | 300ms | `ease-out` | Card hover |
| Card glow | 300ms | `ease` | Card hover (CSS class) |
| CTA chevron shift | 300ms | — | `transition-all` + `group-hover:translate-x-0.5` |
| Button glow hover | 300ms | `ease` | `.btn-glow` |
| Button scale press | Instant | — | `.btn-glow:active` |
| Pulse glow | 3s | `ease-in-out` infinite | `.animate-pulse-glow` (hero) |
| Float | 6s | `ease-in-out` infinite | `.animate-float` (decorative) |

No stagger, no parallax, no scroll-triggered animations on the `/train` page. Keep it simple and performant.

---

## 10. Future-Proofing Notes

- **If more plans are added (8+):** Switch grid from explicit columns to `auto-fill` with `minmax(280px, 1fr)`:
  ```jsx
  className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6"
  ```
  This handles any number of cards and always fills available width.

- **If a loader/skeleton is needed:** Use `bg-muted/50` with a pulse animation (`animate-pulse`):
  ```jsx
  <div className="bg-muted/50 rounded-2xl p-6 h-[280px] animate-pulse" />
  ```

- **If card selection/filtering is added:** Add a selected state with `border-orange-500` and `ring-1 ring-orange-500/50`.
