import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fitness Blog | Workout Tips & Nutrition Advice | GetFitAI",
  description: "Expert fitness tips, workout guides, and nutrition advice to help you reach your goals faster.",
};

const posts = [
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
    slug: "beginner-strength-training",
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
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Fitness Blog
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Expert tips, science-backed advice, and practical guides to level up your fitness journey.
            </p>
          </div>

          <div className="grid gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-gray-50 rounded-2xl p-6 md:p-8 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-black mb-2 group-hover:text-gray-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 mb-4">{post.excerpt}</p>
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600 transition-colors"
                >
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
