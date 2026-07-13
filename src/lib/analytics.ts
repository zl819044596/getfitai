/**
 * GA4 Event Tracking Utility
 *
 * Usage:
 *   import { trackEvent, trackWorkoutGenerated, trackWorkoutStarted, trackWorkoutCompleted, trackToolUsed } from "@/lib/analytics"
 *
 *   // Simple event
 *   trackEvent("button_click", { button_name: "start_training" })
 *
 *   // Predefined conversion events
 *   trackWorkoutGenerated({ goal: "muscle", duration: 45 })
 *   trackWorkoutStarted("full-body-burn")
 *   trackWorkoutCompleted("full-body-burn", 15)
 *   trackToolUsed("bmi-calculator")
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
};

/**
 * Push a custom event to GA4.
 * Safe to call on any page — no-ops if gtag isn't loaded.
 */
export function trackEvent(action: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", action, params);
    } else {
      // Queue for GA4's consolidated analytics.js
      window.dataLayer?.push({
        event: "custom_event",
        event_name: action,
        ...params,
      });
    }
  } catch {
    // Silently ignore tracking errors
  }
}

/**
 * Track page_view manually (for SPA route changes).
 * Next.js App Router should auto-fire this, but as a fallback:
 */
export function trackPageView(url?: string) {
  trackEvent("page_view", {
    page_path: url || window.location.pathname,
    page_title: document.title,
  });
}

/* ─── Conversion Events ─── */

/** User started generating an AI workout plan */
export function trackGeneratePlanStarted(params: {
  goal: string;
  experience: string;
  duration: number;
  equipment: string;
}) {
  trackEvent("generate_plan_started", params);
}

/** User successfully generated a workout plan */
export function trackPlanGenerated(params: {
  goal: string;
  experience: string;
  duration: number;
  equipment: string;
  exercise_count?: number;
}) {
  trackEvent("plan_generated", {
    ...params,
    engagement_time_msec: 1, // Mark as engaged session
  });
}

/** User started a follow-along workout */
export function trackWorkoutStarted(planId: string, planName?: string) {
  trackEvent("workout_started", {
    plan_id: planId,
    plan_name: planName || planId,
    engagement_time_msec: 1,
  });
}

/** User completed a follow-along workout (all exercises done) */
export function trackWorkoutCompleted(
  planId: string,
  durationMinutes: number,
  completionRate?: number
) {
  trackEvent("workout_completed", {
    plan_id: planId,
    duration_minutes: durationMinutes,
    completion_rate: completionRate || 1,
  });
}

/** User completed an individual exercise in a session */
export function trackExerciseCompleted(exerciseName: string, planId: string) {
  trackEvent("exercise_completed", {
    exercise_name: exerciseName,
    plan_id: planId,
  });
}

/** User used a calculator tool */
export function trackToolUsed(toolName: string, toolCategory?: string) {
  trackEvent("tool_used", {
    tool_name: toolName,
    tool_category: toolCategory || "calculator",
  });
}

/** User clicked a CTA button */
export function trackCtaClick(ctaName: string, ctaLocation: string) {
  trackEvent("cta_click", {
    cta_name: ctaName,
    cta_location: ctaLocation,
  });
}

/** User saved/shared a workout plan */
export function trackPlanSaved(planId: string, method: "url" | "favorite") {
  trackEvent("plan_saved", {
    plan_id: planId,
    save_method: method,
  });
}
