export interface ImageSlot {
  /** Unique id referenced from content files and used as the placeholder label. */
  id: string;
  /** Plain description of what photo/video is needed, shown to the site owner. */
  needed: string;
  /** Suggested aspect ratio, e.g. "4 / 5", "16 / 9", "1 / 1". */
  aspect: string;
  /** Alt text to use once the real image is in place. */
  alt: string;
}

export interface PriceTier {
  label: string;
  price: string;
}

export interface MenuItem {
  name: string;
  tag: string;
  description: string;
  pricing: PriceTier[];
  imageId: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  tagline: string;
  note?: string;
  items: MenuItem[];
}

export interface OrderStep {
  number: string;
  title: string;
  description: string;
}
