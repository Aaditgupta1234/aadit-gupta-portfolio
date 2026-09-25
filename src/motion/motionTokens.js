/**
 * Motion Tokens & Physics Constants
 * Inspired by Apple, Linear, Stripe, and Vercel design languages.
 * Tuned for 60 FPS GPU-accelerated micro-interactions.
 */

export const MOTION_LIMITS = {
  maxScale: 1.04,
  maxTranslateY: -4,
  maxDuration: 0.8,
};

export const PERFORMANCE_LIMITS = {
  targetFPS: 60,
};

export const EASINGS = {
  easeOut: [0, 0, 0.2, 1],
  easeOutCubic: [0.22, 1, 0.36, 1],
  easeOutQuart: [0.165, 0.84, 0.44, 1],
  easeOutExpo: [0.19, 1, 0.22, 1],
};

export const SPRINGS = {
  cardLift: { type: "spring", stiffness: 300, damping: 25 },
  navIndicator: { type: "spring", stiffness: 380, damping: 30 },
  snappy: { type: "spring", stiffness: 400, damping: 30 },
  smooth: { type: "spring", stiffness: 260, damping: 20 },
  gentle: { type: "spring", stiffness: 180, damping: 24 },
};

export const DURATIONS = {
  fast: 0.15,
  micro: 0.2,
  base: 0.35,
  navbar: 0.45,
  reveal: 0.6,
  heroName: 0.7,
  heroOrb: 0.8,
  counter: 1.2,
};
