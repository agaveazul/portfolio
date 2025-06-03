"use client";
import { useEffect, useState } from "react";

export interface ExperienceAssets {
  brandColor: string;
  logoPath: string;
  mobileScreenshot: string;
  mobileScreenshot2?: string;
  webScreenshot?: string;
}

export interface ActiveExperienceState {
  activeExperienceId: number | null;
  isInExperienceSection: boolean;
  assets: ExperienceAssets | null;
}

export function useActiveExperience() {
  const [state, setState] = useState<ActiveExperienceState>({
    activeExperienceId: null,
    isInExperienceSection: false,
    assets: null,
  });

  useEffect(() => {
    const handleScroll = () => {
      const experienceItems = document.querySelectorAll(
        "[data-experience-item]"
      );
      const experienceSection = document.getElementById("experience");

      if (!experienceSection || experienceItems.length === 0) return;

      const windowHeight = window.innerHeight;
      const sectionRect = experienceSection.getBoundingClientRect();

      // Check if we're in the experience section
      const isInSection =
        sectionRect.top < windowHeight * 0.5 &&
        sectionRect.bottom > windowHeight * 0.5;

      if (!isInSection) {
        setState({
          activeExperienceId: null,
          isInExperienceSection: false,
          assets: null,
        });
        return;
      }

      // Find the most centered experience item
      let activeId = null;
      let minDistance = Infinity;

      experienceItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distance = Math.abs(itemCenter - viewportCenter);

        if (
          distance < minDistance &&
          rect.top < windowHeight &&
          rect.bottom > 0
        ) {
          minDistance = distance;
          const id = item.getAttribute("data-experience-id");
          activeId = id ? parseInt(id) : null;
        }
      });

      // Get assets for the active experience
      const assets = activeId ? getExperienceAssets(activeId) : null;

      setState({
        activeExperienceId: activeId,
        isInExperienceSection: true,
        assets,
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return state;
}

// Asset mapping for each experience
function getExperienceAssets(experienceId: number): ExperienceAssets | null {
  const assetMap: Record<number, ExperienceAssets> = {
    1: {
      // AIR MILES
      brandColor: "#1f68da",
      logoPath: "/companies/airmiles/logo.svg",
      mobileScreenshot: "/companies/airmiles/mobile-screenshot.png",
      mobileScreenshot2: "/companies/airmiles/mobile-screenshot2.png",
    },
    2: {
      // PAR Ordering - Group Product Manager
      brandColor: "#2f3452",
      logoPath: "/companies/par/logo.svg",
      mobileScreenshot: "/companies/par/mobile-screenshot.png",
      webScreenshot: "/companies/par/web-screenshot.png",
    },
    3: {
      // como
      brandColor: "#E7544F",
      logoPath: "/companies/como/logo.png",
      mobileScreenshot: "/companies/como/mobile-screenshot.png",
      mobileScreenshot2: "/companies/como/mobile-screenshot2.png",
    },
    4: {
      // Loblaw Digital
      brandColor: "#FF4C4C",
      logoPath: "/companies/loblaw/logo.svg",
      mobileScreenshot: "/companies/loblaw/mobile-screenshot.png",
      webScreenshot: "/companies/loblaw/web-screenshot.png",
    },
  };

  return assetMap[experienceId] || null;
}
