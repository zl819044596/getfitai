import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Build Muscle Fast: Science-Backed Guide | GetFitAI",
  description:
    "Learn how to build muscle fast with proven training, nutrition, and recovery strategies. Progressive overload and protein intake explained.",
  keywords: [
    "build muscle fast",
    "muscle building guide",
    "how to gain muscle",
    "hypertrophy training",
    "muscle growth tips",
    "strength training",
    "protein for muscle",
    "progressive overload",
  ],
  openGraph: {
    title: "How to Build Muscle Fast: Science-Backed Guide",
    description: "Proven strategies for rapid muscle growth. Training, nutrition, and recovery.",
    url: "https://www.getfitai.io/blog/build-muscle-fast/",
    images: [
      {
        url: "https://www.getfitai.io/og-image.webp",
        width: 1200,
        height: 630,
        alt: "GetFitAI - Free AI Workout Generator & Fitness Tools",
      },
    ],
    type: "article",
  },
};

export default function BuildMuscleFastPage() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero */}
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src="/images/blog/build-muscle.webp"
          alt="Build muscle fast"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-4">
              Muscle Building
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How to Build Muscle Fast
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Science-backed strategies for maximum hypertrophy
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <p className="text-slate-300 text-xl leading-relaxed">
            Building muscle isn&apos;t about spending hours in the gym or taking expensive supplements. 
            It&apos;s about understanding <strong className="text-white"> the science of hypertrophy</strong> and 
            applying it consistently.
          </p>
        </div>

        {/* The 3 Pillars */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">The 3 Pillars of Muscle Growth</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <div className="text-4xl mb-4">🏋️</div>
              <h3 className="text-xl font-semibold text-orange-400 mb-3">Training</h3>
              <p className="text-slate-400">
                Progressive overload with compound lifts. Train each muscle 2x/week for optimal growth.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <div className="text-4xl mb-4">🥩</div>
              <h3 className="text-xl font-semibold text-orange-400 mb-3">Nutrition</h3>
              <p className="text-slate-400">
                Caloric surplus with adequate protein. 0.7-1g protein per pound of bodyweight daily.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
              <div className="text-4xl mb-4">😴</div>
              <h3 className="text-xl font-semibold text-orange-400 mb-3">Recovery</h3>
              <p className="text-slate-400">
                7-9 hours sleep. Muscles grow during rest, not during workouts. Manage stress.
              </p>
            </div>
          </div>
        </section>

        {/* Training Principles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Training Principles for Fast Growth</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">1. Progressive Overload</h3>
              <p className="text-slate-300 mb-4">
                Your muscles adapt to stress. To keep growing, you must continuously increase the demands placed on them.
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-orange-400 font-medium mb-2">Ways to Progress:</p>
                <ul className="space-y-1 text-slate-400">
                  <li>• Increase weight (most effective)</li>
                  <li>• Increase reps with same weight</li>
                  <li>• Increase sets (volume)</li>
                  <li>• Decrease rest periods</li>
                  <li>• Improve form and range of motion</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">2. Optimal Volume</h3>
              <p className="text-slate-300 mb-4">
                Research shows 10-20 sets per muscle per week is optimal for hypertrophy. Beginners should start at the lower end.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <p className="text-orange-400 font-medium mb-1">Beginners</p>
                  <p className="text-slate-400">10-12 sets/muscle/week</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <p className="text-orange-400 font-medium mb-1">Intermediate+</p>
                  <p className="text-slate-400">15-20 sets/muscle/week</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">3. Training Frequency</h3>
              <p className="text-slate-300 mb-4">
                Training each muscle 2-3x per week outperforms once-per-week "bro splits" for natural lifters.
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-orange-400 font-medium mb-2">Recommended Split:</p>
                <p className="text-slate-400">Upper/Lower or Push/Pull/Legs — allows each muscle to be trained twice weekly with adequate recovery.</p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">4. Exercise Selection</h3>
              <p className="text-slate-300 mb-4">
                Prioritize compound movements that work multiple muscles simultaneously.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <p className="text-orange-400 font-medium mb-2">Best Compound Exercises:</p>
                  <ul className="space-y-1 text-slate-400">
                    <li>• Squats (quads, glutes, core)</li>
                    <li>• Deadlifts (posterior chain)</li>
                    <li>• Bench Press (chest, triceps)</li>
                    <li>• Overhead Press (shoulders)</li>
                    <li>• Rows (back, biceps)</li>
                    <li>• Pull-ups (back, biceps)</li>
                  </ul>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <p className="text-orange-400 font-medium mb-2">Isolation for Lagging Parts:</p>
                  <ul className="space-y-1 text-slate-400">
                    <li>• Bicep curls</li>
                    <li>• Tricep extensions</li>
                    <li>• Lateral raises</li>
                    <li>• Leg curls/extensions</li>
                    <li>• Calf raises</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nutrition */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Nutrition for Muscle Growth</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">Caloric Surplus</h3>
              <p className="text-slate-300 mb-4">
                You need to eat more calories than you burn to build muscle. But more isn&apos;t always better.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <p className="text-orange-400 font-medium">Lean Bulk</p>
                  <p className="text-2xl font-bold text-white">+200-300</p>
                  <p className="text-slate-400 text-sm">calories/day</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <p className="text-orange-400 font-medium">Moderate</p>
                  <p className="text-2xl font-bold text-white">+300-500</p>
                  <p className="text-slate-400 text-sm">calories/day</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <p className="text-orange-400 font-medium">Aggressive</p>
                  <p className="text-2xl font-bold text-white">+500+</p>
                  <p className="text-slate-400 text-sm">calories/day</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">Protein Intake</h3>
              <p className="text-slate-300 mb-4">
                Protein provides the building blocks for muscle tissue. Distribute intake evenly across meals.
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-orange-400 font-medium mb-2">Optimal Range: 0.7-1g per pound of bodyweight</p>
                <p className="text-slate-400">Example: 180 lb person needs 130-180g protein daily</p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">Meal Timing</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Eat protein within 2 hours post-workout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>4-5 protein feedings per day (every 3-4 hours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Pre-workout meal 1-2 hours before training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">▸</span>
                  <span>Casein protein before bed for overnight recovery</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Recovery */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Recovery: The Secret Weapon</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Sleep</h3>
              <p className="text-slate-300 mb-3">
                Growth hormone peaks during deep sleep. Poor sleep = poor gains.
              </p>
              <ul className="space-y-1 text-slate-400">
                <li>• Target 7-9 hours nightly</li>
                <li>• Consistent sleep schedule</li>
                <li>• Cool, dark room</li>
                <li>• No screens 1 hour before bed</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Stress Management</h3>
              <p className="text-slate-300 mb-3">
                Chronic cortisol elevation breaks down muscle tissue.
              </p>
              <ul className="space-y-1 text-slate-400">
                <li>• Meditation or deep breathing</li>
                <li>• Limit excessive cardio</li>
                <li>• Take rest days seriously</li>
                <li>• Consider adaptogens (ashwagandha)</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Active Recovery</h3>
              <p className="text-slate-300 mb-3">
                Light movement on rest days enhances blood flow and recovery.
              </p>
              <ul className="space-y-1 text-slate-400">
                <li>• Walking 20-30 minutes</li>
                <li>• Light stretching or yoga</li>
                <li>• Foam rolling</li>
                <li>• Swimming or cycling (easy)</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Deload Weeks</h3>
              <p className="text-slate-300 mb-3">
                Every 4-8 weeks, reduce volume/intensity by 50% for one week.
              </p>
              <ul className="space-y-1 text-slate-400">
                <li>• Prevents overtraining</li>
                <li>• Allows full recovery</li>
                <li>• Breaks through plateaus</li>
                <li>• Reduces injury risk</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Expected Results */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Expected Results Timeline</h2>
          
          <div className="space-y-4">
            {[
              { time: "Week 1-2", result: "Neurological adaptations — strength increases without size changes", highlight: false },
              { time: "Week 3-4", result: "Begin noticing muscle fullness and improved pump", highlight: false },
              { time: "Month 2-3", result: "Visible size increases, clothes fit differently", highlight: true },
              { time: "Month 4-6", result: "Significant transformation, 5-10 lbs lean muscle possible", highlight: true },
              { time: "Month 6-12", result: "Continued steady growth, advanced training needed", highlight: false },
            ].map((phase) => (
              <div
                key={phase.time}
                className={`rounded-xl p-6 border ${
                  phase.highlight
                    ? "bg-orange-500/10 border-orange-500/30"
                    : "bg-slate-800/50 border-slate-700/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`text-lg font-bold ${phase.highlight ? "text-orange-400" : "text-slate-400"}`}>
                    {phase.time}
                  </div>
                  <div className="text-slate-300">{phase.result}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl p-8 text-center border border-orange-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Build Muscle?
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Get a personalized muscle-building plan with optimal exercises, sets, reps, and progression built in.
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold px-8 py-3 rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all"
          >
            Generate My Muscle Plan
          </Link>
        </div>
      </div>
    </article>
  );
}
