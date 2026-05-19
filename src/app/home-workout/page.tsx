import { WorkoutLanding } from "@/components/workout-landing";
import { Target, Clock, Activity, Home } from "lucide-react";

const config = {
  badge: { icon: <Home className="w-4 h-4" />, text: "Home Workout" },
  title: "Home Workout Generator",
  description: "No gym? No problem. Get effective bodyweight workouts you can do anywhere — your living room, a park, or a hotel room.",
  benefits: [
    { icon: <Home className="w-5 h-5" />, text: "Zero equipment needed" },
    { icon: <Clock className="w-5 h-5" />, text: "20-45 min sessions" },
    { icon: <Activity className="w-5 h-5" />, text: "Bodyweight mastery" },
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
};

export default function HomeWorkoutPage() {
  return <WorkoutLanding config={config} />;
}
