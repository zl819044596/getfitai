"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ExerciseVideoProps {
  /** Local video URL. */
  videoUrl?: string;
  /** Additional classes for the container wrapper. */
  className?: string;
  /** Poster image URL used while loading and as the static fallback. */
  poster?: string;
  /** Accessible title for the exercise visual. */
  title?: string;
}

/** Renders a local looping exercise clip, falling back to its poster image. */
export function ExerciseVideo({
  videoUrl,
  className,
  poster,
  title = "Exercise demonstration",
}: ExerciseVideoProps) {
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    setVideoFailed(false);
  }, [videoUrl]);

  return (
    <div
      className={cn(
        "relative w-full aspect-video overflow-hidden rounded-2xl bg-black",
        className,
      )}
    >
      {videoUrl && !videoFailed ? (
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
      ) : poster ? (
        <img
          src={poster}
          alt={`${title} demonstration`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
    </div>
  );
}
