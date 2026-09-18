import { motion, useReducedMotion } from "framer-motion";
import { sectionRevealVariants, reducedMotionSectionVariants } from "./variants";

/**
 * Reusable MotionSection wrapper
 * Enforces unified viewport settings and reduced motion accessibility.
 */
export default function MotionSection({
  id,
  className = "",
  children,
  variants,
  custom,
  amount = 0.2,
  as: Component = "section",
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();

  const chosenVariants =
    variants || (prefersReducedMotion ? reducedMotionSectionVariants : sectionRevealVariants);

  const MotionComponent = motion[Component] || motion.section;

  return (
    <MotionComponent
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={chosenVariants}
      custom={custom}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
