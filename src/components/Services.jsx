import { motion } from "framer-motion";
import {
  Building2,
  UserCheck,
  LayoutTemplate,
  Layers,
  Sparkles,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import { servicesData } from "../data/portfolioData";
import MotionSection from "../motion/MotionSection";
import { headerAccentLineVariants, cardHoverVariants } from "../motion/variants";
import { SPRINGS } from "../motion/motionTokens";

const iconMap = {
  Building2,
  UserCheck,
  LayoutTemplate,
  Layers,
  Sparkles,
  RefreshCw,
};

export default function Services() {
  return (
    <MotionSection id="services" className="py-20 md:py-28 bg-canvas border-y border-border/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-[0.2em] text-navy bg-blue-50 rounded-full mb-3">
            {servicesData.badge || "SERVICES & WHAT I BUILD"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-2">
            {servicesData.title || "What I Build"}
          </h2>
          {/* GPU-accelerated animated accent line */}
          <motion.div
            variants={headerAccentLineVariants}
            className="w-16 h-0.5 bg-navy origin-left mb-4"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-3 leading-snug">
            {servicesData.heading}
          </h3>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
            {servicesData.description}
          </p>
        </div>

        {/* Services Grid — 6 clean, minimal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.services.map((service, i) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: "easeOut" }}
                variants={cardHoverVariants}
                whileHover="hover"
                className="group bg-white border border-border rounded-xl p-6 sm:p-7 flex flex-col justify-between hover:border-navy/30 hover:shadow-xs transition-colors duration-200"
              >
                <div>
                  {/* Top Bar: Icon + Tag */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-blue-50/80 border border-blue-100/60 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-colors duration-200">
                      <Icon size={19} />
                    </div>
                    {service.tag && (
                      <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase px-2.5 py-0.5 rounded-full bg-pill border border-border/80">
                        {service.tag}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-base font-semibold text-text-primary mb-2 group-hover:text-navy transition-colors duration-200">
                    {service.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Subtle bottom separator & status indicator */}
                <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px] text-slate-400">0{i + 1}</span>
                  <span className="flex items-center gap-1 text-slate-500 font-medium group-hover:text-navy transition-colors">
                    Available for projects
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimal Collaboration Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="mt-12 p-6 sm:p-8 rounded-xl bg-white border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs"
        >
          <div>
            <h4 className="text-base font-semibold text-text-primary mb-1">
              Have a web project or engineering role in mind?
            </h4>
            <p className="text-sm text-text-secondary">
              Open to contract work, freelance builds, and full-time software engineering roles.
            </p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={SPRINGS.snappy}
            className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-navy rounded-lg hover:bg-navy-dark transition-colors duration-200 shrink-0"
          >
            Start a Conversation
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </motion.a>
        </motion.div>
      </div>
    </MotionSection>
  );
}
