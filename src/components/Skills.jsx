import { motion } from "framer-motion";
import { FileCode, Server, Database, Monitor, Wrench } from "lucide-react";
import { skillsData } from "../data/portfolioData";

const iconMap = { FileCode, Server, Database, Monitor, Wrench };

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-2">
            Technical Expertise
          </h2>
          <div className="w-12 h-0.5 bg-navy mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((group, i) => {
            const Icon = iconMap[group.icon];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="bg-canvas border border-border rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-50 text-navy">
                    {Icon && <Icon size={18} />}
                  </div>
                  <h3 className="text-sm font-semibold text-text-primary">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs font-medium text-pill-text bg-white rounded-full border border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
