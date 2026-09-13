import { motion } from "framer-motion";
import { journeyData } from "../data/portfolioData";

export default function JourneyTimeline() {
  return (
    <section id="journey" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-2">
            Journey
          </h2>
          <div className="w-12 h-0.5 bg-navy mb-12" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {journeyData.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.4 }}
                className="relative flex items-start gap-5"
              >
                {/* Dot */}
                <div className="relative z-10 w-[38px] h-[38px] flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-navy border-[3px] border-white shadow-sm" />
                </div>

                {/* Content */}
                <div className="pb-1">
                  <span className="inline-block px-2.5 py-0.5 text-xs font-semibold text-navy bg-blue-50 rounded-full mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-base font-semibold text-text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
