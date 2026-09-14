import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const IDENTITY_SLIDES = [
  {
    title: "DecisionOS",
    subtitle: "Explainable AI Platform",
    tag: "Flagship AI Architecture",
  },
  {
    title: "AVELIS",
    subtitle: "Digital Library Platform",
    tag: "Production-Grade System",
  },
  {
    title: "Backend Systems",
    subtitle: "FastAPI + PostgreSQL",
    tag: "Scalable Infrastructure",
  },
  {
    title: "Frontend Craft",
    subtitle: "React + TypeScript",
    tag: "Responsive Interfaces",
  },
];

export default function HeroOrb() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activePillar, setActivePillar] = useState(null);

  // Cycle identity slides every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % IDENTITY_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Smooth mouse tilt interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-180, 180], [10, -10]);
  const rotateY = useTransform(smoothX, [-180, 180], [-10, 10]);
  const lightSheenX = useTransform(smoothX, [-180, 180], ["20%", "45%"]);
  const lightSheenY = useTransform(smoothY, [-180, 180], ["15%", "40%"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-full max-w-[460px] h-[420px] sm:h-[450px] flex items-center justify-center select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      {/* ── Subdued Precision Aura ── */}
      <motion.div
        animate={{
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 0.22 : 0.14,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-navy/20 via-blue-500/15 to-indigo-400/10 blur-2xl pointer-events-none"
      />

      {/* ── Mathematical Radial Blueprint System (Orbit → Connector → Label) ── */}
      <svg
        viewBox="0 0 440 440"
        className="absolute inset-0 w-full h-full pointer-events-none"
        fill="none"
      >
        {/* Primary Circular Orbit Anchor Ring (Prominent, crisp) */}
        <circle
          cx="220"
          cy="220"
          r="158"
          stroke="#CBD5E1"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.75"
        />

        {/* Concentric Reference Guide */}
        <circle
          cx="220"
          cy="220"
          r="140"
          stroke="#E2E8F0"
          strokeWidth="0.65"
          opacity="0.4"
        />

        {/* 1. BACKEND Radial Ray & Anchor Node (Top-Left 135°) */}
        <g
          opacity={activePillar === "backend" ? 1 : 0.4}
          className="transition-opacity duration-300 pointer-events-auto cursor-pointer"
          onMouseEnter={() => setActivePillar("backend")}
          onMouseLeave={() => setActivePillar(null)}
        >
          {/* Radial connector line extending from orbit ring node */}
          <line
            x1="108"
            y1="108"
            x2="88"
            y2="88"
            stroke={activePillar === "backend" ? "#3B82F6" : "#94A3B8"}
            strokeWidth={activePillar === "backend" ? 1.2 : 0.85}
          />
          <line
            x1="88"
            y1="88"
            x2="60"
            y2="88"
            stroke={activePillar === "backend" ? "#3B82F6" : "#94A3B8"}
            strokeWidth={activePillar === "backend" ? 1.2 : 0.85}
            strokeDasharray="2 2"
          />
          {/* Orbit Node */}
          <circle
            cx="108"
            cy="108"
            r={activePillar === "backend" ? 3.5 : 2.5}
            fill="#3B82F6"
          />
          <circle
            cx="108"
            cy="108"
            r="6"
            stroke="#3B82F6"
            strokeWidth="0.5"
            opacity={activePillar === "backend" ? 0.7 : 0.25}
          />
        </g>

        {/* 2. AI Radial Ray & Anchor Node (Top-Right 45°) */}
        <g
          opacity={activePillar === "ai" ? 1 : 0.4}
          className="transition-opacity duration-300 pointer-events-auto cursor-pointer"
          onMouseEnter={() => setActivePillar("ai")}
          onMouseLeave={() => setActivePillar(null)}
        >
          <line
            x1="332"
            y1="108"
            x2="352"
            y2="88"
            stroke={activePillar === "ai" ? "#3B82F6" : "#94A3B8"}
            strokeWidth={activePillar === "ai" ? 1.2 : 0.85}
          />
          <line
            x1="352"
            y1="88"
            x2="380"
            y2="88"
            stroke={activePillar === "ai" ? "#3B82F6" : "#94A3B8"}
            strokeWidth={activePillar === "ai" ? 1.2 : 0.85}
            strokeDasharray="2 2"
          />
          <circle
            cx="332"
            cy="108"
            r={activePillar === "ai" ? 3.5 : 2.5}
            fill="#3B82F6"
          />
          <circle
            cx="332"
            cy="108"
            r="6"
            stroke="#3B82F6"
            strokeWidth="0.5"
            opacity={activePillar === "ai" ? 0.7 : 0.25}
          />
        </g>

        {/* 3. DATA Radial Ray & Anchor Node (Bottom-Left 225°) */}
        <g
          opacity={activePillar === "data" ? 1 : 0.4}
          className="transition-opacity duration-300 pointer-events-auto cursor-pointer"
          onMouseEnter={() => setActivePillar("data")}
          onMouseLeave={() => setActivePillar(null)}
        >
          <line
            x1="108"
            y1="332"
            x2="88"
            y2="352"
            stroke={activePillar === "data" ? "#3B82F6" : "#94A3B8"}
            strokeWidth={activePillar === "data" ? 1.2 : 0.85}
          />
          <line
            x1="88"
            y1="352"
            x2="60"
            y2="352"
            stroke={activePillar === "data" ? "#3B82F6" : "#94A3B8"}
            strokeWidth={activePillar === "data" ? 1.2 : 0.85}
            strokeDasharray="2 2"
          />
          <circle
            cx="108"
            cy="332"
            r={activePillar === "data" ? 3.5 : 2.5}
            fill="#3B82F6"
          />
          <circle
            cx="108"
            cy="332"
            r="6"
            stroke="#3B82F6"
            strokeWidth="0.5"
            opacity={activePillar === "data" ? 0.7 : 0.25}
          />
        </g>

        {/* 4. UI Radial Ray & Anchor Node (Bottom-Right 315°) */}
        <g
          opacity={activePillar === "ui" ? 1 : 0.4}
          className="transition-opacity duration-300 pointer-events-auto cursor-pointer"
          onMouseEnter={() => setActivePillar("ui")}
          onMouseLeave={() => setActivePillar(null)}
        >
          <line
            x1="332"
            y1="332"
            x2="352"
            y2="352"
            stroke={activePillar === "ui" ? "#3B82F6" : "#94A3B8"}
            strokeWidth={activePillar === "ui" ? 1.2 : 0.85}
          />
          <line
            x1="352"
            y1="352"
            x2="380"
            y2="352"
            stroke={activePillar === "ui" ? "#3B82F6" : "#94A3B8"}
            strokeWidth={activePillar === "ui" ? 1.2 : 0.85}
            strokeDasharray="2 2"
          />
          <circle
            cx="332"
            cy="332"
            r={activePillar === "ui" ? 3.5 : 2.5}
            fill="#3B82F6"
          />
          <circle
            cx="332"
            cy="332"
            r="6"
            stroke="#3B82F6"
            strokeWidth="0.5"
            opacity={activePillar === "ui" ? 0.7 : 0.25}
          />
        </g>
      </svg>

      {/* ── 3D Interactive Container ── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[290px] md:h-[290px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        {/* ── Precision Orbital Rings ── */}
        {/* Ring 1 — Diagonal Orbit */}
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute w-[295px] h-[295px] sm:w-[325px] sm:h-[325px] rounded-full border border-blue-400/30 pointer-events-none"
          style={{
            transform: "rotateX(70deg) rotateY(-20deg)",
          }}
        >
          {/* Satellite bead on Ring 1 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3B82F6]" />
        </motion.div>

        {/* Ring 2 — Counter Orbit */}
        <motion.div
          animate={{ rotateZ: -360 }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          className="absolute w-[280px] h-[280px] sm:w-[310px] sm:h-[310px] rounded-full border border-navy/25 pointer-events-none"
          style={{
            transform: "rotateX(75deg) rotateY(25deg)",
          }}
        >
          {/* Satellite bead on Ring 2 */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-navy shadow-[0_0_6px_#1E3A8A]" />
        </motion.div>

        {/* Ring 3 — Fine Dashed Latitude Ring */}
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
          className="absolute w-[255px] h-[255px] sm:w-[285px] sm:h-[285px] rounded-full border border-dashed border-slate-300/50 pointer-events-none"
          style={{
            transform: "rotateX(62deg)",
          }}
        />

        {/* ── Subtle Atmospheric Particles ── */}
        {[
          { x: -85, y: -75, size: 2.5, delay: 0, dur: 5.5 },
          { x: 95, y: -65, size: 2, delay: 1, dur: 7 },
          { x: -100, y: 70, size: 2, delay: 2, dur: 7.5 },
          { x: 90, y: 80, size: 2.5, delay: 1.5, dur: 6 },
          { x: 0, y: -115, size: 2, delay: 0.5, dur: 8.5 },
        ].map((p, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [p.y - 6, p.y + 6, p.y - 6],
              opacity: [0.25, 0.7, 0.25],
            }}
            transition={{
              duration: p.dur,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-blue-500/60 pointer-events-none"
            style={{
              width: p.size,
              height: p.size,
              transform: `translate(${p.x}px, ${p.y}px)`,
              boxShadow: "0 0 6px rgba(59,130,246,0.5)",
            }}
          />
        ))}

        {/* ── Glassmorphism Central Sphere (270px Diameter) ── */}
        <motion.div
          animate={{
            y: [-4, 4, -4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-[270px] md:h-[270px] rounded-full flex items-center justify-center overflow-hidden backdrop-blur-xl transition-all duration-300"
          style={{
            background:
              "radial-gradient(circle at 35% 28%, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.65) 22%, rgba(240, 246, 255, 0.4) 45%, rgba(59, 130, 246, 0.14) 70%, rgba(30, 58, 138, 0.22) 100%)",
            boxShadow:
              "inset 0 0 30px rgba(255,255,255,0.9), inset 0 0 50px rgba(59,130,246,0.18), inset 0 -18px 36px rgba(30,58,138,0.2), 0 20px 50px -10px rgba(30,58,138,0.15), 0 8px 16px -4px rgba(0,0,0,0.03)",
            border: "1px solid rgba(255, 255, 255, 0.9)",
          }}
        >
          {/* Specular Reflection Sheen */}
          <motion.div
            className="absolute -top-5 -left-5 w-36 h-36 rounded-full bg-gradient-to-br from-white/90 via-white/40 to-transparent blur-md pointer-events-none"
            style={{
              left: lightSheenX,
              top: lightSheenY,
            }}
          />

          {/* Internal Core Illumination */}
          <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-radial from-blue-400/20 via-navy/10 to-transparent blur-lg pointer-events-none" />

          {/* ── Engineering Mindset: Personal Identity Showcase ── */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-[220px]">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-slate-500 font-semibold">
                ENGINEERING MINDSET
              </span>
            </div>

            <div className="h-12 sm:h-14 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slideIndex}
                  initial={{ opacity: 0, scale: 0.96, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -6 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                  <h3 className="font-serif text-2xl sm:text-[25px] text-navy font-bold tracking-tight">
                    {IDENTITY_SLIDES[slideIndex].title}
                  </h3>
                  <span className="text-[11.5px] sm:text-[12px] text-slate-600 font-medium tracking-wide mt-0.5 whitespace-nowrap">
                    {IDENTITY_SLIDES[slideIndex].subtitle}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5 mt-2">
              {IDENTITY_SLIDES.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === slideIndex
                      ? "w-4 bg-navy"
                      : "w-1 bg-slate-300/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── 4 Connected Quadrant Labels (Positioned on Exact Radial Rays) ── */}

      {/* 1. BACKEND / FastAPI — Top Left (135° Radial Ray) */}
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{
          opacity: 1,
          y: [-2, 2, -2],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.2 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        onMouseEnter={() => setActivePillar("backend")}
        onMouseLeave={() => setActivePillar(null)}
        className="absolute top-10 left-3 sm:top-11 sm:left-6 flex flex-col items-start cursor-pointer transition-all duration-200"
      >
        <span
          className={`text-xs sm:text-[13px] font-bold tracking-[0.2em] leading-tight transition-colors duration-200 ${
            activePillar === "backend" ? "text-blue-600" : "text-navy/85"
          }`}
        >
          BACKEND
        </span>
        <span className="text-[10px] sm:text-[11px] font-normal text-slate-400 tracking-wider mt-0.5">
          FastAPI
        </span>
      </motion.div>

      {/* 2. AI / DecisionOS — Top Right (45° Radial Ray) */}
      <motion.div
        initial={{ opacity: 0, y: -4 }}
        animate={{
          opacity: 1,
          y: [2, -2, 2],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.35 },
          y: { duration: 8.5, repeat: Infinity, ease: "easeInOut" },
        }}
        onMouseEnter={() => setActivePillar("ai")}
        onMouseLeave={() => setActivePillar(null)}
        className="absolute top-10 right-3 sm:top-11 sm:right-6 flex flex-col items-end text-right cursor-pointer transition-all duration-200"
      >
        <span
          className={`text-xs sm:text-[13px] font-bold tracking-[0.2em] leading-tight transition-colors duration-200 ${
            activePillar === "ai" ? "text-blue-600" : "text-navy/85"
          }`}
        >
          AI
        </span>
        <span className="text-[10px] sm:text-[11px] font-normal text-slate-400 tracking-wider mt-0.5">
          DecisionOS
        </span>
      </motion.div>

      {/* 3. DATA / PostgreSQL — Bottom Left (225° Radial Ray) */}
      <motion.div
        initial={{ opacity: 0, y: 4 }}
        animate={{
          opacity: 1,
          y: [2, -2, 2],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.5 },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        onMouseEnter={() => setActivePillar("data")}
        onMouseLeave={() => setActivePillar(null)}
        className="absolute bottom-10 left-3 sm:bottom-11 sm:left-6 flex flex-col items-start cursor-pointer transition-all duration-200"
      >
        <span
          className={`text-xs sm:text-[13px] font-bold tracking-[0.2em] leading-tight transition-colors duration-200 ${
            activePillar === "data" ? "text-blue-600" : "text-navy/85"
          }`}
        >
          DATA
        </span>
        <span className="text-[10px] sm:text-[11px] font-normal text-slate-400 tracking-wider mt-0.5">
          PostgreSQL
        </span>
      </motion.div>

      {/* 4. UI / React — Bottom Right (315° Radial Ray) */}
      <motion.div
        initial={{ opacity: 0, y: -4 }}
        animate={{
          opacity: 1,
          y: [-2, 2, -2],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.65 },
          y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        }}
        onMouseEnter={() => setActivePillar("ui")}
        onMouseLeave={() => setActivePillar(null)}
        className="absolute bottom-10 right-3 sm:bottom-11 sm:right-6 flex flex-col items-end text-right cursor-pointer transition-all duration-200"
      >
        <span
          className={`text-xs sm:text-[13px] font-bold tracking-[0.2em] leading-tight transition-colors duration-200 ${
            activePillar === "ui" ? "text-blue-600" : "text-navy/85"
          }`}
        >
          UI
        </span>
        <span className="text-[10px] sm:text-[11px] font-normal text-slate-400 tracking-wider mt-0.5">
          React
        </span>
      </motion.div>
    </div>
  );
}
