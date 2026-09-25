import { motion } from "framer-motion";
import { metricsData } from "../data/portfolioData";
import AnimatedCounter from "./AnimatedCounter";
import { cardHoverVariants } from "../motion/variants";

export default function Metrics() {
  if (!metricsData || metricsData.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {metricsData.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              variants={cardHoverVariants}
              whileHover="hover"
              className="bg-canvas border border-border rounded-xl p-6 text-center hover:border-navy/30 hover:shadow-xs transition-colors duration-200"
            >
              <p className="font-serif text-4xl text-navy mb-1">
                <AnimatedCounter value={metric.value} duration={1.2} />
              </p>
              <p className="text-sm font-semibold text-text-primary mb-1">
                {metric.label}
              </p>
              <p className="text-xs text-text-secondary">{metric.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
