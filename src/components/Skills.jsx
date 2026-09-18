import { motion } from "framer-motion";
import { FileCode, Server, Database, Monitor, Wrench } from "lucide-react";
import { skillsData } from "../data/portfolioData";
import MotionSection from "../motion/MotionSection";
import { headerAccentLineVariants, cardHoverVariants } from "../motion/variants";

const iconMap = { FileCode, Server, Database, Monitor, Wrench };

export default function Skills() {
  return (
    <MotionSection id="skills" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-2">
            Technical Expertise
          </h2>
          {/* GPU-accelerated animated accent line */}
          <motion.div
            variants={headerAccentLineVariants}
            className="w-16 h-0.5 bg-navy origin-left mb-10"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((group, i) => {
            const Icon = iconMap[group.icon];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: "easeOut" }}
                variants={cardHoverVariants}
                whileHover="hover"
                className="bg-canvas border border-border rounded-xl p-6 hover:border-navy/30 hover:shadow-xs transition-colors duration-200"
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
    </MotionSection>
  );
}
