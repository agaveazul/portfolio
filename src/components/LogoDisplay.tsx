"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveExperience } from "@/hooks/useActiveExperience";
import Image from "next/image";

export default function LogoDisplay() {
  const { isInExperienceSection, assets, activeExperienceId } =
    useActiveExperience();

  if (!isInExperienceSection || !assets) {
    return null;
  }

  // Use brand color background for companies with white logos (como)
  const needsColoredBackground = activeExperienceId === 3; // como has white logo

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeExperienceId}
        className="fixed top-20 left-8 z-50 pointer-events-none"
        initial={{ opacity: 0, scale: 0.7, x: -30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.7, x: -30 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          type: "spring",
          stiffness: 120,
          damping: 25,
        }}
      >
        <div
          className={`backdrop-blur-sm rounded-xl p-4 shadow-2xl border ${
            needsColoredBackground
              ? "border-white/40"
              : "bg-white/95 border-white/40"
          }`}
          style={
            needsColoredBackground
              ? {
                  backgroundColor: `${assets.brandColor}`,
                  boxShadow: `0 15px 50px ${assets.brandColor}50, 0 5px 15px ${assets.brandColor}30`,
                }
              : {
                  boxShadow: `0 15px 50px ${assets.brandColor}50, 0 5px 15px ${assets.brandColor}30`,
                }
          }
        >
          <Image
            src={assets.logoPath}
            alt="Company Logo"
            width={120}
            height={40}
            className="w-auto h-10"
            priority
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
