import { motion } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./BrandIcons";
import { heroData } from "../data/portfolioData";
import HeroOrb from "./HeroOrb";
import { skillChipVariants, buttonMicroVariants, linkLiftVariants } from "../motion/variants";

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
          {/* 1. Badge (y: 12 -> 0) */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block px-3 py-1 text-xs font-semibold tracking-[0.2em] text-navy bg-blue-50 rounded-full mb-5"
          >
            {heroData.label}
          </motion.span>

          {/* 2. Hero Name (opacity: 0 -> 1, y: 25 -> 0, duration: 0.7s) */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-text-primary leading-[1.1] mb-3"
          >
            {heroData.name}
          </motion.h1>

          {/* 3. Subtitle (delay: 0.1s) */}
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="text-lg sm:text-xl font-semibold tracking-wide text-text-primary mb-3"
          >
            {heroData.subtitle}
          </motion.h2>

          {/* 4. Description (delay: 0.2s) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="mb-6"
          >
            <p className="text-base sm:text-lg text-text-secondary font-medium leading-relaxed max-w-2xl mb-2">
              {heroData.bio}
            </p>
            <p className="text-sm text-gray-400 italic tracking-wide">
              &ldquo;{heroData.quote}&rdquo;
            </p>
          </motion.div>

          {/* 5. Tech Pills (delay: 0.25s) with subtle chip scale */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
            className="mb-6"
          >
            <p className="text-[11px] tracking-wide text-text-secondary font-medium uppercase mb-2.5">
              {heroData.tags}
            </p>
            <div className="flex flex-wrap gap-2">
              {heroData.techPills.map((pill) => (
                <motion.span
                  key={pill}
                  variants={skillChipVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="px-3 py-1 text-xs font-medium text-pill-text bg-pill rounded-full border border-border inline-block cursor-default select-none"
                >
                  {pill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* 6. CTA Action Buttons (delay: 0.3s) with micro-interactions */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="flex flex-wrap gap-3 mb-5"
          >
            <motion.a
              href="#projects"
              variants={buttonMicroVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="group inline-flex items-center gap-2 px-7 py-3 text-sm font-medium text-white bg-navy rounded-lg shadow-2xs hover:bg-navy-dark transition-colors duration-200"
            >
              View My Work
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </motion.a>
            <motion.a
              href="/Aadit_Gupta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonMicroVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium text-navy border border-navy rounded-lg hover:bg-navy hover:text-white transition-colors duration-200"
            >
              <FileDown size={15} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* 7. Social Links (delay: 0.4s) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-4 text-sm"
          >
            <motion.a
              href={heroData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              variants={linkLiftVariants}
              initial="rest"
              whileHover="hover"
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
              variants={linkLiftVariants}
              initial="rest"
              whileHover="hover"
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
              variants={linkLiftVariants}
              initial="rest"
              whileHover="hover"
              className="relative inline-flex items-center gap-1.5 font-medium text-slate-500 hover:text-navy transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-navy hover:after:w-full after:transition-all after:duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </motion.a>
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
