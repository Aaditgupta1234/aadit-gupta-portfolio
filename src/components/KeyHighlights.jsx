import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { keyHighlightsData } from "../data/portfolioData";

export default function KeyHighlights() {
  return (
    <section className="py-16 md:py-20 bg-canvas">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-2">
            Key Highlights
          </h2>
          <div className="w-12 h-0.5 bg-navy mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          {keyHighlightsData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.35 }}
              className="flex items-start gap-3 bg-white border border-border rounded-xl p-5 hover:shadow-sm transition-shadow duration-200"
            >
              <Star size={15} className="text-navy flex-shrink-0 mt-0.5" />
              <p className="text-sm text-text-primary leading-snug">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
