"use client";

import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { isFavorite, addFavorite, removeFavorite } from "@/lib/favorites";
import { cn } from "@/lib/utils";

/**
 * Star/favorite button for the workout plan detail page.
 * Uses localStorage-backed favorites (src/lib/favorites.ts).
 */
export function FavoriteButton() {
  const params = useParams();
  const planId = params.planId as string;
  const [faved, setFaved] = useState(false);

  // Hydrate initial state from localStorage on mount + plan change
  useEffect(() => {
    setFaved(isFavorite(planId));
  }, [planId]);

  const handleToggle = () => {
    if (faved) {
      removeFavorite(planId);
    } else {
      addFavorite(planId);
    }
    setFaved((prev) => !prev);
  };

  return (
    <button
      onClick={handleToggle}
      className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center",
        "border border-border transition-all duration-200",
        "hover:border-yellow-400/50 hover:bg-yellow-400/10",
        faved
          ? "bg-yellow-400/15 border-yellow-400/40"
          : "bg-muted border-border"
      )}
      aria-label={faved ? "Remove plan from favorites" : "Save plan to favorites"}
      title={faved ? "Remove plan" : "Save plan"}
    >
      <Star
        className={cn(
          "w-5 h-5 transition-colors duration-200",
          faved
            ? "fill-yellow-400 text-yellow-400"
            : "text-muted-foreground"
        )}
      />
    </button>
  );
}
