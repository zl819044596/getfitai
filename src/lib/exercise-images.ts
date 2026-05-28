// Exercise image mapping with aliases and equipment variants
// All images fallback to /images/workout-{1-5}.jpg until dedicated exercise photos are added

export const exerciseImages: Record<string, string> = {
  // ========== DEFAULT ==========
  default: "/images/workout-3.jpg",

  // ========== CHEST ==========
  "bench press": "/images/workout-1.jpg",
  "barbell bench press": "/images/workout-1.jpg",
  "dumbbell bench press": "/images/workout-1.jpg",
  "db bench press": "/images/workout-1.jpg",
  "incline bench press": "/images/workout-1.jpg",
  "decline bench press": "/images/workout-1.jpg",
  "chest press": "/images/workout-1.jpg",
  "machine chest press": "/images/workout-1.jpg",
  "dumbbell press": "/images/workout-1.jpg",
  "db press": "/images/workout-1.jpg",
  "push up": "/images/workout-2.jpg",
  "push-up": "/images/workout-2.jpg",
  "pushup": "/images/workout-2.jpg",
  "diamond push up": "/images/workout-2.jpg",
  "wide grip push up": "/images/workout-2.jpg",
  "chest fly": "/images/workout-1.jpg",
  "dumbbell fly": "/images/workout-1.jpg",
  "db fly": "/images/workout-1.jpg",
  "cable fly": "/images/workout-1.jpg",
  "pec deck": "/images/workout-1.jpg",
  "pec deck fly": "/images/workout-1.jpg",

  // ========== BACK ==========
  "bent over row": "/images/workout-4.jpg",
  "bent-over row": "/images/workout-4.jpg",
  "barbell bent over row": "/images/workout-4.jpg",
  "dumbbell bent over row": "/images/workout-4.jpg",
  "db bent over row": "/images/workout-4.jpg",
  "single arm row": "/images/workout-4.jpg",
  "one arm row": "/images/workout-4.jpg",
  "row": "/images/workout-4.jpg",
  "seated row": "/images/workout-4.jpg",
  "cable row": "/images/workout-4.jpg",
  "t-bar row": "/images/workout-4.jpg",
  "lat pulldown": "/images/workout-4.jpg",
  "pull up": "/images/workout-4.jpg",
  "pull-up": "/images/workout-4.jpg",
  "pullup": "/images/workout-4.jpg",
  "chin up": "/images/workout-4.jpg",
  "chin-up": "/images/workout-4.jpg",
  "deadlift": "/images/workout-5.jpg",
  "barbell deadlift": "/images/workout-5.jpg",
  "romanian deadlift": "/images/workout-5.jpg",
  "rdl": "/images/workout-5.jpg",
  "dumbbell romanian deadlift": "/images/workout-5.jpg",
  "db romanian deadlift": "/images/workout-5.jpg",
  "sumo deadlift": "/images/workout-5.jpg",
  "good morning": "/images/workout-5.jpg",
  "back extension": "/images/workout-5.jpg",
  "hyperextension": "/images/workout-5.jpg",
  "face pull": "/images/workout-4.jpg",
  "reverse fly": "/images/workout-4.jpg",
  "rear delt fly": "/images/workout-4.jpg",
  "shrugs": "/images/workout-4.jpg",

  // ========== LEGS ==========
  "squat": "/images/workout-3.jpg",
  "barbell squat": "/images/workout-3.jpg",
  "back squat": "/images/workout-3.jpg",
  "front squat": "/images/workout-3.jpg",
  "goblet squat": "/images/workout-3.jpg",
  "dumbbell goblet squat": "/images/workout-3.jpg",
  "db goblet squat": "/images/workout-3.jpg",
  "kettlebell goblet squat": "/images/workout-3.jpg",
  "kb goblet squat": "/images/workout-3.jpg",
  "leg press": "/images/workout-3.jpg",
  "hack squat": "/images/workout-3.jpg",
  "lunge": "/images/workout-3.jpg",
  "walking lunge": "/images/workout-3.jpg",
  "reverse lunge": "/images/workout-3.jpg",
  "dumbbell lunge": "/images/workout-3.jpg",
  "db lunge": "/images/workout-3.jpg",
  "bulgarian split squat": "/images/workout-3.jpg",
  "split squat": "/images/workout-3.jpg",
  "step up": "/images/workout-3.jpg",
  "box squat": "/images/workout-3.jpg",
  "pistol squat": "/images/workout-3.jpg",
  "leg extension": "/images/workout-3.jpg",
  "leg curl": "/images/workout-3.jpg",
  "lying leg curl": "/images/workout-3.jpg",
  "seated leg curl": "/images/workout-3.jpg",
  "calf raise": "/images/workout-3.jpg",
  "standing calf raise": "/images/workout-3.jpg",
  "seated calf raise": "/images/workout-3.jpg",
  "hip thrust": "/images/workout-3.jpg",
  "glute bridge": "/images/workout-3.jpg",

  // ========== SHOULDERS ==========
  "shoulder press": "/images/workout-2.jpg",
  "overhead press": "/images/workout-2.jpg",
  "military press": "/images/workout-2.jpg",
  "barbell overhead press": "/images/workout-2.jpg",
  "dumbbell shoulder press": "/images/workout-2.jpg",
  "db shoulder press": "/images/workout-2.jpg",
  "arnold press": "/images/workout-2.jpg",
  "push press": "/images/workout-2.jpg",
  "dumbbell push press": "/images/workout-2.jpg",
  "db push press": "/images/workout-2.jpg",
  "lateral raise": "/images/workout-2.jpg",
  "side lateral raise": "/images/workout-2.jpg",
  "dumbbell lateral raise": "/images/workout-2.jpg",
  "db lateral raise": "/images/workout-2.jpg",
  "cable lateral raise": "/images/workout-2.jpg",
  "front raise": "/images/workout-2.jpg",
  "dumbbell front raise": "/images/workout-2.jpg",
  "db front raise": "/images/workout-2.jpg",
  "upright row": "/images/workout-2.jpg",

  // ========== ARMS ==========
  "bicep curl": "/images/workout-5.jpg",
  "dumbbell curl": "/images/workout-5.jpg",
  "db curl": "/images/workout-5.jpg",
  "barbell curl": "/images/workout-5.jpg",
  "hammer curl": "/images/workout-5.jpg",
  "dumbbell hammer curl": "/images/workout-5.jpg",
  "db hammer curl": "/images/workout-5.jpg",
  "preacher curl": "/images/workout-5.jpg",
  "concentration curl": "/images/workout-5.jpg",
  "incline curl": "/images/workout-5.jpg",
  "tricep extension": "/images/workout-5.jpg",
  "tricep pushdown": "/images/workout-5.jpg",
  "cable pushdown": "/images/workout-5.jpg",
  "skull crusher": "/images/workout-5.jpg",
  "lying tricep extension": "/images/workout-5.jpg",
  "overhead tricep extension": "/images/workout-5.jpg",
  "dumbbell overhead extension": "/images/workout-5.jpg",
  "tricep dip": "/images/workout-5.jpg",
  "bench dip": "/images/workout-5.jpg",
  "close grip bench press": "/images/workout-5.jpg",

  // ========== CORE ==========
  "plank": "/images/workout-2.jpg",
  "forearm plank": "/images/workout-2.jpg",
  "high plank": "/images/workout-2.jpg",
  "side plank": "/images/workout-2.jpg",
  "plank row": "/images/workout-4.jpg",
  "renengade row": "/images/workout-4.jpg",
  "crunch": "/images/workout-2.jpg",
  "sit up": "/images/workout-2.jpg",
  "sit-up": "/images/workout-2.jpg",
  "leg raise": "/images/workout-2.jpg",
  "hanging leg raise": "/images/workout-2.jpg",
  "russian twist": "/images/workout-2.jpg",
  "bicycle crunch": "/images/workout-2.jpg",
  "dead bug": "/images/workout-2.jpg",
  "bird dog": "/images/workout-2.jpg",
  "ab wheel rollout": "/images/workout-2.jpg",
  "hollow hold": "/images/workout-2.jpg",
  "flutter kick": "/images/workout-2.jpg",

  // ========== FULL BODY / CARDIO ==========
  "burpee": "/images/workout-2.jpg",
  "mountain climber": "/images/workout-2.jpg",
  "jumping jack": "/images/workout-2.jpg",
  "high knees": "/images/workout-2.jpg",
  "kettlebell swing": "/images/workout-3.jpg",
  "kb swing": "/images/workout-3.jpg",
  "turkish get up": "/images/workout-3.jpg",
  "clean and press": "/images/workout-2.jpg",
  "snatch": "/images/workout-2.jpg",
  "thruster": "/images/workout-2.jpg",
  "wall ball": "/images/workout-3.jpg",
  "battle ropes": "/images/workout-2.jpg",
  "sled push": "/images/workout-3.jpg",
  "farmer walk": "/images/workout-5.jpg",
  "farmer's walk": "/images/workout-5.jpg",
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
