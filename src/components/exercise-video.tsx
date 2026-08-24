"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ExerciseVideoProps {
  /** Local video URL. Takes priority over youtubeId. */
  videoUrl?: string
  /** YouTube video ID (e.g. "dQw4w9WgXcQ"). Used when videoUrl is absent. */
  youtubeId?: string | null
  /** Additional classes for the container wrapper */
  className?: string
  /** Poster image URL used while loading and as the static fallback. */
  poster?: string
  /** Accessible title for the exercise visual. */
  title?: string
}

/**
 * Renders an exercise demonstration with three modes:
 * 1. Local muted looping video when `videoUrl` is set (poster on error)
 * 2. YouTube iframe embed when `youtubeId` is set
 * 3. Static poster otherwise
 */
export function ExerciseVideo({
  videoUrl,
  youtubeId,
  className,
  poster,
  title = "Exercise video",
}: ExerciseVideoProps) {
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    setVideoFailed(false)
  }, [videoUrl])

  // Local video mode (pilot plans)
  if (videoUrl) {
    return (
      <div
        className={cn(
          "relative w-full aspect-video overflow-hidden rounded-2xl bg-black",
          className
        )}
      >
        {videoFailed ? (
          poster ? (
            <img
              src={poster}
              alt={`${title} demonstration`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : null
        ) : (
          <video
            key={videoUrl}
            className="absolute inset-0 h-full w-full object-cover"
            src={videoUrl}
            poster={poster}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label={title}
            onError={() => setVideoFailed(true)}
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    )
  }

  // YouTube embed mode (other plans)
  if (youtubeId) {
    const embedUrl = `https://www.youtube.com/embed/${encodeURIComponent(youtubeId)}?autoplay=1`

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

  // Static poster fallback
  return (
    <div
      className={cn(
        "relative w-full aspect-video overflow-hidden rounded-2xl bg-black",
        className
      )}
    >
      {poster ? (
        <img
          src={poster}
          alt={`${title} demonstration`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
    </div>
  )
}
