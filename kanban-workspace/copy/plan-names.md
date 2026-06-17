# Plan Name Internationalization — GetFitAI New Workout Plans

> Internationalized name validation for 4 new follow-along plans.
> Target market: English-speaking (US primary, UK/AU/CA secondary).
> Tone: direct, active, benefit-forward — no puns, no gimmicks.

---

## 1. Upper Body Push (10min)

| Field | Value |
|-------|-------|
| **Plan ID** | `upper-body-push` |
| **Display Name** | Upper Body Push |
| **Alternative Considered** | Upper Body Blast, Push & Plank, Arm Igniter |
| **Rationale** | "Push" describes both the mechanics (push-ups, dips) and the challenge. "Upper Body" is inclusive — works for men and women. Short enough for card UI at small breakpoints. |
| **SEO-friendly** | Yes — common search terms: "upper body workout no equipment", "home upper body push" |
| **Paired Icon** | Dumbbell |
| **Difficulty Badge** | Intermediate |

---

## 2. Lower Body Strength (12min)

| Field | Value |
|-------|-------|
| **Plan ID** | `lower-body-strength` |
| **Display Name** | Lower Body Strength |
| **Alternative Considered** | Leg Day Express, Lower Body Builder, Burn & Build |
| **Rationale** | "Strength" stands out against the existing cardio/stretch plans. "Lower Body" is unambiguous. 12 minutes = substantial enough to earn the "Strength" label without overpromising. |
| **SEO-friendly** | Yes — "lower body strength workout", "leg workout no equipment" |
| **Paired Icon** | Flame |
| **Difficulty Badge** | Intermediate |

---

## 3. Full Body Stretch (8min)

| Field | Value |
|-------|-------|
| **Plan ID** | `full-body-stretch` |
| **Display Name** | Full Body Stretch |
| **Alternative Considered** | Full Body Flow, Flexibility Fix, Stretch & Release |
| **Rationale** | "Stretch" is the most searched and understood term for flexibility content. "Full Body" communicates coverage from neck to ankles. "Flow" was rejected because the app doesn't use flow-based terminology for other plans. |
| **SEO-friendly** | Yes — "full body stretch routine", "post workout stretch", "flexibility" |
| **Paired Icon** | Sparkles |
| **Difficulty Badge** | All Levels |

---

## 4. HIIT Blast (7min)

| Field | Value |
|-------|-------|
| **Plan ID** | `hiit-blast` |
| **Display Name** | HIIT Blast |
| **Alternative Considered** | HIIT Rush, Cardio Blitz, 7-Minute Inferno |
| **Rationale** | "HIIT" is a high-intent, well-understood keyword globally. "Blast" communicates explosiveness and short duration. Keeps the plan discoverable — users searching "HIIT" will find it immediately. No brand dilution. |
| **SEO-friendly** | High — "HIIT workout", "HIIT no equipment", "7 minute HIIT" |
| **Paired Icon** | Zap |
| **Difficulty Badge** | Intermediate |

---

## Global Naming Consistency

| Plan | Existing/New | Length | Name Pattern | Icon |
|------|-------------|--------|-------------|------|
| Full Body Burn | Existing | 15min | `{Body Part} {Action}` | — |
| Core Crusher | Existing | 10min | `{Body Part} {Action}` | — |
| Quick Cardio | Existing | 5min | `{Adjective} {Type}` | — |
| **Upper Body Push** | **New** | **10min** | **`{Body Part} {Action}`** | **Dumbbell** |
| **Lower Body Strength** | **New** | **12min** | **`{Body Part} {Attribute}`** | **Flame** |
| **Full Body Stretch** | **New** | **8min** | **`{Scope} {Type}`** | **Sparkles** |
| **HIIT Blast** | **New** | **7min** | **`{Type} {Action}`** | **Zap** |

**Observation:** Full Body Burn, Core Crusher, Upper Body Push, and HIIT Blast all use the `{X} {Action}` pattern (Burn, Crusher, Push, Blast). Lower Body Strength uses an attribute (Strength), and Full Body Stretch / Quick Cardio use a type (Stretch, Cardio). This variety is healthy — it avoids monotony in the card grid and gives each plan its own personality without breaking visual consistency.

---

## Country-Specific Notes

| Market | Notes |
|--------|-------|
| US 🇺🇸 | All names tested — no cultural issues. "HIIT" is universally understood by fitness audience. |
| UK 🇬🇧 | "Push" and "Blast" are neutral. "Stretch" preferred over "Flexibility" in UK fitness culture. |
| AU 🇦🇺 | "Blast" colloquially positive. "Stretch" standard. No concerns. |
| CA 🇨🇦 | Bilingual packaging may need French on landing page (see Copy Handoff). |

---

## Recommendations for French Canadian (CA) Landing Page

If bilingual mode is enabled for CA traffic:
- Upper Body Push → **Poussée du Haut du Corps** (or keep English — "Upper Body Push" is widely understood in CA fitness contexts)
- Lower Body Strength → **Force du Bas du Corps**
- Full Body Stretch → **Étirement Complet**
- HIIT Blast → **HIIT Éclair** (keeps "HIIT" for discoverability)
