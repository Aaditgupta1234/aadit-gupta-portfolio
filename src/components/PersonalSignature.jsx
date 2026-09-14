import { motion } from "framer-motion";

export default function PersonalSignature() {
  return (
    <div className="relative w-full h-[400px] lg:h-[460px] flex items-center justify-center select-none pointer-events-none">
      {/* Extremely faint radial glow behind the monogram (< 4% opacity) */}
      <div className="absolute w-[360px] h-[360px] rounded-full bg-navy/[0.03] blur-3xl pointer-events-none" />

      {/* Large Faded Monogram (AG) — 2.5–3.5% opacity in serif font */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [-5, 5],
        }}
        transition={{
          opacity: { duration: 1.2, ease: "easeOut" },
          scale: { duration: 1.2, ease: "easeOut" },
          y: {
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        className="relative flex items-center justify-center font-serif text-[180px] sm:text-[230px] lg:text-[280px] font-normal leading-none tracking-tight text-slate-900/[0.035] select-none"
        aria-hidden="true"
      >
        AG
      </motion.div>

      {/* ── Floating Principles (Labels) ── */}

      {/* 1. Build — Top Left */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: [-6, 6],
          x: [-2, 2],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.3 },
          y: {
            duration: 9,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
          x: {
            duration: 11,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        className="absolute top-12 left-10 lg:left-14 text-xs tracking-[0.28em] font-sans uppercase font-medium text-slate-400/80"
      >
        Build
      </motion.div>

      {/* 2. Learn — Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: 1,
          y: [7, -7],
          x: [2, -2],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.45 },
          y: {
            duration: 11,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
          x: {
            duration: 9.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        className="absolute top-16 right-8 lg:right-16 text-xs tracking-[0.28em] font-sans uppercase font-medium text-slate-400/80"
      >
        Learn
      </motion.div>

      {/* 3. Solve — Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: [5, -5],
          x: [-3, 3],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.6 },
          y: {
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
          x: {
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-16 left-8 lg:left-12 text-xs tracking-[0.28em] font-sans uppercase font-medium text-slate-400/80"
      >
        Solve
      </motion.div>

      {/* 4. Scale — Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: 1,
          y: [-8, 8],
          x: [3, -3],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.75 },
          y: {
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
          x: {
            duration: 10.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-12 right-10 lg:right-14 text-xs tracking-[0.28em] font-sans uppercase font-medium text-slate-400/80"
      >
        Scale
      </motion.div>
    </div>
  );
}
