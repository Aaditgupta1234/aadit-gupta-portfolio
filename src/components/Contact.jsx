import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./BrandIcons";
import { contactData } from "../data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = contactData?.email || "aaditgupta2006@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-canvas border-t border-border/60">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-border rounded-2xl p-8 sm:p-12 md:p-16 text-center shadow-xs"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-navy bg-blue-50 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-navy animate-pulse" />
            {contactData?.badge || "AVAILABILITY & CONTACT"}
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-primary tracking-tight leading-[1.2] max-w-2xl mx-auto mb-5">
            {contactData?.headline || "Have a project, freelance opportunity, or engineering role in mind?"}
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10">
            {contactData?.supportingText}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            {/* Primary Action: Start a Conversation */}
            <a
              href={`mailto:${email}?subject=Project%20or%20Opportunity%20Inquiry`}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium text-white bg-navy rounded-lg hover:bg-navy-dark shadow-xs hover:shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2"
            >
              <Mail size={16} />
              Start a Conversation
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>

            {/* Secondary Action: Copy Email */}
            <button
              onClick={handleCopyEmail}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-text-primary bg-white border border-border rounded-lg hover:bg-gray-50/80 hover:border-slate-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 cursor-pointer"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-green-600" />
                  <span className="text-green-600 font-medium">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} className="text-text-secondary" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Inline Profile Row */}
          <div className="pt-8 border-t border-gray-100 flex items-center justify-center flex-wrap gap-4 sm:gap-6 text-sm">
            <a
              href={contactData?.links?.github || "https://github.com/Aaditgupta1234"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-1.5 font-medium text-text-secondary hover:text-navy transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-navy hover:after:w-full after:transition-all after:duration-200"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
              GitHub
            </a>

            <span className="text-gray-300 select-none" aria-hidden="true">
              ·
            </span>

            <a
              href={contactData?.links?.linkedin || "https://www.linkedin.com/in/aadit-gupta-028385327/"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-1.5 font-medium text-text-secondary hover:text-navy transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-navy hover:after:w-full after:transition-all after:duration-200"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>

            <span className="text-gray-300 select-none" aria-hidden="true">
              ·
            </span>

            <a
              href={contactData?.links?.leetcode || "https://leetcode.com/u/AaditGupta_1234/"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-1.5 font-medium text-text-secondary hover:text-navy transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-navy hover:after:w-full after:transition-all after:duration-200"
              aria-label="LeetCode Profile"
            >
              <LeetCodeIcon size={16} />
              LeetCode
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
