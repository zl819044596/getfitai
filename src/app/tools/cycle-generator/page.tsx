import type { Metadata } from "next";
import { CycleGenerator } from "@/components/cycle-generator";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbList } from "@/lib/schema";

export const metadata: Metadata = {
  title: "4-Week Program Generator — AI Progressive Training Plan | GetFitAI",
  description:
    "Generate a structured 4-week progressive training plan with AI. Get weekly progression, tailored sessions, and a program built for your goals, experience, and equipment.",
  alternates: {
    canonical: "https://www.getfitai.io/tools/cycle-generator/",
  },
};

export default function CycleGeneratorPage() {
  const breadcrumb = breadcrumbList([
    { name: "Home", url: "https://www.getfitai.io/" },
    { name: "Tools", url: "https://www.getfitai.io/tools/" },
    { name: "4-Week Program Generator", url: "https://www.getfitai.io/tools/cycle-generator/" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <main className="min-h-screen bg-background">
        <section className="pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">Pro program builder</p>
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">4-Week Program Generator</h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Build a structured progressive training cycle that evolves week by week around your goals, schedule, and equipment.
              </p>
            </div>
            <CycleGenerator />
          </div>
        </section>
      </main>
    </>
  );
}
