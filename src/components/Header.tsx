"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Header() {
  const { activeSection, scrollToSection } = useSmoothScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClass = (section: string) => {
    const baseClass = "transition-colors duration-200 relative";
    const isActive = activeSection === section;

    return `${baseClass} ${
      isActive
        ? "text-[var(--accent)] font-medium"
        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
    }`;
  };

  const mobileNavLinkClass = (section: string) => {
    const baseClass =
      "block py-3 px-4 text-lg font-medium transition-colors duration-200";
    const isActive = activeSection === section;

    return `${baseClass} ${
      isActive
        ? "text-[var(--accent)] bg-[var(--background-secondary)]"
        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--background-secondary)]"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 bg-[var(--background-secondary)]/80 backdrop-blur-md border-b border-[var(--border-light)]">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-[var(--text-primary)] tracking-tight">
              Richard Strauss
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className={navLinkClass("about")}
              onClick={(e) => handleNavClick(e, "about")}
            >
              About
              {activeSection === "about" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--accent)] rounded-full"></span>
              )}
            </a>
            <a
              href="#experience"
              className={navLinkClass("experience")}
              onClick={(e) => handleNavClick(e, "experience")}
            >
              Experience
              {activeSection === "experience" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--accent)] rounded-full"></span>
              )}
            </a>
            <a
              href="#projects"
              className={navLinkClass("projects")}
              onClick={(e) => handleNavClick(e, "projects")}
            >
              Projects
              {activeSection === "projects" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--accent)] rounded-full"></span>
              )}
            </a>
            <a
              href="#contact"
              className={navLinkClass("contact")}
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact
              {activeSection === "contact" && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--accent)] rounded-full"></span>
              )}
            </a>
          </nav>

          {/* Desktop Contact CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              className="bg-[var(--accent)] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity duration-200"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={isMobileMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 90 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-[var(--background)] border-b border-[var(--border-light)] shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <nav className="py-2">
              <a
                href="#about"
                className={mobileNavLinkClass("about")}
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </a>
              <a
                href="#experience"
                className={mobileNavLinkClass("experience")}
                onClick={(e) => handleNavClick(e, "experience")}
              >
                Experience
              </a>
              <a
                href="#projects"
                className={mobileNavLinkClass("projects")}
                onClick={(e) => handleNavClick(e, "projects")}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={mobileNavLinkClass("contact")}
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Contact
              </a>

              {/* Mobile Contact CTA */}
              <div className="px-4 py-3 border-t border-[var(--border-light)] mt-2">
                <a
                  href="#contact"
                  className="block w-full bg-[var(--accent)] text-white px-4 py-3 rounded-md text-center font-medium hover:opacity-90 transition-opacity duration-200"
                  onClick={(e) => handleNavClick(e, "contact")}
                >
                  Get in Touch
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
