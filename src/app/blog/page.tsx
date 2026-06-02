import type { Metadata } from "next";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fitness Blog | Workout Tips & Nutrition Advice",
  description: "Read expert fitness tips, workout guides, and nutrition advice on the GetFitAI blog. Science-backed content to help you reach your goals faster.",
  alternates: {
    canonical: "https://www.getfitai.io/blog/",
  },
  openGraph: {
    title: "Fitness Blog | Workout Tips & Nutrition Advice",
    url: "https://www.getfitai.io/blog",
    images: [
      {
        url: "https://www.getfitai.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GetFitAI - Free AI Workout Generator & Fitness Tools",
      },
    ],
  },
};

const posts = [
  {
    title: "Six Pack Workout: 10 Best Ab Exercises for Visible Abs",
    excerpt: "The complete guide to getting visible abs. Science-backed exercises, training frequency, and the nutrition strategy that actually works.",
    date: "June 1, 2026",
    slug: "six-pack-workout",
    category: "Abs Training",
  },
  {
    title: "Beginner Workout Routine: Complete 4-Week Plan",
    excerpt: "Everything you need to start working out. Exercises, sets, reps, rest periods, and a proven 4-week progression plan.",
    date: "June 1, 2026",
    slug: "beginner-workout-routine",
    category: "Beginner Guide",
  },
  {
    title: "Women Workout Plan: Strength Training for Women",
    excerpt: "A science-backed workout plan designed specifically for women. Build strength, boost metabolism, and feel confident.",
    date: "June 1, 2026",
    slug: "women-workout-plan",
    category: "Women Fitness",
  },
  {
    title: "How Much Protein Per Day: Complete Calculator & Guide",
    excerpt: "Calculate your exact daily protein needs based on weight, goals, and activity level. Science-backed guidelines with free calculator.",
    date: "June 1, 2026",
    slug: "how-much-protein-per-day",
    category: "Nutrition",
  },
  {
    title: "How Many Calories Should I Eat? Calculator & Guide",
    excerpt: "Calculate your daily calorie needs for weight loss, maintenance, or muscle gain. TDEE explained with step-by-step formulas.",
    date: "June 1, 2026",
    slug: "how-many-calories-should-i-eat",
    category: "Nutrition",
  },
  {
    title: "AI Workout Planner: Free Personalized Training Plans",
    excerpt: "Discover how AI workout planners create personalized training programs in seconds. Free, science-backed, and tailored to your goals.",
    date: "June 1, 2026",
    slug: "ai-workout-planner",
    category: "AI Fitness",
  },
  {
    title: "AI Fitness Coach vs Personal Trainer: Which Is Better?",
    excerpt: "Compare AI fitness coaches and human personal trainers. Cost, personalization, accountability, and results — find out which option fits your goals and budget in 2026.",
    date: "May 30, 2026",
    slug: "ai-fitness-coach-vs-personal-trainer",
    category: "Comparison",
  },
  {
    title: "Best AI Fitness Apps 2026: Top Picks Reviewed",
    excerpt: "We reviewed the top AI fitness apps of 2026. Features, pricing, accuracy, and user experience compared. Find the best AI workout coach for your goals.",
    date: "May 30, 2026",
    slug: "best-ai-fitness-apps-2026",
    category: "Reviews",
  },
  {
    title: "How to Use AI Workout Generator: Complete Guide",
    excerpt: "Step-by-step guide to using AI workout generators effectively. Input tips, customization, progression, and getting the best results from AI fitness tools.",
    date: "May 30, 2026",
    slug: "how-to-use-ai-workout-generator",
    category: "Guides",
  },
  {
    title: "What Is TDEE and How to Calculate It",
    excerpt: "Total Daily Energy Expenditure explained. Learn what TDEE means, how to calculate it, and why it matters for weight loss, muscle gain, and maintenance.",
    date: "May 30, 2026",
    slug: "what-is-tdee-and-how-to-calculate",
    category: "Nutrition",
  },
  {
    title: "Protein Intake Calculator: How Much Protein Do You Need?",
    excerpt: "Learn how much protein you need daily based on your weight, activity level, and fitness goals. Science-backed guidelines and free calculator included.",
    date: "May 30, 2026",
    slug: "protein-intake-calculator-guide",
    category: "Nutrition",
  },
  {
    title: "How to Build Muscle Fast: Science-Backed Guide",
    excerpt: "Learn proven training, nutrition, and recovery strategies for maximum hypertrophy. Progressive overload, protein intake, and optimal frequency explained.",
    date: "May 27, 2026",
    slug: "build-muscle-fast",
    category: "Muscle Building",
  },
  {
    title: "Beginner Gym Plan: Complete 4-Week Guide",
    excerpt: "Start your fitness journey with our free beginner gym plan. 4-week progressive program with exercises, sets, reps and rest periods.",
    date: "May 27, 2026",
    slug: "beginner-gym-plan",
    category: "Beginner",
  },
  {
    title: "Home vs Gym Workout: Which Is Better for You?",
    excerpt: "Compare costs, equipment, results, and convenience. Find out which option fits your lifestyle and goals.",
    date: "May 27, 2026",
    slug: "home-vs-gym-workout",
    category: "Training",
  },
  {
    title: "How to Build Muscle: The Complete Beginner's Guide",
    excerpt: "Learn the science of muscle growth, the 6 fundamental exercises, a complete workout plan, and nutrition strategies.",
    date: "May 22, 2025",
    slug: "how-to-build-muscle",
    category: "Muscle Building",
  },
  {
    title: "How to Lose Belly Fat: 10 Science-Backed Exercises",
    excerpt: "Discover 10 proven exercises, a complete 7-day workout plan, and nutrition tips to lose belly fat fast. No gym required.",
    date: "May 22, 2025",
    slug: "how-to-lose-belly-fat",
    category: "Fat Loss",
  },
  {
    title: "How to Fix Wrist Pain During Bench Press",
    excerpt: "Common causes and proven solutions for wrist discomfort during pressing movements.",
    date: "May 15, 2025",
    slug: "bench-press-wrist-pain",
    category: "Injury Prevention",
  },
  {
    title: "Home Workout vs Gym: Which is Better?",
    excerpt: "A data-driven comparison to help you choose the right training environment.",
    date: "May 5, 2025",
    slug: "home-vs-gym",
    category: "Training",
  },
  {
    title: "How to Meal Prep for Muscle Gain",
    excerpt: "Simple meal prep strategies to support your hypertrophy goals.",
    date: "Apr 28, 2025",
    slug: "meal-prep-muscle",
    category: "Nutrition",
  },
  {
    title: "Intermittent Fasting and Workout: The Complete Guide",
    excerpt: "Learn how to combine intermittent fasting with your workout routine for optimal fat loss and muscle gain. Science-backed guide with practical tips.",
    date: "May 24, 2026",
    slug: "intermittent-fasting-workout",
    category: "Nutrition",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-orange-500/10 text-sm font-medium text-orange-400 mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Fitness Blog
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Expert tips, science-backed advice, and practical guides to level up your fitness journey.
            </p>
          </div>

          <div className="grid gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-orange-500/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-slate-500">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-400 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>

          {/* Related Tools */}
          <div className="mt-16 bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-white mb-4">Free Fitness Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/tools/calorie-calculator" className="flex items-center gap-3 text-sm text-slate-400 hover:text-orange-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                Calorie Calculator
              </Link>
              <Link href="/tools/protein-calculator" className="flex items-center gap-3 text-sm text-slate-400 hover:text-orange-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                Protein Calculator
              </Link>
              <Link href="/tools/bmi-calculator" className="flex items-center gap-3 text-sm text-slate-400 hover:text-orange-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                BMI Calculator
              </Link>
              <Link href="/tools/tdee-calculator" className="flex items-center gap-3 text-sm text-slate-400 hover:text-orange-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                TDEE Calculator
              </Link>
              <Link href="/tools/workout-generator" className="flex items-center gap-3 text-sm text-slate-400 hover:text-orange-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                AI Workout Generator
              </Link>
              <Link href="/tools/macro-calculator" className="flex items-center gap-3 text-sm text-slate-400 hover:text-orange-400 transition-colors">
                <ArrowRight className="w-4 h-4" />
                Macro Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
