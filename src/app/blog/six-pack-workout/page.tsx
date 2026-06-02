import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { ArrowRight, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Six Pack Workout: 10 Best Ab Exercises for Visible Abs | GetFitAI",
  description:
    "The most effective six pack workout with 10 science-backed ab exercises. Learn how to get visible abs with proper training, nutrition, and our free AI workout generator.",
  keywords: [
    "six pack workout",
    "ab workout",
    "how to get six pack abs",
    "best ab exercises",
    "visible abs workout",
    "core workout for abs",
    "abs training program",
    "six pack abs routine",
    "stomach workout",
    "abdominal exercises",
  ],
  alternates: {
    canonical: "https://www.getfitai.io/blog/six-pack-workout/",
  },
  openGraph: {
    title: "Six Pack Workout: 10 Best Ab Exercises for Visible Abs | GetFitAI",
    description:
      "The most effective six pack workout with 10 science-backed ab exercises. Learn how to get visible abs with proper training and nutrition.",
    url: "https://www.getfitai.io/blog/six-pack-workout",
    images: [
      {
        url: "https://www.getfitai.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Six Pack Workout - Best Ab Exercises",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Six Pack Workout: 10 Best Ab Exercises for Visible Abs (2026)",
  description:
    "The most effective six pack workout with 10 science-backed ab exercises. Learn how to get visible abs with proper training, nutrition, and our free AI workout generator.",
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
    "@id": "https://www.getfitai.io/blog/six-pack-workout",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does it take to get a six pack?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Getting visible abs typically takes 3-12 months depending on your starting body fat percentage. Men usually need to reach 10-12% body fat, while women need 16-19%. Consistent training, proper nutrition, and patience are essential.",
      },
    },
    {
      "@type": "Question",
      name: "Can you get abs without going to the gym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can get abs without a gym. Bodyweight exercises like planks, crunches, leg raises, and mountain climbers are highly effective. The key is reducing body fat through a calorie deficit while building abdominal muscle.",
      },
    },
    {
      "@type": "Question",
      name: "How often should you train abs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Train abs 2-4 times per week with at least 48 hours between sessions. Abs are like any other muscle and need recovery time. Quality matters more than quantity — focus on controlled movements and proper form.",
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
                Abs Training
              </span>
              <span className="text-sm text-slate-500">June 1, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Six Pack Workout: 10 Best Ab Exercises for Visible Abs
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              The complete guide to getting visible abs. Science-backed exercises, training frequency, and the nutrition strategy that actually works.
            </p>
          </header>

          {/* Calculator CTA */}
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <Target className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Free Body Fat Calculator
                </h3>
                <p className="text-slate-400 mb-4">
                  Find out your current body fat percentage and how close you are to visible abs.
                </p>
                <Link
                  href="/tools/body-fat-calculator"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all"
                >
                  Calculate My Body Fat
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-white prose-p:text-slate-400 prose-strong:text-white prose-li:text-slate-400">
            <h2>The Truth About Getting a Six Pack</h2>
            <p>
              Everyone has abdominal muscles. The difference between visible abs and a flat stomach comes down to <strong>two factors</strong>: muscle development and body fat percentage.
            </p>
            <p>
              For men, abs typically become visible at <strong>10-12% body fat</strong>. For women, the range is <strong>16-19%</strong>. No amount of crunches will reveal abs if they're hidden under a layer of fat.
            </p>

            <h2>The 10 Best Six Pack Exercises</h2>
            <p>These exercises target all areas of your core: upper abs, lower abs, obliques, and deep stabilizing muscles.</p>

            <h3>1. Hanging Leg Raises (Lower Abs)</h3>
            <p>
              Hang from a pull-up bar and raise your legs until they're parallel to the floor. Keep legs straight for maximum difficulty. <strong>3 sets of 10-15 reps.</strong>
            </p>

            <h3>2. Cable Crunches (Upper Abs)</h3>
            <p>
              Kneel facing a cable machine, hold the rope behind your head, and crunch down. This allows progressive overload like any other muscle group. <strong>3 sets of 12-15 reps.</strong>
            </p>

            <h3>3. Ab Wheel Rollouts (Full Core)</h3>
            <p>
              Kneel with an ab wheel, roll forward until your body is nearly parallel to the floor, then pull back. One of the most effective core exercises. <strong>3 sets of 8-12 reps.</strong>
            </p>

            <h3>4. Russian Twists (Obliques)</h3>
            <p>
              Sit with feet elevated, lean back slightly, and twist your torso side to side. Hold a weight plate or medicine ball for added resistance. <strong>3 sets of 20 twists (10 each side).</strong>
            </p>

            <h3>5. Plank (Core Stability)</h3>
            <p>
              Hold a push-up position on your forearms. Keep your body in a straight line from head to heels. <strong>3 sets of 45-60 seconds.</strong>
            </p>

            <h3>6. Bicycle Crunches (Upper + Obliques)</h3>
            <p>
              Lie on your back, hands behind your head, and alternate bringing opposite elbow to knee. The twisting motion heavily engages obliques. <strong>3 sets of 15-20 reps per side.</strong>
            </p>

            <h3>7. Dragon Flags (Advanced)</h3>
            <p>
              Lie on a bench, hold the edge behind your head, and lift your entire body off the bench keeping it straight. Lower slowly. <strong>3 sets of 5-8 reps.</strong>
            </p>

            <h3>8. Dead Bug (Core Control)</h3>
            <p>
              Lie on your back with arms extended toward ceiling and knees bent at 90°. Slowly lower opposite arm and leg while keeping your lower back pressed to the floor. <strong>3 sets of 10 reps per side.</strong>
            </p>

            <h3>9. Side Plank (Obliques)</h3>
            <p>
              Lie on your side, prop yourself up on one forearm, and lift your hips off the ground. Hold with body in a straight line. <strong>3 sets of 30-45 seconds per side.</strong>
            </p>

            <h3>10. Mountain Climbers (Cardio + Core)</h3>
            <p>
              In a push-up position, alternate driving your knees toward your chest rapidly. Great for burning calories while engaging the core. <strong>3 sets of 30-45 seconds.</strong>
            </p>

            <h2>The Complete Six Pack Workout Routine</h2>
            <div className="bg-slate-900/40 rounded-xl p-6 not-prose my-6">
              <h4 className="text-white font-semibold mb-4">3-Day Ab Split (Add to your regular training)</h4>
              <div className="space-y-4 text-slate-400 text-sm">
                <div>
                  <p className="text-orange-400 font-medium">Day 1: Upper Abs Focus</p>
                  <p>Cable Crunches: 3×12-15</p>
                  <p>Bicycle Crunches: 3×15-20/side</p>
                  <p>Plank: 3×45-60s</p>
                </div>
                <div>
                  <p className="text-orange-400 font-medium">Day 2: Lower Abs Focus</p>
                  <p>Hanging Leg Raises: 3×10-15</p>
                  <p>Dead Bug: 3×10/side</p>
                  <p>Ab Wheel Rollouts: 3×8-12</p>
                </div>
                <div>
                  <p className="text-orange-400 font-medium">Day 3: Obliques + Stability</p>
                  <p>Russian Twists: 3×20</p>
                  <p>Side Plank: 3×30-45s/side</p>
                  <p>Mountain Climbers: 3×30-45s</p>
                </div>
              </div>
            </div>

            <h2>Nutrition for Visible Abs</h2>
            <p>
              <strong>Abs are made in the kitchen.</strong> Here's the nutrition strategy:
            </p>
            <ul>
              <li><strong>Calorie deficit:</strong> Eat 300-500 calories below maintenance</li>
              <li><strong>High protein:</strong> 1.6-2.2g per kg of body weight to preserve muscle</li>
              <li><strong>Whole foods:</strong> Minimize processed foods and added sugars</li>
              <li><strong>Hydration:</strong> 2-3 liters of water daily reduces bloating</li>
              <li><strong>Fiber:</strong> 25-35g daily for satiety and gut health</li>
            </ul>

            <h2>Common Six Pack Mistakes</h2>
            <ul>
              <li><strong>Only doing crunches:</strong> Your abs need variety and progressive overload like any muscle</li>
              <li><strong>Neglecting nutrition:</strong> You can't out-train a bad diet</li>
              <li><strong>Training abs every day:</strong> Abs need recovery time like other muscles</li>
              <li><strong>Expecting quick results:</strong> Visible abs take consistent effort over months</li>
              <li><strong>Ignoring overall body fat:</strong> Spot reduction is a myth — lose fat everywhere</li>
            </ul>

            <h2>Related Tools</h2>
            <ul>
              <li><Link href="/tools/body-fat-calculator" className="text-orange-400 hover:text-orange-300">Body Fat Calculator</Link> — Track your progress toward visible abs</li>
              <li><Link href="/tools/calorie-calculator" className="text-orange-400 hover:text-orange-300">Calorie Calculator</Link> — Find your deficit target</li>
              <li><Link href="/tools/macro-calculator" className="text-orange-400 hover:text-orange-300">Macro Calculator</Link> — Optimize protein intake</li>
              <li><Link href="/tools/workout-generator" className="text-orange-400 hover:text-orange-300">AI Workout Generator</Link> — Get a full program including abs</li>
            </ul>
          </div>

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">How long does it take to get a six pack?</h3>
                <p className="text-slate-400">
                  Getting visible abs typically takes 3-12 months depending on your starting body fat percentage. Men usually need to reach 10-12% body fat, while women need 16-19%.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">Can you get abs without going to the gym?</h3>
                <p className="text-slate-400">
                  Yes, you can get abs without a gym. Bodyweight exercises like planks, crunches, leg raises, and mountain climbers are highly effective.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">How often should you train abs?</h3>
                <p className="text-slate-400">
                  Train abs 2-4 times per week with at least 48 hours between sessions. Abs are like any other muscle and need recovery time.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Generate Your Complete Ab Workout
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Get a personalized workout plan that includes targeted ab training based on your level and goals.
            </p>
            <Link
              href="/tools/workout-generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-xl"
            >
              Create My Workout Plan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
