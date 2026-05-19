import { WorkoutLanding } from "@/components/workout-landing";
import { Target, Clock, Activity, Sprout } from "lucide-react";

const config = {
  badge: { icon: <Sprout className="w-4 h-4" />, text: "Beginner Friendly" },
  title: "Beginner Workout Generator",
  description: "New to fitness? We've got you. Get simple, safe, and effective workouts designed for people just starting their journey.",
  benefits: [
    { icon: <Sprout className="w-5 h-5" />, text: "Beginner-friendly moves" },
    { icon: <Clock className="w-5 h-5" />, text: "15-30 min sessions" },
    { icon: <Target className="w-5 h-5" />, text: "Clear form instructions" },
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
};

export default function BeginnerWorkoutPage() {
  return <WorkoutLanding config={config} />;
}
