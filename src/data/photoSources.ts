import logo from "../assets/images/logo.jpg";
import heroPhoto from "../assets/images/brownies-hero.jpg";
import fudgeBrownie from "../assets/images/brownies-menu.jpg";
import aboutHero from "../assets/images/about-hero.jpg";
import behindScenes1 from "../assets/images/behind-scenes-1.jpg";
import behindScenes2 from "../assets/images/behind-scenes-2.jpg";
import biscoffCookie from "../assets/images/biscoff-cookie.jpg";
import signatureBrookie from "../assets/images/signature-brookie.jpg";
import carrotCake from "../assets/images/carrot-cake-menu.jpg";
import bananaBread from "../assets/images/banana-bread-menu.jpg";
import ubeCookie from "../assets/images/ube-cookie.jpg";

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
