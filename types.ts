export interface Account {
  ign: string;
  rank: string;
  lp: string;
  winrate: string;
  region: string;
}

export interface Coach {
  name: string;
  tagline: string;
  role: string;
  image: string;
  bio: string;
  accounts: Account[];
  champions: string[]; // Names of champions
}

export interface Testimonial {
  id: number;
  name: string;
  rankStart: string;
  rankEnd: string;
  quote: string;
  avatar: string;
  lpGain: number[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  color: string;
}