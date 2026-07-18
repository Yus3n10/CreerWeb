import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-20 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--color-rose)]">
      {children}
    </p>
  );
}

interface CtaProps {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

/** A single shared CTA style so every button on the site looks the same. */
export function Cta({ to, children, variant = "primary", external = false, className = "" }: CtaProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-[background-color,color,transform] duration-200 active:scale-95";
  const styles =
    variant === "primary"
      ? "bg-[color:var(--color-sage-deep)] text-[color:var(--color-cream)] hover:bg-[color:var(--color-sage)]"
      : "border border-[color:var(--color-sage-deep)] text-[color:var(--color-sage-deep)] hover:bg-[color:var(--color-sage-deep)] hover:text-[color:var(--color-cream)]";

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
