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
  skills: SkillWithProficiency[];
}

interface SkillWithProficiency {
  name: string;
  years: string;
}

const skillsData: SkillCategory[] = [
  {
    title: "Product Management",
    skills: [
      { name: "Product Strategy", years: "9+ years" },
      { name: "Roadmap Planning", years: "8+ years" },
      { name: "User Research", years: "7+ years" },
      { name: "A/B Testing", years: "6+ years" },
      { name: "Analytics", years: "8+ years" },
      { name: "Stakeholder Management", years: "9+ years" },
      { name: "Team Leadership", years: "5+ years" },
      { name: "Go-to-Market", years: "4+ years" },
    ],
  },
  {
    title: "Generative AI & LLMs",
    skills: [
      { name: "OpenAI API", years: "1+ years" },
      { name: "Langchain", years: "1+ years" },
      { name: "Python", years: "2+ years" },
      { name: "Prompt Engineering", years: "1+ years" },
      { name: "RAG Systems", years: "1+ years" },
      { name: "LLM Applications", years: "1+ years" },
      { name: "OCR Technology", years: "1+ years" },
      { name: "Machine Learning", years: "3+ years" },
    ],
  },
  {
    title: "Development & Technical",
    skills: [
      { name: "JavaScript", years: "6+ years" },
      { name: "React", years: "4+ years" },
      { name: "React Native", years: "4+ years" },
      { name: "Node.js", years: "4+ years" },
      { name: "Express", years: "3+ years" },
      { name: "MongoDB", years: "4+ years" },
      { name: "Mongoose", years: "3+ years" },
      { name: "API Design", years: "5+ years" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Google Analytics", years: "8+ years" },
      { name: "Adobe Analytics", years: "4+ years" },
      { name: "JIRA", years: "9+ years" },
      { name: "Confluence", years: "7+ years" },
      { name: "Aha!", years: "3+ years" },
      { name: "UserTesting", years: "5+ years" },
      { name: "Figma", years: "3+ years" },
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
            className="group"
            variants={skillItem}
            {...skillItemHover}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-200">
                {skill.name}
              </span>
              <span className="text-xs text-[var(--text-secondary)] opacity-70">
                {skill.years}
              </span>
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
            Expertise across four core domains with measurable proficiency
            levels, spanning product management, cutting-edge AI, technical
            development, and platform tools to build and scale impactful SaaS
            products.
          </p>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                {skillsData.reduce(
                  (total, category) => total + category.skills.length,
                  0
                )}
                +
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
