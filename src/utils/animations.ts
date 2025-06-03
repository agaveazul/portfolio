// Animation variants for consistent animations across components
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

// Statistics cards animation with stagger
export const statsContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.0, // Start after hero text animations
    },
  },
};

export const statsCard = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

// Timeline specific animations
export const timelineContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const timelineItem = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const timelineDot = {
  initial: { scale: 0.8, opacity: 0.5 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export const timelineLine = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
  transition: { duration: 1.2, ease: "easeOut" },
};

// Project card animations
export const projectCard = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const projectImage = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export const projectButton = {
  whileHover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  whileTap: {
    scale: 0.98,
    transition: { duration: 0.1, ease: "easeOut" },
  },
};

export const projectTechTag = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export const projectCardContainer = {
  whileHover: {
    y: -8,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Hover animations for interactive elements
export const hoverLift = {
  whileHover: {
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export const hoverScale = {
  whileHover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

// Reduced motion configurations
export const reduceMotionConfig = {
  initial: false,
  animate: false,
  transition: { duration: 0 },
};

// Skills grid animations
export const skillsContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const skillCategory = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const skillItem = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const skillItemHover = {
  whileHover: {
    scale: 1.05,
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export const skillItemsContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};
