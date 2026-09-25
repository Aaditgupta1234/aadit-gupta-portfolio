import { SPRINGS, DURATIONS } from "./motionTokens";

/**
 * Standard Framer Motion Variants — Final Polish Pass
 * GPU-accelerated: opacity and transform only.
 */

// 1. Section Scroll Reveals: initial { opacity: 0, y: 40 }, whileInView { opacity: 1, y: 0 }, duration: 0.7s
export const sectionRevealVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.sectionReveal,
      ease: "easeOut",
    },
  },
};

// Section Header Accent Line
export const headerAccentLineVariants = {
  hidden: {
    scaleX: 0,
    opacity: 0.4,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: DURATIONS.sectionReveal,
      ease: "easeOut",
    },
  },
};

// Stagger Containers
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

// Stagger Item (for headings, text blocks, cards)
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

// 2. Project Card Hover Lift: y: -6, spring stiffness: 300, damping: 25. NO scaling.
export const projectCardHoverVariants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -6,
    transition: SPRINGS.cardLift,
  },
};

// 3. Service Card & General Card Hover Lift: y: -4, spring stiffness: 300, damping: 25.
export const serviceCardHoverVariants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -4,
    transition: SPRINGS.cardLift,
  },
};

export const cardHoverVariants = serviceCardHoverVariants;

// 4. Skill Pill Hover Animation: hover scale: 1.04, tap scale: 0.98
export const skillChipVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.04,
    transition: { duration: DURATIONS.button, ease: "easeOut" },
  },
  tap: {
    scale: 0.98,
    transition: { duration: DURATIONS.fast, ease: "easeOut" },
  },
};

// 5. Button Micro-Interactions: hover scale: 1.02, tap scale: 0.98, duration: 0.2s
export const buttonMicroVariants = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: { duration: DURATIONS.button, ease: "easeOut" },
  },
  tap: {
    scale: 0.98,
    transition: { duration: DURATIONS.fast, ease: "easeOut" },
  },
};

// Compatibility aliases
export const buttonHoverVariants = buttonMicroVariants;
export const pillHoverVariants = skillChipVariants;

// 6. Social Icon Hover Animation: hover y: -2, duration: 0.15s
export const socialIconVariants = {
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

export const linkLiftVariants = socialIconVariants;

// 7. Reduced Motion Fallback
export const reducedMotionSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATIONS.base },
  },
};
