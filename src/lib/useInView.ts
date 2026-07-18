import { useEffect, useRef, useState } from "react";

/**
 * True once the element has scrolled into view. Fires once and stops
 * observing — content shouldn't re-hide when scrolled past. Skips the
 * observer entirely under prefers-reduced-motion, so reduced-motion users
 * just see content in its final state immediately.
 *
 * Falls back to revealing after a fixed delay if IntersectionObserver never
 * fires (some in-app browsers — Instagram/Facebook webviews, which a good
 * share of this site's traffic comes through — have unreliable
 * implementations). Content must never stay invisible forever just because
 * an animation trigger didn't work.
 */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const reveal = () => setInView(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);

    const fallback = window.setTimeout(reveal, 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold]);

  return { ref, inView };
}
