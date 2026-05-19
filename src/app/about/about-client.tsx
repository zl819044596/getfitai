"use client";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Mail,
  Zap,
  Target,
  Heart,
  MessageSquare,
  Code,
} from "lucide-react";

export function AboutClient() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">GetFitAI</span>
          </Link>
        </div>
      </nav>

      <section className="pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              About GetFitAI
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Making personalized fitness accessible to everyone through the power of AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
              <Zap className="w-16 h-16 text-gray-300" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-black mb-4">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>GetFitAI was born from a simple frustration: fitness planning should not be complicated.</p>
                <p>As busy professionals, we found ourselves spending more time researching workouts than actually doing them.</p>
                <p>So we built GetFitAI — a tool that generates personalized workout plans in seconds, with zero friction.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-black mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Zap className="w-6 h-6" />, title: "Simplicity", description: "Fitness should be simple. We remove friction so you can focus on what matters: training." },
                { icon: <Target className="w-6 h-6" />, title: "Personalization", description: "Every body is different. Our AI creates plans tailored to your unique situation and goals." },
                { icon: <Heart className="w-6 h-6" />, title: "Accessibility", description: "Fitness is for everyone. No expensive equipment, no gym membership, no barriers." },
              ].map((value, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-500 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-black mb-6 text-center">Built With</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["Next.js", "Tailwind CSS", "DeepSeek AI", "Vercel"].map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-gray-100">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-black mb-4">Get in Touch</h2>
            <p className="text-gray-500 mb-8">Have feedback, questions, or want to collaborate?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:hi@getfitai.io" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                <Mail className="w-5 h-5" /> hi@getfitai.io
              </a>
              <a href="https://twitter.com/getfitai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors">
                <MessageSquare className="w-5 h-5" /> Twitter
              </a>
              <a href="https://github.com/getfitai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors">
                <Code className="w-5 h-5" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Start your fitness journey today</h2>
          <p className="text-gray-400 mb-8">Join thousands of people who have already transformed their fitness with GetFitAI.</p>
          <Link href="/" className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Generate Your First Workout
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}
