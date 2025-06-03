"use client";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  projectCard,
  projectImage,
  projectButton,
  projectTechTag,
  projectCardContainer,
} from "@/utils/animations";
import { useInView } from "@/hooks/useInView";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "MENU Loyalty Platform",
    description: "Zero-to-one B2B2C loyalty platform for restaurant brands",
    longDescription:
      "Led the product development of a comprehensive loyalty platform deployed across mobile, web, and kiosk applications. Enabled large restaurant brands to create custom loyalty programs with flexible API integrations. Platform contributed to securing global enterprise deals.",
    technologies: [
      "Product Strategy",
      "API Design",
      "Mobile Apps",
      "Cross-platform",
      "B2B2C",
    ],
    demoUrl: "https://menu.app",
    githubUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "AI-Powered Document Search",
    description: "LLM-based document search and summarization tool",
    longDescription:
      "Built a prototype PDF document searcher using LLMs and RAG (Retrieval-Augmented Generation) systems. Implemented semantic search capabilities with OpenAI embeddings and Langchain for document processing and intelligent query responses.",
    technologies: [
      "OpenAI API",
      "Langchain",
      "Python",
      "RAG Systems",
      "LLM Applications",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/richardstrauss/ai-document-search",
    featured: true,
  },
  {
    id: 3,
    title: "como - Restaurant Discovery App",
    description:
      "Mobile platform for friend-to-friend restaurant recommendations",
    longDescription:
      "Founded and developed a mobile restaurant discovery platform built on friend-to-friend recommendations. Created iOS and Android apps using React Native and MERN stack, featuring social networking, recommendation algorithms, and restaurant discovery features.",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Express",
      "Product Strategy",
    ],
    demoUrl: "",
    githubUrl: "https://instagram.com/comoapp",
    featured: true,
  },
];

function ProjectCard({ project }: { project: Project }) {
  const { ref, hasBeenInView } = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="bg-[var(--background)] border border-[var(--border)] rounded-lg overflow-hidden"
      variants={projectCard}
      initial="initial"
      animate={hasBeenInView ? "animate" : "initial"}
      {...projectCardContainer}
    >
      {/* Project Image Placeholder */}
      <motion.div
        className="h-48 bg-[var(--border-light)] flex items-center justify-center overflow-hidden"
        variants={projectImage}
      >
        <div className="text-center">
          <svg
            className="w-16 h-16 text-[var(--text-secondary)] mx-auto mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <p className="text-sm text-[var(--text-secondary)]">
            Project Screenshot
          </p>
        </div>
      </motion.div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
          {project.title}
        </h3>

        <p className="text-[var(--text-secondary)] mb-4 text-sm leading-relaxed">
          {project.longDescription}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="text-xs bg-[var(--background-secondary)] border border-[var(--border-light)] text-[var(--text-secondary)] px-2 py-1 rounded cursor-pointer hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-colors duration-200"
                variants={projectTechTag}
                whileHover="whileHover"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[var(--accent)] text-white text-center py-2 px-4 rounded-md text-sm font-medium"
              variants={projectButton}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              Live Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-[var(--border)] text-[var(--text-primary)] text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-[var(--background-secondary)] transition-colors duration-200"
              variants={projectButton}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              View Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref: headerRef, hasBeenInView: headerInView } = useInView({
    threshold: 0.5,
  });
  const { ref: gridRef, hasBeenInView: gridInView } = useInView({
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate={headerInView ? "animate" : "initial"}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            A showcase of product leadership in launching SaaS platforms,
            generative AI prototypes, and mobile applications that drive
            business impact.
          </p>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate={gridInView ? "animate" : "initial"}
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="initial"
          animate={gridInView ? "animate" : "initial"}
        >
          <p className="text-[var(--text-secondary)] mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center bg-[var(--accent)] text-white px-6 py-3 rounded-lg font-medium"
            variants={projectButton}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            Let&apos;s Work Together
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
