/**
 * Profile Configuration
 * Central configuration for the portfolio profile
 */

export const profileConfig = {
  // Personal Information
  name: "Alexandr Antonov",
  title: "Frontend Developer",
  tagline: "Building high-performance web applications with React & TypeScript",

  // Contact Information
  contact: {
    email: "alexandr.antonov.dev@gmail.com",
    phone: "+373 79 979 101",
    location: "UTC+2 Timezone",
    country: "Moldova",
  },

  // Social Media Links
  socials: {
    linkedin: "https://www.linkedin.com/in/alexandr-antonov/",
    github: "https://github.com/alexandr-antonov",
    telegram: "https://t.me/alexandr_antonov",
    twitter: "https://x.com/alexandr_dev",
    medium: "https://medium.com/@alexandr-antonov",
  },

  // Website
  website: "https://alexandr-antonov.dev",

  // Professional Summary
  summary: {
    experience: "3+",
    yearsUnit: "years",
    specialization: "React & TypeScript",
    focus: "High-performance, scalable web applications",
    availability: "Available for remote work (EU/US timezones)",
  },

  // Career Highlights
  highlights: [
    {
      company: "Zalando SE",
      role: "Frontend Developer",
      duration: "Jan 2024 - Sep 2025",
      achievement: "Refactored React to TypeScript, reducing bugs by 40%",
    },
    {
      company: "Crawless",
      role: "Web Developer",
      duration: "Sep 2022 - Nov 2023",
      achievement: "Migrated to micro-frontends, reducing build time by 26%",
    },
  ],

  // Skills Categories
  skills: {
    languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS/SASS"],
    frameworks: ["React", "React Native", "Next.js", "Vue.js"],
    tools: ["Vite", "Webpack", "npm", "pnpm", "Docker", "Git"],
    databases: ["MySQL", "PostgreSQL"],
    testing: ["Jest", "Cypress", "Testing Library"],
    methodologies: ["Agile", "SCRUM", "CI/CD"],
  },

  // Languages
  languages: [
    { name: "English", level: "B2+ (Upper Intermediate)", proficiency: 80 },
    { name: "Russian", level: "Native", proficiency: 100 },
    { name: "Romanian", level: "Native", proficiency: 100 },
  ],

  // Achievements
  topAchievements: [
    "1st Place – Tekwill National Contest (Web Development, 2023)",
    "40% bug reduction through TypeScript refactoring at Zalando",
    "26% build time improvement with micro-frontends migration",
    "95%+ user satisfaction on FitLife React Native app",
  ],

  // Theme Configuration
  theme: {
    primaryColor: "#3B82F6", // Blue
    accentColor: "#EC4899", // Pink
    backgroundColor: "#0F172A", // Dark slate
    textColor: "#F1F5F9", // Light slate
  },

  // SEO Configuration
  seo: {
    title: "Alexandr Antonov | Frontend Developer | React & TypeScript",
    description:
      "Frontend Developer with 3+ years of experience in building scalable React & TypeScript applications. Expert in performance optimization, e-commerce solutions, and modern web development.",
    keywords: [
      "Frontend Developer",
      "React Developer",
      "TypeScript",
      "Web Developer",
      "Full Stack",
      "React Native",
      "Next.js",
      "Performance Optimization",
    ],
  },
};

export type ProfileConfig = typeof profileConfig;

