import { motion } from "framer-motion";
import { metricsData } from "../data/portfolioData";

export default function Metrics() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {metricsData.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-canvas border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-200"
            >
              <p className="font-serif text-4xl text-navy mb-1">{metric.value}</p>
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
