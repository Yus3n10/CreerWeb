import { useState } from "react";
import { imageSlots } from "../data/images";
import { Skeleton } from "./Skeleton";

interface PhotoSlotProps {
  /** Key into src/data/images.ts */
  imageId: string;
  /** Real image URL, once the owner has provided one. Leave undefined to show the placeholder. */
  src?: string;
  className?: string;
  /** Torn-paper style edge instead of a plain rounded rectangle. */
  torn?: boolean;
}

/**
 * Renders one of three states for a photo slot:
 * 1. No `src` yet -> a labeled placeholder describing exactly what image is needed.
 * 2. `src` provided, still loading -> a skeleton pulse (prevents layout shift).
 * 3. `src` loaded -> the real photo, faded in.
 */
export function PhotoSlot({ imageId, src, className = "", torn = false }: PhotoSlotProps) {
  const [loaded, setLoaded] = useState(false);
  const slot = imageSlots[imageId];
  const shapeClass = torn ? "torn-edge" : "rounded-2xl";

  if (!src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed border-[color:var(--color-taupe)]/50 bg-[color:var(--color-cream-soft)] p-4 text-center ${shapeClass} ${className}`}
        style={{ aspectRatio: slot.aspect }}
        role="img"
        aria-label={`Image needed: ${slot.needed}`}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-[color:var(--color-taupe)]"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
        <p className="text-xs leading-snug text-[color:var(--color-taupe)]">{slot.needed}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${shapeClass} ${className}`} style={{ aspectRatio: slot.aspect }}>
      {!loaded && <Skeleton className="absolute inset-0 h-full w-full rounded-none" />}
      <img
        src={src}
        alt={slot.alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
