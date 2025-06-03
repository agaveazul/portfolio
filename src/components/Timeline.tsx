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

interface TimelineItem {
  id: number;
  period: string;
  company: string;
  role: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experienceData: TimelineItem[] = [
  {
    id: 1,
    period: "May 2024 - Present",
    company: "AIR MILES",
    role: "Product Manager",
    location: "Toronto, ON",
    description:
      "Leading product development for AIR MILES Receipts and AIR MILES Rewards platforms. Implementing cutting-edge LLM and OCR technologies for automated receipt reading and intelligent offer matching, plus ML-driven personalization systems.",
    achievements: [
      "Leading product strategy for AIR MILES Receipts and AIR MILES Rewards platforms",
      "Implementing LLM and OCR technology for automated receipt reading and processing",
      "Developing intelligent offer matching algorithms using machine learning",
      "Building ML-driven personalization systems to enhance member experience",
    ],
    technologies: [
      "LLMs",
      "OCR Technology",
      "Machine Learning",
      "Personalization",
      "Product Strategy",
    ],
  },
  {
    id: 2,
    period: "2022 - April 2024",
    company: "MENU Technologies",
    role: "Group Product Manager",
    location: "Remote (US-based)",
    description:
      "Leading product strategy for an enterprise eCommerce platform serving large scale restaurant brands. Managing a team of 4 PMs across ordering, menu management, customization, and loyalty domains.",
    achievements: [
      "Launched reordering feature that increased conversion by 5%",
      "Delivered menu gradual loading that reduced drop-offs by 10%",
      "Built ordering APIs product that unlocked new revenue stream through custom app development",
      "Set product team vision, goals, and roadmap with business and technology leadership",
    ],
    technologies: [
      "Product Strategy",
      "APIs",
      "eCommerce",
      "B2B2C",
      "Team Leadership",
    ],
  },
  {
    id: 3,
    period: "2021 - 2022",
    company: "MENU Technologies",
    role: "Senior Product Manager",
    location: "Remote (US-based)",
    description:
      "Built and launched a zero-to-one loyalty platform across mobile, web, and kiosk applications with a cross-functional development team of 12 members.",
    achievements: [
      "Launched loyalty platform that contributed to signing global deals with large restaurant brands",
      "Delivered loyalty API adapter enabling new provider integrations",
      "Extended attainable market through flexible integration capabilities",
      "Led cross-functional team of 12 developers, designers, and stakeholders",
    ],
    technologies: [
      "Loyalty Systems",
      "API Design",
      "Mobile Apps",
      "Cross-platform",
      "Stakeholder Management",
    ],
  },
  {
    id: 4,
    period: "2020 - 2022",
    company: "como",
    role: "Founder",
    location: "Toronto, ON",
    description:
      "Founded and built a mobile restaurant discovery platform based on friend-to-friend recommendations. Handled all aspects from vision to technical execution.",
    achievements: [
      "Envisioned, designed, prototyped, and launched iOS and Android apps in 6 months",
      "Built full-stack solution on MERN stack (MongoDB, Express, React Native, Node.js)",
      "Developed friend-to-friend recommendation algorithm and social features",
      "Managed product roadmap, user research, and go-to-market strategy",
    ],
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Express",
      "Product Strategy",
    ],
  },
  {
    id: 5,
    period: "2015 - 2019",
    company: "Loblaw Digital",
    role: "Senior Product Manager & Head of Experimentation",
    location: "Toronto, ON",
    description:
      "Led product development for Canada's largest retailer across eCommerce, digital properties, and experimentation programs spanning grocery, apparel, and loyalty.",
    achievements: [
      "Owned eCommerce roadmap for joefresh.com, Canada's largest apparel business",
      "Built center of excellence for experimentation supporting 26 digital properties",
      "Led internal consultancy team of 7 for experiment-led product development",
      "Managed site refresh from design to release with developers, designers, and business users",
    ],
    technologies: [
      "eCommerce",
      "A/B Testing",
      "Digital Strategy",
      "Team Leadership",
      "Analytics",
    ],
  },
];

function TimelineItemComponent({ item }: { item: TimelineItem }) {
  const { ref, hasBeenInView } = useInView({ threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative flex items-start"
      variants={timelineItem}
      initial="initial"
      animate={hasBeenInView ? "animate" : "initial"}
      data-timeline-item
    >
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-6 w-4 h-4 bg-[var(--accent)] rounded-full border-2 border-[var(--background-secondary)] z-10"
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
            <p className="text-[var(--accent)] font-medium mb-1">
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
                <span className="text-[var(--accent)] mr-2 mt-1">•</span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
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

        <div ref={timelineRef} className="relative">
          {/* Background Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--border-light)]" />

          {/* Progressive Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 w-0.5 bg-[var(--accent)] origin-top"
            style={{
              scaleY,
              height: "100%",
            }}
          />

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
