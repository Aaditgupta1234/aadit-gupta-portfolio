import { motion } from "framer-motion";
import { aboutData } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-2">
            {aboutData.title}
          </h2>
          <div className="w-12 h-0.5 bg-navy mb-8" />
          <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
            {aboutData.content}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
