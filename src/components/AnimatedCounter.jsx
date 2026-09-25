import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * AnimatedCounter
 * Smoothly animates numeric values when entering viewport once over 1.2s.
 * Preserves text formatting, prefixes, and suffixes (e.g., 600+, 100+, 2).
 */
export default function AnimatedCounter({ value, duration = 1.2, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const prefersReducedMotion = useReducedMotion();

  // Parse numeric target, prefix, and suffix
  const strVal = String(value);
  const match = strVal.match(/^([^0-9]*)([0-9,.]+)(.*)$/);

  const prefix = match ? match[1] : "";
  const numStr = match ? match[2].replace(/,/g, "") : "0";
  const suffix = match ? match[3] : "";
  const targetNum = parseFloat(numStr) || 0;
  const isDecimal = numStr.includes(".");
  const decimalPlaces = isDecimal ? numStr.split(".")[1].length : 0;

  const [displayVal, setDisplayVal] = useState(prefersReducedMotion ? targetNum : 0);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    let startTime = null;
    let animationFrame = null;

    // Smooth quartic ease-out
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutQuart(progress);
      const current = easedProgress * targetNum;

      setDisplayVal(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setDisplayVal(targetNum);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, targetNum, duration, prefersReducedMotion]);

  const formattedNumber = isDecimal
    ? displayVal.toFixed(decimalPlaces)
    : Math.floor(displayVal).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}{formattedNumber}{suffix}
    </span>
  );
}
