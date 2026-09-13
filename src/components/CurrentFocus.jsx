import { motion } from "framer-motion";
import { Code, Server, Database, Brain } from "lucide-react";
import { currentFocusData } from "../data/portfolioData";

const iconMap = { Code, Server, Database, Brain };

export default function CurrentFocus() {
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
            Current Focus
          </h2>
          <div className="w-12 h-0.5 bg-navy mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentFocusData.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-white border border-border rounded-xl p-5 hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-50 text-navy mb-3">
                  {Icon && <Icon size={18} />}
                </div>
                <p className="text-sm font-medium text-text-primary leading-snug">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
