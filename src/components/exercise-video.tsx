"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ExerciseVideoProps {
  /** Local video URL. When omitted, the poster is rendered as a static fallback. */
  videoUrl?: string
  /** Additional classes for the container wrapper */
  className?: string
  /** Poster image URL used while loading and as the error fallback. */
  poster?: string
  /** Accessible title for the exercise visual. */
  title?: string
}

/**
 * Renders a local, muted exercise video that loops inline. If no video is
 * available or the media fails to load, it falls back to the supplied poster.
 */
export function ExerciseVideo({
  videoUrl,
  className,
  poster,
  title = "Exercise video",
}: ExerciseVideoProps) {
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    setVideoFailed(false)
  }, [videoUrl])

  const showPoster = !videoUrl || videoFailed

  return (
    <div
      className={cn(
        "relative w-full aspect-video overflow-hidden rounded-2xl bg-black",
        className
      )}
    >
      {showPoster ? (
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
