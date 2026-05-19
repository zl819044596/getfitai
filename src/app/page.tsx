import { Metadata } from "next";
import { HomeClient } from "./home-client";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "GetFitAI - AI Workout Generator",
  description: "Generate personalized workout plans with AI. No signup required.",
  alternates: {
    canonical: "https://getfitai.io",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GetFitAI",
  url: "https://getfitai.io",
  description: "AI-powered workout plan generator",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://getfitai.io/tools?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "GetFitAI",
  url: "https://getfitai.io",
  description: "Generate personalized workout plans with AI",
  applicationCategory: "HealthApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={appSchema} />
      <HomeClient />
    </>
  );
}
