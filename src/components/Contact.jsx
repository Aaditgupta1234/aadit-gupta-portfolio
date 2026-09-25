import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check, FileText, Copy, ExternalLink, X } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./BrandIcons";
import { contactData } from "../data/portfolioData";
import MotionSection from "../motion/MotionSection";
import {
  buttonMicroVariants,
  socialIconVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from "../motion/variants";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);
  const email = contactData?.email || "aaditgupta2006@gmail.com";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}`;
  const mailtoUrl = `mailto:${email}`;

  const handleCopy = (e) => {
    e?.stopPropagation();
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }
    if (showOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showOptions]);

  return (
    <MotionSection id="contact" className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-[760px] mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Badge */}
          <motion.span
            variants={staggerItemVariants}
            className="inline-block px-3 py-1 text-xs font-semibold tracking-[0.2em] text-navy bg-blue-50 rounded-full mb-4"
          >
            {contactData?.badge || "LET'S CONNECT"}
          </motion.span>

          {/* Headline */}
          <motion.h2
            variants={staggerItemVariants}
            className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] text-text-primary tracking-tight leading-[1.15] mb-5"
          >
            {contactData?.headline || "Building software with purpose."}
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            variants={staggerItemVariants}
            className="text-base sm:text-lg text-text-secondary font-normal leading-relaxed max-w-xl mx-auto mb-7"
          >
            {contactData?.description}
          </motion.p>

          {/* Primary CTA with Interactive Email Launcher */}
          <motion.div
            variants={staggerItemVariants}
            className="relative inline-flex flex-col items-center justify-center"
            ref={dropdownRef}
          >
            <div className="flex items-center gap-2">
              {/* Direct Gmail Web Action */}
              <motion.a
                href={gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonMicroVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-navy rounded-lg hover:bg-navy-dark transition-colors duration-200 shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                aria-label="Send email via Gmail"
              >
                <Mail size={16} />
                <span>Email Me (Gmail)</span>
                <ExternalLink size={13} className="opacity-70" />
              </motion.a>

              {/* Options Toggle for Other Clients / Copy */}
              <motion.button
                onClick={() => setShowOptions(!showOptions)}
                variants={buttonMicroVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                type="button"
                className="inline-flex items-center justify-center px-3.5 py-3 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
                aria-label="More email options"
                title="More email options"
              >
                {showOptions ? <X size={16} /> : <span className="text-xs font-semibold px-0.5">Options ▾</span>}
              </motion.button>
            </div>

            {/* Email Address Quick Copy Chip */}
            <button
              onClick={handleCopy}
              type="button"
              className="mt-3 inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-navy transition-colors bg-slate-50 hover:bg-blue-50 px-3 py-1 rounded-full border border-slate-200 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-500" />
                  <span className="text-emerald-600 font-medium">Copied {email}</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>{email}</span>
                </>
              )}
            </button>

            {/* Options Dropdown Menu */}
            <AnimatePresence>
              {showOptions && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-2 z-50 text-left"
                >
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Choose Mail Service
                  </div>

                  {/* Gmail Web */}
                  <a
                    href={gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowOptions(false)}
                    className="flex items-center justify-between px-3 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-navy rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs">
                        G
                      </div>
                      <span className="font-medium">Gmail (Web)</span>
                    </div>
                    <ExternalLink size={13} className="text-slate-400" />
                  </a>

                  {/* Outlook Web */}
                  <a
                    href={outlookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowOptions(false)}
                    className="flex items-center justify-between px-3 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-navy rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-xs">
                        O
                      </div>
                      <span className="font-medium">Outlook (Web)</span>
                    </div>
                    <ExternalLink size={13} className="text-slate-400" />
                  </a>

                  {/* Default Mail App (mailto) */}
                  <a
                    href={mailtoUrl}
                    onClick={() => setShowOptions(false)}
                    className="flex items-center justify-between px-3 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-navy rounded-lg transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs">
                        <Mail size={12} />
                      </div>
                      <span className="font-medium">Default Mail App</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">mailto:</span>
                  </a>

                  <div className="my-1 border-t border-slate-100" />

                  {/* Copy Email */}
                  <button
                    onClick={(e) => {
                      handleCopy(e);
                      setShowOptions(false);
                    }}
                    type="button"
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                  >
                    <Copy size={14} className="text-slate-400" />
                    <span>Copy email address</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Social Links — Resume • GitHub • LinkedIn • LeetCode */}
          <motion.div
            variants={staggerItemVariants}
            className="mt-8 flex items-center justify-center flex-wrap gap-4 sm:gap-5 text-sm text-text-secondary"
          >
            <motion.a
              href={contactData?.resumeUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              initial="rest"
              whileHover="hover"
              className="relative inline-flex items-center gap-1.5 font-medium hover:text-navy transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-navy hover:after:w-full after:transition-all after:duration-200"
              aria-label="Resume Document"
            >
              <FileText size={15} />
              Resume
            </motion.a>

            <span className="text-slate-300 select-none" aria-hidden="true">
              •
            </span>

            <motion.a
              href={contactData?.links?.github || "https://github.com/Aaditgupta1234"}
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              initial="rest"
              whileHover="hover"
              className="relative inline-flex items-center gap-1.5 font-medium hover:text-navy transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-navy hover:after:w-full after:transition-all after:duration-200"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={15} />
              GitHub
            </motion.a>

            <span className="text-slate-300 select-none" aria-hidden="true">
              •
            </span>

            <motion.a
              href={contactData?.links?.linkedin || "https://www.linkedin.com/in/aadit-gupta-028385327/"}
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              initial="rest"
              whileHover="hover"
              className="relative inline-flex items-center gap-1.5 font-medium hover:text-navy transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-navy hover:after:w-full after:transition-all after:duration-200"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={15} />
              LinkedIn
            </motion.a>

            <span className="text-slate-300 select-none" aria-hidden="true">
              •
            </span>

            <motion.a
              href={contactData?.links?.leetcode || "https://leetcode.com/u/AaditGupta_1234/"}
              target="_blank"
              rel="noopener noreferrer"
              variants={socialIconVariants}
              initial="rest"
              whileHover="hover"
              className="relative inline-flex items-center gap-1.5 font-medium hover:text-navy transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-navy hover:after:w-full after:transition-all after:duration-200"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon size={15} />
              LeetCode
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </MotionSection>
  );
}
