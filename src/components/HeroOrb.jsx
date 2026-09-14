import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const TECH_STACK = [
  { name: "Java", category: "Core & Algorithms" },
  { name: "Python", category: "AI & Scripting" },
  { name: "FastAPI", category: "High-Perf Backend" },
  { name: "PostgreSQL", category: "Relational Architecture" },
  { name: "React", category: "Interface Systems" },
  { name: "TypeScript", category: "Type-Safe Systems" },
];

export default function HeroOrb() {
  const [techIndex, setTechIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Cycle technologies automatically
  useEffect(() => {
    const timer = setInterval(() => {
      setTechIndex((prev) => (prev + 1) % TECH_STACK.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // Smooth mouse tilt interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-180, 180], [12, -12]);
  const rotateY = useTransform(smoothX, [-180, 180], [-12, 12]);
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
      className="relative w-full max-w-[480px] h-[420px] sm:h-[460px] flex items-center justify-center select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      {/* ── Background Subtle Glows ── */}
      <motion.div
        animate={{
          scale: isHovered ? 1.15 : 1,
          opacity: isHovered ? 0.35 : 0.22,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-navy via-blue-500 to-indigo-400 blur-3xl pointer-events-none"
      />
      <div className="absolute w-60 h-60 rounded-full bg-blue-400/10 blur-2xl pointer-events-none" />

      {/* ── SVG Connecting Lines to Floating Labels ── */}
      <svg
        viewBox="0 0 380 380"
        className="absolute inset-0 w-full h-full pointer-events-none"
        fill="none"
      >
        {/* Dynamic Connection Lines */}
        <motion.path
          d="M 90 40 L 140 100"
          stroke="#CBD5E1"
          strokeWidth="0.85"
          strokeDasharray="3 3"
          animate={{ strokeDashoffset: [0, -12] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <circle cx="140" cy="100" r="2" fill="#3B82F6" />

        <motion.path
          d="M 290 40 L 240 100"
          stroke="#CBD5E1"
          strokeWidth="0.85"
          strokeDasharray="3 3"
          animate={{ strokeDashoffset: [0, -12] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <circle cx="240" cy="100" r="2" fill="#3B82F6" />

        <motion.path
          d="M 90 340 L 140 280"
          stroke="#CBD5E1"
          strokeWidth="0.85"
          strokeDasharray="3 3"
          animate={{ strokeDashoffset: [0, 12] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <circle cx="140" cy="280" r="2" fill="#3B82F6" />

        <motion.path
          d="M 290 340 L 240 280"
          stroke="#CBD5E1"
          strokeWidth="0.85"
          strokeDasharray="3 3"
          animate={{ strokeDashoffset: [0, 12] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <circle cx="240" cy="280" r="2" fill="#3B82F6" />
      </svg>

      {/* ── 3D Interactive Container ── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        {/* ── Orbital Rings Layer ── */}
        {/* Ring 1 — Diagonal Tilt */}
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="absolute w-[310px] h-[310px] sm:w-[350px] sm:h-[350px] rounded-full border border-blue-400/25 pointer-events-none"
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
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="absolute w-[290px] h-[290px] sm:w-[330px] sm:h-[330px] rounded-full border border-navy/20 pointer-events-none"
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
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-full border border-dashed border-slate-300/40 pointer-events-none"
          style={{
            transform: "rotateX(62deg)",
          }}
        />

        {/* ── Floating Atmospheric Particles ── */}
        {[
          { x: -90, y: -80, size: 3, delay: 0, dur: 5 },
          { x: 100, y: -65, size: 2.5, delay: 1, dur: 6.5 },
          { x: -110, y: 70, size: 2, delay: 2, dur: 7 },
          { x: 95, y: 85, size: 3.5, delay: 1.5, dur: 5.5 },
          { x: 0, y: -120, size: 2, delay: 0.5, dur: 8 },
        ].map((p, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [p.y - 8, p.y + 8, p.y - 8],
              opacity: [0.3, 0.8, 0.3],
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
              boxShadow: "0 0 6px rgba(59,130,246,0.6)",
            }}
          />
        ))}

        {/* ── The Main 3D Glassmorphism Orb ── */}
        <motion.div
          animate={{
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-xl transition-all duration-300"
          style={{
            background:
              "radial-gradient(circle at 35% 28%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.5) 22%, rgba(240, 246, 255, 0.35) 45%, rgba(59, 130, 246, 0.12) 70%, rgba(30, 58, 138, 0.22) 100%)",
            boxShadow:
              "inset 0 0 35px rgba(255,255,255,0.8), inset 0 0 60px rgba(59,130,246,0.18), inset 0 -20px 40px rgba(30,58,138,0.22), 0 24px 60px -12px rgba(30,58,138,0.18), 0 10px 20px -5px rgba(0,0,0,0.04)",
            border: "1px solid rgba(255, 255, 255, 0.85)",
          }}
        >
          {/* Specular Light Reflection Sheen (Top Left) */}
          <motion.div
            className="absolute -top-6 -left-6 w-36 h-36 rounded-full bg-gradient-to-br from-white/90 via-white/40 to-transparent blur-md pointer-events-none"
            style={{
              left: lightSheenX,
              top: lightSheenY,
            }}
          />

          {/* Internal Soft Energy Core */}
          <div className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-radial from-blue-400/20 via-navy/10 to-transparent blur-xl pointer-events-none" />

          {/* ── Rotating Stack of Technologies (Centered Inside Orb) ── */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-slate-500 font-medium">
                System Stack
              </span>
            </div>

            <div className="h-10 sm:h-12 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={techIndex}
                  initial={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                  <h3 className="font-serif text-2xl sm:text-3xl text-navy font-semibold tracking-tight">
                    {TECH_STACK[techIndex].name}
                  </h3>
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium tracking-wide mt-0.5">
                    {TECH_STACK[techIndex].category}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Dots for Tech Items */}
            <div className="flex items-center gap-1.5 mt-2.5">
              {TECH_STACK.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === techIndex
                      ? "w-4 bg-navy"
                      : "w-1 bg-slate-300/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── 4 Floating Principles Surrounding the Orb ── */}

      {/* 1. BUILD — Top Left */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{
          opacity: 1,
          y: [-4, 4, -4],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.2 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-3 left-2 sm:left-4 flex flex-col items-start"
      >
        <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.22em] text-navy">
          BUILD
        </span>
        <span className="text-[9px] sm:text-[10px] text-slate-400 tracking-wider">
          Architecture
        </span>
      </motion.div>

      {/* 2. CREATE — Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{
          opacity: 1,
          y: [4, -4, 4],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.35 },
          y: { duration: 8.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-3 right-2 sm:right-4 flex flex-col items-end text-right"
      >
        <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.22em] text-navy">
          CREATE
        </span>
        <span className="text-[9px] sm:text-[10px] text-slate-400 tracking-wider">
          Platforms
        </span>
      </motion.div>

      {/* 3. SOLVE — Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{
          opacity: 1,
          y: [4, -4, 4],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.5 },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-3 left-2 sm:left-4 flex flex-col items-start"
      >
        <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.22em] text-navy">
          SOLVE
        </span>
        <span className="text-[9px] sm:text-[10px] text-slate-400 tracking-wider">
          Algorithms
        </span>
      </motion.div>

      {/* 4. SCALE — Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{
          opacity: 1,
          y: [-5, 5, -5],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.65 },
          y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-3 right-2 sm:right-4 flex flex-col items-end text-right"
      >
        <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.22em] text-navy">
          SCALE
        </span>
        <span className="text-[9px] sm:text-[10px] text-slate-400 tracking-wider">
          Performance
        </span>
      </motion.div>
    </div>
  );
}
