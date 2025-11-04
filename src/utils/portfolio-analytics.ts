/**
 * Portfolio Statistics and Analytics
 * Generates insights from the resume data
 */

import { ResumeData } from "@/lib/data";

export interface PortfolioAnalytics {
  totalExperience: string;
  companiesCount: number;
  skillsCount: number;
  achievementsCount: number;
  educationCount: number;
  topSkills: string[];
  topCompanies: string[];
  recentRole: string;
  specializations: string[];
}

/**
 * Analyze portfolio data and generate analytics
 */
export function analyzePortfolio(data: ResumeData): PortfolioAnalytics {
  const topSkills = data.skills
    ?.slice(0, 5)
    .flatMap((cat) => cat.items.slice(0, 3)) || [];

  const topCompanies = data.work.slice(0, 3).map((w) => w.company);

  const recentRole =
    data.work.length > 0 ? `${data.work[0].title} at ${data.work[0].company}` : "";

  return {
    totalExperience: "3+",
    companiesCount: data.work.length,
    skillsCount: data.skills?.reduce((acc, cat) => acc + cat.items.length, 0) || 0,
    achievementsCount: data.achievements?.length || 0,
    educationCount: data.education?.length || 0,
    topSkills,
    topCompanies,
    recentRole,
    specializations: ["React", "TypeScript", "Web Performance", "UI/UX Development"],
  };
}

/**
 * Generate portfolio summary
 */
export function generatePortfolioSummary(data: ResumeData): string {
  const analytics = analyzePortfolio(data);
  return `
📊 Portfolio Overview
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name: ${data.name}
📍 Location: ${data.location}
✉️ Email: ${data.contact.email}

💼 Experience: ${analytics.totalExperience} years
🏢 Companies: ${analytics.companiesCount}
🛠️ Skills: ${analytics.skillsCount}+
🏆 Achievements: ${analytics.achievementsCount}
🎓 Education: ${analytics.educationCount}

🔝 Current Role: ${analytics.recentRole}
🎯 Specializations: ${analytics.specializations.join(", ")}
⭐ Top Skills: ${analytics.topSkills.slice(0, 5).join(", ")}
  `.trim();
}

/**
 * Get portfolio insights
 */
export function getPortfolioInsights(data: ResumeData): Record<string, string> {
  const analytics = analyzePortfolio(data);

  return {
    experience:
      `${analytics.totalExperience} years of professional frontend development experience`,
    expertise: `Expert in ${analytics.topSkills.slice(0, 3).join(", ")}`,
    roles: `Held ${analytics.companiesCount} professional roles across various companies`,
    impact: `Achieved ${analytics.achievementsCount} notable achievements and awards`,
    education: `Completed ${analytics.educationCount} formal education programs`,
    current:
      analytics.recentRole || "Seeking new opportunities in frontend development",
  };
}

/**
 * Generate performance metrics
 */
export function generatePerformanceMetrics(data: ResumeData) {
  return {
    profileCompleteness: calculateProfileCompleteness(data),
    skillsDiversity: calculateSkillsDiversity(data),
    experienceQuality: calculateExperienceQuality(data),
    achievementRate: calculateAchievementRate(data),
  };
}

function calculateProfileCompleteness(data: ResumeData): number {
  let completeness = 0;
  completeness += data.name ? 20 : 0;
  completeness += data.contact?.email ? 20 : 0;
  completeness += data.work?.length ? 20 : 0;
  completeness += data.skills?.length ? 20 : 0;
  completeness += data.achievements?.length ? 20 : 0;
  return completeness;
}

function calculateSkillsDiversity(data: ResumeData): number {
  return data.skills?.length || 0;
}

function calculateExperienceQuality(data: ResumeData): number {
  return Math.min(100, (data.work?.length || 0) * 20);
}

function calculateAchievementRate(data: ResumeData): number {
  return Math.min(100, (data.achievements?.length || 0) * 5);
}

/**
 * Format portfolio for display
 */
export function formatPortfolioForDisplay(data: ResumeData): Record<string, unknown> {
  return {
    profile: {
      name: data.name,
      title: data.about,
      summary: data.summary,
      location: data.location,
      avatar: data.avatarUrl,
    },
    contact: data.contact,
    experience: {
      total: "3+",
      positions: data.work.length,
      companies: Array.from(new Set(data.work.map((w) => w.company))),
    },
    education: {
      count: data.education?.length || 0,
      institutions: data.education?.map((e) => e.school) || [],
    },
    skills: {
      categories: data.skills?.length || 0,
      total: data.skills?.reduce((acc, cat) => acc + cat.items.length, 0) || 0,
      list: data.skills,
    },
    achievements: {
      count: data.achievements?.length || 0,
      highlights: data.achievements?.slice(0, 5) || [],
    },
  };
}

