import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import { navLinks } from "../data/portfolioData";
import { useActiveSection } from "../hooks/useActiveSection";
import { buttonHoverVariants } from "../motion/variants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="font-serif text-xl text-text-primary tracking-tight transition-colors duration-200 hover:text-navy"
        >
          Aadit Gupta
        </a>

        {/* Desktop Nav with Animated Underline */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-navy font-semibold"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-navy rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Resume Button (Desktop) */}
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          variants={buttonHoverVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-navy rounded-lg hover:bg-navy-dark transition-colors duration-200"
        >
          <FileDown size={15} />
          Resume
        </motion.a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-text-primary focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? "text-navy font-semibold"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-navy rounded-lg w-fit"
              >
                <FileDown size={15} />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
