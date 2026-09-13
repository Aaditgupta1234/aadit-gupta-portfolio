import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./BrandIcons";
import { contactData } from "../data/portfolioData";

const otherLinks = [
  {
    label: "GitHub",
    href: contactData?.links?.github || "#",
    Icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    href: contactData?.links?.linkedin || "#",
    Icon: LinkedinIcon,
    external: true,
  },
  {
    label: "LeetCode",
    href: contactData?.links?.leetcode || "#",
    Icon: LeetCodeIcon,
    external: true,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = contactData?.email || "aaditgupta2006@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-canvas">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl text-text-primary mb-3">
            {contactData.title}
          </h2>
          <p className="text-text-secondary text-sm sm:text-base mb-10">
            {contactData.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Email Card — copy to clipboard */}
          <motion.button
            onClick={handleCopyEmail}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="group bg-white border border-border rounded-xl p-5 flex flex-col items-center gap-2 hover:shadow-md hover:border-navy/20 transition-all duration-200 cursor-pointer"
          >
            {copied ? (
              <Check size={22} className="text-green-500" />
            ) : (
              <Mail size={22} className="text-text-secondary group-hover:text-navy transition-colors duration-200" />
            )}
            <span className="text-sm font-medium text-text-primary">
              {copied ? "Copied!" : "Email"}
            </span>
            <span className="text-[11px] text-text-secondary truncate max-w-full">
              {email}
            </span>
          </motion.button>

          {/* Other Links */}
          {otherLinks.map((link, i) => {
            const { Icon } = link;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.08, duration: 0.35 }}
                className="group bg-white border border-border rounded-xl p-5 flex flex-col items-center gap-2 hover:shadow-md hover:border-navy/20 transition-all duration-200"
              >
                <Icon
                  size={22}
                  className="text-text-secondary group-hover:text-navy transition-colors duration-200"
                />
                <span className="text-sm font-medium text-text-primary flex items-center gap-1">
                  {link.label}
                  <ArrowUpRight
                    size={12}
                    className="text-text-secondary group-hover:text-navy transition-colors"
                  />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
