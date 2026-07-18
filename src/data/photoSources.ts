import logo from "../assets/images/logo.jpg";
import heroPhoto from "../assets/images/brownies-hero.jpg";
import fudgeBrownie from "../assets/images/brownies-menu.jpg";
import fudgeBrownieCloseup from "../assets/images/brownies-closeup-2.jpg";
import aboutHero from "../assets/images/about-hero.jpg";
import behindScenes1 from "../assets/images/behind-scenes-1.jpg";
import behindScenes2 from "../assets/images/behind-scenes-2.jpg";
import biscoffCookie from "../assets/images/biscoff-cookie.jpg";
import biscoffCookie2 from "../assets/images/biscoff-cookie-2.jpg";
import signatureBrookie from "../assets/images/signature-brookie.jpg";
import carrotCake from "../assets/images/carrot-cake-menu.jpg";
import carrotCake2 from "../assets/images/carrot-cake-2.jpg";
import bananaBread from "../assets/images/banana-bread-menu.jpg";
import ubeCookie from "../assets/images/ube-cookie.jpg";
import ubeCookie2 from "../assets/images/ube-cookie-2.jpg";
import galleryChunky1 from "../assets/images/gallery-chunky-1.jpg";
import galleryChunky2 from "../assets/images/gallery-chunky-2.jpg";
import galleryChunky3 from "../assets/images/gallery-chunky-3.jpg";

/**
 * Real photos the owner has provided, keyed by the same imageId used in
 * src/data/images.ts / <PhotoSlot imageId="..." />. Anything not listed
 * here still renders as a labeled placeholder — see src/data/images.ts for
 * what's still needed.
 */
export const photoSources: Record<string, string> = {
  logo,
  heroPhoto,
  fudgeBrownie,
  aboutHero,
  behindScenes1,
  behindScenes2,
  biscoffCookie,
  signatureBrookie,
  carrotCake,
  bananaBread,
  ubeCookie,
};

/**
 * Products with more than one real photo — <PhotoSlot> crossfades between
 * these on a loop instead of showing a single static image. Only list
 * imageIds that actually have 2+ distinct angles; everything else falls
 * back to the single photo in `photoSources` above.
 */
export const photoAngles: Record<string, string[]> = {
  biscoffCookie: [biscoffCookie, biscoffCookie2],
  carrotCake: [carrotCake, carrotCake2],
  fudgeBrownie: [fudgeBrownie, fudgeBrownieCloseup],
  ubeCookie: [ubeCookie, ubeCookie2],
};

/** A curated set of real photos for the homepage gallery — click to enlarge. */
export const galleryPhotos = [
  { src: galleryChunky3, alt: "An assortment of Creer cookie flavors, plated" },
  { src: aboutHero, alt: "Creer brownies, freshly sliced" },
  { src: galleryChunky1, alt: "A batch of chunky cookies, fresh off the tray" },
  { src: carrotCake2, alt: "Carrot cake bars with piped cream cheese frosting" },
  { src: galleryChunky2, alt: "Chocolate chip and matcha cookies, stacked" },
  { src: bananaBread, alt: "A slice of banana bread with cinnamon frosting" },
];
