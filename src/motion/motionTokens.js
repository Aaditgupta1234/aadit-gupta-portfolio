/**
 * Motion Tokens & Physics Constants — Portfolio v1.0 Final Motion Pass
 * Apple / Linear / Stripe inspired subtle micro-interactions & physics.
 */

export const EASINGS = {
  easeOut: [0, 0, 0.2, 1],
  easeOutCubic: [0.22, 1, 0.36, 1],
  easeOutQuart: [0.165, 0.84, 0.44, 1],
  easeOutExpo: [0.19, 1, 0.22, 1],
};

export const SPRINGS = {
  cardLift: { type: "spring", stiffness: 300, damping: 25 },
  navIndicator: { type: "spring", stiffness: 450, damping: 35 },
  snappy: { type: "spring", stiffness: 400, damping: 30 },
  smooth: { type: "spring", stiffness: 260, damping: 20 },
  gentle: { type: "spring", stiffness: 180, damping: 24 },
};

export const DURATIONS = {
  fast: 0.15,
  button: 0.2,
  base: 0.35,
  navbar: 0.45,
  sectionReveal: 0.7,
  heroName: 0.8,
  heroOrb: 0.9,
  counter: 1.2,
};
