import { notFound } from "next/navigation";
import { WorkoutLanding } from "@/components/workout-landing";
import { workoutConfigs } from "@/lib/workout-configs";
import { JsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return [
    { type: "gym" },
    { type: "home" },
    { type: "beginner" },
  ];
}

export function generateMetadata({ params }: { params: { type: string } }) {
  const config = workoutConfigs[params.type];
  if (!config) return {};

  return {
    title: `${config.title} | GetFitAI`,
    description: config.description,
    alternates: {
      canonical: `https://getfitai.io/workouts/${params.type}`,
    },
    openGraph: {
      title: `${config.title} | GetFitAI`,
      description: config.description,
      url: `https://getfitai.io/workouts/${params.type}`,
      images: [{
        url: `https://getfitai.io/images/og-${params.type}.png`,
        width: 1200,
        height: 630,
        alt: config.title,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${config.title} | GetFitAI`,
      description: config.description,
      images: [`https://getfitai.io/images/og-${params.type}.png`],
    },
  };
}

export default function WorkoutPage({ params }: { params: { type: string } }) {
  const config = workoutConfigs[params.type];

  if (!config) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq: { q: string; a: string }) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <WorkoutLanding config={config} />
    </>
  );
}
