import type { Metadata } from "next";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fitness Blog | Workout Tips & Nutrition Advice",
  description: "Read expert fitness tips, workout guides, and nutrition advice on the GetFitAI blog. Science-backed content to help you reach your goals faster.",
  alternates: {
    canonical: "https://getfitai.io/blog",
  },
  openGraph: {
    title: "Fitness Blog | Workout Tips & Nutrition Advice",
    url: "https://getfitai.io/blog",
  },
};

const posts = [
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
    title: "The Complete Beginner's Guide to Strength Training",
    excerpt: "Everything you need to know to start lifting weights safely and effectively.",
    date: "May 10, 2025",
    slug: "how-to-build-muscle",
    category: "Beginner",
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
    <main className="min-h-screen bg-background">
<section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Fitness Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert tips, science-backed advice, and practical guides to level up your fitness journey.
            </p>
          </div>

          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-muted rounded-2xl p-6 md:p-8 hover:bg-muted/80 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
</main>
  );
}
