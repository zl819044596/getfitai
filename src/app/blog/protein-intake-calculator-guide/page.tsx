import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Protein Intake Calculator: How Much Protein Do You Need? | GetFitAI",
  description:
    "Learn how much protein you need daily based on your weight, activity level, and fitness goals. Science-backed guidelines, timing strategies, and best sources — plus a free calculator.",
  keywords: [
    "protein intake calculator",
    "how much protein do I need",
    "daily protein requirements",
    "protein for muscle building",
    "protein for weight loss",
    "best protein sources",
    "protein timing",
    "protein per day",
  ],
  alternates: {
    canonical: "https://getfitai.io/blog/protein-intake-calculator-guide/",
  },
  openGraph: {
    title: "Protein Intake Calculator: How Much Protein Do You Need? | GetFitAI",
    description:
      "Learn how much protein you need daily based on your weight, activity level, and fitness goals. Science-backed guidelines and free calculator.",
    url: "https://getfitai.io/blog/protein-intake-calculator-guide",
    images: [
      {
        url: "https://getfitai.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Protein Intake Calculator - How Much Protein Do You Need?",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Protein Intake Calculator: How Much Protein Do You Need Daily?",
  description:
    "Learn how much protein you need daily based on your weight, activity level, and fitness goals. Science-backed guidelines, timing strategies, and best sources.",
  image: "https://getfitai.io/og-image.jpg",
  author: {
    "@type": "Organization",
    name: "GetFitAI",
    url: "https://getfitai.io",
  },
  publisher: {
    "@type": "Organization",
    name: "GetFitAI",
    logo: {
      "@type": "ImageObject",
      url: "https://getfitai.io/logo.png",
    },
  },
  datePublished: "2026-05-30",
  dateModified: "2026-05-30",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://getfitai.io/blog/protein-intake-calculator-guide",
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
        text: "The general recommendation is 0.8g per kg of body weight for sedentary adults. For active individuals: 1.2-1.4g/kg for general fitness, 1.6-2.2g/kg for strength training, and 1.8-2.4g/kg for muscle building. Use our free protein calculator for personalized recommendations.",
      },
    },
    {
      "@type": "Question",
      name: "Can you eat too much protein?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For healthy individuals, high protein intake (up to 3-4g/kg) is generally safe. However, extremely high intakes may cause digestive discomfort, reduced intake of other nutrients, and increased kidney workload. Those with existing kidney disease should consult a doctor.",
      },
    },
    {
      "@type": "Question",
      name: "What are the best protein sources?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Animal sources include chicken breast (31g/100g), salmon (25g/100g), eggs (6g each), Greek yogurt (10g/100g), and whey protein. Plant sources include tofu (8g/100g), lentils (9g/100g), chickpeas (9g/100g), quinoa (4g/100g), and pea protein powder.",
      },
    },
    {
      "@type": "Question",
      name: "When should I eat protein for muscle growth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While total daily intake matters most, aim for 20-40g protein per meal spread across 3-5 meals. Post-workout protein within 2 hours aids recovery. Casein protein before bed may support overnight muscle protein synthesis.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need more protein when losing weight?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. During a caloric deficit, higher protein intake (2.0-2.4g/kg) helps preserve muscle mass while losing fat. Protein also increases satiety, making it easier to stick to your diet. Prioritize protein at every meal when cutting.",
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
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-medium rounded-full">
                Nutrition
              </span>
              <span className="text-sm text-slate-500">May 30, 2026</span>
            </div>
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
              <img
                src="/images/blog/protein-guide.jpg"
                alt="Protein rich foods for muscle building"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Protein Intake Calculator: How Much Protein Do You Need Daily?
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Protein is the single most important nutrient for building muscle, losing fat, and recovering from workouts. 
              But most people have no idea how much they actually need. Let&apos;s fix that with science-backed numbers.
            </p>
          </header>

          {/* CTA Box */}
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 mb-12">
            <h3 className="text-lg font-bold text-white mb-2">
              Calculate Your Protein Needs
            </h3>
            <p className="text-slate-400 mb-4">
              Get your personalized daily protein target based on your weight, activity level, and goals. Free, no signup.
            </p>
            <Link
              href="/tools/protein-calculator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all"
            >
              Protein Calculator
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-white prose-p:text-slate-400 prose-strong:text-white prose-li:text-slate-400">
            <h2>Why Protein Matters</h2>
            <p>
              Protein is the building block of muscle tissue. Every time you lift weights, you create micro-tears in your muscle fibers. Protein provides the amino acids needed to repair and rebuild these fibers stronger than before. Without adequate protein, your body cannot build muscle effectively — no matter how hard you train.
            </p>
            <p>
              But protein&apos;s benefits go beyond muscle building. It&apos;s also critical for fat loss: protein has the highest thermic effect of food (your body burns 20-30% of protein calories just digesting it), it increases satiety hormones, and it helps preserve lean mass during a caloric deficit.
            </p>

            <h2>How Much Protein Do You Need?</h2>
            <p>Protein needs depend on several factors:</p>
            <ul>
              <li><strong>Body weight</strong> — Heavier people need more protein</li>
              <li><strong>Activity level</strong> — Active people need more than sedentary</li>
              <li><strong>Fitness goal</strong> — Muscle building requires the most protein</li>
              <li><strong>Age</strong> — Older adults need more to prevent muscle loss</li>
            </ul>

            <h2>Protein Intake Guidelines by Goal</h2>
            <table>
              <thead>
                <tr>
                  <th>Goal / Activity</th>
                  <th>Protein per kg</th>
                  <th>Protein per lb</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sedentary adult</td>
                  <td>0.8 g/kg</td>
                  <td>0.36 g/lb</td>
                </tr>
                <tr>
                  <td>General fitness</td>
                  <td>1.2-1.4 g/kg</td>
                  <td>0.55-0.65 g/lb</td>
                </tr>
                <tr>
                  <td>Endurance athletes</td>
                  <td>1.4-1.6 g/kg</td>
                  <td>0.65-0.75 g/lb</td>
                </tr>
                <tr>
                  <td>Strength training</td>
                  <td>1.6-2.2 g/kg</td>
                  <td>0.75-1.0 g/lb</td>
                </tr>
                <tr>
                  <td>Building muscle</td>
                  <td>1.8-2.4 g/kg</td>
                  <td>0.8-1.1 g/lb</td>
                </tr>
                <tr>
                  <td>Fat loss (maintaining muscle)</td>
                  <td>2.0-2.4 g/kg</td>
                  <td>0.9-1.1 g/lb</td>
                </tr>
              </tbody>
            </table>

            <h2>Example Calculations</h2>
            <p>For a 70 kg (154 lb) person:</p>
            <ul>
              <li><strong>Sedentary:</strong> 70 × 0.8 = <strong>56g protein/day</strong></li>
              <li><strong>General fitness:</strong> 70 × 1.3 = <strong>91g protein/day</strong></li>
              <li><strong>Building muscle:</strong> 70 × 2.0 = <strong>140g protein/day</strong></li>
              <li><strong>Fat loss:</strong> 70 × 2.2 = <strong>154g protein/day</strong></li>
            </ul>

            <h2>Best Protein Sources</h2>
            <h3>Animal Sources (Complete Proteins)</h3>
            <ul>
              <li>Chicken breast: 31g per 100g</li>
              <li>Salmon: 25g per 100g</li>
              <li>Eggs: 6g per large egg</li>
              <li>Greek yogurt: 10g per 100g</li>
              <li>Whey protein: 20-25g per scoop</li>
            </ul>

            <h3>Plant Sources</h3>
            <ul>
              <li>Tofu: 8g per 100g</li>
              <li>Lentils: 9g per 100g (cooked)</li>
              <li>Chickpeas: 9g per 100g (cooked)</li>
              <li>Quinoa: 4g per 100g (cooked)</li>
              <li>Pea protein powder: 20g per scoop</li>
            </ul>

            <h2>Protein Timing for Maximum Results</h2>
            <p>
              While total daily intake matters most, spreading protein across meals optimizes muscle protein synthesis:
            </p>
            <ul>
              <li>Aim for 20-40g protein per meal</li>
              <li>Include protein in every meal, not just dinner</li>
              <li>Post-workout protein within 2 hours helps recovery</li>
              <li>Casein protein before bed may help overnight recovery</li>
            </ul>

            <h2>Protein and Fat Loss</h2>
            <p>
              During a caloric deficit, higher protein intake becomes even more important. When you eat fewer calories, your body may break down muscle for energy. Adequate protein signals your body to preserve muscle tissue and burn fat instead.
            </p>
            <p>
              Protein also helps control hunger. It triggers the release of satiety hormones (like PYY and GLP-1) and suppresses ghrelin, the hunger hormone. Studies show that people who eat 25-30% of calories from protein naturally consume 400 fewer calories per day without trying.
            </p>

            <h2>Can You Eat Too Much Protein?</h2>
            <p>
              For healthy individuals, high protein intake (up to 3-4 g/kg) is generally safe. However, extremely high intakes may cause:
            </p>
            <ul>
              <li>Digestive discomfort</li>
              <li>Reduced intake of other nutrients</li>
              <li>Increased kidney workload (only a concern for existing kidney disease)</li>
            </ul>

            <h2>Calculate Your Personal Protein Target</h2>
            <p>
              Use our{" "}
              <Link href="/tools/protein-calculator" className="text-orange-400 hover:underline">
                free Protein Calculator
              </Link>
              {" "}to get your personalized daily protein target based on your weight, activity level, and goals. It takes 10 seconds and requires no signup.
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-transparent" />
            <div className="relative p-8 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium text-white/90">Free Tool</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Get Your Protein Target
                <br className="hidden md:block" />
                In 10 Seconds
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto text-base md:text-lg">
                Enter your weight and goals. Our calculator gives you the exact protein intake you need.
              </p>
              <Link
                href="/tools/protein-calculator"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-xl shadow-black/20"
              >
                Protein Calculator
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">How much protein do I need per day?</h3>
                <p className="text-slate-400">
                  The general recommendation is 0.8g per kg of body weight for sedentary adults. For active individuals: 1.2-1.4g/kg for general fitness, 1.6-2.2g/kg for strength training, and 1.8-2.4g/kg for muscle building.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">Can you eat too much protein?</h3>
                <p className="text-slate-400">
                  For healthy individuals, high protein intake (up to 3-4g/kg) is generally safe. However, extremely high intakes may cause digestive discomfort and increased kidney workload. Those with existing kidney disease should consult a doctor.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">What are the best protein sources?</h3>
                <p className="text-slate-400">
                  Animal sources include chicken breast (31g/100g), salmon (25g/100g), eggs (6g each), Greek yogurt (10g/100g), and whey protein. Plant sources include tofu, lentils, chickpeas, quinoa, and pea protein powder.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">When should I eat protein for muscle growth?</h3>
                <p className="text-slate-400">
                  Aim for 20-40g protein per meal spread across 3-5 meals. Post-workout protein within 2 hours aids recovery. Casein protein before bed may support overnight muscle protein synthesis.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">Do I need more protein when losing weight?</h3>
                <p className="text-slate-400">
                  Yes. During a caloric deficit, higher protein intake (2.0-2.4g/kg) helps preserve muscle mass while losing fat. Protein also increases satiety, making it easier to stick to your diet.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
