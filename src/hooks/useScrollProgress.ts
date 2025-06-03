"use client";
import { useEffect, useState, useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 60,
  });

  const scaleY = useTransform(springValue, [0, 1], [0, 1]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const timelineItems = element.querySelectorAll("[data-timeline-item]");
      if (timelineItems.length === 0) return;

      const windowHeight = window.innerHeight;
      let visibleProgress = 0;

      // Find the last timeline item that's at least 50% visible
      let lastVisibleIndex = -1;

      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;

        // Consider item visible if its center is in the viewport
        if (itemCenter >= 0 && itemCenter <= windowHeight) {
          lastVisibleIndex = index;
        }
      });

      if (lastVisibleIndex >= 0) {
        // Calculate progress based on visible items
        // Fill to the last visible item + a bit more based on scroll position within that item
        const baseProgress = (lastVisibleIndex + 1) / timelineItems.length;

        // Add partial progress based on how far through the last visible item we are
        const lastVisibleItem = timelineItems[lastVisibleIndex];
        const lastItemRect = lastVisibleItem.getBoundingClientRect();
        const itemTop = lastItemRect.top;
        const itemHeight = lastItemRect.height;

        // Calculate how much of the last visible item has been scrolled through
        const itemProgress = Math.max(
          0,
          Math.min(1, (windowHeight * 0.5 - itemTop) / itemHeight)
        );
        const additionalProgress = itemProgress * (1 / timelineItems.length);

        visibleProgress = Math.min(1, baseProgress + additionalProgress);
      }

      setScrollProgress(visibleProgress);
      motionValue.set(visibleProgress);
    };

    // Initial calculation
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [motionValue]);

  return {
    ref,
    scrollProgress,
    scaleY,
  };
}
