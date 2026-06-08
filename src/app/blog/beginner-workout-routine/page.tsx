import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { ArrowRight, Dumbbell } from "lucide-react";

export const metadata: Metadata = {
  title: "Beginner Workout Routine: Complete 4-Week Plan | GetFitAI",
  description:
    "The perfect beginner workout routine with exercises, sets, reps, and progression. Free 4-week plan for building muscle and strength. No gym experience needed.",
  keywords: [
    "beginner workout routine",
    "workout routine for beginners",
    "beginner gym routine",
    "starting strength routine",
    "first workout plan",
    "beginner fitness program",
    "gym routine for beginners",
    "workout plan for beginners",
    "beginner weight training",
    "simple workout routine",
  ],
  alternates: {
    canonical: "https://www.getfitai.io/blog/beginner-workout-routine/",
  },
  openGraph: {
    title: "Beginner Workout Routine: Complete 4-Week Plan | GetFitAI",
    description:
      "The perfect beginner workout routine with exercises, sets, reps, and progression. Free 4-week plan for building muscle and strength.",
    url: "https://www.getfitai.io/blog/beginner-workout-routine/",
    images: [
      {
        url: "https://www.getfitai.io/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Beginner Workout Routine - 4 Week Plan",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Beginner Workout Routine: Complete 4-Week Plan (2026)",
  description:
    "The perfect beginner workout routine with exercises, sets, reps, and progression. Free 4-week plan for building muscle and strength.",
  image: "https://www.getfitai.io/og-image.webp",
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
    "@id": "https://www.getfitai.io/blog/beginner-workout-routine",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many days a week should a beginner workout?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beginners should start with 3 days per week, focusing on full-body workouts. This allows adequate recovery while building a fitness habit. After 4-6 weeks, you can increase to 4 days using an upper/lower split.",
      },
    },
    {
      "@type": "Question",
      name: "What exercises should beginners do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beginners should focus on compound exercises that work multiple muscle groups: squats, deadlifts, bench press, rows, overhead press, and pull-ups/lat pulldowns. These give the best results for time invested.",
      },
    },
    {
      "@type": "Question",
      name: "How much weight should beginners lift?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with a weight you can lift for 2-3 more reps than your target. For example, if your goal is 10 reps, use a weight you could lift 12-13 times. Focus on perfect form before increasing weight.",
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
                Beginner Guide
              </span>
              <span className="text-sm text-slate-500">June 1, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Beginner Workout Routine: Complete 4-Week Plan
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Everything you need to start working out. Exercises, sets, reps, rest periods, and a proven 4-week progression plan.
            </p>
          </header>

          {/* CTA Box */}
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <Dumbbell className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Get a Personalized Beginner Plan
                </h3>
                <p className="text-slate-400 mb-4">
                  Our AI creates a custom workout based on your experience, equipment, and goals.
                </p>
                <Link
                  href="/tools/workout-generator"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all"
                >
                  Generate My Plan
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-white prose-p:text-slate-400 prose-strong:text-white prose-li:text-slate-400">
            <h2>Before You Start</h2>
            <p>
              Starting a workout routine can feel overwhelming. There are countless exercises, conflicting advice, and complex programs. <strong>This guide cuts through the noise.</strong>
            </p>
            <p>
              As a beginner, your goal is simple: <strong>build a habit</strong> while learning proper form on fundamental movements. Don't worry about advanced techniques or perfect optimization yet.
            </p>

            <h2>The Beginner Workout Philosophy</h2>
            <ul>
              <li><strong>Consistency beats intensity:</strong> 3 moderate workouts per week beats 1 brutal session</li>
              <li><strong>Compound movements first:</strong> Exercises that work multiple muscles give the best return on time</li>
              <li><strong>Progressive overload:</strong> Gradually increase weight or reps each week</li>
              <li><strong>Recovery is training:</strong> Muscles grow during rest, not during workouts</li>
            </ul>

            <h2>The 4-Week Beginner Workout Plan</h2>
            <p>This plan uses a <strong>full-body approach</strong> 3 days per week (Monday, Wednesday, Friday). Each workout hits all major muscle groups.</p>

            <h3>Week 1: Learning Form</h3>
            <div className="bg-slate-900/40 rounded-xl p-6 not-prose my-6">
              <p className="text-orange-400 font-medium mb-4">Workout A (Mon/Fri)</p>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>1. Goblet Squat: 3 sets × 10 reps (2 min rest)</p>
                <p>2. Push-ups (or Knee Push-ups): 3 sets × 8-12 reps (90s rest)</p>
                <p>3. Dumbbell Row: 3 sets × 10 reps/side (90s rest)</p>
                <p>4. Glute Bridge: 3 sets × 12 reps (60s rest)</p>
                <p>5. Plank: 3 sets × 20-30 seconds (60s rest)</p>
              </div>

              <p className="text-orange-400 font-medium mb-4 mt-6">Workout B (Wed)</p>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>1. Romanian Deadlift: 3 sets × 10 reps (2 min rest)</p>
                <p>2. Dumbbell Bench Press: 3 sets × 10 reps (90s rest)</p>
                <p>3. Lat Pulldown (or Resistance Band Pull): 3 sets × 10 reps (90s rest)</p>
                <p>4. Walking Lunges: 3 sets × 10 reps/leg (90s rest)</p>
                <p>5. Dead Bug: 3 sets × 8 reps/side (60s rest)</p>
              </div>
            </div>

            <h3>Week 2: Adding Volume</h3>
            <p>Same exercises, add 1 set to each movement:</p>
            <ul>
              <li>All exercises: 4 sets instead of 3</li>
              <li>Keep reps the same</li>
              <li>Focus on controlled tempo (2 seconds down, 1 second up)</li>
            </ul>

            <h3>Week 3: Increasing Weight</h3>
            <p>Increase weight by the smallest increment possible (usually 2.5-5 lbs):</p>
            <ul>
              <li>If you completed all reps last week with good form, increase weight</li>
              <li>If you couldn't complete all reps, keep the same weight</li>
              <li>Never sacrifice form for heavier weight</li>
            </ul>

            <h3>Week 4: Testing Progress</h3>
            <p>Try to increase weight on 2-3 exercises. Note how you feel:</p>
            <ul>
              <li>Are movements feeling more natural?</li>
              <li>Is your recovery improving?</li>
              <li>Do you feel stronger?</li>
            </ul>

            <h2>Exercise Instructions</h2>

            <h3>Goblet Squat</h3>
            <p>Hold a dumbbell vertically at chest level. Feet shoulder-width apart. Squat down until thighs are parallel to floor. Keep chest up and knees tracking over toes.</p>

            <h3>Dumbbell Row</h3>
            <p>Place one knee and hand on a bench. Hold dumbbell in other hand. Pull weight to hip, squeezing shoulder blade. Lower with control.</p>

            <h3>Romanian Deadlift</h3>
            <p>Hold dumbbells in front of thighs. Hinge at hips, pushing butt back while keeping legs nearly straight. Lower until you feel hamstring stretch. Squeeze glutes to stand.</p>

            <h2>Progression After 4 Weeks</h2>
            <p>After completing this plan, you have several options:</p>
            <ul>
              <li><strong>Repeat with heavier weights:</strong> Continue the same structure but increase loads</li>
              <li><strong>Move to 4-day upper/lower split:</strong> More volume for faster progress</li>
              <li><strong>Add more exercises:</strong> Include lateral raises, curls, and extensions</li>
              <li><strong>Use our AI Workout Generator:</strong> Get a personalized plan based on your progress</li>
            </ul>

            <h2>Common Beginner Mistakes</h2>
            <ul>
              <li><strong>Skipping warm-up:</strong> 5 minutes of light cardio prevents injury</li>
              <li><strong>Lifting too heavy too soon:</strong> Master form before adding weight</li>
              <li><strong>Inconsistent schedule:</strong> Pick days you can stick to</li>
              <li><strong>Neglecting nutrition:</strong> Protein intake matters for recovery</li>
              <li><strong>Comparing to others:</strong> Your only competition is yesterday's you</li>
            </ul>

            <h2>Related Resources</h2>
            <ul>
              <li><Link href="/blog/beginner-gym-plan" className="text-orange-400 hover:text-orange-300">Beginner Gym Plan</Link> — Alternative 4-week gym-based program</li>
              <li><Link href="/tools/workout-generator" className="text-orange-400 hover:text-orange-300">AI Workout Generator</Link> — Personalized plans after this routine</li>
              <li><Link href="/tools/one-rep-max" className="text-orange-400 hover:text-orange-300">1RM Calculator</Link> — Track strength gains</li>
              <li><Link href="/tools/protein-calculator" className="text-orange-400 hover:text-orange-300">Protein Calculator</Link> — Optimize recovery nutrition</li>
            </ul>
          </div>

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">How many days a week should a beginner workout?</h3>
                <p className="text-slate-400">
                  Beginners should start with 3 days per week, focusing on full-body workouts. This allows adequate recovery while building a fitness habit.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">What exercises should beginners do?</h3>
                <p className="text-slate-400">
                  Focus on compound exercises: squats, deadlifts, bench press, rows, overhead press, and pull-ups. These work multiple muscle groups and give the best results.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">How much weight should beginners lift?</h3>
                <p className="text-slate-400">
                  Start with a weight you can lift for 2-3 more reps than your target. Focus on perfect form before increasing weight.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready for Your Personalized Plan?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              After 4 weeks, use our AI to create an advanced program tailored to your progress.
            </p>
            <Link
              href="/tools/workout-generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-xl"
            >
              Generate My Next Plan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
