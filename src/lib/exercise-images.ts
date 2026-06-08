// Exercise image mapping with aliases and equipment variants
// All images fallback to /images/workout-{1-5}.webp until dedicated exercise photos are added

export const exerciseImages: Record<string, string> = {
  // ========== DEFAULT ==========
  default: "/images/workout-3.webp",

  // ========== CHEST ==========
  "bench press": "/images/workout-1.webp",
  "barbell bench press": "/images/workout-1.webp",
  "dumbbell bench press": "/images/workout-1.webp",
  "db bench press": "/images/workout-1.webp",
  "incline bench press": "/images/workout-1.webp",
  "decline bench press": "/images/workout-1.webp",
  "chest press": "/images/workout-1.webp",
  "machine chest press": "/images/workout-1.webp",
  "dumbbell press": "/images/workout-1.webp",
  "db press": "/images/workout-1.webp",
  "push up": "/images/workout-2.webp",
  "push-up": "/images/workout-2.webp",
  "pushup": "/images/workout-2.webp",
  "diamond push up": "/images/workout-2.webp",
  "wide grip push up": "/images/workout-2.webp",
  "chest fly": "/images/workout-1.webp",
  "dumbbell fly": "/images/workout-1.webp",
  "db fly": "/images/workout-1.webp",
  "cable fly": "/images/workout-1.webp",
  "pec deck": "/images/workout-1.webp",
  "pec deck fly": "/images/workout-1.webp",

  // ========== BACK ==========
  "bent over row": "/images/workout-4.webp",
  "bent-over row": "/images/workout-4.webp",
  "barbell bent over row": "/images/workout-4.webp",
  "dumbbell bent over row": "/images/workout-4.webp",
  "db bent over row": "/images/workout-4.webp",
  "single arm row": "/images/workout-4.webp",
  "one arm row": "/images/workout-4.webp",
  "row": "/images/workout-4.webp",
  "seated row": "/images/workout-4.webp",
  "cable row": "/images/workout-4.webp",
  "t-bar row": "/images/workout-4.webp",
  "lat pulldown": "/images/workout-4.webp",
  "pull up": "/images/workout-4.webp",
  "pull-up": "/images/workout-4.webp",
  "pullup": "/images/workout-4.webp",
  "chin up": "/images/workout-4.webp",
  "chin-up": "/images/workout-4.webp",
  "deadlift": "/images/workout-5.webp",
  "barbell deadlift": "/images/workout-5.webp",
  "romanian deadlift": "/images/workout-5.webp",
  "rdl": "/images/workout-5.webp",
  "dumbbell romanian deadlift": "/images/workout-5.webp",
  "db romanian deadlift": "/images/workout-5.webp",
  "sumo deadlift": "/images/workout-5.webp",
  "good morning": "/images/workout-5.webp",
  "back extension": "/images/workout-5.webp",
  "hyperextension": "/images/workout-5.webp",
  "face pull": "/images/workout-4.webp",
  "reverse fly": "/images/workout-4.webp",
  "rear delt fly": "/images/workout-4.webp",
  "shrugs": "/images/workout-4.webp",

  // ========== LEGS ==========
  "squat": "/images/workout-3.webp",
  "barbell squat": "/images/workout-3.webp",
  "back squat": "/images/workout-3.webp",
  "front squat": "/images/workout-3.webp",
  "goblet squat": "/images/workout-3.webp",
  "dumbbell goblet squat": "/images/workout-3.webp",
  "db goblet squat": "/images/workout-3.webp",
  "kettlebell goblet squat": "/images/workout-3.webp",
  "kb goblet squat": "/images/workout-3.webp",
  "leg press": "/images/workout-3.webp",
  "hack squat": "/images/workout-3.webp",
  "lunge": "/images/workout-3.webp",
  "walking lunge": "/images/workout-3.webp",
  "reverse lunge": "/images/workout-3.webp",
  "dumbbell lunge": "/images/workout-3.webp",
  "db lunge": "/images/workout-3.webp",
  "bulgarian split squat": "/images/workout-3.webp",
  "split squat": "/images/workout-3.webp",
  "step up": "/images/workout-3.webp",
  "box squat": "/images/workout-3.webp",
  "pistol squat": "/images/workout-3.webp",
  "leg extension": "/images/workout-3.webp",
  "leg curl": "/images/workout-3.webp",
  "lying leg curl": "/images/workout-3.webp",
  "seated leg curl": "/images/workout-3.webp",
  "calf raise": "/images/workout-3.webp",
  "standing calf raise": "/images/workout-3.webp",
  "seated calf raise": "/images/workout-3.webp",
  "hip thrust": "/images/workout-3.webp",
  "glute bridge": "/images/workout-3.webp",

  // ========== SHOULDERS ==========
  "shoulder press": "/images/workout-2.webp",
  "overhead press": "/images/workout-2.webp",
  "military press": "/images/workout-2.webp",
  "barbell overhead press": "/images/workout-2.webp",
  "dumbbell shoulder press": "/images/workout-2.webp",
  "db shoulder press": "/images/workout-2.webp",
  "arnold press": "/images/workout-2.webp",
  "push press": "/images/workout-2.webp",
  "dumbbell push press": "/images/workout-2.webp",
  "db push press": "/images/workout-2.webp",
  "lateral raise": "/images/workout-2.webp",
  "side lateral raise": "/images/workout-2.webp",
  "dumbbell lateral raise": "/images/workout-2.webp",
  "db lateral raise": "/images/workout-2.webp",
  "cable lateral raise": "/images/workout-2.webp",
  "front raise": "/images/workout-2.webp",
  "dumbbell front raise": "/images/workout-2.webp",
  "db front raise": "/images/workout-2.webp",
  "upright row": "/images/workout-2.webp",

  // ========== ARMS ==========
  "bicep curl": "/images/workout-5.webp",
  "dumbbell curl": "/images/workout-5.webp",
  "db curl": "/images/workout-5.webp",
  "barbell curl": "/images/workout-5.webp",
  "hammer curl": "/images/workout-5.webp",
  "dumbbell hammer curl": "/images/workout-5.webp",
  "db hammer curl": "/images/workout-5.webp",
  "preacher curl": "/images/workout-5.webp",
  "concentration curl": "/images/workout-5.webp",
  "incline curl": "/images/workout-5.webp",
  "tricep extension": "/images/workout-5.webp",
  "tricep pushdown": "/images/workout-5.webp",
  "cable pushdown": "/images/workout-5.webp",
  "skull crusher": "/images/workout-5.webp",
  "lying tricep extension": "/images/workout-5.webp",
  "overhead tricep extension": "/images/workout-5.webp",
  "dumbbell overhead extension": "/images/workout-5.webp",
  "tricep dip": "/images/workout-5.webp",
  "bench dip": "/images/workout-5.webp",
  "close grip bench press": "/images/workout-5.webp",

  // ========== CORE ==========
  "plank": "/images/workout-2.webp",
  "forearm plank": "/images/workout-2.webp",
  "high plank": "/images/workout-2.webp",
  "side plank": "/images/workout-2.webp",
  "plank row": "/images/workout-4.webp",
  "renengade row": "/images/workout-4.webp",
  "crunch": "/images/workout-2.webp",
  "sit up": "/images/workout-2.webp",
  "sit-up": "/images/workout-2.webp",
  "leg raise": "/images/workout-2.webp",
  "hanging leg raise": "/images/workout-2.webp",
  "russian twist": "/images/workout-2.webp",
  "bicycle crunch": "/images/workout-2.webp",
  "dead bug": "/images/workout-2.webp",
  "bird dog": "/images/workout-2.webp",
  "ab wheel rollout": "/images/workout-2.webp",
  "hollow hold": "/images/workout-2.webp",
  "flutter kick": "/images/workout-2.webp",

  // ========== FULL BODY / CARDIO ==========
  "burpee": "/images/workout-2.webp",
  "mountain climber": "/images/workout-2.webp",
  "jumping jack": "/images/workout-2.webp",
  "high knees": "/images/workout-2.webp",
  "kettlebell swing": "/images/workout-3.webp",
  "kb swing": "/images/workout-3.webp",
  "turkish get up": "/images/workout-3.webp",
  "clean and press": "/images/workout-2.webp",
  "snatch": "/images/workout-2.webp",
  "thruster": "/images/workout-2.webp",
  "wall ball": "/images/workout-3.webp",
  "battle ropes": "/images/workout-2.webp",
  "sled push": "/images/workout-3.webp",
  "farmer walk": "/images/workout-5.webp",
  "farmer's walk": "/images/workout-5.webp",
}

export function getExerciseImage(name: string): string {
  if (!name) return exerciseImages.default

  const lower = name.toLowerCase().trim()

  // 1. Exact match
  if (exerciseImages[lower]) return exerciseImages[lower]

  // 2. Remove common prefixes and try again
  const cleaned = lower
    .replace(/^(dumbbell|db|barbell|bb|kettlebell|kb|cable|machine|bodyweight|bw)\s+/i, "")
    .trim()

  if (exerciseImages[cleaned]) return exerciseImages[cleaned]

  // 3. Fuzzy match: check if any key is contained in the name
  for (const [key, url] of Object.entries(exerciseImages)) {
    if (key !== "default" && lower.includes(key)) {
      return url
    }
  }

  // 4. Fuzzy match reverse: check if name contains any key
  for (const [key, url] of Object.entries(exerciseImages)) {
    if (key !== "default" && key.length > 3 && cleaned.includes(key)) {
      return url
    }
  }

  return exerciseImages.default
}
