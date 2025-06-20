"use client";
import { motion } from "framer-motion";
import {
  timelineContainer,
  timelineItem,
  timelineDot,
  fadeInUp,
} from "@/utils/animations";
import { useInView } from "@/hooks/useInView";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useActiveExperience } from "@/hooks/useActiveExperience";
import { useState, useEffect } from "react";
import { MotionValue } from "framer-motion";

interface TimelineItem {
  id: number;
  period: string;
  company: string;
  role: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
  technologies: string[];
}

const experienceData: TimelineItem[] = [
  {
    id: 1,
    period: "2024–Present",
    company: "AIR MILES",
    role: "Senior Product Manager",
    location: "Toronto, ON",
    description:
      "Leading product strategy and development across AIR MILES Receipts and Rewards platforms. Driving LLM, OCR, and ML integration to power intelligent automation and personalized redemption experiences.",
    achievements: [
      "Implemented LLM-powered offer matching, improving match rates by 20%",
      "Rebuilt the mobile app in Flutter to improve velocity and cross-platform efficiency",
      "Delivered rebrand and UX redesign in collaboration with marketing and design",
      "Deployed machine learning for reward recommendations to improve engagement",
    ],
    skills: ["Product Strategy", "Machine Learning", "Personalization"],
    technologies: ["LLMs", "OCR Technology", "Flutter", "ML"],
  },
  {
    id: 2,
    period: "2021–2024",
    company: "PAR Ordering (menu.app)",
    role: "Group Product Manager",
    location: "Remote (US-based)",
    description:
      "Reported to the CPO and led a team of 4 PMs across ordering, menu management, loyalty, and platform integrations for enterprise restaurant brands.",
    achievements: [
      "Launched enterprise loyalty platform that contributed to securing national QSR accounts",
      "Built custom ordering API that unlocked a new revenue stream via white-labeled apps",
      "Shipped performance improvements including gradual loading, reducing drop-off by 10%",
      "Delivered loyalty adapter to streamline integration with third-party providers",
    ],
    skills: [
      "Enterprise SaaS",
      "B2B2C",
      "API-first Strategy",
      "Loyalty & Commerce",
    ],
    technologies: [
      "APIs",
      "eCommerce",
      "Loyalty Systems",
      "Enterprise Platforms",
    ],
  },
  {
    id: 3,
    period: "2020–2022",
    company: "Como",
    role: "Founder",
    location: "Toronto, ON",
    description:
      "Conceived and launched a mobile restaurant discovery platform based on social recommendations. Led product design, development, and go-to-market strategy.",
    achievements: [
      "Designed, built, and launched full-stack platform in under 6 months (solo)",
      "Developed social recommendation algorithm and user-generated content model",
      "Shipped React Native apps for iOS & Android, powered by MERN stack",
      "Conducted user research, built roadmap, and led growth experiments",
    ],
    skills: [
      "Founding/0→1",
      "Social Platforms",
      "Consumer Apps",
      "Full-stack Development",
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "MERN Stack"],
  },
  {
    id: 4,
    period: "2015–2019",
    company: "Loblaw Digital",
    role: "Senior Product Manager & Head of Experimentation",
    location: "Toronto, ON",
    description:
      "Led product strategy across Loblaw&apos;s digital portfolio, including Canada&apos;s largest grocery and apparel businesses. Created a centralized experimentation program used by 26+ teams.",
    achievements: [
      "Owned eCommerce roadmap for JoeFresh.com, Canada&apos;s top apparel site",
      "Built and scaled experimentation CoE supporting 26+ digital properties",
      "Led cross-functional team of 7 → drove experiment-based product delivery",
      "Managed complete redesign and relaunch of digital storefronts",
    ],
    skills: [
      "Digital Retail",
      "A/B Testing at Scale",
      "Roadmap Ownership",
      "Cross-functional Leadership",
    ],
    technologies: [
      "eCommerce",
      "Analytics",
      "Testing Platforms",
      "Digital Retail",
    ],
  },
];

