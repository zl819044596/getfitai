import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "How Many Calories Should I Eat? Calculator & Guide | GetFitAI",
  description:
    "Calculate your daily calorie needs for weight loss, maintenance, or muscle gain. Learn how to determine your TDEE and set the right calorie target for.",
  keywords: [
    "how many calories should i eat",
    "calorie calculator",
    "daily calorie needs",
    "calories for weight loss",
    "calories for muscle gain",
    "tdee calculator",
    "maintenance calories",
    "calorie deficit",
  ],
  alternates: {
    canonical: "https://www.getfitai.io/blog/how-many-calories-should-i-eat/",
  },
  openGraph: {
    title: "How Many Calories Should I Eat? Calculator & Guide | GetFitAI",
    description:
      "Calculate your daily calorie needs for weight loss, maintenance, or muscle gain. Learn how to determine your TDEE.",
    url: "https://www.getfitai.io/blog/how-many-calories-should-i-eat/",
    images: [
      {
        url: "https://www.getfitai.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "How Many Calories Should I Eat - Complete Guide",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Many Calories Should I Eat? Complete Calculator & Guide (2026)",
  description:
    "Calculate your daily calorie needs for weight loss, maintenance, or muscle gain. Learn how to determine your TDEE and set the right calorie target.",
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
    "@id": "https://www.getfitai.io/blog/how-many-calories-should-i-eat",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many calories should I eat to lose weight?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To lose weight, eat 300-500 calories below your TDEE (Total Daily Energy Expenditure). This creates a sustainable deficit of 0.5-1lb (0.25-0.5kg) per week. For faster loss, a 750-calorie deficit yields 1.5lb per week, but don't drop below 1,200 calories/day for women or 1,500 for men without medical supervision.",
      },
    },
    {
      "@type": "Question",
      name: "How many calories should I eat to build muscle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To build muscle, eat 200-300 calories above your TDEE. This small surplus provides energy for muscle growth while minimizing fat gain. Combine with adequate protein (1.6-2.2g/kg) and progressive resistance training. Expect to gain 0.25-0.5kg of muscle per month as a beginner, less as you advance.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate my TDEE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Calculate TDEE by first finding your BMR (Basal Metabolic Rate) using the Mifflin-St Jeor equation, then multiply by an activity factor: Sedentary (×1.2), Lightly Active (×1.375), Moderately Active (×1.55), Very Active (×1.725), or Extremely Active (×1.9). Use our free TDEE calculator for instant results.",
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
                Nutrition Guide
              </span>
              <span className="text-sm text-slate-500">June 1, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              How Many Calories Should I Eat? Complete Calculator & Guide
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Calculate your exact daily calorie needs for weight loss, maintenance, or muscle gain. No more guessing — use science-backed formulas.
            </p>
          </header>

          {/* Calculator CTA */}
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <Flame className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Free Calorie & TDEE Calculator
                </h3>
                <p className="text-slate-400 mb-4">
                  Get your personalized calorie target in seconds. Calculate TDEE, BMR, and macros all in one place.
                </p>
                <Link
                  href="/tools/tdee-calculator"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all"
                >
                  Calculate My Calorie Needs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-white prose-p:text-slate-400 prose-strong:text-white prose-li:text-slate-400">
            <h2>Quick Answer: Calories by Goal</h2>
            <div className="bg-slate-900/40 rounded-xl p-6 not-prose my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="pb-3 text-white font-semibold">Goal</th>
                    <th className="pb-3 text-white font-semibold">Calorie Adjustment</th>
                    <th className="pb-3 text-white font-semibold">Expected Rate</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3">Fat Loss</td>
                    <td className="py-3">TDEE - 300 to 500</td>
                    <td className="py-3">0.5-1 lb/week</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3">Maintenance</td>
                    <td className="py-3">= TDEE</td>
                    <td className="py-3">No change</td>
                  </tr>
                  <tr>
                    <td className="py-3">Muscle Gain</td>
                    <td className="py-3">TDEE + 200 to 300</td>
                    <td className="py-3">0.25-0.5 lb/week</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>What Are Calories?</h2>
            <p>
              A calorie is a unit of energy. The food you eat provides calories, and your body burns them through:
            </p>
            <ul>
              <li><strong>BMR (Basal Metabolic Rate):</strong> Energy used at complete rest — about 60-70% of daily burn</li>
              <li><strong>TEF (Thermic Effect of Food):</strong> Energy used digesting food — about 10% of daily burn</li>
              <li><strong>NEAT (Non-Exercise Activity):</strong> Walking, fidgeting, standing — 15-30% of daily burn</li>
              <li><strong>EAT (Exercise Activity):</strong> Formal workouts — 5-15% of daily burn</li>
            </ul>

            <h2>How to Calculate Your TDEE</h2>
            <h3>Step 1: Calculate BMR</h3>
            <p>Use the Mifflin-St Jeor equation:</p>
            <ul>
              <li><strong>Men:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) + 5</li>
              <li><strong>Women:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age) - 161</li>
            </ul>

            <h3>Step 2: Apply Activity Multiplier</h3>
            <div className="bg-slate-900/40 rounded-xl p-6 not-prose my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="pb-3 text-white font-semibold">Activity Level</th>
                    <th className="pb-3 text-white font-semibold">Multiplier</th>
                    <th className="pb-3 text-white font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3">Sedentary</td>
                    <td className="py-3">× 1.2</td>
                    <td className="py-3">Desk job, little exercise</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3">Lightly Active</td>
                    <td className="py-3">× 1.375</td>
                    <td className="py-3">1-3 days light exercise/week</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3">Moderately Active</td>
                    <td className="py-3">× 1.55</td>
                    <td className="py-3">3-5 days moderate exercise/week</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3">Very Active</td>
                    <td className="py-3">× 1.725</td>
                    <td className="py-3">6-7 days hard exercise/week</td>
                  </tr>
                  <tr>
                    <td className="py-3">Extremely Active</td>
                    <td className="py-3">× 1.9</td>
                    <td className="py-3">Physical job + hard training</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Step 3: Adjust for Your Goal</h3>
            <ul>
              <li><strong>Lose weight:</strong> Subtract 300-500 calories from TDEE</li>
              <li><strong>Maintain:</strong> Eat exactly your TDEE</li>
              <li><strong>Build muscle:</strong> Add 200-300 calories to TDEE</li>
            </ul>

            <h2>Example Calculation</h2>
            <p>
              <strong>Person:</strong> 30-year-old male, 75kg, 180cm, moderately active, wants to lose fat.
            </p>
            <ol>
              <li>BMR = (10 × 75) + (6.25 × 180) - (5 × 30) + 5 = 1,730 calories</li>
              <li>TDEE = 1,730 × 1.55 = <strong>2,682 calories</strong></li>
              <li>Fat loss target = 2,682 - 500 = <strong>2,182 calories/day</strong></li>
            </ol>

            <h2>Common Calorie Counting Mistakes</h2>
            <ul>
              <li><strong>Underestimating portion sizes:</strong> A "handful" of nuts is often 2-3 servings. Use a food scale for accuracy.</li>
              <li><strong>Forgetting liquid calories:</strong> Coffee drinks, smoothies, and alcohol add up fast.</li>
              <li><strong>Inconsistent tracking:</strong> Track every day, including weekends. One untracked day can undo a week of deficit.</li>
              <li><strong>Overestimating activity:</strong> Most people overestimate their activity level. When in doubt, choose the lower category.</li>
              <li><strong>Ignoring metabolic adaptation:</strong> As you lose weight, your TDEE decreases. Recalculate every 4-6 weeks.</li>
            </ul>

            <h2>Related Tools</h2>
            <ul>
              <li><Link href="/tools/tdee-calculator" className="text-orange-400 hover:text-orange-300">TDEE Calculator</Link> — Calculate your total daily energy expenditure</li>
              <li><Link href="/tools/calorie-calculator" className="text-orange-400 hover:text-orange-300">Calorie Calculator</Link> — Find your maintenance and target calories</li>
              <li><Link href="/tools/macro-calculator" className="text-orange-400 hover:text-orange-300">Macro Calculator</Link> — Split your calories into protein, carbs, and fat</li>
            </ul>
          </div>

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">How many calories should I eat to lose weight?</h3>
                <p className="text-slate-400">
                  To lose weight, eat 300-500 calories below your TDEE. This creates a sustainable deficit of 0.5-1lb (0.25-0.5kg) per week. For faster loss, a 750-calorie deficit yields 1.5lb per week, but don't drop below 1,200 calories/day for women or 1,500 for men without medical supervision.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">How many calories should I eat to build muscle?</h3>
                <p className="text-slate-400">
                  To build muscle, eat 200-300 calories above your TDEE. This small surplus provides energy for muscle growth while minimizing fat gain. Combine with adequate protein (1.6-2.2g/kg) and progressive resistance training.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">How do I calculate my TDEE?</h3>
                <p className="text-slate-400">
                  Calculate TDEE by first finding your BMR using the Mifflin-St Jeor equation, then multiply by an activity factor: Sedentary (×1.2), Lightly Active (×1.375), Moderately Active (×1.55), Very Active (×1.725), or Extremely Active (×1.9).
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Calculate Your Calorie Needs Now
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Get your personalized calorie target based on your stats, activity level, and goals.
            </p>
            <Link
              href="/tools/tdee-calculator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-xl"
            >
              Use Free TDEE Calculator
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
