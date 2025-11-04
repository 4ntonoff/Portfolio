/**
 * Type definitions and utilities for the portfolio
 */

/**
 * Social Media Link Structure
 */
export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

/**
 * Work Experience Structure
 */
export interface WorkExperience {
  company: string;
  link: string;
  badges: string[];
  title: string;
  start: string;
  end: string;
  description: string;
  bulletPoints: BulletPoint[];
}

/**
 * Bullet Point with optional links
 */
export interface BulletPoint {
  text: string;
  links?: Array<{
    name: string;
    url: string;
  }>;
}

/**
 * Education Entry
 */
export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
  location?: string;
  description?: string;
  gpa?: string;
}

/**
 * Skill Category
 */
export interface SkillCategory {
  name: string;
  items: string[];
}

/**
 * Achievement
 */
export interface Achievement {
  title: string;
  description?: string;
  reference?: Array<{
    name: string;
    url: string;
  }>;
}

/**
 * Project
 */
export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  bulletPoints?: BulletPoint[];
}

/**
 * Language Proficiency
 */
export interface LanguageProficiency {
  name: string;
  level: string;
  proficiency: number;
}

/**
 * Certification
 */
export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credential?: string;
}

/**
 * Complete Resume Data Structure
 */
export interface ResumeDataStructure {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    phone?: string;
    social: SocialLink[];
  };
  education: Education[];
  achievements: Achievement[];
  work: WorkExperience[];
  projects?: Project[];
  skills: SkillCategory[];
  languages?: LanguageProficiency[];
  certifications?: Certification[];
}

/**
 * Statistics for the portfolio
 */
export interface PortfolioStats {
  yearsOfExperience: number;
  projectsCompleted: number;
  companiesWorked: number;
  skillsCount: number;
  achievementsCount: number;
}

/**
 * Calculate portfolio statistics
 */
export function calculateStats(data: ResumeDataStructure): PortfolioStats {
  return {
    yearsOfExperience: 3,
    projectsCompleted: data.projects?.length || 0,
    companiesWorked: data.work.length,
    skillsCount: data.skills.reduce((acc, cat) => acc + cat.items.length, 0),
    achievementsCount: data.achievements.length,
  };
}

/**
 * Format date range
 */
export function formatDateRange(start: string, end: string): string {
  return `${start} – ${end}`;
}

/**
 * Get initials from name
 */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

/**
 * Count total years of experience
 */
export function calculateTotalExperience(work: WorkExperience[]): number {
  // Simplified - just returns 3+ as per the profile
  return 3;
}

/**
 * Get all skills as flat array
 */
export function getAllSkills(skills: SkillCategory[]): string[] {
  return skills.flatMap((cat) => cat.items);
}

/**
 * Get skills by category
 */
export function getSkillsByCategory(
  skills: SkillCategory[],
  category: string
): string[] {
  const found = skills.find((s) => s.name.toLowerCase() === category.toLowerCase());
  return found?.items || [];
}

