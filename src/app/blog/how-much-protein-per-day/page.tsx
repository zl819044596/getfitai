import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { ArrowRight, Dumbbell } from "lucide-react";

export const metadata: Metadata = {
  title: "How Much Protein Per Day: Calculator & Guide | GetFitAI",
  description:
    "Calculate your daily protein needs based on weight, goals, and activity level. Learn exactly how much protein you need to build muscle, lose fat, or.",
  keywords: [
    "how much protein per day",
    "protein intake calculator",
    "daily protein needs",
    "protein for muscle gain",
    "how much protein do i need",
    "protein calculator",
    "protein requirements",
    "grams of protein per day",
  ],
  alternates: {
    canonical: "https://www.getfitai.io/blog/how-much-protein-per-day/",
  },
  openGraph: {
    title: "How Much Protein Per Day: Calculator & Guide | GetFitAI",
    description:
      "Calculate your daily protein needs based on weight, goals, and activity level. Learn exactly how much protein you need.",
    url: "https://www.getfitai.io/blog/how-much-protein-per-day/",
    images: [
      {
        url: "https://www.getfitai.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "How Much Protein Per Day - Complete Guide",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Protein Per Day: Complete Calculator & Guide (2026)",
  description:
    "Calculate your daily protein needs based on weight, goals, and activity level. Learn exactly how much protein you need to build muscle, lose fat, or maintain weight.",
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
    "@id": "https://www.getfitai.io/blog/how-much-protein-per-day",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much protein do I need per day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The general recommendation is 0.8g per kg of body weight for sedentary adults. For active individuals: 1.2-1.6g/kg for endurance athletes, 1.6-2.2g/kg for strength training and muscle building, and 2.3-3.1g/kg during aggressive fat loss to preserve muscle mass.",
      },
    },
    {
      "@type": "Question",
      name: "Can you eat too much protein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For healthy individuals, eating more protein than needed is generally safe but unnecessary. Excess protein is either used for energy or converted to fat. Very high protein intake (over 3.5g/kg) may strain kidneys in people with pre-existing kidney disease, but research shows no harm for healthy individuals.",
      },
    },
    {
      "@type": "Question",
      name: "When should I eat protein for muscle building?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Distribute protein intake evenly across 3-5 meals throughout the day, with 20-40g per meal. Consume protein within 2 hours after workouts to maximize muscle protein synthesis. The 'anabolic window' is less critical than total daily intake, but post-workout protein helps recovery.",
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
              How Much Protein Per Day: Complete Calculator & Guide
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Calculate your exact daily protein needs based on your body weight, fitness goals, and activity level. No guesswork — just science-backed numbers.
            </p>
          </header>

          {/* Calculator CTA */}
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-500/10 rounded-xl">
                <Dumbbell className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Free Protein Calculator
                </h3>
                <p className="text-slate-400 mb-4">
                  Get your personalized protein target in seconds. Just enter your weight and goal.
                </p>
                <Link
                  href="/tools/protein-calculator"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all"
                >
                  Calculate My Protein Needs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-white prose-p:text-slate-400 prose-strong:text-white prose-li:text-slate-400">
            <h2>Quick Answer: Protein Intake by Goal</h2>
            <div className="bg-slate-900/40 rounded-xl p-6 not-prose my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="pb-3 text-white font-semibold">Goal</th>
                    <th className="pb-3 text-white font-semibold">Protein per kg</th>
                    <th className="pb-3 text-white font-semibold">For 70kg person</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3">Sedentary / Maintenance</td>
                    <td className="py-3">0.8g</td>
                    <td className="py-3">56g</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3">General Fitness</td>
                    <td className="py-3">1.2-1.4g</td>
                    <td className="py-3">84-98g</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3">Muscle Building</td>
                    <td className="py-3">1.6-2.2g</td>
                    <td className="py-3">112-154g</td>
                  </tr>
                  <tr className="border-b border-slate-800/50">
                    <td className="py-3">Fat Loss (Preserve Muscle)</td>
                    <td className="py-3">2.0-2.4g</td>
                    <td className="py-3">140-168g</td>
                  </tr>
                  <tr>
                    <td className="py-3">Endurance Athletes</td>
                    <td className="py-3">1.2-1.6g</td>
                    <td className="py-3">84-112g</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Why Protein Matters</h2>
            <p>
              Protein is the building block of muscle tissue. Every time you work out, you create micro-tears in your muscle fibers. Protein provides the amino acids needed to repair and rebuild these fibers stronger than before — a process called <strong>muscle protein synthesis</strong>.
            </p>
            <p>
              Beyond muscle building, protein helps regulate hormones, supports immune function, and increases satiety (feeling full), which makes it easier to maintain a calorie deficit for fat loss.
            </p>

            <h2>How to Calculate Your Protein Needs</h2>
            <h3>Step 1: Determine Your Body Weight</h3>
            <p>
              Use your current body weight in kilograms. If you only know your weight in pounds, divide by 2.2 to get kilograms.
            </p>

            <h3>Step 2: Choose Your Multiplier Based on Goal</h3>
            <ul>
              <li><strong>Sedentary:</strong> 0.8g/kg — minimum to prevent deficiency</li>
              <li><strong>Recreational athlete:</strong> 1.2-1.4g/kg — supports general fitness</li>
              <li><strong>Muscle building:</strong> 1.6-2.2g/kg — maximizes muscle protein synthesis</li>
              <li><strong>Fat loss:</strong> 2.0-2.4g/kg — preserves lean mass in a calorie deficit</li>
              <li><strong>Endurance:</strong> 1.2-1.6g/kg — supports recovery from long sessions</li>
            </ul>

            <h3>Step 3: Do the Math</h3>
            <p>
              <strong>Example:</strong> A 75kg person building muscle would need 75 × 1.8 = <strong>135g of protein per day</strong>.
            </p>

            <h2>Best Protein Sources</h2>
            <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
              <div className="bg-slate-900/40 rounded-xl p-5">
                <h4 className="text-white font-semibold mb-3">Animal Sources</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>Chicken breast: 31g per 100g</li>
                  <li>Salmon: 25g per 100g</li>
                  <li>Eggs: 6g per large egg</li>
                  <li>Greek yogurt: 10g per 100g</li>
                  <li>Whey protein: 25g per scoop</li>
                </ul>
              </div>
              <div className="bg-slate-900/40 rounded-xl p-5">
                <h4 className="text-white font-semibold mb-3">Plant Sources</h4>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>Tofu: 8g per 100g</li>
                  <li>Lentils: 9g per 100g (cooked)</li>
                  <li>Chickpeas: 9g per 100g</li>
                  <li>Quinoa: 4g per 100g (cooked)</li>
                  <li>Pea protein: 20g per scoop</li>
                </ul>
              </div>
            </div>

            <h2>Common Protein Myths</h2>
            <p>
              <strong>Myth 1:</strong> "You can only absorb 30g of protein per meal."<br />
              <strong>Fact:</strong> Your body can absorb more than 30g, but muscle protein synthesis may plateau after 20-40g per meal. Distribute intake across meals for optimal results.
            </p>
            <p>
              <strong>Myth 2:</strong> "High protein damages kidneys."<br />
              <strong>Fact:</strong> Research shows no kidney damage from high protein in healthy individuals. Those with existing kidney disease should consult a doctor.
            </p>
            <p>
              <strong>Myth 3:</strong> "You need protein immediately after workouts."<br />
              <strong>Fact:</strong> The anabolic window is wider than previously thought. Total daily intake matters more than timing.
            </p>

            <h2>Related Tools</h2>
            <ul>
              <li><Link href="/tools/protein-calculator" className="text-orange-400 hover:text-orange-300">Protein Calculator</Link> — Get your exact daily target</li>
              <li><Link href="/tools/macro-calculator" className="text-orange-400 hover:text-orange-300">Macro Calculator</Link> — Calculate protein, carbs, and fat together</li>
              <li><Link href="/tools/calorie-calculator" className="text-orange-400 hover:text-orange-300">Calorie Calculator</Link> — Find your total daily energy needs</li>
            </ul>
          </div>

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">How much protein do I need per day?</h3>
                <p className="text-slate-400">
                  The general recommendation is 0.8g per kg of body weight for sedentary adults. For active individuals: 1.2-1.6g/kg for endurance athletes, 1.6-2.2g/kg for strength training and muscle building, and 2.3-3.1g/kg during aggressive fat loss to preserve muscle mass.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">Can you eat too much protein?</h3>
                <p className="text-slate-400">
                  For healthy individuals, eating more protein than needed is generally safe but unnecessary. Excess protein is either used for energy or converted to fat. Very high protein intake (over 3.5g/kg) may strain kidneys in people with pre-existing kidney disease, but research shows no harm for healthy individuals.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">When should I eat protein for muscle building?</h3>
                <p className="text-slate-400">
                  Distribute protein intake evenly across 3-5 meals throughout the day, with 20-40g per meal. Consume protein within 2 hours after workouts to maximize muscle protein synthesis. The 'anabolic window' is less critical than total daily intake, but post-workout protein helps recovery.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <div className="mt-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Calculate Your Protein Needs Now
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Get your personalized protein target based on your weight, goals, and activity level.
            </p>
            <Link
              href="/tools/protein-calculator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-xl"
            >
              Use Free Protein Calculator
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
