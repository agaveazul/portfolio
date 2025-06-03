"use client";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Header() {
  const { activeSection, scrollToSection } = useSmoothScroll();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
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

          {/* Navigation Links */}
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

          {/* Contact CTA */}
          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              className="bg-[var(--accent)] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity duration-200"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Get in Touch
            </a>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
