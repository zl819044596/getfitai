"use client";

import { WorkoutForm } from "@/components/workout-form";
import { WorkoutPlan } from "@/components/workout-plan";
import { useState } from "react";
import {
  Zap,
  Shield,
  Clock,
  Dumbbell,
  TrendingUp,
  ChevronRight,
  Star,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const [plan, setPlan] = useState<{
    title: string;
    duration: string;
    intensity: string;
    exercises: {
      name: string;
      sets: number;
      reps: string;
      rest: string;
      notes?: string;
    }[];
    warmup?: string[];
    cooldown?: string[];
  } | null>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">GetFitAI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#how-it-works" className="hover:text-black transition-colors">
              How it Works
            </a>
            <a href="#features" className="hover:text-black transition-colors">
              Features
            </a>
            <a href="#testimonials" className="hover:text-black transition-colors">
              Reviews
            </a>
          </div>
          <button className="btn-primary text-sm py-2.5 px-6">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-600 mb-8 animate-fade-in">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span>Trusted by 10,000+ fitness enthusiasts</span>
              </div>

              {/* Headline */}
              <h1 className="text-display text-black mb-6 animate-fade-in-up">
                Your personal
                <br />
                <span className="text-gray-400">AI trainer.</span>
              </h1>

              {/* Subhead */}
              <p className="text-body-large text-gray-500 mb-8 max-w-md animate-fade-in-up delay-100">
                Generate personalized workout plans tailored to your goals,
                experience, and available equipment. No sign-up required.
              </p>

              {/* Stats */}
              <div className="flex items-center gap-8 mb-10 animate-fade-in-up delay-200">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-600">
                    10K+ Users
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-600">
                    4.9 Rating
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-600">
                    30 Seconds
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
                <button
                  onClick={() =>
                    document
                      .getElementById("generator")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-primary"
                >
                  Generate Workout
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="btn-secondary">
                  <Shield className="w-5 h-5 mr-2" />
                  Free Forever
                </button>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative animate-fade-in delay-300">
              <div className="relative bg-gray-50 rounded-3xl p-8 border border-gray-100">
                {/* Mock Workout Card */}
                <div className="bg-white rounded-2xl shadow-xl p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">
                        Upper Body Strength
                      </h3>
                      <p className="text-sm text-gray-400">
                        45 min • Intermediate
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                      <Dumbbell className="w-6 h-6 text-red-500" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Bench Press", sets: "4 sets", reps: "8-10 reps" },
                      { name: "Pull-Ups", sets: "3 sets", reps: "6-8 reps" },
                      { name: "Shoulder Press", sets: "3 sets", reps: "10 reps" },
                    ].map((exercise, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                      >
                        <span className="font-medium text-sm">
                          {exercise.name}
                        </span>
                        <span className="text-xs text-gray-400">
                          {exercise.sets} • {exercise.reps}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Weekly Progress</p>
                      <p className="font-bold text-lg">+23%</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      +2.4k today
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="py-20 md:py-32 bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-headline text-black mb-4">
              Create your workout plan
            </h2>
            <p className="text-body">
              Answer a few questions and get a personalized plan in seconds.
            </p>
          </div>
          <WorkoutForm onPlanGenerated={setPlan} />
        </div>
      </section>

      {/* Workout Plan Result */}
      {plan && (
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <WorkoutPlan plan={plan} />
          </div>
        </section>
      )}

      {/* How It Works */}
      <section id="how-it-works" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-label text-gray-400 mb-4 block">
              How It Works
            </span>
            <h2 className="text-title text-black max-w-2xl mx-auto">
              Three steps to your perfect workout
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Tell us about you",
                description:
                  "Share your fitness goal, experience level, and what equipment you have access to.",
                icon: <Dumbbell className="w-6 h-6" />,
              },
              {
                step: "02",
                title: "AI generates your plan",
                description:
                  "Our advanced AI creates a personalized workout plan optimized for your specific situation.",
                icon: <Zap className="w-6 h-6" />,
              },
              {
                step: "03",
                title: "Start training",
                description:
                  "Follow your plan, track your progress, and watch your fitness improve week by week.",
                icon: <TrendingUp className="w-6 h-6" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group"
              >
                <div className="bg-gray-50 rounded-3xl p-8 h-full card-hover">
                  <div className="text-label text-gray-300 mb-6">
                    Step {item.step}
                  </div>
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-black mb-6 group-hover:shadow-md transition-shadow">
                    {item.icon}
                  </div>
                  <h3 className="text-headline text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-body">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-label text-gray-400 mb-4 block">
              Features
            </span>
            <h2 className="text-title text-black max-w-2xl mx-auto">
              Everything you need to reach your fitness goals
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6 text-red-500" />,
                title: "AI-Powered Plans",
                description:
                  "Advanced algorithms create personalized workouts based on your unique profile.",
              },
              {
                icon: <Dumbbell className="w-6 h-6 text-blue-500" />,
                title: "Equipment Flexibility",
                description:
                  "Works with full gym, dumbbells only, or no equipment at all.",
              },
              {
                icon: <Clock className="w-6 h-6 text-green-500" />,
                title: "Time Optimized",
                description:
                  "Get effective workouts whether you have 15 minutes or 90 minutes.",
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
                title: "Progress Tracking",
                description:
                  "Track completed workouts and monitor your improvement over time.",
              },
              {
                icon: <Shield className="w-6 h-6 text-orange-500" />,
                title: "No Sign-up Required",
                description:
                  "Start generating workouts immediately. No account needed.",
              },
              {
                icon: <Award className="w-6 h-6 text-yellow-500" />,
                title: "Expert Designed",
                description:
                  "All exercises are based on proven fitness principles and research.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-gray-100 card-hover"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-body text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-label text-gray-400 mb-4 block">
              Testimonials
            </span>
            <h2 className="text-title text-black max-w-2xl mx-auto">
              Loved by fitness enthusiasts worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Busy Professional",
                content:
                  "GetFitAI has been a game-changer for me. As someone who travels frequently, having personalized hotel room workouts is incredible.",
                rating: 5,
              },
              {
                name: "Mike Chen",
                role: "Fitness Beginner",
                content:
                  "I was intimidated by the gym, but GetFitAI gave me a clear plan to follow. I've already seen results in just 4 weeks!",
                rating: 5,
              },
              {
                name: "Emma Davis",
                role: "Marathon Runner",
                content:
                  "The cross-training plans are excellent. They've helped me build strength without compromising my running schedule.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-3xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-body mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full" />
                  <div>
                    <p className="font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-title mb-6">
            Ready to transform your fitness?
          </h2>
          <p className="text-body-large text-gray-400 mb-10 max-w-xl mx-auto">
            Join thousands of people who have already achieved their fitness
            goals with GetFitAI.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("generator")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Get Started Free
            <ChevronRight className="w-6 h-6 ml-2" />
          </button>
          <p className="text-sm text-gray-500 mt-6">
            No credit card required. No sign-up needed.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                GetFitAI
              </span>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-black transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Contact
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © 2024 GetFitAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
