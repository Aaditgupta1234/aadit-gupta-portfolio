import { motion } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./BrandIcons";
import { heroData } from "../data/portfolioData";
import HeroOrb from "./HeroOrb";
import { EASINGS, SPRINGS } from "../motion/motionTokens";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: EASINGS.easeOutCubic,
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 pb-10 bg-white overflow-hidden">
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #D1D5DB 0.5px, transparent 0.5px)",
          backgroundSize: "22px 22px",
          opacity: 0.025,
        }}
      />

      <div className="relative max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
        {/* Left Column (58% allocated space) */}
        <div className="lg:col-span-7 max-w-[680px]">
          {/* 1. Badge */}
          <motion.span
            custom={0}
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="inline-block px-3 py-1 text-xs font-semibold tracking-[0.2em] text-navy bg-blue-50 rounded-full mb-5"
          >
            {heroData.label}
          </motion.span>

          {/* 2. Name / Heading */}
          <motion.h1
            custom={1}
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-text-primary leading-[1.1] mb-3"
          >
            {heroData.name}
          </motion.h1>

          <motion.h2
            custom={1.5}
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl font-semibold tracking-wide text-text-primary mb-3"
          >
            {heroData.subtitle}
          </motion.h2>

          {/* 3. Description Block (Bio + Signature Quote unified) */}
          <motion.div
            custom={2}
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <p className="text-base sm:text-lg text-text-secondary font-medium leading-relaxed max-w-2xl mb-2">
              {heroData.bio}
            </p>
            <p className="text-sm text-gray-400 italic tracking-wide">
              &ldquo;{heroData.quote}&rdquo;
            </p>
          </motion.div>

          {/* 4. CTA Action Buttons */}
          <motion.div
            custom={3}
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3 mb-5"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={SPRINGS.snappy}
              className="group inline-flex items-center gap-2 px-7 py-3 text-sm font-medium text-white bg-navy rounded-lg shadow-2xs hover:bg-navy-dark transition-colors duration-200"
            >
              View My Work
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={SPRINGS.snappy}
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium text-navy border border-navy rounded-lg hover:bg-navy hover:text-white transition-colors duration-200"
            >
              <FileDown size={15} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* 5. Social Links */}
          <motion.div
            custom={4}
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4 text-sm mb-5"
          >
            <motion.a
              href={heroData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="relative inline-flex items-center gap-1.5 font-medium text-slate-500 hover:text-navy transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-navy hover:after:w-full after:transition-all after:duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
              GitHub
            </motion.a>
            <span className="text-slate-300 select-none">·</span>
            <motion.a
              href={heroData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="relative inline-flex items-center gap-1.5 font-medium text-slate-500 hover:text-navy transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-navy hover:after:w-full after:transition-all after:duration-200"
              aria-label="LeetCode"
            >
              <LeetCodeIcon size={16} />
              LeetCode
            </motion.a>
            <span className="text-slate-300 select-none">·</span>
            <motion.a
              href={heroData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="relative inline-flex items-center gap-1.5 font-medium text-slate-500 hover:text-navy transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-navy hover:after:w-full after:transition-all after:duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </motion.a>
          </motion.div>

          {/* 6. Tech Pills & Tags */}
          <motion.div
            custom={5}
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[11px] tracking-wide text-text-secondary font-medium uppercase mb-2.5">
              {heroData.tags}
            </p>
            <div className="flex flex-wrap gap-2">
              {heroData.techPills.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 text-xs font-medium text-pill-text bg-pill rounded-full border border-border"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column — Interactive 3D Hero Orb (42% allocated space) */}
        <div className="lg:col-span-5 flex justify-center items-center lg:-translate-y-4">
          <HeroOrb />
        </div>
      </div>
    </section>
  );
}
