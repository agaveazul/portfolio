"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  fadeInUp,
  slideInLeft,
  statsContainer,
  statsCard,
} from "@/utils/animations";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const { ref: heroRef, hasBeenInView: heroInView } = useInView({
    threshold: 0.3,
  });
  const { ref: statsRef, hasBeenInView: statsInView } = useInView({
    threshold: 0.5,
  });

  const { displayValue: yearsCount } = useCountUp({
    target: 9,
    suffix: "+",
    delay: statsInView ? 1.2 : 0,
    duration: 2,
  });

  const { displayValue: projectsCount } = useCountUp({
    target: 32,
    suffix: "+",
    delay: statsInView ? 1.5 : 0,
    duration: 2,
  });

  const { displayValue: companiesCount } = useCountUp({
    target: 5,
    suffix: "+",
    delay: statsInView ? 1.8 : 0,
    duration: 2,
  });

  return (
    <section
      id="about"
      className="min-h-screen bg-[var(--background)] flex items-center py-20 relative overflow-hidden"
    >
      {/* Content with higher z-index */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div ref={heroRef} className="space-y-8">
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--text-primary)] tracking-tight leading-tight"
                variants={fadeInUp}
                initial="initial"
                animate={heroInView ? "animate" : "initial"}
              >
                Product Leader
              </motion.h1>
              <motion.h2
                className="text-2xl md:text-3xl text-[var(--text-secondary)] font-medium whitespace-nowrap"
                variants={fadeInUp}
                initial="initial"
                animate={heroInView ? "animate" : "initial"}
                transition={{ delay: 0.2 }}
              >
                AI & Digital Innovation
              </motion.h2>
              <motion.h3
                className="text-lg md:text-xl text-[var(--text-secondary)] font-medium"
                variants={fadeInUp}
                initial="initial"
                animate={heroInView ? "animate" : "initial"}
                transition={{ delay: 0.3 }}
              >
                Driving next-gen experiences in B2C & B2B2C markets
              </motion.h3>
            </div>

            <motion.p
              className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl"
              variants={fadeInUp}
              initial="initial"
              animate={heroInView ? "animate" : "initial"}
              transition={{ delay: 0.4 }}
            >
              I&apos;m Richard Strauss, a senior product leader with 9+ years of
              experience building and scaling digital products across eCommerce,
              loyalty, and SaaS. I specialize in generative AI, LLMs, and
              personalization systems — currently leading AI-driven product
              initiatives at AIR MILES.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={fadeInUp}
              initial="initial"
              animate={heroInView ? "animate" : "initial"}
              transition={{ delay: 0.6 }}
            >
              <a
                href="#projects"
                className="bg-[var(--accent)] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-[var(--border)] text-[var(--text-primary)] px-6 py-3 rounded-lg font-medium hover:bg-[var(--background-secondary)] transition-colors duration-200"
              >
                Let&apos;s Connect
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <div className="space-y-8">
            {/* Profile Placeholder */}
            <motion.div
              className="relative"
              variants={slideInLeft}
              initial="initial"
              animate={heroInView ? "animate" : "initial"}
              transition={{ delay: 0.3 }}
            >
              <div className="w-80 h-80 mx-auto bg-[var(--background-secondary)] border border-[var(--border)] rounded-2xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/profile-pic.jpeg"
                  alt="Richard Strauss - Product Leader"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              ref={statsRef}
              className="grid grid-cols-3 gap-6"
              variants={statsContainer}
              initial="initial"
              animate={statsInView ? "animate" : "initial"}
            >
              <motion.div
                className="text-center p-4 bg-[var(--background-secondary)] border border-[var(--border-light)] rounded-lg"
                variants={statsCard}
              >
                <div className="text-2xl font-semibold text-[var(--text-primary)]">
                  {yearsCount}
                </div>
                <div className="text-sm text-[var(--text-secondary)]">
                  Years Experience
                </div>
              </motion.div>

              <motion.div
                className="text-center p-4 bg-[var(--background-secondary)] border border-[var(--border-light)] rounded-lg"
                variants={statsCard}
              >
                <div className="text-2xl font-semibold text-[var(--text-primary)]">
                  {projectsCount}
                </div>
                <div className="text-sm text-[var(--text-secondary)]">
                  Digital Properties
                </div>
              </motion.div>

              <motion.div
                className="text-center p-4 bg-[var(--background-secondary)] border border-[var(--border-light)] rounded-lg"
                variants={statsCard}
              >
                <div className="text-2xl font-semibold text-[var(--text-primary)]">
                  {companiesCount}
                </div>
                <div className="text-sm text-[var(--text-secondary)]">
                  Companies
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
