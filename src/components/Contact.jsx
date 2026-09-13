import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./BrandIcons";
import { contactData } from "../data/portfolioData";

const links = [
  {
    label: "Email",
    href: `mailto:${contactData?.email || "aadit@example.com"}`,
    Icon: Mail,
    isBrand: false,
    external: false,
  },
  {
    label: "GitHub",
    href: contactData?.links?.github || "#",
    Icon: GithubIcon,
    isBrand: true,
    external: true,
  },
  {
    label: "LinkedIn",
    href: contactData?.links?.linkedin || "#",
    Icon: LinkedinIcon,
    isBrand: true,
    external: true,
  },
  {
    label: "LeetCode",
    href: contactData?.links?.leetcode || "#",
    Icon: LeetCodeIcon,
    isBrand: true,
    external: true,
  },
];

export default function Contact() {
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
          {links.map((link, i) => {
            const { Icon, isBrand } = link;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="group bg-white border border-border rounded-xl p-5 flex flex-col items-center gap-2 hover:shadow-md hover:border-navy/20 transition-all duration-200"
              >
                {isBrand ? (
                  <Icon
                    size={22}
                    className="text-text-secondary group-hover:text-navy transition-colors duration-200"
                  />
                ) : (
                  <Icon
                    size={22}
                    className="text-text-secondary group-hover:text-navy transition-colors duration-200"
                  />
                )}
                <span className="text-sm font-medium text-text-primary flex items-center gap-1">
                  {link.label}
                  {link.external && (
                    <ArrowUpRight
                      size={12}
                      className="text-text-secondary group-hover:text-navy transition-colors"
                    />
                  )}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
