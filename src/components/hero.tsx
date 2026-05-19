import { Star, Users, Award, Clock, Dumbbell, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Fitness background with gym equipment"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-600 mb-6">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span>Trusted by 10,000+ users</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Your personal<br />
              <span className="text-gray-400">AI trainer.</span>
            </h1>

            <p className="text-lg text-gray-500 mb-8 max-w-md">
              Generate personalized workout plans tailored to your goals, experience, and available equipment. No sign-up required.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Generate Workout
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <Link
                href="/tools"
                className="inline-flex items-center px-6 py-3 rounded-full font-medium border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Shield className="w-5 h-5 mr-2" />
                Free Tools
              </Link>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2"><Users className="w-4 h-4" /><span>10K+ Users</span></div>
              <div className="flex items-center gap-2"><Award className="w-4 h-4" /><span>4.9 Rating</span></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>30 Seconds</span></div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/feature-workout.png"
                alt="AI Workout Planning"
                width={600}
                height={400}
                className="w-full h-auto"
              />
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
  );
}
