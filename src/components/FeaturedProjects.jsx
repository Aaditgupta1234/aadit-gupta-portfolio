import { motion } from "framer-motion";
import { ExternalLink, Check } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projectsData } from "../data/portfolioData";

function ProjectCard({ project, index }) {
  const isFlagship = project.flagship;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className={`bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col ${
        isFlagship ? "lg:col-span-2" : ""
      }`}
    >
      {/* Screenshot Placeholder */}
      <div className="bg-canvas border-b border-border p-6">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          {/* Browser Chrome */}
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-100 bg-gray-50/60">
            <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
            <span className="ml-3 text-[10px] text-text-secondary truncate flex-1">
              {isFlagship ? "decisionos.app — KPI Dashboard" : "avelis.app — Digital Library"}
            </span>
          </div>
          {/* Mock UI Content */}
          {isFlagship ? (
            <div className="p-5 min-h-[140px]">
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: "Revenue", val: "+12.4%", color: "text-green-600" },
                  { label: "Efficiency", val: "87.2", color: "text-navy" },
                  { label: "Risk Score", val: "Low", color: "text-emerald-600" },
                ].map((kpi) => (
                  <div key={kpi.label} className="bg-canvas rounded-lg p-3 border border-border">
                    <p className="text-[10px] text-text-secondary mb-1">{kpi.label}</p>
                    <p className={`text-lg font-semibold ${kpi.color}`}>{kpi.val}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <div className="flex-1 bg-canvas rounded-lg p-3 border border-border">
                  <p className="text-[10px] text-text-secondary mb-2">Root Cause Breakdown</p>
                  <div className="space-y-1.5">
                    {["Supply Chain Delay", "Cost Overhead", "Market Shift"].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-navy" />
                        <span className="text-[10px] text-text-primary">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-1/3 bg-canvas rounded-lg p-3 border border-border">
                  <p className="text-[10px] text-text-secondary mb-2">Intelligence</p>
                  <div className="h-2 bg-navy/20 rounded-full mb-2">
                    <div className="h-2 bg-navy rounded-full" style={{ width: "78%" }} />
                  </div>
                  <p className="text-[10px] text-text-secondary">78% confidence</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-5 min-h-[120px]">
              <div className="flex gap-3 mb-3">
                <div className="w-10 h-14 bg-navy/10 rounded" />
                <div className="w-10 h-14 bg-blue-100 rounded" />
                <div className="w-10 h-14 bg-navy/5 rounded" />
                <div className="w-10 h-14 bg-blue-50 rounded" />
                <div className="w-10 h-14 bg-navy/10 rounded hidden sm:block" />
              </div>
              <div className="h-2 bg-gray-100 rounded-full w-3/4 mb-1.5" />
              <div className="h-2 bg-gray-100 rounded-full w-1/2" />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span
            className={`px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded-full ${
              isFlagship
                ? "bg-navy text-white"
                : "bg-pill text-pill-text"
            }`}
          >
            {project.badge}
          </span>
        </div>

        <h3 className="font-serif text-2xl text-text-primary mb-1">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-navy mb-3">
          {project.tagline}
        </p>
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Architecture Highlights (Flagship only) */}
        {project.highlights.length > 0 && (
          <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
            {project.highlights.map((h) => (
              <div key={h} className="flex items-center gap-2">
                <Check size={14} className="text-navy flex-shrink-0" />
                <span className="text-xs font-medium text-text-primary">{h}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-[10px] font-medium text-pill-text bg-pill rounded-full border border-border"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-navy rounded-lg hover:bg-navy-dark transition-colors"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-text-primary border border-border rounded-lg hover:bg-canvas transition-colors"
          >
            <GithubIcon size={13} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-canvas">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-2">
            Featured Projects
          </h2>
          <div className="w-12 h-0.5 bg-navy mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
