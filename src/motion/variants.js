import { EASINGS, SPRINGS, DURATIONS } from "./motionTokens";

/**
 * Standardized Framer Motion Variants
 * GPU-accelerated (opacity & transforms only).
 */

export const sectionRevealVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.reveal,
      ease: EASINGS.easeOutCubic,
    },
  },
};

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
      ease: EASINGS.easeOutCubic,
    },
  },
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerChildren || 0.08,
      delayChildren: custom.delayChildren || 0,
    },
  }),
};

export const staggerItemVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATIONS.base,
      ease: EASINGS.easeOutCubic,
    },
  },
};

export const cardHoverVariants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -3,
    scale: 1.01,
    transition: SPRINGS.smooth,
  },
};

export const buttonHoverVariants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -2,
    scale: 1.02,
    transition: SPRINGS.snappy,
  },
  tap: {
    scale: 0.98,
    transition: SPRINGS.snappy,
  },
};

export const pillHoverVariants = {
  rest: {
    y: 0,
  },
  hover: {
    y: -1,
    transition: {
      duration: DURATIONS.fast,
      ease: "easeOut",
    },
  },
};

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

/**
 * Fallback variants for users with prefers-reduced-motion enabled
 */
export const reducedMotionSectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATIONS.base },
  },
};
