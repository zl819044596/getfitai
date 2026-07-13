import { Metadata } from "next";
import { Suspense } from "react";
import { MyPlanClient } from "./my-plan-client";

export const metadata: Metadata = {
  title: "My Saved Plan | GetFitAI",
  description: "View your saved AI-generated workout plan.",
  robots: { index: false, follow: false },
};

export default function MyPlanPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </main>
    }>
      <MyPlanClient />
    </Suspense>
  );
}