function TimelineItemComponent({ item }: { item: TimelineItem }) {
  const { ref, hasBeenInView } = useInView({ threshold: 0.3 });
  const { activeExperienceId } = useActiveExperience();
  const isActive = activeExperienceId === item.id;

  return (
    <motion.div
      ref={ref}
      className="relative flex items-start"
      variants={timelineItem}
      initial="initial"
      animate={hasBeenInView ? "animate" : "initial"}
      data-timeline-item
      data-experience-item
      data-experience-id={item.id}
    >
      {/* Timeline Dot - Always matches experience color */}
      <motion.div
        className="absolute left-6 w-4 h-4 rounded-full border-2 border-[var(--background-secondary)] z-10 transition-colors duration-500"
        data-timeline-dot={item.id}
        style={{
          backgroundColor: getExperienceBrandColor(item.id),
        }}
        variants={timelineDot}
        initial="initial"
        animate={hasBeenInView ? "animate" : "initial"}
      />

      {/* Content */}
      <div className="ml-16 bg-[var(--background)] border border-[var(--border)] rounded-lg p-6 w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
              {item.role}
            </h3>
            <p
              className="font-medium mb-1 transition-colors duration-500"
              style={{
                color: isActive
                  ? getExperienceBrandColor(item.id)
                  : "var(--accent)",
              }}
            >
              {item.company}
            </p>
            <p className="text-sm text-[var(--text-secondary)]">
              {item.location}
            </p>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="inline-block bg-[var(--border-light)] text-[var(--text-secondary)] px-3 py-1 rounded-full text-sm font-medium">
              {item.period}
            </span>
          </div>
        </div>

        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
          {item.description}
        </p>

        {/* Achievements */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-[var(--text-primary)] mb-2">
            Key Achievements
          </h4>
          <ul className="space-y-1">
            {item.achievements.map((achievement, i) => (
              <li
                key={i}
                className="text-sm text-[var(--text-secondary)] flex items-start"
              >
                <span
                  className="mr-2 mt-1 transition-colors duration-500"
                  style={{
                    color: isActive
                      ? getExperienceBrandColor(item.id)
                      : "var(--accent)",
                  }}
                >
                  •
                </span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Skills and Technologies */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Skills - Left Side */}
          <div>
            <h4 className="text-sm font-medium text-[var(--text-primary)] mb-2">
              Skills Applied
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs bg-[var(--background-secondary)] border border-[var(--border-light)] text-[var(--text-secondary)] px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Technologies - Right Side */}
          <div>
            <h4 className="text-sm font-medium text-[var(--text-primary)] mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-[var(--background-secondary)] border border-[var(--border-light)] text-[var(--text-secondary)] px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const { ref: headerRef, hasBeenInView: headerInView } = useInView({
    threshold: 0.5,
  });
  const { ref: timelineRef, scaleY } = useScrollProgress();

  return (
    <section id="experience" className="py-20 bg-[var(--background-secondary)]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate={headerInView ? "animate" : "initial"}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            My journey in product leadership, building and scaling SaaS
            platforms from conception through high growth across B2C and B2B2C
            markets.
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative" data-timeline-ref>
          {/* Background Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--border-light)]" />

          {/* Dynamic Timeline Segments Based on Actual Dot Positions */}
          <DynamicTimelineSegments scaleY={scaleY} />

          <motion.div
            className="space-y-12"
            variants={timelineContainer}
            initial="initial"
            animate="animate"
          >
            {experienceData.map((item) => (
              <TimelineItemComponent key={item.id} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Helper function to get brand color by experience ID
function getExperienceBrandColor(experienceId: number): string {
  const colorMap: Record<number, string> = {
    1: "#1f68da", // AIR MILES
    2: "#2f3452", // PAR Ordering - Group Product Manager
    3: "#E7544F", // como
    4: "#FF4C4C", // Loblaw Digital
  };
  return colorMap[experienceId] || "var(--accent)";
}

// Dynamic Timeline Segments Component
function DynamicTimelineSegments({ scaleY }: { scaleY: MotionValue<number> }) {
  const [segments, setSegments] = useState<
    Array<{
      id: string | number;
      startPercent: number;
      endPercent: number;
      color: string;
    }>
  >([]);

  useEffect(() => {
    const calculateSegments = () => {
      const timelineContainer = document.querySelector("[data-timeline-ref]");
      if (!timelineContainer) return;

      const containerRect = timelineContainer.getBoundingClientRect();
      const containerHeight = containerRect.height;

      if (containerHeight === 0) return;

      const dotPositions: Array<{
        id: number;
        position: number;
        color: string;
      }> = [];

      // Get actual dot positions
      experienceData.forEach((item) => {
        const dotElement = document.querySelector(
          `[data-timeline-dot="${item.id}"]`
        );
        if (dotElement) {
          const dotRect = dotElement.getBoundingClientRect();
          const dotCenter = dotRect.top + dotRect.height / 2;
          const relativePosition =
            (dotCenter - containerRect.top) / containerHeight;

          dotPositions.push({
            id: item.id,
            position: Math.max(0, Math.min(1, relativePosition)),
            color: getExperienceBrandColor(item.id),
          });
        }
      });

      // Sort by position
      dotPositions.sort((a, b) => a.position - b.position);

      // Create segments where each experience owns its section until the next experience's dot
      const newSegments: Array<{
        id: string | number;
        startPercent: number;
        endPercent: number;
        color: string;
      }> = [];

      dotPositions.forEach((dot, index) => {
        let startPercent;
        let endPercent;

        if (index === 0) {
          // First experience: from start to next experience's dot
          startPercent = 0;
          if (dotPositions.length > 1) {
            const nextDot = dotPositions[index + 1];
            endPercent = nextDot.position * 100;
          } else {
            endPercent = 100; // Only one experience
          }
        } else if (index === dotPositions.length - 1) {
          // Last experience: from its own dot to end
          startPercent = dot.position * 100;
          endPercent = 100;
        } else {
          // Middle experiences: from its own dot to next experience's dot
          const nextDot = dotPositions[index + 1];
          startPercent = dot.position * 100;
          endPercent = nextDot.position * 100;
        }

        newSegments.push({
          id: dot.id,
          startPercent,
          endPercent,
          color: dot.color,
        });
      });

      setSegments(newSegments);
    };

    // Calculate initially and on changes
    const timeoutId = setTimeout(calculateSegments, 100);

    const handleUpdate = () => {
      requestAnimationFrame(calculateSegments);
    };

    window.addEventListener("scroll", handleUpdate, { passive: true });
    window.addEventListener("resize", handleUpdate, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleUpdate);
      window.removeEventListener("resize", handleUpdate);
    };
  }, []);

  return (
    <>
      {/* Colored segments based on actual dot positions */}
      {segments.map((segment) => (
        <div
          key={`segment-${segment.id}`}
          className="absolute left-8 w-0.5"
          style={{
            backgroundColor: segment.color,
            top: `${segment.startPercent}%`,
            height: `${segment.endPercent - segment.startPercent}%`,
          }}
        />
      ))}

      {/* Progressive Timeline Mask */}
      <motion.div
        className="absolute left-8 top-0 w-0.5 bg-[var(--border-light)] origin-bottom z-10"
        style={{
          scaleY: scaleY ? 1 - scaleY.get() : 1,
          height: "100%",
          transformOrigin: "bottom",
        }}
      />
    </>
  );
}
