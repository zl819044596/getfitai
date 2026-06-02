import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home vs Gym Workout: Which Is Better for You? | GetFitAI",
  description:
    "Compare home vs gym workouts: costs, equipment, results, and convenience. Find out which option fits your lifestyle and goals.",
  keywords: [
    "home vs gym workout",
    "home workout vs gym",
    "should I go to the gym",
    "home gym setup",
    "gym membership worth it",
    "workout at home",
    "gym vs home fitness",
    "best workout location",
  ],
  openGraph: {
    title: "Home vs Gym Workout: Which Is Better?",
    description: "Complete comparison of home and gym workouts. Find your best fit.",
    url: "https://www.getfitai.io/blog/home-vs-gym-workout",
    images: [
      {
        url: "https://www.getfitai.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GetFitAI - Free AI Workout Generator & Fitness Tools",
      },
    ],
    type: "article",
  },
};

export default function HomeVsGymPage() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero */}
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src="/images/blog/home-vs-gym.jpg"
          alt="Home vs gym workout comparison"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-4">
              Comparison Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Home vs Gym Workout
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Which option delivers better results for your goals and lifestyle?
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <p className="text-slate-300 text-xl leading-relaxed">
            The debate between home and gym workouts has intensified since 2020. 
            With home fitness equipment more accessible than ever, many wonder: 
            <strong className="text-white"> do you really need a gym membership to get fit?</strong>
          </p>
        </div>

        {/* Quick Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">🏠 Home Workout</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>No commute time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Work out anytime</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>No monthly fees</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Complete privacy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Limited equipment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Requires self-motivation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>No spotter for heavy lifts</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">🏋️ Gym Workout</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Professional equipment variety</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Heavier weights available</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Social motivation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Personal trainers on-site</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Monthly membership cost</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Commute time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✗</span>
                <span>Crowded during peak hours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Cost Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Cost Comparison (1 Year)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-400 border-b border-slate-700">
                  <th className="text-left py-3">Item</th>
                  <th className="text-right py-3">Home Setup</th>
                  <th className="text-right py-3">Gym Membership</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800">
                  <td className="py-3">Initial Setup/Joining Fee</td>
                  <td className="text-right">$200-500</td>
                  <td className="text-right">$0-100</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3">Monthly Cost</td>
                  <td className="text-right">$0</td>
                  <td className="text-right">$30-80</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3">Annual Total</td>
                  <td className="text-right font-semibold text-orange-400">$200-500</td>
                  <td className="text-right font-semibold text-yellow-400">$360-1,060</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 mt-4 text-sm">
            *Home setup includes dumbbells, resistance bands, pull-up bar, and bench. Gym costs vary by location.
          </p>
        </section>

        {/* Results Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Which Gets Better Results?</h2>
          
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">Muscle Building</h3>
              <p className="text-slate-300 mb-3">
                <strong className="text-yellow-400">Gym wins</strong> for advanced muscle building. Access to heavier weights, 
                barbells, and machines allows for better progressive overload. However, beginners can build significant 
                muscle at home with proper programming.
              </p>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "75%" }} />
              </div>
              <p className="text-xs text-slate-400 mt-1">Gym advantage: 75% vs 60%</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">Fat Loss</h3>
              <p className="text-slate-300 mb-3">
                <strong className="text-orange-400">Tie</strong>. Fat loss depends on calorie deficit and consistency, 
                not location. Both home and gym workouts can achieve excellent fat loss results with proper nutrition.
              </p>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-orange-400 h-2 rounded-full" style={{ width: "85%" }} />
              </div>
              <p className="text-xs text-slate-400 mt-1">Both effective: 85%</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">Convenience & Consistency</h3>
              <p className="text-slate-300 mb-3">
                <strong className="text-orange-400">Home wins</strong> for busy schedules. No commute means fewer excuses. 
                The best workout is the one you actually do consistently.
              </p>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-orange-400 h-2 rounded-full" style={{ width: "90%" }} />
              </div>
              <p className="text-xs text-slate-400 mt-1">Home advantage: 90% vs 70%</p>
            </div>
          </div>
        </section>

        {/* Decision Framework */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Which Should You Choose?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-orange-400 mb-3">Choose Home If:</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• You're a beginner or intermediate</li>
                <li>• Budget is a concern</li>
                <li>• Time is limited</li>
                <li>• You prefer privacy</li>
                <li>• You have some space for equipment</li>
              </ul>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">Choose Gym If:</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• You're focused on bodybuilding</li>
                <li>• You need heavy weights (400+ lbs)</li>
                <li>• You want personal training</li>
                <li>• Social motivation helps you</li>
                <li>• You enjoy gym atmosphere</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hybrid Approach */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">The Hybrid Approach</h2>
          <p className="text-slate-300 mb-6">
            Many successful athletes use both. Consider:
          </p>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">▸</span>
                <span><strong>Gym 2x/week</strong> for heavy compound lifts (squats, deadlifts, bench)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">▸</span>
                <span><strong>Home 2x/week</strong> for accessory work, cardio, and flexibility</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">▸</span>
                <span><strong>Travel workouts</strong> using bodyweight when away from both</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl p-8 text-center border border-orange-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">
            Get Your Personalized Plan
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Whether you choose home or gym, our AI creates the perfect workout plan for your equipment and goals.
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold px-8 py-3 rounded-xl hover:from-orange-600 hover:to-yellow-600 transition-all"
          >
            Generate My Free Plan
          </Link>
        </div>
      </div>
    </article>
  );
}
