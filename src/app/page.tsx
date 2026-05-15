"use client";

import { WorkoutForm } from "@/components/workout-form";
import { WorkoutPlan } from "@/components/workout-plan";
import { useState } from "react";
import Image from "next/image";
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
  Menu,
  X,
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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">GetFitAI</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#how-it-works" className="hover:text-black transition-colors">
              How it Works
            </a>
            <a href="#features" className="hover:text-black transition-colors">
              Features
            </a>
            <a href="/tools" className="hover:text-black transition-colors">
              Tools
            </a>
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-3">
            <a href="#how-it-works" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>
              How it Works
            </a>
            <a href="#features" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a href="/tools" className="block py-2 text-gray-600" onClick={() => setMobileMenuOpen(false)}>
              Tools
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full bg-black text-white py-3 rounded-full text-sm font-medium"
            >
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section with AI Image */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* AI Generated Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Abstract fitness technology background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-600 mb-6">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span>Trusted by 10,000+ users</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                Your personal
                <br />
                <span className="text-gray-400">AI trainer.</span>
              </h1>

              <p className="text-lg text-gray-500 mb-8 max-w-md">
                Generate personalized workout plans tailored to your goals,
                experience, and available equipment. No sign-up required.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  Generate Workout
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <a
                  href="/tools"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Free Tools
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>10K+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>4.9 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>30 Seconds</span>
                </div>
              </div>
            </div>

            {/* Right Content - AI Image + Mockup */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/feature-workout.png"
                  alt="AI Workout Planning"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                {/* Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm">Upper Body Strength</p>
                      <p className="text-xs text-gray-500">45 min • Intermediate</p>
                    </div>
                    <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                      <Dumbbell className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black mb-3">
              Create your workout plan
            </h2>
            <p className="text-gray-500">
              Answer a few questions and get a personalized plan in seconds.
            </p>
          </div>
          <WorkoutForm onPlanGenerated={setPlan} />
        </div>
      </section>

      {/* Workout Plan Result */}
      {plan && (
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <WorkoutPlan plan={plan} />
          </div>
        </section>
      )}

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3 block">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-black max-w-2xl mx-auto">
              Three steps to your perfect workout
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Tell us about you",
                description: "Share your fitness goal, experience level, and what equipment you have access to.",
                icon: <Dumbbell className="w-6 h-6" />,
              },
              {
                step: "02",
                title: "AI generates your plan",
                description: "Our advanced AI creates a personalized workout plan optimized for your specific situation.",
                icon: <Zap className="w-6 h-6" />,
              },
              {
                step: "03",
                title: "Start training",
                description: "Follow your plan, track your progress, and watch your fitness improve week by week.",
                icon: <TrendingUp className="w-6 h-6" />,
              },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="bg-gray-50 rounded-3xl p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="text-sm font-medium text-gray-300 mb-4">
                    Step {item.step}
                  </div>
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-black mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3 block">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-black max-w-2xl mx-auto">
              Everything you need to reach your fitness goals
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6 text-red-500" />,
                title: "AI-Powered Plans",
                description: "Advanced algorithms create personalized workouts based on your unique profile.",
              },
              {
                icon: <Dumbbell className="w-6 h-6 text-blue-500" />,
                title: "Equipment Flexibility",
                description: "Works with full gym, dumbbells only, or no equipment at all.",
              },
              {
                icon: <Clock className="w-6 h-6 text-green-500" />,
                title: "Time Optimized",
                description: "Get effective workouts whether you have 15 minutes or 90 minutes.",
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-purple-500" />,
                title: "Progress Tracking",
                description: "Track completed workouts and monitor your improvement over time.",
              },
              {
                icon: <Shield className="w-6 h-6 text-orange-500" />,
                title: "No Sign-up Required",
                description: "Start generating workouts immediately. No account needed.",
              },
              {
                icon: <Award className="w-6 h-6 text-yellow-500" />,
                title: "Expert Designed",
                description: "All exercises are based on proven fitness principles and research.",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/bmi-hero.png"
                alt="Fitness Tools"
                width={500}
                height={350}
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div>
              <span className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3 block">
                Free Tools
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                More than just workouts
              </h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Explore our collection of free fitness calculators and tools to help you track your progress and optimize your training.
              </p>
              <a
                href="/tools"
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Explore Tools
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-black max-w-2xl mx-auto">
              Loved by fitness enthusiasts worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Busy Professional",
                content: "GetFitAI has been a game-changer for me. As someone who travels frequently, having personalized hotel room workouts is incredible.",
                rating: 5,
              },
              {
                name: "Mike Chen",
                role: "Fitness Beginner",
                content: "I was intimidated by the gym, but GetFitAI gave me a clear plan to follow. I've already seen results in just 4 weeks!",
                rating: 5,
              },
              {
                name: "Emma Davis",
                role: "Marathon Runner",
                content: "The cross-training plans are excellent. They've helped me build strength without compromising my running schedule.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full" />
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your fitness?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Join thousands of people who have already achieved their fitness goals with GetFitAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
            >
              Get Started Free
              <ChevronRight className="w-6 h-6 ml-2" />
            </button>
            <a
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border border-white/20 rounded-full hover:bg-white/10 transition-colors"
            >
              About Us
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            No credit card required. No sign-up needed.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg tracking-tight">GetFitAI</span>
              </div>
              <p className="text-sm text-gray-500">
                AI-powered workout plans for everyone. No sign-up required.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="/" className="hover:text-black transition-colors">Workout Generator</a></li>
                <li><a href="/tools" className="hover:text-black transition-colors">Fitness Tools</a></li>
                <li><a href="#features" className="hover:text-black transition-colors">Features</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="/blog" className="hover:text-black transition-colors">Blog</a></li>
                <li><a href="/about" className="hover:text-black transition-colors">About</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-black transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
            © 2025 GetFitAI. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
