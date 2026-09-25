import { motion } from "framer-motion";
import { aboutData } from "../data/portfolioData";
import MotionSection from "../motion/MotionSection";
import {
  headerAccentLineVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "../motion/variants";

export default function About() {
  const paragraphs = aboutData.paragraphs || (aboutData.content ? [aboutData.content] : []);

  return (
    <MotionSection id="about" className="pt-16 md:pt-24 pb-20 md:pb-28 bg-white">
      <motion.div
        variants={staggerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl mx-auto px-6"
      >
        <motion.h2
          variants={staggerItemVariants}
          className="font-serif text-3xl sm:text-4xl text-text-primary mb-2"
        >
          {aboutData.title}
        </motion.h2>

        {/* GPU-accelerated animated accent line */}
        <motion.div
          variants={headerAccentLineVariants}
          className="w-16 h-0.5 bg-navy origin-left mb-8"
        />

        <motion.div
          variants={staggerItemVariants}
          className="space-y-5 text-text-secondary leading-relaxed text-base sm:text-lg"
        >
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>
      </motion.div>
    </MotionSection>
  );
}
