/**
 * Schema.org structured data helpers for GetFitAI
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * SoftwareApplication schema — GetFitAI is a free web fitness app
 * with workout generation, follow-along training, and calculators.
 */
export function softwareApplication() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GetFitAI",
    url: "https://www.getfitai.io",
    applicationCategory: "Multimedia",
    operatingSystem: "Web",
    description:
      "Free AI-powered workout generator, follow-along training plans, and fitness calculators. Sign in to save and sync your plans.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "AI Workout Generator — personalized plans by goals, equipment, experience",
      "Follow-Along Workouts — video-led training with real-time timers",
      "Fitness Calculators — BMI, TDEE, 1RM, body fat, protein, macros, and more",
      "Workout Timer — interval timer for HIIT, Tabata, and custom rounds",
    ],
    screenshot: "https://www.getfitai.io/og-image.webp",
  };
}

/**
 * FAQPage schema helper.
 * Takes an array of { q: string, a: string } and returns a full FAQPage object.
 */
export function faqPage(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
