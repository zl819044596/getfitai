import { Metadata } from "next";
import { ToolsClient } from "./tools-client";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Fitness Tools | GetFitAI",
  description: "Explore GetFitAI's collection of free fitness calculators and tools. BMI, TDEE, 1RM, body fat, plate calculator, and workout timer — all free.",
  alternates: {
    canonical: "https://www.getfitai.io/tools/",
  },
  openGraph: {
    title: "Fitness Tools | GetFitAI",
    url: "https://www.getfitai.io/tools",
    images: [
      {
        url: "https://www.getfitai.io/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Fitness Tools | GetFitAI",
      },
    ],
  },
};

export default function ToolsPage() {
  const breadcrumb = breadcrumbList([
    { name: "Home", url: "https://www.getfitai.io/" },
    { name: "Tools", url: "https://www.getfitai.io/tools/" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <ToolsClient />
    </>
  );
}
