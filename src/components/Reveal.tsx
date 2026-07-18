import type { ReactNode } from "react";
import { useInView } from "../lib/useInView";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms — pass index * 60 (capped) for grid items. */
  delay?: number;
  /** Wrapper element — use "li" inside an <ol>/<ul>, defaults to "div". */
  as?: "div" | "li";
}

/** Fades content up into place the first time it scrolls into view. */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref as never}
      className={`transition-all duration-500 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
