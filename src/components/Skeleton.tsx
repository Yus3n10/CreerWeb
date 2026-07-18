interface SkeletonProps {
  className?: string;
}

/** A pulsing placeholder block, sized by the caller via className. */
export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse rounded-[10px] bg-[color:var(--color-border)] ${className}`}
      aria-hidden="true"
    />
  );
}
