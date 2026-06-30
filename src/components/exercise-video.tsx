"use client"

import { cn } from "@/lib/utils"

interface ExerciseVideoProps {
  /** YouTube video ID (e.g. "dQw4w9WgXcQ"). When provided, renders a YouTube iframe embed instead of local video. */
  youtubeId?: string | null
  /** Additional classes for the container wrapper */
  className?: string
  /** Whether to auto-play the video. Applied to both YouTube embed (autoplay=1) and local <video> (autoPlay) */
  autoplay?: boolean
  /** Poster image URL for local video fallback. Ignored when youtubeId is set. */
  poster?: string
  /** Accessible title for the video. Defaults to "Exercise video" */
  title?: string
}

/**
 * ExerciseVideoComponent
 *
 * Renders a YouTube iframe embed when `youtubeId` is provided.
 * Falls back to an HTML5 <video> element with controls when `youtubeId` is null/undefined.
 *
 * The container is a responsive 16:9 aspect-ratio wrapper.
 */
export function ExerciseVideo({
  youtubeId,
  className,
  autoplay = false,
  poster,
  title = "Exercise video",
}: ExerciseVideoProps) {
  // YouTube embed mode
  if (youtubeId) {
    const embedUrl = `https://www.youtube.com/embed/${encodeURIComponent(youtubeId)}${
      autoplay ? "?autoplay=1" : ""
    }`

    return (
      <div
        className={cn(
          "relative w-full aspect-video overflow-hidden rounded-2xl bg-black",
          className
        )}
      >
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    )
  }

  // Local video fallback mode
  return (
    <div
      className={cn(
        "relative w-full aspect-video overflow-hidden rounded-2xl bg-black",
        className
      )}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        controls
        poster={poster}
        autoPlay={autoplay}
        playsInline
      >
        <p className="p-4 text-sm text-slate-400">
          Your browser does not support the video tag.
        </p>
      </video>
    </div>
  )
}
