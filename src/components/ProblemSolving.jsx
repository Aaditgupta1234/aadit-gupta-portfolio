import { motion } from "framer-motion";
import { Target, Flame } from "lucide-react";
import { problemSolvingData } from "../data/portfolioData";

export default function ProblemSolving() {
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
            {problemSolvingData.title}
          </h2>
          <div className="w-12 h-0.5 bg-navy mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Stat Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-border rounded-xl p-6 text-center"
          >
            <div className="w-10 h-10 mx-auto flex items-center justify-center rounded-full bg-blue-50 text-navy mb-3">
              <Target size={20} />
            </div>
            <p className="font-serif text-4xl text-navy mb-1">
              {problemSolvingData.stat}
            </p>
            <p className="text-sm font-semibold text-text-primary">
              {problemSolvingData.statLabel}
            </p>
            <div className="flex items-center justify-center gap-1.5 mt-2 text-xs text-text-secondary">
              <Flame size={13} className="text-orange-400" />
              {problemSolvingData.daily}
            </div>
          </motion.div>

          {/* Topics */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="bg-white border border-border rounded-xl p-6"
          >
            <p className="text-sm font-semibold text-text-primary mb-4">
              Focus Areas
            </p>
            <div className="flex flex-wrap gap-2">
              {problemSolvingData.topics.map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1.5 text-xs font-medium text-navy bg-blue-50 rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white border border-border rounded-xl p-6 flex items-center justify-center"
          >
            <p className="font-serif text-xl text-text-primary italic text-center">
              &ldquo;{problemSolvingData.quote}&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
