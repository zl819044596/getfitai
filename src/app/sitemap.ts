import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://getfitai.io";

  const staticPages = [
    { path: "", priority: 1.0, changefreq: "weekly" as const },
    { path: "/about", priority: 0.7, changefreq: "monthly" as const },
    { path: "/tools", priority: 0.9, changefreq: "weekly" as const },
    { path: "/tools/bmi-calculator", priority: 0.9, changefreq: "weekly" as const },
  ];

  const workoutTypes = ["gym", "home", "beginner"];

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
  ];

  return pages;
}
