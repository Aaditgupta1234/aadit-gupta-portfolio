/**
 * Motion Tokens & Physics Constants
 * Inspired by Apple, Linear, Stripe, and Vercel design languages.
 */

export const MOTION_LIMITS = {
  maxScale: 1.02,
  maxTranslateY: -4,
  maxDuration: 0.7,
};

export const PERFORMANCE_LIMITS = {
  targetFPS: 60,
};

export const EASINGS = {
  easeOutCubic: [0.22, 1, 0.36, 1],
  easeOutQuart: [0.165, 0.84, 0.44, 1],
  easeOutExpo: [0.19, 1, 0.22, 1],
};

export const SPRINGS = {
  snappy: { type: "spring", stiffness: 400, damping: 30 },
  smooth: { type: "spring", stiffness: 260, damping: 20 },
  gentle: { type: "spring", stiffness: 180, damping: 24 },
};

export const DURATIONS = {
  fast: 0.15,
  base: 0.35,
  reveal: 0.6,
};
