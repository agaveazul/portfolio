"use client";
import { motion } from "framer-motion";
import {
  fadeInUp,
  skillsContainer,
  skillCategory,
  skillItem,
  skillItemHover,
  skillItemsContainer,
  statsContainer,
  statsCard,
} from "@/utils/animations";
import { useInView } from "@/hooks/useInView";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Product Management",
    skills: [
      "Product Strategy",
      "Roadmap Planning",
      "User Research",
      "A/B Testing",
      "Analytics",
      "Stakeholder Management",
      "Team Leadership",
      "Go-to-Market",
    ],
  },
  {
    title: "Generative AI & LLMs",
    skills: [
      "OpenAI API",
      "Langchain",
      "Langfuse",
      "Python",
      "Prompt Engineering",
      "RAG Systems",
      "LLM Applications",
      "OCR Technology",
      "Machine Learning",
    ],
  },
  {
    title: "Development & Technical",
    skills: [
      "JavaScript",
      "React",
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "API Design",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Google Analytics",
      "Adobe Analytics",
      "JIRA",
      "Confluence",
      "Aha!",
      "UserTesting",
      "Figma",
      "Mixpanel",
    ],
  },
];

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  const { ref, hasBeenInView } = useInView({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg p-6"
      variants={skillCategory}
      initial="initial"
      animate={hasBeenInView ? "animate" : "initial"}
      whileHover={{
        y: -8,
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.08)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 text-center">
        {category.title}
      </h3>

      <motion.div
        className="space-y-3"
        variants={skillItemsContainer}
        initial="initial"
        animate={hasBeenInView ? "animate" : "initial"}
      >
        {category.skills.map((skill, skillIndex) => (
          <motion.div
            key={skillIndex}
            className="flex items-center justify-between"
            variants={skillItem}
            {...skillItemHover}
          >
            <span className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200">
              {skill}
            </span>
            <div className="flex space-x-1">
              {/* Animated proficiency indicator */}
              {[1, 2, 3, 4].map((dot) => (
                <motion.div
                  key={dot}
                  className={`w-2 h-2 rounded-full ${
                    dot <= 3 ? "bg-[var(--accent)]" : "bg-[var(--border-light)]"
                  }`}
                  initial={{ scale: 0 }}
                  animate={hasBeenInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    delay: skillIndex * 0.1 + dot * 0.05,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref: headerRef, hasBeenInView: headerInView } = useInView({
    threshold: 0.5,
  });
  const { ref: gridRef, hasBeenInView: gridInView } = useInView({
    threshold: 0.1,
  });
  const { ref: summaryRef, hasBeenInView: summaryInView } = useInView({
    threshold: 0.5,
  });

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate={headerInView ? "animate" : "initial"}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            A comprehensive toolkit spanning product management, generative AI,
            and technical development to build and scale impactful SaaS
            products.
          </p>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={skillsContainer}
          initial="initial"
          animate={gridInView ? "animate" : "initial"}
        >
          {skillsData.map((category, index) => (
            <SkillCategoryCard key={index} category={category} />
          ))}
        </motion.div>

        {/* Additional Skills Summary */}
        <motion.div
          ref={summaryRef}
          className="mt-16 text-center"
          variants={fadeInUp}
          initial="initial"
          animate={summaryInView ? "animate" : "initial"}
        >
          <motion.div
            className="inline-flex items-center space-x-8 bg-[var(--background-secondary)] border border-[var(--border-light)] rounded-lg px-8 py-4"
            variants={statsContainer}
            initial="initial"
            animate={summaryInView ? "animate" : "initial"}
          >
            <motion.div className="text-center" variants={statsCard}>
              <div className="text-2xl font-semibold text-[var(--text-primary)]">
                33+
              </div>
              <div className="text-sm text-[var(--text-secondary)]">
                Skills & Tools
              </div>
            </motion.div>
            <div className="w-px h-8 bg-[var(--border)]"></div>
            <motion.div className="text-center" variants={statsCard}>
              <div className="text-2xl font-semibold text-[var(--text-primary)]">
                9+
              </div>
              <div className="text-sm text-[var(--text-secondary)]">
                Years Experience
              </div>
            </motion.div>
            <div className="w-px h-8 bg-[var(--border)]"></div>
            <motion.div className="text-center" variants={statsCard}>
              <div className="text-2xl font-semibold text-[var(--text-primary)]">
                4
              </div>
              <div className="text-sm text-[var(--text-secondary)]">
                Core Domains
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
