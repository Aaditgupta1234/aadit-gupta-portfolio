import { motion } from "framer-motion";
import { ExternalLink, Check, Lock, ShieldCheck, Cpu, Database, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projectsData } from "../data/portfolioData";

function DecisionOSMockup() {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden shadow-2xs">
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 bg-[#F9FAFB]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
          <span className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
          <span className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white border border-gray-200/80 text-[10px] text-slate-500 font-mono">
          <Lock size={9} className="text-slate-400" />
          <span>decisionos.internal/diagnostics</span>
        </div>
        <div className="flex items-center gap-1 text-[9px] font-medium text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded-full border border-blue-200/60">
          <span className="w-1.5 h-1.5 rounded-full bg-navy animate-pulse" />
          <span>Analytics Engine</span>
        </div>
      </div>

      {/* Mock Dashboard Body */}
      <div className="p-3 sm:p-3.5 bg-white flex flex-col gap-2.5">
        {/* Top Architecture / Pipeline Status Row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded p-2">
            <p className="text-[9px] uppercase font-semibold tracking-wider text-slate-400 mb-0.5">Ingestion</p>
            <p className="text-xs font-bold text-slate-800 tracking-tight">Pandas & SQL</p>
          </div>
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded p-2">
            <p className="text-[9px] uppercase font-semibold tracking-wider text-slate-400 mb-0.5">Analytics</p>
            <p className="text-xs font-bold text-navy tracking-tight">KPI Aggregation</p>
          </div>
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded p-2">
            <p className="text-[9px] uppercase font-semibold tracking-wider text-slate-400 mb-0.5">Diagnostics</p>
            <p className="text-xs font-bold text-slate-800 tracking-tight">Root Cause Layer</p>
          </div>
        </div>

        {/* Bottom Section Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-stretch">
          {/* Left Panel: Root Cause Analysis */}
          <div className="sm:col-span-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded p-2.5 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-1 border-b border-gray-200/70 mb-1.5">
              <span className="text-[10px] font-semibold text-slate-800 flex items-center gap-1">
                <Cpu size={11} className="text-navy" />
                Root Cause Attribution
              </span>
              <span className="text-[8.5px] text-slate-500 font-mono bg-white px-1 py-0.5 rounded border border-gray-200">
                FastAPI
              </span>
            </div>

            <div className="space-y-1.5">
              <div>
                <div className="flex justify-between items-center text-[9.5px] mb-0.5">
                  <span className="font-medium text-slate-700">Read Contention</span>
                  <span className="font-semibold text-slate-900 font-mono text-[9px]">Primary Driver</span>
                </div>
                <div className="h-1 bg-slate-200/80 rounded-full overflow-hidden">
                  <div className="h-full bg-navy rounded-full" style={{ width: "80%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-[9.5px] mb-0.5">
                  <span className="font-medium text-slate-700">Cache Miss Ratio</span>
                  <span className="font-semibold text-slate-900 font-mono text-[9px]">Secondary Factor</span>
                </div>
                <div className="h-1 bg-slate-200/80 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-400 rounded-full" style={{ width: "35%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Explainable Diagnostics Output */}
          <div className="sm:col-span-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded p-2.5 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-1 border-b border-gray-200/70 mb-1.5">
              <span className="text-[10px] font-semibold text-slate-800 flex items-center gap-1">
                <Sparkles size={11} className="text-navy" />
                Diagnostics
              </span>
              <span className="text-[8.5px] bg-blue-50 text-navy font-semibold px-1 py-0.5 rounded border border-blue-200/60 font-mono">
                Rule Engine
              </span>
            </div>

            <div className="space-y-1 text-[9.5px]">
              <div className="flex items-center justify-between bg-white px-1.5 py-1 rounded border border-gray-200/70">
                <span className="text-slate-500 font-medium">Anomaly</span>
                <span className="font-semibold text-slate-800">Resource Contention</span>
              </div>
              <div className="flex items-center justify-between bg-white px-1.5 py-1 rounded border border-gray-200/70">
                <span className="text-slate-500 font-medium">Action</span>
                <span className="font-semibold text-navy font-mono text-[9px]">Scale Read Replicas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AvelisMockup() {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden shadow-2xs">
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 bg-[#F9FAFB]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
          <span className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
          <span className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white border border-gray-200/80 text-[10px] text-slate-500 font-mono">
          <Lock size={9} className="text-slate-400" />
          <span>avelis-library.vercel.app</span>
        </div>
        <div className="flex items-center gap-1 text-[9px] font-medium text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded-full border border-blue-200/60">
          <ShieldCheck size={10} className="text-navy" />
          <span>RBAC Protected</span>
        </div>
      </div>

      {/* Mock Inventory Body */}
      <div className="p-3 sm:p-3.5 bg-white flex flex-col gap-2.5">
        {/* Metric Row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded p-2">
            <p className="text-[9px] uppercase font-semibold tracking-wider text-slate-400 mb-0.5">Catalog Layer</p>
            <p className="text-xs font-bold text-slate-800 tracking-tight">PostgreSQL / Prisma</p>
          </div>
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded p-2">
            <p className="text-[9px] uppercase font-semibold tracking-wider text-slate-400 mb-0.5">Circulation</p>
            <p className="text-xs font-bold text-navy tracking-tight">Borrow & Return</p>
          </div>
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded p-2">
            <p className="text-[9px] uppercase font-semibold tracking-wider text-slate-400 mb-0.5">Access Control</p>
            <p className="text-xs font-bold text-slate-800 tracking-tight">Admin / Member</p>
          </div>
        </div>

        {/* Bottom Section Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-stretch">
          {/* Left Panel: Catalog & Loan Workflows */}
          <div className="sm:col-span-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded p-2.5 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-1 border-b border-gray-200/70 mb-1.5">
              <span className="text-[10px] font-semibold text-slate-800 flex items-center gap-1">
                <Database size={11} className="text-navy" />
                Catalog & Circulation
              </span>
              <span className="text-[8.5px] text-slate-500 font-mono bg-white px-1 py-0.5 rounded border border-gray-200">
                Prisma ORM
              </span>
            </div>

            <div className="space-y-1 text-[9.5px]">
              <div className="flex items-center justify-between bg-white px-1.5 py-1 rounded border border-gray-200/70">
                <span className="font-medium text-slate-800 truncate max-w-[110px] sm:max-w-[125px]">Data-Intensive Apps</span>
                <span className="text-[8.5px] font-semibold text-amber-700 bg-amber-50 px-1 py-0.5 rounded border border-amber-200/50">Borrowed</span>
              </div>
              <div className="flex items-center justify-between bg-white px-1.5 py-1 rounded border border-gray-200/70">
                <span className="font-medium text-slate-800 truncate max-w-[110px] sm:max-w-[125px]">Database Internals</span>
                <span className="text-[8.5px] font-semibold text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded border border-emerald-200/50">Available</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Architecture & Data Integrity */}
          <div className="sm:col-span-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded p-2.5 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-1 border-b border-gray-200/70 mb-1.5">
              <span className="text-[10px] font-semibold text-slate-800 flex items-center gap-1">
                <ShieldCheck size={11} className="text-navy" />
                Architecture
              </span>
              <span className="text-[8.5px] bg-blue-50 text-navy font-semibold px-1 py-0.5 rounded border border-blue-200/60 font-mono">
                MVC Pattern
              </span>
            </div>

            <div className="space-y-1 text-[9.5px]">
              <div className="flex items-center justify-between bg-white px-1.5 py-1 rounded border border-gray-200/70">
                <span className="text-slate-500 font-medium">Layering</span>
                <span className="font-semibold text-slate-800">Controller &rarr; Service &rarr; DB</span>
              </div>
              <div className="flex items-center justify-between bg-white px-1.5 py-1 rounded border border-gray-200/70">
                <span className="text-slate-500 font-medium">Security</span>
                <span className="font-semibold text-navy font-mono text-[9px]">JWT & RBAC Middleware</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const isFlagship = project.flagship;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
      className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.06)] hover:border-[#D1D5DB] transition-all duration-300 flex flex-col h-full"
    >
      {/* Project Browser Mockup Preview */}
      <div className="bg-[#F8FAFC] border-b border-[#E5E7EB] p-3.5 sm:p-4.5 flex-shrink-0">
        {isFlagship ? <DecisionOSMockup /> : <AvelisMockup />}
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Badge & Category */}
          <div className="flex items-center gap-2 mb-2.5">
            <span
              className={`px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase rounded-full ${
                isFlagship
                  ? "bg-navy text-white shadow-2xs"
                  : "bg-blue-50 text-navy border border-blue-200/60"
              }`}
            >
              {project.badge}
            </span>
          </div>

          {/* Project Title & Tagline */}
          <h3 className="font-serif text-xl sm:text-2xl text-text-primary tracking-tight font-normal mb-1">
            {project.title}
          </h3>
          <p className="text-xs sm:text-[13px] font-semibold text-navy tracking-wide mb-2.5">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-[13px] sm:text-sm text-text-secondary leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Architecture / Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-4 pt-3.5 border-t border-gray-100">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Key Engineering Highlights
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-1.5">
                    <Check size={13} className="text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-[11.5px] font-medium text-slate-700 leading-tight">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="pt-3 border-t border-gray-100">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Core Technologies
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((techItem) => (
                <span
                  key={techItem}
                  className="px-2.5 py-0.5 text-[11px] font-medium text-slate-700 bg-[#F8FAFC] rounded border border-[#E2E8F0]"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Links Bar */}
        <div className="pt-4 mt-4 border-t border-gray-100 flex items-center gap-2.5">
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-navy rounded-lg hover:bg-navy-dark hover:shadow-2xs transition-all duration-200"
          >
            <ExternalLink size={12} />
            <span>Live Demo</span>
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-700 bg-white border border-[#E5E7EB] rounded-lg hover:border-navy hover:text-navy hover:bg-[#F8FAFC] transition-all duration-200"
          >
            <GithubIcon size={12} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-canvas">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-2">
                Featured Projects
              </h2>
              <div className="w-12 h-0.5 bg-navy" />
            </div>
            <p className="text-text-secondary text-sm sm:text-base max-w-lg">
              Engineered systems, AI platforms, and full-stack applications built for scalability and technical depth.
            </p>
          </div>
        </motion.div>

        {/* 2-Column Balanced Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8 items-stretch">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
