import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Workout Planner: Free Personalized Training Plans | GetFitAI",
  description:
    "Create personalized workout plans with AI. Get custom training programs tailored to your goals, experience, and equipment. Free, no signup required.",
  keywords: [
    "ai workout planner",
    "ai fitness planner",
    "ai gym workout generator",
    "free ai workout generator",
    "ai exercise generator",
    "personalized workout plan generator",
    "custom workout plan generator",
    "ai personal trainer",
    "ai workout plan",
  ],
  alternates: {
    canonical: "https://www.getfitai.io/blog/ai-workout-planner/",
  },
  openGraph: {
    title: "AI Workout Planner: Free Personalized Training Plans | GetFitAI",
    description:
      "Create personalized workout plans with AI. Get custom training programs tailored to your goals, experience, and equipment.",
    url: "https://www.getfitai.io/blog/ai-workout-planner/",
    images: [
      {
        url: "https://www.getfitai.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Workout Planner - Free Personalized Training Plans",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Workout Planner: The Future of Personalized Fitness Training (2026)",
  description:
    "Create personalized workout plans with AI. Get custom training programs tailored to your goals, experience, and equipment. Free, no signup required.",
  image: "https://www.getfitai.io/og-image.jpg",
  author: {
    "@type": "Organization",
    name: "GetFitAI",
    url: "https://www.getfitai.io",
  },
  publisher: {
    "@type": "Organization",
    name: "GetFitAI",
    logo: {
      "@type": "ImageObject",
      url: "https://www.getfitai.io/logo.png",
    },
  },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.getfitai.io/blog/ai-workout-planner",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI workout planner?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI workout planner is an intelligent tool that creates personalized training programs based on your fitness goals, experience level, available equipment, and schedule. It uses algorithms trained on exercise science principles to generate effective workouts in seconds, eliminating the need for generic templates or expensive personal trainers.",
      },
    },
    {
      "@type": "Question",
      name: "Are AI workout planners free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many AI workout planners offer free basic plans. GetFitAI provides completely free personalized workout generation with no signup required. Premium features like advanced periodization, nutrition integration, and progress tracking may require subscription on some platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI workout planners replace personal trainers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI workout planners excel at program design, exercise selection, and progressive overload — tasks that traditionally require trainer expertise. However, they cannot provide real-time form correction, hands-on spotting, or the motivational accountability of an in-person trainer. For most people, AI planners offer 80% of trainer value at 0% of the cost.",
      },
    },
  ],
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-slate-950">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      <article className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-medium rounded-full">
                AI Fitness
              </span>
              <span className="text-sm text-slate-500">June 1, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              AI Workout Planner: The Future of Personalized Fitness Training
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Discover how AI workout planners create personalized training programs in seconds. Free, science-backed, and tailored to your exact goals and equipment.
            </p>
          </header>

          {/* CTA Box */}
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <Sparkles className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Try Our Free AI Workout Planner
                </h3>
                <p className="text-slate-400 mb-4">
                  Generate your personalized training plan in under 30 seconds. No signup, no credit card.
                </p>
                <Link
                  href="/tools/workout-generator"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all"
                >
                  Create My Workout Plan
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-white prose-p:text-slate-400 prose-strong:text-white prose-li:text-slate-400">
            <h2>What Is an AI Workout Planner?</h2>
            <p>
              An <strong>AI workout planner</strong> is a smart fitness tool that uses artificial intelligence to create personalized training programs. Unlike static workout templates, AI planners adapt to your specific situation — your goals, fitness level, available equipment, and time constraints.
            </p>
            <p>
              These tools analyze millions of data points from exercise science research, applying principles like <strong>progressive overload</strong>, <strong>muscle group balancing</strong>, and <strong>recovery management</strong> to generate effective routines in seconds.
            </p>

            <h2>How AI Workout Planners Work</h2>
            <ol>
              <li><strong>Input Collection:</strong> You answer questions about your goals (muscle building, fat loss, strength, endurance), experience level, equipment, and schedule.</li>
              <li><strong>Algorithm Analysis:</strong> The AI processes your inputs against exercise science databases, considering factors like training frequency, volume, intensity, and exercise selection.</li>
              <li><strong>Plan Generation:</strong> Within seconds, you receive a complete workout plan with specific exercises, sets, reps, rest periods, and progression guidelines.</li>
              <li><strong>Adaptation:</strong> Advanced AI planners learn from your feedback, adjusting future plans based on your progress, preferences, and recovery status.</li>
            </ol>

            <h2>Benefits of AI Workout Planners</h2>
            <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
              <div className="bg-slate-900/40 rounded-xl p-5">
                <h4 className="text-white font-semibold mb-2">Personalization</h4>
                <p className="text-slate-400 text-sm">Every plan is unique to your body, goals, and circumstances. No more generic templates that don't fit your situation.</p>
              </div>
              <div className="bg-slate-900/40 rounded-xl p-5">
                <h4 className="text-white font-semibold mb-2">Speed</h4>
                <p className="text-slate-400 text-sm">Get a complete training program in seconds instead of hours of research or waiting for a trainer.</p>
              </div>
              <div className="bg-slate-900/40 rounded-xl p-5">
                <h4 className="text-white font-semibold mb-2">Science-Backed</h4>
                <p className="text-slate-400 text-sm">AI applies proven exercise science principles like progressive overload, periodization, and muscle group balancing.</p>
              </div>
              <div className="bg-slate-900/40 rounded-xl p-5">
                <h4 className="text-white font-semibold mb-2">Cost-Effective</h4>
                <p className="text-slate-400 text-sm">Free AI planners provide 80% of personal trainer value at 0% of the cost. Premium plans cost a fraction of trainer fees.</p>
              </div>
            </div>

            <h2>AI vs. Personal Trainer: Which Is Better?</h2>
            <div className="bg-slate-900/40 rounded-xl p-6 not-prose my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="pb-3 text-white font-semibold">Feature</th>
                    <th className="pb-3 text-white font-semibold">AI Planner</th>
                    <th className="pb-3 text-white font-semibold">Personal Trainer</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3">Program Design</td>
                    <td className="py-3 text-green-400">Excellent</td>
                    <td className="py-3 text-green-400">Excellent</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3">Cost</td>
                    <td className="py-3 text-green-400">Free - $20/mo</td>
                    <td className="py-3 text-red-400">$50-150/session</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3">Form Correction</td>
                    <td className="py-3 text-yellow-400">Limited</td>
                    <td className="py-3 text-green-400">Hands-on</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3">Availability</td>
                    <td className="py-3 text-green-400">24/7 Instant</td>
                    <td className="py-3 text-yellow-400">Scheduled</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3">Motivation</td>
                    <td className="py-3 text-yellow-400">App-based</td>
                    <td className="py-3 text-green-400">Personal</td>
                  </tr>
                  <tr>
                    <td className="py-3">Progress Tracking</td>
                    <td className="py-3 text-green-400">Automated</td>
                    <td className="py-3 text-yellow-400">Manual</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Who Should Use an AI Workout Planner?</h2>
            <ul>
              <li><strong>Beginners:</strong> Learn proper exercise selection and progression without expensive trainer fees.</li>
              <li><strong>Busy Professionals:</strong> Get effective workouts designed for limited time and home equipment.</li>
              <li><strong>Experienced Lifters:</strong> Break plateaus with AI-optimized periodization and exercise variation.</li>
              <li><strong>Travelers:</strong> Generate equipment-free workouts wherever you are.</li>
              <li><strong>Budget-Conscious:</strong> Access professional-quality programming for free or low cost.</li>
            </ul>

            <h2>Getting Started with AI Workout Planning</h2>
            <ol>
              <li><strong>Choose Your Goal:</strong> Be specific — "build muscle" is better than "get fit."</li>
              <li><strong>Be Honest About Experience:</strong> Selecting "advanced" when you're a beginner leads to injury and burnout.</li>
              <li><strong>List Your Equipment:</strong> Accurate equipment input ensures feasible workouts.</li>
              <li><strong>Set Realistic Schedule:</strong> Consistency beats intensity. A 3-day plan you follow beats a 6-day plan you abandon.</li>
              <li><strong>Track Progress:</strong> Log weights, reps, and how you feel. This data helps AI improve your plans.</li>
            </ol>

            <h2>Related Tools</h2>
            <ul>
              <li><Link href="/tools/workout-generator" className="text-orange-400 hover:text-orange-300">AI Workout Generator</Link> — Create your personalized plan now</li>
              <li><Link href="/tools/one-rep-max" className="text-orange-400 hover:text-orange-300">One Rep Max Calculator</Link> — Calculate your strength potential</li>
              <li><Link href="/tools/macro-calculator" className="text-orange-400 hover:text-orange-300">Macro Calculator</Link> — Optimize your nutrition</li>
            </ul>
          </div>

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">What is an AI workout planner?</h3>
                <p className="text-slate-400">
                  An AI workout planner is an intelligent tool that creates personalized training programs based on your fitness goals, experience level, available equipment, and schedule. It uses algorithms trained on exercise science principles to generate effective workouts in seconds.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">Are AI workout planners free?</h3>
                <p className="text-slate-400">
                  Many AI workout planners offer free basic plans. GetFitAI provides completely free personalized workout generation with no signup required. Premium features like advanced periodization may require subscription on some platforms.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">Can AI workout planners replace personal trainers?</h3>
                <p className="text-slate-400">
                  AI workout planners excel at program design, exercise selection, and progressive overload. However, they cannot provide real-time form correction or hands-on spotting. For most people, AI planners offer 80% of trainer value at 0% of the cost.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Create Your AI Workout Plan Now
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Free, personalized, and ready in 30 seconds. No signup required.
            </p>
            <Link
              href="/tools/workout-generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-xl"
            >
              Generate My Free Plan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
