const POINTS =
  "0,18 50,6 100,28 150,10 200,34 250,14 300,4 350,24 400,12 450,30 500,8 550,20 600,2 650,26 700,16 750,36 800,10 850,22 900,6 950,32 1000,14 1050,24 1100,4 1150,18 1200,10";

interface SectionDividerProps {
  /**
   * Background of the section immediately above the divider. Fills the
   * uncovered sliver above the torn edge — without this the sliver falls
   * back to the page's base background, which shows as a mismatched seam
   * whenever neither neighboring section is that color.
   */
  from: string;
  /** CSS color the divider reveals — should match the section that follows. */
  fill: string;
  flip?: boolean;
}

/**
 * A hand-torn paper seam between page sections, echoing the deckle-edge
 * watercolor dividers in Creer's own menu graphics — the site's one
 * recurring signature shape, used nowhere else.
 */
export function SectionDivider({ from, fill, flip = false }: SectionDividerProps) {
  return (
    <div
      className={`h-8 w-full overflow-hidden sm:h-12 ${flip ? "rotate-180" : ""}`}
      style={{ backgroundColor: from }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <polygon points={`${POINTS} 1200,48 0,48`} fill={fill} />
      </svg>
    </div>
  );
}
