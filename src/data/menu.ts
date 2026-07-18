import type { MenuCategory } from "../lib/types";

/**
 * Edit this file to change flavors, descriptions, or prices — nothing else
 * in the codebase needs to change. Prices are placeholders (₱XX) until real
 * pricing is set.
 */
export const menu: MenuCategory[] = [
  {
    id: "cookies",
    name: "Cookies",
    tagline: "Soft & chewy",
    note: "Chunky size available — price multiplies with size.",
    items: [
      {
        name: "Chocolate Chip",
        tag: "Signature",
        description: "The classic — brown butter, dark chocolate.",
        imageId: "chocolateChipCookie",
        pricing: [
          { label: "Per piece", price: "₱XX" },
          { label: "Half dozen", price: "₱XXX" },
          { label: "Dozen", price: "₱XXX" },
        ],
      },
      {
        name: "Matcha",
        tag: "Seasonal",
        description: "Ceremonial-grade matcha, white chocolate.",
        imageId: "matchaCookie",
        pricing: [
          { label: "Per piece", price: "₱XX" },
          { label: "Half dozen", price: "₱XXX" },
          { label: "Dozen", price: "₱XXX" },
        ],
      },
      {
        name: "S'mores",
        tag: "Favorite",
        description: "Toasted marshmallow, graham, milk chocolate.",
        imageId: "smoresCookie",
        pricing: [
          { label: "Per piece", price: "₱XX" },
          { label: "Half dozen", price: "₱XXX" },
          { label: "Dozen", price: "₱XXX" },
        ],
      },
      {
        name: "Biscoff",
        tag: "Favorite",
        description: "Speculoos butter, biscoff crumb.",
        imageId: "biscoffCookie",
        pricing: [
          { label: "Per piece", price: "₱XX" },
          { label: "Half dozen", price: "₱XXX" },
          { label: "Dozen", price: "₱XXX" },
        ],
      },
      {
        name: "Ube",
        tag: "Favorite",
        description: "Ube-rich, white chocolate chunks.",
        imageId: "ubeCookie",
        pricing: [
          { label: "Per piece", price: "₱XX" },
          { label: "Half dozen", price: "₱XXX" },
          { label: "Dozen", price: "₱XXX" },
        ],
      },
    ],
  },
  {
    id: "brownies",
    name: "Brownies",
    tagline: "Deep & fudgy",
    note: "Additional fee for customization.",
    items: [
      {
        name: "Classic Fudge Brownie",
        tag: "Classic",
        description:
          "Rich, gooey, and just this side of underbaked — the way brownies were meant to be.",
        imageId: "fudgeBrownie",
        pricing: [
          { label: "Per piece", price: "₱XX" },
          { label: "Half dozen", price: "₱XXX" },
          { label: "Dozen", price: "₱XXX" },
          { label: "25 pieces", price: "₱XXXX" },
        ],
      },
    ],
  },
  {
    id: "brookies",
    name: "Brookies",
    tagline: "Best of both",
    items: [
      {
        name: "Signature Brookie",
        tag: "Brookie",
        description: "Half brownie, half cookie, all yours. Boxed and ready to gift, or keep.",
        imageId: "signatureBrookie",
        pricing: [
          { label: "Per piece", price: "₱XX" },
          { label: "Box of 2", price: "₱XX" },
          { label: "Box of 6", price: "₱XXX" },
          { label: "Box of 9", price: "₱XXX" },
        ],
      },
    ],
  },
  {
    id: "cakes",
    name: "Cakes & Loaves",
    tagline: "Sliced & shared",
    items: [
      {
        name: "Carrot Cake",
        tag: "Favorite",
        description: "Spiced carrot cake bars, piped cream cheese frosting.",
        imageId: "carrotCake",
        pricing: [
          { label: "Per piece", price: "₱XX" },
          { label: "Box of 4", price: "₱XXX" },
        ],
      },
      {
        name: "Banana Bread",
        tag: "Classic",
        description: "Moist banana bread with cinnamon cream cheese frosting.",
        imageId: "bananaBread",
        pricing: [
          { label: "Per slice", price: "₱XX" },
          { label: "Half loaf", price: "₱XXX" },
          { label: "Whole loaf", price: "₱XXX" },
        ],
      },
    ],
  },
];

/**
 * Products featured on the homepage — reference by category id + item name.
 * Chosen because each has 2+ real photo angles (see photoAngles in
 * photoSources.ts), so their homepage cards crossfade instead of sitting
 * static. Signature Brookie only has one photo, so it stays off this list
 * for now (it's still on the full Menu page).
 */
export const featuredItems = [
  { categoryId: "cookies", itemName: "Ube" },
  { categoryId: "cookies", itemName: "Biscoff" },
  { categoryId: "brownies", itemName: "Classic Fudge Brownie" },
  { categoryId: "cakes", itemName: "Carrot Cake" },
];
