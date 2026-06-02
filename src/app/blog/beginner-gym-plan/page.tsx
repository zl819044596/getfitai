import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beginner Gym Plan: Complete 4-Week Guide for Newbies | GetFitAI",
  description:
    "Start your fitness journey with our free beginner gym plan. 4-week progressive program with exercises, sets, reps & rest. No experience needed.",
  keywords: [
    "beginner gym plan",
    "gym beginner program",
    "starter workout routine",
    "first time gym workout",
    "beginner fitness plan",
    "4 week gym program",
    "newbie workout plan",
    "gym workout for beginners",
  ],
  openGraph: {
    title: "Beginner Gym Plan: Complete 4-Week Guide",
    description: "Free 4-week progressive gym program for beginners. No experience needed.",
    url: "https://www.getfitai.io/blog/beginner-gym-plan/",
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

export default function BeginnerGymPlanPage() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero */}
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src="/images/blog/build-muscle.jpg"
          alt="Beginner gym workout"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-4">
              Beginner Guide
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Beginner Gym Plan
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Your complete 4-week guide to starting at the gym with confidence
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Intro */}
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <p className="text-slate-300 text-xl leading-relaxed">
            Walking into a gym for the first time can be intimidating. The machines look complex, 
            everyone seems to know what they&apos;re doing, and you&apos;re not sure where to start. 
            <strong className="text-white"> This beginner gym plan solves all of that.</strong>
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Duration", value: "4 Weeks" },
            { label: "Days/Week", value: "3 Days" },
            { label: "Time/Session", value: "45-60 Min" },
            { label: "Equipment", value: "Basic" },
          ].map((stat) => (
            <div key={stat.label} className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/50">
              <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Week 1-2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Week 1-2: Foundation Phase</h2>
          <p className="text-slate-300 mb-6">
            Focus on learning proper form and building a routine. Weights should feel light to moderate.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-orange-400 mb-4">Day 1: Full Body A</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-slate-400 border-b border-slate-700">
                      <th className="text-left py-2">Exercise</th>
                      <th className="text-center py-2">Sets</th>
                      <th className="text-center py-2">Reps</th>
                      <th className="text-center py-2">Rest</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    {[
                      { name: "Goblet Squat", sets: 3, reps: "10-12", rest: "90s" },
                      { name: "Push-ups (or Knee Push-ups)", sets: 3, reps: "8-12", rest: "60s" },
                      { name: "Dumbbell Row", sets: 3, reps: "10-12", rest: "60s" },
                      { name: "Leg Curl Machine", sets: 2, reps: "12-15", rest: "60s" },
                      { name: "Plank", sets: 3, reps: "20-30s", rest: "60s" },
                    ].map((exercise) => (
                      <tr key={exercise.name} className="border-b border-slate-800">
                        <td className="py-3">{exercise.name}</td>
                        <td className="text-center py-3">{exercise.sets}</td>
                        <td className="text-center py-3">{exercise.reps}</td>
                        <td className="text-center py-3">{exercise.rest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-orange-400 mb-4">Day 2: Full Body B</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-slate-400 border-b border-slate-700">
                      <th className="text-left py-2">Exercise</th>
                      <th className="text-center py-2">Sets</th>
                      <th className="text-center py-2">Reps</th>
                      <th className="text-center py-2">Rest</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    {[
                      { name: "Leg Press Machine", sets: 3, reps: "12-15", rest: "90s" },
                      { name: "Dumbbell Bench Press", sets: 3, reps: "10-12", rest: "90s" },
                      { name: "Lat Pulldown", sets: 3, reps: "10-12", rest: "60s" },
                      { name: "Dumbbell Shoulder Press", sets: 2, reps: "10-12", rest: "60s" },
                      { name: "Dead Bug", sets: 3, reps: "10/side", rest: "60s" },
                    ].map((exercise) => (
                      <tr key={exercise.name} className="border-b border-slate-800">
                        <td className="py-3">{exercise.name}</td>
                        <td className="text-center py-3">{exercise.sets}</td>
                        <td className="text-center py-3">{exercise.reps}</td>
                        <td className="text-center py-3">{exercise.rest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-semibold text-orange-400 mb-4">Day 3: Full Body C</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-slate-400 border-b border-slate-700">
                      <th className="text-left py-2">Exercise</th>
                      <th className="text-center py-2">Sets</th>
                      <th className="text-center py-2">Reps</th>
                      <th className="text-center py-2">Rest</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    {[
                      { name: "Romanian Deadlift (Dumbbells)", sets: 3, reps: "10-12", rest: "90s" },
                      { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "90s" },
                      { name: "Seated Cable Row", sets: 3, reps: "10-12", rest: "60s" },
                      { name: "Lateral Raises", sets: 2, reps: "12-15", rest: "60s" },
                      { name: "Farmer&apos;s Walk", sets: 3, reps: "30-40s", rest: "60s" },
                    ].map((exercise) => (
                      <tr key={exercise.name} className="border-b border-slate-800">
                        <td className="py-3">{exercise.name}</td>
                        <td className="text-center py-3">{exercise.sets}</td>
                        <td className="text-center py-3">{exercise.reps}</td>
                        <td className="text-center py-3">{exercise.rest}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Week 3-4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Week 3-4: Progression Phase</h2>
          <p className="text-slate-300 mb-6">
            Increase weights by 5-10% when you can complete all sets with good form. Add one set to each exercise.
          </p>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-orange-400 mb-3">Progression Rules</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">▸</span>
                <span>Add 2.5-5 lbs to upper body exercises when you hit the top rep range</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">▸</span>
                <span>Add 5-10 lbs to lower body exercises when you hit the top rep range</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">▸</span>
                <span>Never sacrifice form for weight - quality over quantity</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">▸</span>
                <span>Rest 1-2 minutes between sets (3 minutes for heavy compound lifts)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Beginner Tips for Success</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Start Light",
                desc: "It&apos;s better to start too light than too heavy. You have plenty of time to add weight.",
              },
              {
                title: "Consistency Over Intensity",
                desc: "3 moderate workouts per week beats 1 brutal workout. Show up consistently.",
              },
              {
                title: "Track Your Workouts",
                desc: "Write down weights, sets, and reps. Progressive overload requires knowing what you did last time.",
              },
              {
                title: "Warm Up Properly",
                desc: "5-10 minutes of light cardio + dynamic stretching prevents injury and improves performance.",
              },
              {
                title: "Prioritize Sleep",
                desc: "Muscles grow during rest, not during workouts. Aim for 7-9 hours per night.",
              },
              {
                title: "Nutrition Matters",
                desc: "Protein intake of 0.7-1g per pound of bodyweight supports muscle growth and recovery.",
              },
            ].map((tip) => (
              <div key={tip.title} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">{tip.title}</h3>
                <p className="text-slate-400">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl p-8 text-center border border-orange-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">
            Want a Personalized Plan?
          </h2>
          <p className="text-slate-300 mb-6 max-w-xl mx-auto">
            Our AI creates customized workout plans based on your goals, experience level, and available equipment.
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
