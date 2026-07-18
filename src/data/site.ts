import type { OrderStep } from "../lib/types";

/** Edit this file to change any page copy without touching layout code. */

export const business = {
  name: "Creer",
  instagramHandle: "@creer_bcd",
  instagramUrl: "https://instagram.com/creer_bcd",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "How to Order", href: "/how-to-order" },
  { label: "Contact", href: "/contact" },
];

export const home = {
  eyebrow: "Baked with heart",
  heading: "Small-batch treats, made just for you.",
  intro:
    "Creer is a home-based bakery baking cookies, brownies, and brookies in small batches — never sitting on a shelf, always fresh from the oven to your hands.",
  kitchen: {
    eyebrow: "Our little kitchen",
    body: "Every cookie, brownie, and brookie is mixed, scooped, and baked to order from a small home kitchen — no shelves, no rush, no shortcuts. Just simple, quality ingredients and the kind of care you give the people you love.",
  },
  featured: {
    eyebrow: "A little peek",
    heading: "Featured treats",
  },
  closing: {
    eyebrow: "Baked to order",
    heading: "Ready to order?",
    body: "Message us on Instagram — we'll help you pick, price, and set a pickup or delivery day.",
  },
};

export const about = {
  eyebrow: "Our story",
  heading: "A little kitchen, a lot of heart.",
  intro:
    "Creer began as a quiet love letter to slow, careful baking — and grew into a small business one order at a time.",
  story: {
    eyebrow: "Why \"Creer\"",
    heading: "To create, to believe.",
    // [PLACEHOLDER — replace with the owner's real story in her own words]
    body: [
      "Creer started in a small home kitchen with a stand mixer, a stack of mismatched cooling racks, and a lot of hopeful late-night baking. The name comes from the French créer — to create — a reminder that every batch is a small act of making.",
      "What began as gifts for friends and family turned into orders from neighbors, and then friends of neighbors, and here we are. Still one person, still one oven, baking the way you'd bake for someone you love.",
    ],
  },
  howWeBake: {
    eyebrow: "How we bake",
    heading: "Small batches, no shortcuts.",
    points: [
      {
        title: "Made to order",
        body: "Nothing sits on a shelf. Your order is mixed and baked the day it's ready for you.",
      },
      {
        title: "Small batches",
        body: "We keep our runs small so every cookie gets the attention it deserves — no sacrificing texture for volume.",
      },
      {
        title: "Real ingredients",
        body: "Good butter, real chocolate, real vanilla. No mystery blends, no cutting corners.",
      },
    ],
  },
};

export const orderSteps: OrderStep[] = [
  {
    number: "01",
    title: "Browse the menu",
    description: "Pick your flavors and quantities from our menu page.",
  },
  {
    number: "02",
    title: "Message us on Instagram",
    description: "DM @creer_bcd with your order, preferred day, and any customizations.",
  },
  {
    number: "03",
    title: "Choose pickup or delivery",
    description: "Let us know where you're picking up, or where we're delivering to.",
  },
  {
    number: "04",
    title: "We confirm and bake fresh",
    description: "We'll confirm the total and bake your order the day it's ready.",
  },
];

export const howToOrder = {
  eyebrow: "How it works",
  heading: "Four small steps to warm cookies.",
  intro: "No cart, no checkout — just a conversation. We keep it simple so we can focus on baking.",
  fulfillment: {
    eyebrow: "Pickup or delivery",
    heading: "Meet or greet.",
    pickup: {
      title: "Pickup",
      // [PLACEHOLDER — confirm actual pickup location/area and day]
      body: "Pickup is available from a designated meetup spot in [city / area name]. We'll share the exact location once your order is confirmed.",
      note: "Usually Fridays — times confirmed via DM",
    },
    delivery: {
      title: "Delivery",
      // [PLACEHOLDER — confirm actual delivery coverage area]
      body: "We deliver within [coverage area]. Delivery fees are quoted based on distance — share your address when you order.",
      note: "Courier booked on your confirmed day",
    },
  },
  leadTime: {
    eyebrow: "A small note",
    heading: "Orders close Wednesday for Friday pickup.",
    // [PLACEHOLDER — confirm actual pre-order window]
    body: "Because everything is baked to order, we take orders on a weekly pre-order window. Message us early — slots fill up quickly, especially around holidays.",
  },
};

export const faq = [
  {
    question: "Can I customize my order?",
    answer:
      "Yes — flavors, sizes, and add-ons are worked out over DM when you order. Brownies have a small customization fee, and chunky cookies scale in price with size.",
  },
  {
    question: "How far in advance should I order?",
    answer:
      "Everything is baked to order on a weekly pre-order window — orders typically close Wednesday for Friday pickup. Message early, especially around holidays, since slots fill up.",
  },
  {
    question: "Is delivery available, or pickup only?",
    answer:
      "Both. Pickup is from a set meetup spot, usually Fridays. Delivery is quoted based on distance — share your address when you order and we'll confirm the fee.",
  },
  {
    question: "How do I pay?",
    answer: "Payment details are worked out over DM once your order is confirmed.",
  },
  {
    question: "Can I place an order without Instagram?",
    answer:
      "Instagram DM is currently the only way to order — it's the fastest way to confirm flavors, quantities, and timing back and forth. General questions can go through the contact form instead.",
  },
];

export const contact = {
  eyebrow: "Say hello",
  heading: "Let's talk cookies.",
  intro:
    "The fastest way to reach us — and the only way to place an order — is on Instagram. For general questions, send a note below.",
  instagramBlurb:
    "All orders are placed via DM. Send us your flavors, quantity, and pickup or delivery day — we'll confirm from there.",
  formNote: "This isn't an order form — please DM us on Instagram to place an order.",
  // [PLACEHOLDER — confirm general area to display, if any]
  location: "A home kitchen in [City / Area].",
  locationBody:
    "Because we bake from home, we don't share our exact address — pickup meetup spots and delivery coverage are confirmed once you order.",
};

export const footer = {
  tagline: "Small-batch treats, baked to order.",
};
