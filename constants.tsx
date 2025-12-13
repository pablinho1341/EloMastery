import { Coach, Testimonial, FAQItem, PricingPlan } from './types';
import React from 'react';
import { Calendar, Video, TrendingUp } from 'lucide-react';

export const COACH: Coach = {
  name: "NONAME",
  tagline: "Challenger Jungle Coach",
  role: "Jungle",
  image: "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/LeeSin_0.jpg",
  bio: "I teach you how to win. With consistent Challenger experience, I break down the game into simple concepts. Tempo and objectives are key. Let's fix your pathing.",
  accounts: [
    { ign: "NONAME", region: "NA", rank: "Challenger", lp: "1,102 LP", winrate: "63%" },
    { ign: "Smurf", region: "EUW", rank: "Grandmaster", lp: "650 LP", winrate: "78%" }
  ],
  champions: ["Lee Sin", "Viego", "Kayn"]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "ZHGgamers.",
    rankStart: "GOLD IV",
    rankEnd: "Grandmaster",
    quote: "BRONZE IV to Grandmaster in 10 months just unreal bro",
    avatar: "/img/taigo.jpg",
    lpGain: [0, 200, 450, 600, 750, 920]
  },
  {
    id: 2,
    name: "alexluvaatrox",
    rankStart: "Gold III",
    rankEnd: "Challenger",
    quote: "NONAME the GOAT the coaching is direct and useful",
    avatar: "/img/dexter.jpg",
    lpGain: [0, 100, 150, 300, 450, 600]
  }
];

export const PLANS: PricingPlan[] = [
  {
    name: "VOD Review",
    price: "$40",
    features: ["Analysis of 1 Replay", "Pathing Fixes", "Summary Notes"],
    color: "border-slate-600"
  },
  {
    name: "Live Coaching",
    price: "$75",
    features: ["3 Hour Live Discord Session", "Real-time Shotcalling", "Duo Queue Game", "Chat Access"],
    isPopular: true,
    color: "border-yellow-400"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you coach other roles?",
    answer: "I specialize in Jungle macro. Mechanics coaching is for Junglers only."
  },
  {
    question: "How do we connect?",
    answer: "After you make the payment and send your discord user or email, the coach will send a message in a few hours."
  },
  {
    question: "Is there a guarantee?",
    answer: "If you don't improve following the plan, I offer a follow-up session."
  },
  {
    question: "Can I pay in other currencies?",
    answer: "Yes, the payment processor handles currency conversion automatically based on your location."
  },
  {
    question: "Do I need a VOD ready?",
    answer: "For VOD reviews, yes. For live coaching, we can play a game live or use a replay if you prefer."
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    title: "Book Your Session",
    desc: "Choose a time that works for you. Safe and secure payment.",
    icon: <Calendar className="w-10 h-10 text-yellow-400" />
  },
  {
    title: "Live Coaching",
    desc: "Direct feedback via Discord. We review your gameplay or play live.",
    icon: <Video className="w-10 h-10 text-yellow-400" />
  },
  {
    title: "Climb The Ladder",
    desc: "Apply the concepts. Watch your winrate and rank skyrocket.",
    icon: <TrendingUp className="w-10 h-10 text-yellow-400" />
  }
];