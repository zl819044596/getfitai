import {
  Dumbbell,
  Home,
  Sprout,
  Target,
  Clock,
  Activity,
  type LucideIcon,
} from "lucide-react";

export interface WorkoutConfig {
  type: string;
  badgeIcon: string;
  badgeText: string;
  title: string;
  description: string;
  benefits: { icon: string; text: string }[];
  sampleExercises: { name: string; muscle: string; sets: string }[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  defaultEquipment: string;
  generatorTitle: string;
  generatorSubtitle: string;
}

export const iconMap: Record<string, LucideIcon> = {
  Dumbbell,
  Home,
  Sprout,
  Target,
  Clock,
  Activity,
};

export const workoutConfigs: Record<string, WorkoutConfig> = {
  gym: {
    type: "gym",
    badgeIcon: "Dumbbell",
    badgeText: "Gym Workout",
    title: "Gym Workout Generator",
    description:
      "AI-powered workout plans designed for gym environments. Full access to barbells, dumbbells, cables, and machines.",
    benefits: [
      { icon: "Target", text: "Full equipment access" },
      { icon: "Clock", text: "45-60 min sessions" },
      { icon: "Activity", text: "Progressive overload focus" },
    ],
    sampleExercises: [
      { name: "Bench Press", muscle: "Chest", sets: "4×8-10" },
      { name: "Barbell Squat", muscle: "Legs", sets: "4×6-8" },
      { name: "Deadlift", muscle: "Back", sets: "3×5" },
      { name: "Overhead Press", muscle: "Shoulders", sets: "3×10" },
      { name: "Lat Pulldown", muscle: "Back", sets: "3×12" },
      { name: "Leg Press", muscle: "Legs", sets: "3×12" },
    ],
    faqs: [
      {
        q: "Do I need a gym membership?",
        a: "Yes, this plan is designed for full gym access with barbells, dumbbells, cables, and machines.",
      },
      {
        q: "How long are the workouts?",
        a: "You choose your preferred duration (15-90 min), and we'll optimize the plan accordingly. Most gym sessions work best at 45-60 minutes.",
      },
      {
        q: "Can beginners use this?",
        a: "Absolutely! Just select 'Beginner' as your experience level and we'll adjust exercises, weights, and intensity for you.",
      },
    ],
    ctaTitle: "Ready to hit the gym?",
    ctaSubtitle: "Generate your personalized gym workout plan now.",
    ctaButton: "Generate Gym Plan",
    defaultEquipment: "gym",
    generatorTitle: "Create Your Gym Plan",
    generatorSubtitle: "Tell us your goals and we'll build a plan optimized for the gym.",
  },
  home: {
    type: "home",
    badgeIcon: "Home",
    badgeText: "Home Workout",
    title: "Home Workout Generator",
    description:
      "No gym? No problem. Get effective bodyweight workouts you can do anywhere — your living room, a park, or a hotel room.",
    benefits: [
      { icon: "Home", text: "Zero equipment needed" },
      { icon: "Clock", text: "20-45 min sessions" },
      { icon: "Activity", text: "Bodyweight mastery" },
    ],
    sampleExercises: [
      { name: "Push-ups", muscle: "Chest / Triceps", sets: "3×10-15" },
      { name: "Bodyweight Squats", muscle: "Legs", sets: "3×15-20" },
      { name: "Glute Bridges", muscle: "Glutes", sets: "3×15" },
      { name: "Pike Push-ups", muscle: "Shoulders", sets: "3×8-12" },
      { name: "Plank Hold", muscle: "Core", sets: "3×30-60s" },
      { name: "Walking Lunges", muscle: "Legs", sets: "3×12/leg" },
    ],
    faqs: [
      {
        q: "Do I really need zero equipment?",
        a: "Yes! All exercises use just your bodyweight. If you have resistance bands or a pull-up bar, you can mention that in the notes for even more variety.",
      },
      {
        q: "Can I build muscle without weights?",
        a: "Absolutely. Bodyweight exercises build functional strength and muscle, especially for beginners and intermediates. We use higher reps and time-under-tension to compensate.",
      },
      {
        q: "How much space do I need?",
        a: "Very little — about the size of a yoga mat (2m × 1m). Perfect for apartments, hotel rooms, or small home offices.",
      },
    ],
    ctaTitle: "Ready to work out at home?",
    ctaSubtitle: "Generate your personalized home workout plan now.",
    ctaButton: "Generate Home Plan",
    defaultEquipment: "home",
    generatorTitle: "Create Your Home Plan",
    generatorSubtitle: "Tell us your goals and we'll build a bodyweight-only plan.",
  },
  beginner: {
    type: "beginner",
    badgeIcon: "Sprout",
    badgeText: "Beginner Friendly",
    title: "Beginner Workout Generator",
    description:
      "New to fitness? We've got you. Get simple, safe, and effective workouts designed for people just starting their journey.",
    benefits: [
      { icon: "Sprout", text: "Beginner-friendly moves" },
      { icon: "Clock", text: "15-30 min sessions" },
      { icon: "Target", text: "Clear form instructions" },
    ],
    sampleExercises: [
      { name: "Wall Push-ups", muscle: "Chest", sets: "3×8-10" },
      { name: "Chair Squats", muscle: "Legs", sets: "3×10-12" },
      { name: "Bird Dog", muscle: "Core / Back", sets: "3×8/side" },
      { name: "Arm Circles", muscle: "Shoulders", sets: "3×30s" },
      { name: "Glute Bridges", muscle: "Glutes", sets: "3×12" },
      { name: "Step-ups", muscle: "Legs", sets: "3×10/leg" },
    ],
    faqs: [
      {
        q: "I've never worked out before. Is this safe?",
        a: "Completely. Our AI includes detailed form tips for every exercise and focuses on low-impact, beginner-friendly movements. Always start slow and listen to your body.",
      },
      {
        q: "How often should I work out?",
        a: "We recommend 2-3 sessions per week with at least one rest day between workouts. Consistency beats intensity when you're starting out.",
      },
      {
        q: "What if an exercise feels too hard?",
        a: "Every plan includes simpler alternatives. You can also use the 'notes' field to mention any concerns, and the AI will adapt accordingly.",
      },
    ],
    ctaTitle: "Start your fitness journey today",
    ctaSubtitle: "No experience needed. Just show up and follow the plan.",
    ctaButton: "Generate Beginner Plan",
    defaultEquipment: "home",
    generatorTitle: "Create Your Beginner Plan",
    generatorSubtitle: "Low intensity, high clarity — the perfect start to your fitness journey.",
  },
};
