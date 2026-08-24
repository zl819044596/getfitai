"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dumbbell, Timer, Flame, Star, Trash2, ExternalLink, Share2,
  ChevronRight, RotateCcw, CalendarRange
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SavedPlan {
  id: string;
  type?: string;
  plan: {
    title: string;
    duration?: string;
    cycle_length?: string | number;
    intensity?: string;
    difficulty?: string;
    calories?: string;
    warmup?: string[];
    exercises?: { name: string; sets: number; reps: string; rest: string; weight?: string; notes?: string }[];
    cooldown?: string[];
  };
  savedAt: string;
  goal?: string;
  experience?: string;
  duration?: number;
  equipment?: string;
}

export function MyPlansClient() {
  const [savedPlans, setSavedPlans] = useState<SavedPlan[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [view, setView] = useState<"all" | "favorites">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Load saved plans
    try {
      const raw = localStorage.getItem("getfitai_saved_plans");
      if (raw) setSavedPlans(JSON.parse(raw));
    } catch {}

    // Load favorite IDs
    try {
      const raw = localStorage.getItem("getfitai_favorites");
      if (raw) setFavoriteIds(JSON.parse(raw));
    } catch {}

    setReady(true);
  }, []);

  const filteredPlans = view === "favorites"
    ? savedPlans.filter(p => favoriteIds.includes(p.id))
    : savedPlans;

  const handleDelete = (id: string) => {
    const updated = savedPlans.filter(p => p.id !== id);
    setSavedPlans(updated);
    localStorage.setItem("getfitai_saved_plans", JSON.stringify(updated));
  };

  const handleCopyLink = (id: string) => {
    const url = `${window.location.origin}/my-plan?id=${encodeURIComponent(id)}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const handleRemoveAll = () => {
    if (confirm("Remove all saved plans? This cannot be undone.")) {
      setSavedPlans([]);
      localStorage.removeItem("getfitai_saved_plans");
    }
  };

  if (!ready) {
    return (
      <div className="text-center py-20 text-muted-foreground">
        Loading...
      </div>
    );
  }

  if (savedPlans.length === 0) {
    return (
      <div className="text-center py-20">
        <Dumbbell className="w-16 h-16 mx-auto text-muted-foreground/30 mb-6" />
        <h2 className="text-2xl font-semibold text-foreground mb-2">No saved plans yet</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Generate your first workout plan and it will appear here automatically.
        </p>
        <Link href="/tools/workout-generator">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-8 py-5 text-base">
            Generate a Plan
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* View toggle */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-2">
          <Button
            variant={view === "all" ? "default" : "outline"}
            onClick={() => setView("all")}
            className={cn(
              "rounded-xl",
              view === "all"
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "border-slate-700 text-muted-foreground"
            )}
          >
            All Plans ({savedPlans.length})
          </Button>
          <Button
            variant={view === "favorites" ? "default" : "outline"}
            onClick={() => setView("favorites")}
            className={cn(
              "rounded-xl",
              view === "favorites"
                ? "bg-orange-500 hover:bg-orange-600 text-white"
                : "border-slate-700 text-muted-foreground"
            )}
          >
            <Star className="w-4 h-4 mr-1" />
            Favorites ({favoriteIds.length})
          </Button>
        </div>
        <Button
          variant="ghost"
          onClick={handleRemoveAll}
          className="text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl"
        >
          <Trash2 className="w-4 h-4 mr-1" />
          Clear All
        </Button>
      </div>

      {/* Plan cards */}
      {filteredPlans.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <Star className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p>No favorited plans yet. Star a plan to save it here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredPlans.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-2xl p-6 hover:border-slate-600 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.plan.title || "Untitled Plan"}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm mb-3">
                    {item.type === "cycle" ? (
                      <span className="inline-flex items-center gap-1 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full">
                        <CalendarRange className="w-3.5 h-3.5" />
                        {item.plan.cycle_length || "4 weeks"}
                      </span>
                    ) : (
                      <>
                        <span className="inline-flex items-center gap-1 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full">
                          <Timer className="w-3.5 h-3.5" />
                          {item.plan.duration}
                        </span>
                        <span className="inline-flex items-center gap-1 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full">
                          <Flame className="w-3.5 h-3.5" />
                          {item.plan.calories}
                        </span>
                        <span className="inline-flex items-center gap-1 bg-slate-700 text-slate-300 px-3 py-1 rounded-full">
                          {item.plan.difficulty}
                        </span>
                      </>
                    )}
                    <span className="text-xs text-muted-foreground px-1 py-1">
                      {new Date(item.savedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.goal && <span className="mr-3">Goal: {item.goal}</span>}
                    {item.equipment && <span>Equipment: {item.equipment}</span>}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleCopyLink(item.id)}
                    className="p-2 rounded-lg bg-muted hover:bg-slate-700 transition-colors"
                    title="Copy plan link"
                  >
                    {copiedId === item.id ? (
                      <span className="text-xs text-green-400 font-medium">Copied!</span>
                    ) : (
                      <Share2 className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 rounded-lg bg-muted hover:bg-red-500/20 transition-colors"
                    title="Delete plan"
                  >
                    <Trash2 className="w-4 h-4 text-muted-foreground hover:text-red-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
