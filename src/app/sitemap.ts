import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

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

  // 动态获取博客文章
  const blogDir = path.join(process.cwd(), "src/app/blog");
  const blogPosts: string[] = [];
  
  if (fs.existsSync(blogDir)) {
    const entries = fs.readdirSync(blogDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory()) {
        blogPosts.push(entry.name);
      }
    }
  }

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
