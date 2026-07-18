import type { ImageSlot } from "../lib/types";

/**
 * Every real photo/video the site needs, in one place. Nothing here is a
 * stock image — each slot renders as a labeled placeholder (see
 * ImagePlaceholder.tsx) until a real file is dropped in, so it's obvious
 * what's still needed and where it goes.
 */
export const imageSlots: Record<string, ImageSlot> = {
  logo: {
    id: "logo",
    needed:
      "The circular badge logo (script \"creer\" wordmark + butterfly flourish) as a transparent PNG or SVG, at least 200x200px.",
    aspect: "1 / 1",
    alt: "Creer logo",
  },
  heroPhoto: {
    id: "heroPhoto",
    needed:
      "One close-up, warm photo of a treat (cookie, brownie, or brookie) for the homepage hero — natural light, home-kitchen feel, not a studio shot.",
    aspect: "4 / 5",
    alt: "A freshly baked Creer treat",
  },
  kitchenPhoto: {
    id: "kitchenPhoto",
    needed:
      "A photo of the home kitchen setup, ingredients, or hands mixing/baking, for the \"Our little kitchen\" section on the homepage.",
    aspect: "4 / 3",
    alt: "Baking in the Creer home kitchen",
  },
  chocolateChipCookie: {
    id: "chocolateChipCookie",
    needed: "Photo of the Chocolate Chip cookie.",
    aspect: "1 / 1",
    alt: "Chocolate chip cookie",
  },
  matchaCookie: {
    id: "matchaCookie",
    needed: "Photo of the Matcha cookie.",
    aspect: "1 / 1",
    alt: "Matcha white chocolate cookie",
  },
  smoresCookie: {
    id: "smoresCookie",
    needed: "Photo of the S'mores cookie.",
    aspect: "1 / 1",
    alt: "S'mores cookie",
  },
  biscoffCookie: {
    id: "biscoffCookie",
    needed: "Photo of the Biscoff cookie.",
    aspect: "1 / 1",
    alt: "Biscoff cookie",
  },
  fudgeBrownie: {
    id: "fudgeBrownie",
    needed: "Photo of the Classic Fudge Brownie, ideally showing the sliced texture.",
    aspect: "1 / 1",
    alt: "Classic fudge brownie",
  },
  signatureBrookie: {
    id: "signatureBrookie",
    needed: "Photo of the Signature Brookie, boxed or plated.",
    aspect: "1 / 1",
    alt: "Signature brookie",
  },
  aboutHero: {
    id: "aboutHero",
    needed:
      "A warm, personal photo for the top of the About page — the kitchen, tools, or the owner at work.",
    aspect: "4 / 5",
    alt: "The Creer home kitchen",
  },
  behindScenes1: {
    id: "behindScenes1",
    needed: "A behind-the-scenes photo for the About page (e.g. mixing, scooping, cooling racks).",
    aspect: "1 / 1",
    alt: "Behind the scenes at Creer",
  },
  behindScenes2: {
    id: "behindScenes2",
    needed: "A second behind-the-scenes photo for the About page.",
    aspect: "1 / 1",
    alt: "Behind the scenes at Creer",
  },
  ubeCookie: {
    id: "ubeCookie",
    needed: "Photo of the Ube cookie.",
    aspect: "1 / 1",
    alt: "Ube white chocolate cookie",
  },
  carrotCake: {
    id: "carrotCake",
    needed: "Photo of the Carrot Cake bars.",
    aspect: "1 / 1",
    alt: "Carrot cake bar with cream cheese frosting",
  },
  bananaBread: {
    id: "bananaBread",
    needed: "Photo of the Banana Bread.",
    aspect: "1 / 1",
    alt: "Banana bread slice with cinnamon cream cheese frosting",
  },
};
