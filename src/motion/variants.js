import { SPRINGS, DURATIONS } from "./motionTokens";

/**
 * Standardized Framer Motion Variants
 * GPU-accelerated (opacity & transforms only).
 */

// 1. Scroll Reveal System: opacity 0 -> 1, y 30 -> 0, duration 0.6s, ease: easeOut
export const sectionRevealVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.reveal,
      ease: "easeOut",
    },
  },
};

// 2. Section Accent Line animation
export const headerAccentLineVariants = {
  hidden: {
    scaleX: 0,
    opacity: 0.4,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: DURATIONS.reveal,
      ease: "easeOut",
    },
  },
};

// 3. Stagger Containers & Items
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      delayChildren: custom.delayChildren !== undefined ? custom.delayChildren : 0.1,
      staggerChildren: custom.staggerChildren !== undefined ? custom.staggerChildren : 0.08,
    },
  }),
};

export const staggerItemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// 4. Project Card Hover: Lift y: -4, no scale, stiffness: 300, damping: 25
export const projectCardHoverVariants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -4,
    transition: SPRINGS.cardLift,
  },
};

// General Card Hover
export const cardHoverVariants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -4,
    transition: SPRINGS.cardLift,
  },
};

// 5. Skill Chip Interactions: hover scale: 1.04, tap scale: 0.98
export const skillChipVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.04,
    transition: { duration: DURATIONS.micro, ease: "easeOut" },
  },
  tap: {
    scale: 0.98,
    transition: { duration: DURATIONS.fast, ease: "easeOut" },
  },
};

// 6. Button Micro-Interactions: hover scale: 1.02, tap scale: 0.98, duration: 0.2s
export const buttonMicroVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: { duration: DURATIONS.micro, ease: "easeOut" },
  },
  tap: {
    scale: 0.98,
    transition: { duration: DURATIONS.fast, ease: "easeOut" },
  },
};

// Aliases for compatibility
export const buttonHoverVariants = buttonMicroVariants;
export const pillHoverVariants = skillChipVariants;

// 7. Social Links lift
export const linkLiftVariants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -2,
    transition: {
      duration: DURATIONS.fast,
      ease: "easeOut",
    },
  },
};

// 8. Reduced Motion Fallbacks
export const reducedMotionSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATIONS.base },
  },
};
