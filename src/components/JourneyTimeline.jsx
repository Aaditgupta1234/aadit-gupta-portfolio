import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Trophy,
  Layers,
  Code2,
  Sparkles,
} from "lucide-react";
import { journeyData } from "../data/portfolioData";

const iconMap = {
  GraduationCap,
  Users,
  Trophy,
  Layers,
  Code2,
  Sparkles,
};

export default function JourneyTimeline() {
  return (
    <section id="journey" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-[0.2em] text-navy bg-blue-50 rounded-full mb-3">
            JOURNEY & MILESTONES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-2">
            Engineering Journey
          </h2>
          <div className="w-12 h-0.5 bg-navy mb-4" />
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
            A chronological record of engineering milestones, leadership, hackathons, and systems development.
          </p>
        </motion.div>

        {/* Hybrid Milestone Timeline */}
        <div className="relative">
          {/* Subtle vertical progress line */}
          <div className="absolute left-[19px] sm:left-[23px] top-6 bottom-6 w-px bg-slate-200" />

          <div className="space-y-6 sm:space-y-7">
            {journeyData.map((item, i) => {
              const Icon = iconMap[item.icon] || Sparkles;
              const isFlagship = Boolean(item.isFlagship);

              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
                  className="relative flex items-start gap-4 sm:gap-6 group"
                >
                  {/* Left Rail Icon Node */}
                  <div
                    className={`relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isFlagship
                        ? "bg-blue-50 border border-navy/40 text-navy shadow-xs ring-2 ring-blue-100/60"
                        : "bg-white border border-border text-navy shadow-xs group-hover:border-navy/40 group-hover:bg-blue-50/40"
                    }`}
                  >
                    <Icon
                      size={18}
                      className="transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>

                  {/* Right Milestone Card */}
                  <div
                    className={`flex-1 rounded-xl p-5 sm:p-6 transition-all duration-200 ${
                      isFlagship
                        ? "bg-white border border-navy/30 ring-1 ring-navy/10 shadow-xs hover:border-navy/60 hover:shadow-sm"
                        : "bg-canvas border border-border hover:border-navy/30 hover:bg-white hover:shadow-xs"
                    }`}
                  >
                    {/* Top Metadata Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-navy">
                          {item.year}
                        </span>
                        {item.badge && (
                          <span
                            className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
                              isFlagship
                                ? "bg-navy text-white shadow-2xs"
                                : "text-slate-500 bg-white border border-border"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.organization && (
                        <span className="text-xs text-text-secondary font-medium hidden sm:inline-block">
                          {item.organization}
                        </span>
                      )}
                    </div>

                    {/* Milestone Title */}
                    <h3
                      className={`text-base font-semibold mb-1 transition-colors ${
                        isFlagship
                          ? "text-text-primary group-hover:text-navy"
                          : "text-text-primary group-hover:text-navy"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Mobile-only Organization Subtitle */}
                    {item.organization && (
                      <p className="text-xs text-navy font-medium sm:hidden mb-2">
                        {item.organization}
                      </p>
                    )}

                    {/* Description */}
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
