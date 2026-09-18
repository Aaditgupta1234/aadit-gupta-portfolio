import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./BrandIcons";
import { contactData } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = contactData?.email || "aaditgupta2006@gmail.com";

  const handleEmailClick = () => {
    // Copy email address to clipboard as an instant fallback
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });

    // Open default mail client
    window.location.href = `mailto:${email}?subject=Software%20Engineering%20Opportunity`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-[760px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {/* Badge */}
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-[0.2em] text-navy bg-blue-50 rounded-full mb-4">
            {contactData?.badge || "LET'S CONNECT"}
          </span>

          {/* Headline — DM Serif Display */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] text-text-primary tracking-tight leading-[1.15] mb-5">
            {contactData?.headline || "Building software with purpose."}
          </h2>

          {/* Supporting Text — Inter */}
          <p className="text-base sm:text-lg text-text-secondary font-normal leading-relaxed max-w-xl mx-auto mb-7">
            {contactData?.description}
          </p>

          {/* Primary CTA — Single Action */}
          <div className="flex flex-col items-center justify-center">
            <button
              onClick={handleEmailClick}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium text-white bg-navy rounded-lg hover:bg-navy-dark transition-all duration-200 shadow-2xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
              aria-label="Send email or copy address"
            >
              {copied ? (
                <>
                  <Check size={15} className="text-emerald-400" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail size={15} />
                  <span>Email Me</span>
                </>
              )}
            </button>

            {/* Instant clipboard feedback */}
            {copied && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-emerald-600 font-medium mt-2.5"
              >
                {email} copied to clipboard
              </motion.p>
            )}
          </div>

          {/* Social Links — Order: Resume • GitHub • LinkedIn • LeetCode */}
          <div className="mt-8 flex items-center justify-center flex-wrap gap-4 sm:gap-5 text-sm text-text-secondary">
            <a
              href={contactData?.resumeUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-1.5 font-medium hover:text-navy transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-navy hover:after:w-full after:transition-all after:duration-200"
              aria-label="Resume Document"
            >
              <FileText size={15} />
              Resume
            </a>

            <span className="text-slate-300 select-none" aria-hidden="true">
              •
            </span>

            <a
              href={contactData?.links?.github || "https://github.com/Aaditgupta1234"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-1.5 font-medium hover:text-navy transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-navy hover:after:w-full after:transition-all after:duration-200"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={15} />
              GitHub
            </a>

            <span className="text-slate-300 select-none" aria-hidden="true">
              •
            </span>

            <a
              href={contactData?.links?.linkedin || "https://www.linkedin.com/in/aadit-gupta-028385327/"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-1.5 font-medium hover:text-navy transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-navy hover:after:w-full after:transition-all after:duration-200"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={15} />
              LinkedIn
            </a>

            <span className="text-slate-300 select-none" aria-hidden="true">
              •
            </span>

            <a
              href={contactData?.links?.leetcode || "https://leetcode.com/u/AaditGupta_1234/"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-1.5 font-medium hover:text-navy transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-navy hover:after:w-full after:transition-all after:duration-200"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon size={15} />
              LeetCode
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
