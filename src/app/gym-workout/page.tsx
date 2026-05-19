import { WorkoutLanding } from "@/components/workout-landing";
import { Target, Clock, Activity, Dumbbell } from "lucide-react";

const config = {
  badge: { icon: <Dumbbell className="w-4 h-4" />, text: "Gym Workout" },
  title: "Gym Workout Generator",
  description: "AI-powered workout plans designed for gym environments. Full access to barbells, dumbbells, cables, and machines.",
  benefits: [
    { icon: <Target className="w-5 h-5" />, text: "Full equipment access" },
    { icon: <Clock className="w-5 h-5" />, text: "45-60 min sessions" },
    { icon: <Activity className="w-5 h-5" />, text: "Progressive overload focus" },
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
};

export default function GymWorkoutPage() {
  return <WorkoutLanding config={config} />;
}
