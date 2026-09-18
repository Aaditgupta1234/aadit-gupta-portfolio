import { motion } from "framer-motion";
import { aboutData } from "../data/portfolioData";
import MotionSection from "../motion/MotionSection";
import { headerAccentLineVariants } from "../motion/variants";

export default function About() {
  const paragraphs = aboutData.paragraphs || (aboutData.content ? [aboutData.content] : []);

  return (
    <MotionSection id="about" className="pt-16 md:pt-24 pb-20 md:pb-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-2">
            {aboutData.title}
          </h2>
          {/* GPU-accelerated animated accent line */}
          <motion.div
            variants={headerAccentLineVariants}
            className="w-16 h-0.5 bg-navy origin-left mb-8"
          />
          <div className="space-y-5 text-text-secondary leading-relaxed text-base sm:text-lg">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
