import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "What Is TDEE and How to Calculate It? | GetFitAI",
  description:
    "Learn what TDEE (Total Daily Energy Expenditure) means, how to calculate it accurately, and why it matters for your fitness goals. Free calculator and step-by-step guide included.",
  keywords: [
    "what is TDEE",
    "how to calculate TDEE",
    "TDEE calculator",
    "total daily energy expenditure",
    "calorie calculator",
    "BMR vs TDEE",
    "how many calories should I eat",
    "calorie deficit calculator",
  ],
  alternates: {
    canonical: "https://getfitai.io/blog/what-is-tdee-and-how-to-calculate",
  },
  openGraph: {
    title: "What Is TDEE and How to Calculate It? | GetFitAI",
    description:
      "Learn what TDEE (Total Daily Energy Expenditure) means, how to calculate it accurately, and why it matters for your fitness goals.",
    url: "https://getfitai.io/blog/what-is-tdee-and-how-to-calculate",
    images: [
      {
        url: "https://getfitai.io/images/og-tdee-guide.png",
        width: 1200,
        height: 630,
        alt: "What Is TDEE and How to Calculate It - Complete Guide",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is TDEE and How to Calculate It: The Complete Guide",
  description:
    "Learn what TDEE (Total Daily Energy Expenditure) means, how to calculate it accurately, and why it matters for your fitness goals. Free calculator and step-by-step guide included.",
  image: "https://getfitai.io/images/og-tdee-guide.png",
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
    "@id": "https://getfitai.io/blog/what-is-tdee-and-how-to-calculate",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does TDEE stand for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TDEE stands for Total Daily Energy Expenditure. It represents the total number of calories your body burns in a day through all activities, including basic bodily functions, digestion, daily movement, and exercise. Knowing your TDEE is essential for managing your weight and achieving fitness goals.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate my TDEE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can calculate TDEE by first finding your BMR (Basal Metabolic Rate) using the Mifflin-St Jeor equation, then multiplying by an activity factor (1.2 for sedentary, 1.375 for light activity, 1.55 for moderate activity, 1.725 for active, 1.9 for very active). The easiest method is using a free online TDEE calculator that handles all the math for you.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between BMR and TDEE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest to maintain basic life functions like breathing and organ function. TDEE (Total Daily Energy Expenditure) includes BMR plus all other calories burned through daily activities, digestion, and exercise. TDEE is always higher than BMR.",
      },
    },
    {
      "@type": "Question",
      name: "How many calories should I eat to lose weight?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To lose weight, eat 300-500 calories below your TDEE. This creates a sustainable caloric deficit that typically results in losing 0.5-1 pound (0.25-0.5 kg) per week. Avoid deficits larger than 750 calories, as this can lead to muscle loss, metabolic slowdown, and nutrient deficiencies.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I recalculate my TDEE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recalculate your TDEE every 5-10 kg (10-20 lbs) of weight change, or whenever your activity level changes significantly. As you lose weight, your BMR decreases because your body has less mass to maintain. As you gain muscle, your BMR may increase. Regular recalculation ensures your calorie targets remain accurate.",
      },
    },
    {
      "@type": "Question",
      name: "Why am I not losing weight despite eating below my TDEE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common reasons include: overestimating your activity level (the most common mistake), underestimating portion sizes and calorie intake, not accounting for liquid calories, metabolic adaptation from prolonged dieting, water retention from high sodium or stress, and hormonal factors. Try tracking everything you eat for a week and recalculate your TDEE with a more conservative activity factor.",
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
                src="/images/blog/tdee-calculator.jpg"
                alt="Healthy meal prep with calculator and nutrition tracking"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              What Is TDEE and How to Calculate It: The Complete Guide
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Understanding your Total Daily Energy Expenditure is the foundation of every successful nutrition plan. Whether you want to lose fat, build muscle, or maintain your weight, TDEE is the number that makes it all possible.
            </p>
          </header>

          {/* CTA Box */}
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 mb-12">
            <h3 className="text-lg font-bold text-white mb-2">
              Calculate Your TDEE Instantly
            </h3>
            <p className="text-slate-400 mb-4">
              Use our free calculator to get your personalized daily calorie target in seconds.
            </p>
            <Link
              href="/tools/calorie-calculator"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all"
            >
              Free TDEE Calculator
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-white prose-p:text-slate-400 prose-strong:text-white prose-li:text-slate-400">
            <h2>Introduction: Why TDEE Matters</h2>
            <p>
              Have you ever wondered why some people lose weight eating 2,000 calories while others gain weight on the same amount? The answer lies in TDEE — Total Daily Energy Expenditure. This single number explains why cookie-cutter diet plans fail and why personalized nutrition is the only path to sustainable results.
            </p>
            <p>
              TDEE represents the total number of calories your body burns in a 24-hour period. It accounts for everything: keeping your heart beating, digesting your meals, walking to your car, and crushing your workouts. Understanding your TDEE transforms nutrition from guesswork into science.
            </p>
            <p>
              In this guide, we will break down exactly what TDEE is, how it is calculated, the science behind its components, and how to use it to achieve your specific fitness goals.
            </p>

            <h2>What Is TDEE? A Simple Explanation</h2>
            <p>
              TDEE stands for <strong>Total Daily Energy Expenditure</strong>. It is the sum of all calories your body uses throughout the day. Think of it as your body's daily calorie budget — spend more than this amount, and you gain weight. Spend less, and you lose weight. Match it exactly, and your weight stays stable.
            </p>
            <p>
              Your TDEE is unique to you. It depends on your age, sex, weight, height, body composition, and activity level. Two people of the same weight can have dramatically different TDEEs if one is a sedentary office worker and the other is a construction worker who hits the gym after work.
            </p>
            <p>
              Here is why TDEE matters more than any trendy diet: <strong>every successful nutrition plan is built on manipulating calories relative to TDEE</strong>. Keto, intermittent fasting, paleo, and every other diet work (when they do) because they help people eat fewer calories than they burn. Understanding TDEE gives you the underlying principle without the unnecessary restrictions.
            </p>

            <h2>The Four Components of TDEE</h2>
            <p>
              TDEE is not a single number pulled from thin air. It is the sum of four distinct components, each contributing a different percentage of your total daily burn.
            </p>

            <h3>1. BMR — Basal Metabolic Rate (60-75% of TDEE)</h3>
            <p>
              Your BMR is the number of calories your body burns at complete rest, lying in bed, doing absolutely nothing. It represents the energy required to keep your vital organs functioning: your heart pumping, lungs breathing, brain thinking, kidneys filtering, and cells repairing.
            </p>
            <p>
              BMR is influenced by several factors:
            </p>
            <ul>
              <li><strong>Body size:</strong> Larger people have higher BMRs because they have more mass to maintain.</li>
              <li><strong>Body composition:</strong> Muscle tissue burns 3-5 times more calories at rest than fat tissue. This is why building muscle helps with long-term weight management.</li>
              <li><strong>Age:</strong> BMR decreases by approximately 2-3% per decade after age 20, primarily due to muscle loss.</li>
              <li><strong>Sex:</strong> Men typically have higher BMRs than women due to greater muscle mass and larger organ size.</li>
              <li><strong>Hormones:</strong> Thyroid hormones, in particular, significantly impact metabolic rate.</li>
            </ul>

            <h3>2. TEF — Thermic Effect of Food (10% of TDEE)</h3>
            <p>
              TEF represents the calories your body burns digesting, absorbing, and processing the food you eat. Yes, eating itself burns calories — though not as many as most people hope.
            </p>
            <p>
              Different macronutrients have different thermic effects:
            </p>
            <ul>
              <li><strong>Protein:</strong> 20-30% of calories burned during digestion. A 100-calorie protein serving costs 20-30 calories to process.</li>
              <li><strong>Carbohydrates:</strong> 5-10% of calories burned during digestion.</li>
              <li><strong>Fats:</strong> 0-3% of calories burned during digestion.</li>
            </ul>
            <p>
              This is one reason high-protein diets are effective for fat loss — you effectively absorb fewer calories from protein than from carbs or fats, and protein increases satiety.
            </p>

            <h3>3. NEAT — Non-Exercise Activity Thermogenesis (15-30% of TDEE)</h3>
            <p>
              NEAT encompasses all the calories you burn through daily movement that is not formal exercise: walking to your car, fidgeting, standing, cleaning, typing, gardening, and even maintaining posture. It is the most variable component of TDEE and the one most people underestimate.
            </p>
            <p>
              Research shows that NEAT can vary by up to 2,000 calories per day between individuals of the same size. A naturally fidgety person with an active job might burn 1,500 calories through NEAT, while a sedentary person who sits all day might burn only 300. This explains why some people seem to "eat whatever they want" without gaining weight — their NEAT is silently burning through excess calories.
            </p>
            <p>
              You can intentionally increase NEAT by: taking the stairs, walking during phone calls, using a standing desk, parking farther away, doing household chores, and taking short walking breaks every hour.
            </p>

            <h3>4. EAT — Exercise Activity Thermogenesis (5-15% of TDEE)</h3>
            <p>
              EAT represents the calories burned during deliberate exercise: weightlifting, running, cycling, swimming, sports, and structured workouts. Despite what fitness marketing suggests, EAT is usually the smallest component of TDEE for most people.
            </p>
            <p>
              Here is a reality check: a 60-minute intense workout might burn 400-600 calories. But if your BMR is 1,800 calories, your body burned 1,200 calories just existing during those same 16 waking hours. This is not to say exercise is unimportant — it is crucial for health, muscle building, and body composition — but it is not the primary driver of daily calorie burn.
            </p>

            <h2>How to Calculate Your TDEE: Two Methods</h2>
            <p>
              Now that you understand what TDEE is, let us calculate yours. There are two main approaches: manual calculation using equations, or using an online calculator.
            </p>

            <h3>Method 1: The Mifflin-St Jeor Equation (Most Accurate)</h3>
            <p>
              The Mifflin-St Jeor equation is considered the most accurate BMR prediction formula for most people. Here is how to use it:
            </p>
            <p>
              <strong>For men:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
            </p>
            <p>
              <strong>For women:</strong> BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
            </p>
            <p>
              Once you have your BMR, multiply it by an activity factor to get your TDEE:
            </p>
            <ul>
              <li><strong>Sedentary</strong> (desk job, little to no exercise): × 1.2</li>
              <li><strong>Lightly active</strong> (light exercise 1-3 days/week): × 1.375</li>
              <li><strong>Moderately active</strong> (moderate exercise 3-5 days/week): × 1.55</li>
              <li><strong>Very active</strong> (hard exercise 6-7 days/week): × 1.725</li>
              <li><strong>Extremely active</strong> (physical job + hard exercise): × 1.9</li>
            </ul>
            <p>
              <strong>Example:</strong> A 30-year-old woman, 165 cm tall, weighing 65 kg, who exercises moderately 4 days per week:
            </p>
            <p>
              BMR = (10 × 65) + (6.25 × 165) - (5 × 30) - 161 = 650 + 1,031 - 150 - 161 = 1,370 calories
            </p>
            <p>
              TDEE = 1,370 × 1.55 = <strong>2,124 calories per day</strong>
            </p>

            <h3>Method 2: Use Our Free TDEE Calculator</h3>
            <p>
              The easiest and fastest way to calculate your TDEE is to use our free online calculator. Simply enter your age, sex, weight, height, and activity level, and the calculator handles all the math instantly. It also provides personalized calorie targets for fat loss, maintenance, and muscle building.
            </p>

            <h2>How to Use TDEE for Your Goals</h2>
            <p>
              Once you know your TDEE, you can manipulate your calorie intake to achieve any body composition goal. Here is exactly how:
            </p>

            <h3>For Fat Loss: Create a Caloric Deficit</h3>
            <p>
              To lose fat, eat 300-500 calories below your TDEE. This creates a sustainable deficit that typically results in losing 0.5-1 pound (0.25-0.5 kg) per week. Here is why this range works:
            </p>
            <ul>
              <li>A 500-calorie daily deficit equals 3,500 calories per week — roughly equivalent to 1 pound of fat.</li>
              <li>Deficits larger than 750 calories increase the risk of muscle loss, metabolic slowdown, and nutrient deficiencies.</li>
              <li>Deficits smaller than 300 calories produce results too slowly for most people to stay motivated.</li>
            </ul>
            <p>
              <strong>Example:</strong> If your TDEE is 2,500 calories, aim for 2,000-2,200 calories per day for fat loss.
            </p>

            <h3>For Muscle Building: Create a Caloric Surplus</h3>
            <p>
              To build muscle, eat 200-400 calories above your TDEE. This provides your body with the extra energy needed to synthesize new muscle tissue. Larger surpluses lead to unnecessary fat gain — your body can only build muscle so fast.
            </p>
            <p>
              <strong>Example:</strong> If your TDEE is 2,500 calories, aim for 2,700-2,900 calories per day for muscle building.
            </p>

            <h3>For Maintenance: Eat at TDEE</h3>
            <p>
              To maintain your current weight, eat approximately your TDEE. In practice, this means your weight stays stable within a 1-2 pound range over several weeks. Small daily fluctuations are normal due to water retention, sodium intake, and digestive contents.
            </p>

            <h2>Common TDEE Calculation Mistakes</h2>
            <p>
              Even with the right formula, these errors can throw off your calculations:
            </p>
            <ul>
              <li><strong>Overestimating activity level:</strong> This is the most common mistake. Most people overestimate their activity by 20-30%. When in doubt, choose the lower activity category.</li>
              <li><strong>Not recalculating:</strong> Your TDEE changes as your weight changes. Recalculate every 5-10 kg (10-20 lbs) of body weight change.</li>
              <li><strong>Ignoring NEAT variations:</strong> Your daily movement varies. Some days you might burn 500 extra calories through NEAT without realizing it.</li>
              <li><strong>Being too aggressive:</strong> Extreme deficits (1,000+ calories below TDEE) lead to muscle loss, hormonal disruption, and rebound weight gain.</li>
              <li><strong>Treating TDEE as gospel:</strong> TDEE equations are estimates. Use them as a starting point, then adjust based on real-world results after 2-3 weeks.</li>
            </ul>

            <h2>TDEE and Macronutrients</h2>
            <p>
              Once you have your calorie target, the next step is distributing those calories among macronutrients: protein, carbohydrates, and fats. Here are evidence-based starting points:
            </p>
            <ul>
              <li><strong>Protein:</strong> 1.6-2.2 g per kg of body weight (0.7-1.0 g per lb). Essential for muscle preservation during fat loss and muscle building during surpluses.</li>
              <li><strong>Fats:</strong> 0.6-1.0 g per kg of body weight. Critical for hormone production and nutrient absorption.</li>
              <li><strong>Carbohydrates:</strong> Fill the remaining calories. The primary fuel source for high-intensity exercise and brain function.</li>
            </ul>
            <p>
              Use our free <Link href="/tools/macro-calculator" className="text-orange-400 hover:underline">Macro Calculator</Link> to get personalized targets based on your TDEE and goals.
            </p>

            <h2>Conclusion: TDEE Is Your Nutritional Foundation</h2>
            <p>
              Understanding your TDEE transforms nutrition from a guessing game into a precise tool. It explains why some diets work for your friends but not for you. It gives you the power to adjust your intake based on real data rather than arbitrary rules.
            </p>
            <p>
              Calculate your TDEE, set appropriate calorie targets for your goals, track your intake honestly, and adjust based on results. This simple framework — not fad diets or magic supplements — is what produces lasting body composition changes.
            </p>
            <p>
              Ready to find your numbers? Use our free calculator and take the first step toward data-driven nutrition.
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative p-8 md:p-12 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-sm font-medium text-white/90">AI-Powered</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Calculate Your TDEE
                <br className="hidden md:block" />
                Completely Free
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto text-base md:text-lg">
                Get your personalized daily calorie target plus recommendations for fat loss, maintenance, and muscle building.
              </p>
              <Link
                href="/tools/calorie-calculator"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-slate-100 transition-colors shadow-xl shadow-black/20"
              >
                Free TDEE Calculator
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">What does TDEE stand for?</h3>
                <p className="text-slate-400">
                  TDEE stands for Total Daily Energy Expenditure. It represents the total number of calories your body burns in a day through all activities, including basic bodily functions, digestion, daily movement, and exercise. Knowing your TDEE is essential for managing your weight and achieving fitness goals.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">How do I calculate my TDEE?</h3>
                <p className="text-slate-400">
                  You can calculate TDEE by first finding your BMR (Basal Metabolic Rate) using the Mifflin-St Jeor equation, then multiplying by an activity factor (1.2 for sedentary, 1.375 for light activity, 1.55 for moderate activity, 1.725 for active, 1.9 for very active). The easiest method is using a free online TDEE calculator that handles all the math for you.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">What is the difference between BMR and TDEE?</h3>
                <p className="text-slate-400">
                  BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest to maintain basic life functions like breathing and organ function. TDEE (Total Daily Energy Expenditure) includes BMR plus all other calories burned through daily activities, digestion, and exercise. TDEE is always higher than BMR.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">How many calories should I eat to lose weight?</h3>
                <p className="text-slate-400">
                  To lose weight, eat 300-500 calories below your TDEE. This creates a sustainable caloric deficit that typically results in losing 0.5-1 pound (0.25-0.5 kg) per week. Avoid deficits larger than 750 calories, as this can lead to muscle loss, metabolic slowdown, and nutrient deficiencies.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">How often should I recalculate my TDEE?</h3>
                <p className="text-slate-400">
                  Recalculate your TDEE every 5-10 kg (10-20 lbs) of weight change, or whenever your activity level changes significantly. As you lose weight, your BMR decreases because your body has less mass to maintain. As you gain muscle, your BMR may increase. Regular recalculation ensures your calorie targets remain accurate.
                </p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl p-6">
                <h3 className="font-bold text-white mb-2">Why am I not losing weight despite eating below my TDEE?</h3>
                <p className="text-slate-400">
                  Common reasons include: overestimating your activity level (the most common mistake), underestimating portion sizes and calorie intake, not accounting for liquid calories, metabolic adaptation from prolonged dieting, water retention from high sodium or stress, and hormonal factors. Try tracking everything you eat for a week and recalculate your TDEE with a more conservative activity factor.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
