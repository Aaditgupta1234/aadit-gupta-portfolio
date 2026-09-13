import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./BrandIcons";
import { heroData } from "../data/portfolioData";
import BlueprintGraphic from "./BlueprintGraphic";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div>
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-block px-3 py-1 text-xs font-semibold tracking-[0.2em] text-navy bg-blue-50 rounded-full mb-6"
          >
            {heroData.label}
          </motion.span>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-serif text-5xl sm:text-6xl lg:text-7xl text-text-primary leading-[1.1] mb-3"
          >
            {heroData.name}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base text-text-secondary italic mb-5 leading-relaxed"
          >
            &ldquo;{heroData.quote}&rdquo;
          </motion.p>

          <motion.h2
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl font-medium text-text-primary mb-4"
          >
            {heroData.subtitle}
          </motion.h2>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-text-secondary leading-relaxed max-w-lg mb-3"
          >
            {heroData.bio}
          </motion.p>

          <motion.p
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-xs tracking-wide text-text-secondary font-medium uppercase mb-6"
          >
            {heroData.tags}
          </motion.p>

          {/* Tech Pills */}
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2 mb-8"
          >
            {heroData.techPills.map((pill) => (
              <span
                key={pill}
                className="px-3 py-1 text-xs font-medium text-pill-text bg-pill rounded-full border border-border"
              >
                {pill}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            custom={7}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3 mb-6"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-navy rounded-lg hover:bg-navy-dark transition-colors duration-200"
            >
              View My Work
              <ArrowDown size={15} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-navy border border-navy rounded-lg hover:bg-navy hover:text-white transition-colors duration-200"
            >
              <FileDown size={15} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            custom={8}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-4"
          >
            <a
              href={heroData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={heroData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={heroData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors duration-200"
              aria-label="LeetCode"
            >
              <LeetCodeIcon size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Column — Blueprint */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:flex justify-center items-center"
        >
          <BlueprintGraphic />
        </motion.div>
      </div>
    </section>
  );
}
