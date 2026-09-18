import { motion } from "framer-motion";
import { ExternalLink, Check, Lock, ShieldCheck, Cpu, Database, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projectsData } from "../data/portfolioData";

function DecisionOSMockup() {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-xs">
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-gray-100 bg-[#F9FAFB]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white border border-gray-200/80 text-[11px] text-slate-500 font-mono">
          <Lock size={10} className="text-slate-400" />
          <span>decisionos.internal/diagnostics</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Live Model</span>
        </div>
      </div>

      {/* Mock Dashboard Body */}
      <div className="p-4 sm:p-5 bg-white flex flex-col gap-3">
        {/* Top Metrics Row */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-2.5">
            <p className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 mb-0.5">ARR Growth</p>
            <p className="text-sm sm:text-base font-bold text-slate-800 tracking-tight">+16.4%</p>
          </div>
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-2.5">
            <p className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 mb-0.5">Health Score</p>
            <p className="text-sm sm:text-base font-bold text-navy tracking-tight">98.2 / 100</p>
          </div>
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-2.5">
            <p className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 mb-0.5">Risk Level</p>
            <p className="text-sm sm:text-base font-bold text-emerald-600 tracking-tight">Low (0.02)</p>
          </div>
        </div>

        {/* Bottom Section Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-stretch">
          {/* Left Panel: Root Cause Analysis */}
          <div className="sm:col-span-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-1.5 border-b border-gray-200/70 mb-2">
              <span className="text-[11px] font-semibold text-slate-800 flex items-center gap-1.5">
                <Cpu size={12} className="text-navy" />
                Root Cause Analysis
              </span>
              <span className="text-[9px] text-slate-500 font-mono bg-white px-1.5 py-0.5 rounded border border-gray-200">
                FastAPI Core
              </span>
            </div>

            <div className="space-y-2.5">
              {/* Issue 1 */}
              <div>
                <div className="flex justify-between items-center text-[10px] mb-1">
                  <span className="font-medium text-slate-700">Database Read Contention</span>
                  <span className="font-semibold text-slate-900 font-mono">84%</span>
                </div>
                <div className="h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
                  <div className="h-full bg-navy rounded-full" style={{ width: "84%" }} />
                </div>
              </div>

              {/* Issue 2 */}
              <div>
                <div className="flex justify-between items-center text-[10px] mb-1">
                  <span className="font-medium text-slate-700">Cache Miss Ratio</span>
                  <span className="font-semibold text-slate-900 font-mono">32%</span>
                </div>
                <div className="h-1.5 bg-slate-200/80 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-400 rounded-full" style={{ width: "32%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: AI Diagnosis */}
          <div className="sm:col-span-6 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-1.5 border-b border-gray-200/70 mb-2">
              <span className="text-[11px] font-semibold text-slate-800 flex items-center gap-1.5">
                <Sparkles size={12} className="text-navy" />
                AI Diagnosis
              </span>
              <span className="text-[9px] bg-blue-50 text-navy font-semibold px-1.5 py-0.5 rounded border border-blue-200/60 font-mono">
                96.8% Confidence
              </span>
            </div>

            {/* Structured Information Cards */}
            <div className="space-y-1.5 text-[10px]">
              <div className="flex items-center justify-between bg-white px-2 py-1.5 rounded border border-gray-200/70">
                <span className="text-slate-500 font-medium">Primary Cause</span>
                <span className="font-semibold text-slate-800 truncate max-w-[125px] sm:max-w-[135px]">Read Contention</span>
              </div>
              <div className="flex items-center justify-between bg-white px-2 py-1.5 rounded border border-gray-200/70">
                <span className="text-slate-500 font-medium">Business Impact</span>
                <span className="font-semibold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded text-[9px] border border-amber-200/60">
                  High
                </span>
              </div>
              <div className="flex items-center justify-between bg-white px-2 py-1.5 rounded border border-gray-200/70">
                <span className="text-slate-500 font-medium">Action</span>
                <span className="font-semibold text-navy font-mono text-[9.5px]">Scale Replicas</span>
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
    <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-xs">
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-gray-100 bg-[#F9FAFB]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white border border-gray-200/80 text-[11px] text-slate-500 font-mono">
          <Lock size={10} className="text-slate-400" />
          <span>avelis.platform/admin/catalog</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/60">
          <ShieldCheck size={11} className="text-navy" />
          <span>RBAC Protected</span>
        </div>
      </div>

      {/* Mock Inventory Body */}
      <div className="p-4 sm:p-5 bg-white flex flex-col gap-3">
        {/* Metric Row */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-2.5">
            <p className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 mb-0.5">Catalog Assets</p>
            <p className="text-sm sm:text-base font-bold text-slate-800 tracking-tight">18,450 <span className="text-[10px] font-normal text-slate-500">vols</span></p>
          </div>
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-2.5">
            <p className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 mb-0.5">Active Loans</p>
            <p className="text-sm sm:text-base font-bold text-navy tracking-tight">1,284 <span className="text-[10px] font-normal text-emerald-600">Sync</span></p>
          </div>
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-2.5">
            <p className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 mb-0.5">PostgreSQL Pool</p>
            <p className="text-sm sm:text-base font-bold text-emerald-600 tracking-tight">Healthy</p>
          </div>
        </div>

        {/* Live Inventory Table Stream */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3 min-h-[96px] flex flex-col justify-between">
          <div className="flex items-center justify-between pb-1.5 border-b border-gray-200 mb-1.5">
            <span className="text-[11px] font-semibold text-slate-700 flex items-center gap-1.5">
              <Database size={12} className="text-navy" />
              Relational Catalog Stream
            </span>
            <span className="text-[9px] text-slate-400 font-mono">Prisma v5.2</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] bg-white px-2.5 py-1.5 rounded border border-gray-100">
              <span className="font-medium text-slate-800 truncate max-w-[170px] sm:max-w-[210px]">Designing Data-Intensive Apps</span>
              <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Available</span>
            </div>
            <div className="flex items-center justify-between text-[11px] bg-white px-2.5 py-1.5 rounded border border-gray-100">
              <span className="font-medium text-slate-800 truncate max-w-[170px] sm:max-w-[210px]">Database Internals & Storage</span>
              <span className="text-[9px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">Reserved</span>
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
      transition={{ delay: index * 0.12, duration: 0.45, ease: "easeOut" }}
      className="bg-white border border-[#E5E7EB] rounded-[22px] overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] hover:border-[#D1D5DB] transition-all duration-300 flex flex-col h-full"
    >
      {/* Project Browser Mockup Preview */}
      <div className="bg-[#F8FAFC] border-b border-[#E5E7EB] p-4 sm:p-6 flex-shrink-0">
        {isFlagship ? <DecisionOSMockup /> : <AvelisMockup />}
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Badge & Category */}
          <div className="flex items-center gap-2 mb-3.5">
            <span
              className={`px-3 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-full ${
                isFlagship
                  ? "bg-navy text-white shadow-xs"
                  : "bg-blue-50 text-navy border border-blue-200/60"
              }`}
            >
              {project.badge}
            </span>
          </div>

          {/* Project Title & Tagline */}
          <h3 className="font-serif text-2xl sm:text-3xl text-text-primary tracking-tight font-normal mb-1.5">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-navy tracking-wide mb-3.5">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Architecture / Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6 pt-5 border-t border-gray-100">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Engineering Highlights
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-2">
                    <Check size={14} className="text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-700 leading-tight">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="pt-4 border-t border-gray-100">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Technologies & Infrastructure
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((techItem) => (
                <span
                  key={techItem}
                  className="px-2.5 py-1 text-[11px] font-medium text-slate-700 bg-[#F8FAFC] rounded-md border border-[#E2E8F0]"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Links Bar */}
        <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-3">
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-medium text-white bg-navy rounded-lg hover:bg-navy-dark hover:shadow-xs transition-all duration-200"
          >
            <ExternalLink size={13} />
            <span>Live Demo</span>
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-700 bg-white border border-[#E5E7EB] rounded-lg hover:border-navy hover:text-navy hover:bg-[#F8FAFC] transition-all duration-200"
          >
            <GithubIcon size={13} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-canvas">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-14"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-2">
                Featured Projects
              </h2>
              <div className="w-12 h-0.5 bg-navy" />
            </div>
            <p className="text-text-secondary text-sm sm:text-base max-w-lg">
              Production-grade systems, AI diagnosis platforms, and scalable backend architectures.
            </p>
          </div>
        </motion.div>

        {/* 2-Column Balanced Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
