import { useEffect, useState } from "react";
import { imageSlots } from "../data/images";
import { Skeleton } from "./Skeleton";

interface PhotoSlotProps {
  /** Key into src/data/images.ts */
  imageId: string;
  /**
   * Real image URL(s), once the owner has provided them. A single string
   * shows one static photo; an array of 2+ crossfades between them on a
   * loop (for products with multiple angles). Leave undefined to show the
   * placeholder.
   */
  src?: string | string[];
  className?: string;
  /** Torn-paper style edge instead of a plain rounded rectangle. */
  torn?: boolean;
  /** Set for above-the-fold images (e.g. a page hero) so they load eagerly instead of lazily. */
  priority?: boolean;
  /** Gently scale the image on hover of an ancestor with the `group` class. */
  zoomOnHover?: boolean;
  /** Slow ambient zoom loop for single-photo slots — skipped automatically when there are multiple angles (those crossfade instead). */
  idle?: boolean;
  /** How long each photo stays before crossfading to the next, in ms. */
  intervalMs?: number;
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Renders one of three states for a photo slot:
 * 1. No `src` yet -> a labeled placeholder describing exactly what image is needed.
 * 2. One photo -> skeleton while it loads, then fades in (optionally with a slow idle zoom).
 * 3. Multiple photos -> all preloaded, crossfading between them on an infinite loop.
 */
export function PhotoSlot({
  imageId,
  src,
  className = "",
  torn = false,
  priority = false,
  zoomOnHover = false,
  idle = false,
  intervalMs = 3200,
}: PhotoSlotProps) {
  const sources = src ? (Array.isArray(src) ? src : [src]) : [];
  const [loaded, setLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const slot = imageSlots[imageId];
  const shapeClass = torn ? "torn-edge" : "rounded-2xl";
  const isCrossfade = sources.length > 1;
  const sourcesKey = sources.join("|");

  useEffect(() => {
    if (!isCrossfade || prefersReducedMotion()) return;
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % sources.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [isCrossfade, sources.length, intervalMs]);

  // Some in-app browsers (Instagram/Facebook webviews) don't reliably fire
  // the <img> load event even though the image itself downloads fine — same
  // issue as the scroll-reveal fallback. Never leave the photo stuck behind
  // the skeleton forever because of that.
  useEffect(() => {
    const fallback = window.setTimeout(() => setLoaded(true), 2500);
    return () => window.clearTimeout(fallback);
  }, [sourcesKey]);

  if (sources.length === 0) {
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

  const useIdleMotion = idle && !isCrossfade && !prefersReducedMotion();

  return (
    <div className={`relative overflow-hidden ${shapeClass} ${className}`} style={{ aspectRatio: slot.aspect }}>
      {!loaded && <Skeleton className="absolute inset-0 h-full w-full rounded-none" />}
      {sources.map((photo, i) => (
        <img
          key={photo}
          src={photo}
          alt={i === 0 ? slot.alt : `${slot.alt} — another angle`}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority && i === 0 ? "high" : "auto"}
          aria-hidden={isCrossfade && i !== activeIndex}
          onLoad={() => i === 0 && setLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[900ms] ${
            zoomOnHover ? "group-hover:scale-105" : ""
          } ${useIdleMotion ? "animate-ken-burns" : ""} ${
            !loaded ? "opacity-0" : isCrossfade ? (i === activeIndex ? "opacity-100" : "opacity-0") : "opacity-100"
          }`}
        />
      ))}
    </div>
  );
}
