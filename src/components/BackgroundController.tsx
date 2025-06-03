"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useActiveExperience } from "@/hooks/useActiveExperience";

const DEFAULT_BACKGROUND = "#fafafa";

export default function BackgroundController() {
  const { isInExperienceSection, assets } = useActiveExperience();

  useEffect(() => {
    const body = document.body;

    if (isInExperienceSection && assets?.brandColor) {
      // Create a much bolder gradient transition effect with smoother transitions
      const gradientColor = `linear-gradient(135deg, ${assets.brandColor}40, ${assets.brandColor}25)`;
      body.style.background = gradientColor;
      body.style.transition =
        "background 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    } else {
      // Reset to default background with longer transition
      body.style.background = DEFAULT_BACKGROUND;
      body.style.transition =
        "background 1.0s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    }

    // Cleanup function to reset background when component unmounts
    return () => {
      body.style.background = DEFAULT_BACKGROUND;
      body.style.transition = "";
    };
  }, [isInExperienceSection, assets?.brandColor]);

  return (
    <>
      {/* Floating brand accent overlay for enhanced effect with smoother transitions */}
      {isInExperienceSection && assets?.brandColor && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.0,
            ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoother transitions
          }}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${assets.brandColor}35 0%, transparent 70%)`,
          }}
        />
      )}
    </>
  );
}
