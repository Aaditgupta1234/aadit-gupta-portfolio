import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { educationData } from "../data/portfolioData";

export default function Education() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-2">
            Education
          </h2>
          <div className="w-12 h-0.5 bg-navy mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="bg-canvas border border-border rounded-xl p-8 max-w-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-50 text-navy flex-shrink-0 mt-0.5">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                {educationData.degree}
              </h3>
              <p className="text-sm text-text-secondary mb-1">
                {educationData.institution}
              </p>
              <p className="text-sm text-text-secondary mb-4">
                {educationData.graduation} &middot; {educationData.year}
              </p>
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-2">
                Current Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {educationData.focus.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs font-medium text-navy bg-blue-50 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
