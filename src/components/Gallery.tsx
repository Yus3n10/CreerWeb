import { useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "./ui/dialog";
import { Reveal } from "./Reveal";
import { galleryPhotos } from "../data/photoSources";

/** A grid of real photos that opens larger in a lightbox on click. */
export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? galleryPhotos[openIndex] : null;

  return (
    <>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {galleryPhotos.map((photo, i) => (
          <Reveal key={photo.src} delay={i * 50} className="aspect-square">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group h-full w-full overflow-hidden rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sage-deep)] focus-visible:ring-offset-2"
              aria-label={`View larger: ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </Reveal>
        ))}
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent
          className="max-w-[calc(100%-2rem)] border-none bg-transparent p-0 shadow-none sm:max-w-2xl"
          showCloseButton={false}
        >
          <DialogTitle className="sr-only">{active?.alt}</DialogTitle>
          {active && (
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[80vh] w-full rounded-2xl object-contain"
            />
          )}
          <DialogClose className="absolute -top-3 -right-3 flex size-9 items-center justify-center rounded-full bg-[color:var(--color-cream)] text-[color:var(--color-sage-deep)] shadow-md outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[color:var(--color-cream)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
}
