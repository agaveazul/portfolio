"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import { useInView } from "@/hooks/useInView";
import { useState, useEffect } from "react";

export default function About() {
  const { ref: aboutRef, hasBeenInView: aboutInView } = useInView({
    threshold: 0.3,
  });

  // Typewriter effect for opening sentence
  const [typewriterText, setTypewriterText] = useState("");
  const fullText =
    "I thrive at the intersection of strategy, execution, and emerging tech.";

  useEffect(() => {
    if (aboutInView) {
      // Start typewriter effect
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypewriterText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
  }, [aboutInView]);

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={aboutRef}
          className="space-y-8"
          variants={fadeInUp}
          initial="initial"
          animate={aboutInView ? "animate" : "initial"}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] text-center mb-12"
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            About Me
          </motion.h2>

          <div className="space-y-6 text-lg text-[var(--text-secondary)] leading-relaxed">
            {/* First paragraph with typewriter effect */}
            <div className="min-h-[2rem]">
              <span className="text-[var(--text-primary)] font-medium">
                {typewriterText}
                {typewriterText.length < fullText.length && (
                  <motion.span
                    className="inline-block w-0.5 h-6 bg-[var(--accent)] ml-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </span>

              {/* Rest of first paragraph */}
              {typewriterText === fullText && (
                <span className="block mt-4">
                  Whether it&apos;s launching a mobile app, building
                  personalization engines, or integrating LLMs for real-world
                  automation, I bring products from concept to scale.
                </span>
              )}
            </div>

            {/* Second paragraph */}
            {typewriterText === fullText && (
              <p>
                I&apos;ve shipped 30+ digital products, led teams through
                hypergrowth, and built platforms for millions of users. I&apos;m
                especially passionate about the impact of generative AI on
                consumer experiences — from intelligent matching algorithms to
                dynamic UX personalization.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
