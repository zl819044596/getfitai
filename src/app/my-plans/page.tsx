import type { Metadata } from "next";
import { MyPlansClient } from "./my-plans-client";

export const metadata: Metadata = {
  title: "My Saved Plans — GetFitAI",
  description: "View your saved and favorited workout plans. Your plans are stored locally in your browser.",
  alternates: {
    canonical: "https://www.getfitai.io/my-plans/",
  },
};

export default function MyPlansPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My Saved Plans
            </h1>
            <p className="text-lg text-muted-foreground">
              Your saved and favorited workout plans, stored locally in this browser.
            </p>
          </div>
          <MyPlansClient />
        </div>
      </section>
    </main>
  );
}
