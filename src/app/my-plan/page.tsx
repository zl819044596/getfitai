"use client";

import { Suspense } from "react";
import { MyPlanContent } from "./my-plan-content";

export default function MyPlanPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-background pt-32 flex items-center justify-center">
        <div className="text-slate-400">Loading plan...</div>
      </main>
    }>
      <MyPlanContent />
    </Suspense>
  );
}
