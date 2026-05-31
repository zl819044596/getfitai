import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://getfitai.io";

  const staticPages = [
    { path: "", priority: 1.0, changefreq: "weekly" as const },
    { path: "/about", priority: 0.7, changefreq: "monthly" as const },
    { path: "/blog", priority: 0.7, changefreq: "weekly" as const },
    { path: "/contact", priority: 0.5, changefreq: "monthly" as const },
    { path: "/privacy", priority: 0.3, changefreq: "yearly" as const },
    { path: "/terms", priority: 0.3, changefreq: "yearly" as const },
    { path: "/tools", priority: 0.9, changefreq: "weekly" as const },
    { path: "/tools/bmi-calculator", priority: 0.9, changefreq: "weekly" as const },
    { path: "/tools/tdee-calculator", priority: 0.9, changefreq: "weekly" as const },
    { path: "/tools/one-rep-max", priority: 0.9, changefreq: "weekly" as const },
    { path: "/tools/plate-calculator", priority: 0.9, changefreq: "weekly" as const },
    { path: "/tools/body-fat-calculator", priority: 0.9, changefreq: "weekly" as const },
    { path: "/tools/workout-timer", priority: 0.9, changefreq: "weekly" as const },
    { path: "/tools/workout-generator", priority: 0.95, changefreq: "weekly" as const },
    { path: "/tools/macro-calculator", priority: 0.9, changefreq: "weekly" as const },
    { path: "/tools/calorie-calculator", priority: 0.9, changefreq: "weekly" as const },
    { path: "/tools/protein-calculator", priority: 0.9, changefreq: "weekly" as const },
    { path: "/tools/heart-rate-calculator", priority: 0.9, changefreq: "weekly" as const },
    { path: "/tools/pace-calculator", priority: 0.9, changefreq: "weekly" as const },
    { path: "/tools/wilks-calculator", priority: 0.9, changefreq: "weekly" as const },
    { path: "/tools/bmr-calculator", priority: 0.9, changefreq: "weekly" as const },
    { path: "/tools/ideal-weight-calculator", priority: 0.9, changefreq: "weekly" as const },
  ];

  const workoutTypes = ["gym", "home", "beginner"];

  // 博客文章列表（手动维护，避免构建时文件系统访问问题）
  const blogPosts = [
    "ai-fitness-coach-vs-personal-trainer",
    "beginner-gym-plan",
    "bench-press-wrist-pain",
    "best-ai-fitness-apps-2026",
    "build-muscle-fast",
    "home-vs-gym",
    "home-vs-gym-workout",
    "how-to-build-muscle",
    "how-to-lose-belly-fat",
    "how-to-use-ai-workout-generator",
    "intermittent-fasting-workout",
    "meal-prep-muscle",
    "protein-intake-calculator-guide",
    "what-is-tdee-and-how-to-calculate",
  ];

  const pages = [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changefreq,
      priority: page.priority,
    })),
    ...workoutTypes.map((type) => ({
      url: `${baseUrl}/workouts/${type}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];

  return pages;
}
