"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveExperience } from "@/hooks/useActiveExperience";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ScreenshotDisplay() {
  const { isInExperienceSection, assets, activeExperienceId } =
    useActiveExperience();
  const [shouldShow, setShouldShow] = useState(false);
  const [currentAssets, setCurrentAssets] = useState(assets);

  useEffect(() => {
    if (isInExperienceSection && assets) {
      setShouldShow(true);
      setCurrentAssets(assets);
    } else if (!isInExperienceSection) {
      // Delay hiding to allow for smooth fade out
      const timeout = setTimeout(() => {
        setShouldShow(false);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [isInExperienceSection, assets]);

  if (!shouldShow || !currentAssets) {
    return null;
  }

  // Check if this company has two mobile screenshots (AIR MILES, como, etc.)
  const hasDualMobileScreenshots = currentAssets.mobileScreenshot2;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeExperienceId || "exit"}
        className="fixed inset-0 pointer-events-none z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInExperienceSection ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: isInExperienceSection ? 0.6 : 0.8,
          ease: "easeInOut",
        }}
      >
        {hasDualMobileScreenshots ? (
          // Companies with dual mobile screenshots: Two mobile screenshots side by side
          <div className="hidden md:block">
            {/* First Mobile Screenshot - Left Side */}
            <motion.div
              className="absolute left-8 top-1/2 -translate-y-1/2"
              initial={{ opacity: 0, x: -100, rotate: -5 }}
              animate={{
                opacity: isInExperienceSection ? 0.8 : 0,
                x: isInExperienceSection ? 0 : -50,
                rotate: isInExperienceSection ? -3 : -8,
              }}
              exit={{ opacity: 0, x: -100, rotate: -5 }}
              transition={{
                duration: isInExperienceSection ? 0.8 : 1.0,
                ease: "easeOut",
                delay: isInExperienceSection ? 0.2 : 0,
              }}
            >
              <div
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/20"
                style={{
                  boxShadow: `0 30px 80px ${currentAssets.brandColor}40`,
                }}
              >
                <Image
                  src={currentAssets.mobileScreenshot}
                  alt="Mobile App Screenshot 1"
                  width={250}
                  height={500}
                  className="w-auto h-80 rounded-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Second Mobile Screenshot - Right Side */}
            <motion.div
              className="absolute right-8 top-1/2 -translate-y-1/2"
              initial={{ opacity: 0, x: 100, rotate: 5 }}
              animate={{
                opacity: isInExperienceSection ? 0.8 : 0,
                x: isInExperienceSection ? 0 : 50,
                rotate: isInExperienceSection ? 3 : 8,
              }}
              exit={{ opacity: 0, x: 100, rotate: 5 }}
              transition={{
                duration: isInExperienceSection ? 0.8 : 1.0,
                ease: "easeOut",
                delay: isInExperienceSection ? 0.4 : 0.1,
              }}
            >
              <div
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/20"
                style={{
                  boxShadow: `0 30px 80px ${currentAssets.brandColor}40`,
                }}
              >
                <Image
                  src={currentAssets.mobileScreenshot2!}
                  alt="Mobile App Screenshot 2"
                  width={250}
                  height={500}
                  className="w-auto h-80 rounded-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        ) : (
          // Other companies: Mobile + Web layout
          <div className="hidden md:block">
            {/* Mobile Screenshot - Left Side */}
            <motion.div
              className="absolute left-8 top-1/2 -translate-y-1/2"
              initial={{ opacity: 0, x: -100, rotate: -5 }}
              animate={{
                opacity: isInExperienceSection ? 0.8 : 0,
                x: isInExperienceSection ? 0 : -50,
                rotate: isInExperienceSection ? -3 : -8,
              }}
              exit={{ opacity: 0, x: -100, rotate: -5 }}
              transition={{
                duration: isInExperienceSection ? 0.8 : 1.0,
                ease: "easeOut",
                delay: isInExperienceSection ? 0.2 : 0,
              }}
            >
              <div
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/20"
                style={{
                  boxShadow: `0 30px 80px ${currentAssets.brandColor}40`,
                }}
              >
                <Image
                  src={currentAssets.mobileScreenshot}
                  alt="Mobile App Screenshot"
                  width={250}
                  height={500}
                  className="w-auto h-80 rounded-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Web Screenshot - Right Side (if available) */}
            {currentAssets.webScreenshot && (
              <motion.div
                className="absolute right-8 top-1/2 -translate-y-1/2"
                initial={{ opacity: 0, x: 100, rotate: 5 }}
                animate={{
                  opacity: isInExperienceSection ? 0.8 : 0,
                  x: isInExperienceSection ? 0 : 50,
                  rotate: isInExperienceSection ? 2 : 8,
                }}
                exit={{ opacity: 0, x: 100, rotate: 5 }}
                transition={{
                  duration: isInExperienceSection ? 0.8 : 1.0,
                  ease: "easeOut",
                  delay: isInExperienceSection ? 0.4 : 0.1,
                }}
              >
                <div
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-white/20"
                  style={{
                    boxShadow: `0 30px 80px ${currentAssets.brandColor}40`,
                  }}
                >
                  <Image
                    src={currentAssets.webScreenshot}
                    alt="Web Application Screenshot"
                    width={280}
                    height={175}
                    className="w-auto h-36 rounded-2xl"
                    priority
                  />
                </div>
              </motion.div>
            )}
          </div>
        )}

        {/* Desktop Only - No images on mobile */}
      </motion.div>
    </AnimatePresence>
  );
}
