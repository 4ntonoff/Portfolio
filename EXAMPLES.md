/**
 * Examples of using the new portfolio features
 * This file demonstrates how to use the profile config, hooks, and utilities
 */

// ============================================================================
// Example 1: Using Profile Config
// ============================================================================

import { profileConfig } from "@/config/profile";

// Access basic information
console.log("Name:", profileConfig.name);
console.log("Email:", profileConfig.contact.email);
console.log("Phone:", profileConfig.contact.phone);

// Access social media
profileConfig.socials.forEach((social) => {
  console.log(`${social}: ${profileConfig.socials[social as keyof typeof profileConfig.socials]}`);
});

// ============================================================================
// Example 2: Using Profile Hooks
// ============================================================================

import {
  useProfileConfig,
  useProfileContact,
  useProfileSocials,
  useProfileSkills,
  useProfileAchievements,
  getFormattedContact,
  getProfileHighlights,
} from "@/hooks/useProfile";

// In a React component
function MyComponent() {
  const config = useProfileConfig();
  const contact = useProfileContact();
  const socials = useProfileSocials();
  const skills = useProfileSkills();
  const achievements = useProfileAchievements();

  // Use the data
  return (
    <div>
      <h1>{config.name}</h1>
      <p>{contact.email}</p>
      <div>
        {achievements.map((achievement) => (
          <div key={achievement.title}>{achievement.title}</div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Example 3: Using Portfolio Analytics
// ============================================================================

import {
  analyzePortfolio,
  generatePortfolioSummary,
  getPortfolioInsights,
  generatePerformanceMetrics,
  formatPortfolioForDisplay,
} from "@/utils/portfolio-analytics";
import { getResumeData } from "@/lib/data";

async function getPortfolioInsightsExample() {
  const data = await getResumeData();

  // Get comprehensive analytics
  const analytics = analyzePortfolio(data);
  console.log("Total Experience:", analytics.totalExperience);
  console.log("Companies Count:", analytics.companiesCount);
  console.log("Skills Count:", analytics.skillsCount);

  // Generate summary
  const summary = generatePortfolioSummary(data);
  console.log(summary);

  // Get insights
  const insights = getPortfolioInsights(data);
  console.log("Insights:", insights);

  // Get performance metrics
  const metrics = generatePerformanceMetrics(data);
  console.log("Profile Completeness:", metrics.profileCompleteness + "%");

  // Format for display
  const formatted = formatPortfolioForDisplay(data);
  console.log("Formatted Data:", formatted);
}

// ============================================================================
// Example 4: Using Portfolio Types
// ============================================================================

import type {
  ResumeDataStructure,
  PortfolioStats,
  WorkExperience,
  Education,
  SkillCategory,
} from "@/types/portfolio";
import {
  calculateStats,
  formatDateRange,
  getInitials,
  getAllSkills,
  getSkillsByCategory,
} from "@/types/portfolio";

async function usingPortfolioTypes() {
  const data = await getResumeData() as ResumeDataStructure;

  // Calculate statistics
  const stats = calculateStats(data);
  console.log("Statistics:", stats);

  // Format dates
  if (data.work.length > 0) {
    const dateRange = formatDateRange(data.work[0].start, data.work[0].end);
    console.log("Date Range:", dateRange);
  }

  // Get initials
  const initials = getInitials(data.name);
  console.log("Initials:", initials);

  // Get all skills
  const allSkills = getAllSkills(data.skills);
  console.log("All Skills:", allSkills);

  // Get skills by category
  const jsSkills = getSkillsByCategory(data.skills, "Languages");
  console.log("Language Skills:", jsSkills);
}

// ============================================================================
// Example 5: Using API Endpoints
// ============================================================================

async function fetchProfileDataExample() {
  try {
    // Fetch complete profile
    const response = await fetch("/api/profile");
    const { data, analytics, insights, metrics } = await response.json();

    console.log("Full Profile Data:", data);
    console.log("Analytics:", analytics);
    console.log("Insights:", insights);
    console.log("Metrics:", metrics);
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
}

// ============================================================================
// Example 6: Display Portfolio Stats Component
// ============================================================================

import { PortfolioStats, SpecializationsDisplay, TopSkillsDisplay, CompaniesTimeline } from "@/components/portfolio-stats";

export function PortfolioStatsExample() {
  return (
    <div className="space-y-6">
      {/* These components require analytics data from the parent */}
      <PortfolioStats />
      <SpecializationsDisplay />
      <TopSkillsDisplay />
      <CompaniesTimeline />
    </div>
  );
}

// ============================================================================
// Example 7: Server-Side Usage
// ============================================================================

import { getResumeData } from "@/lib/data";

export async function ServerComponentExample() {
  const data = await getResumeData();
  const analytics = analyzePortfolio(data);
  const insights = getPortfolioInsights(data);

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.summary}</p>
      <div>
        <h2>Experience: {analytics.totalExperience} years</h2>
        <h2>Companies: {analytics.companiesCount}</h2>
        <h2>Current Role: {analytics.recentRole}</h2>
      </div>
      <div>
        <h2>Insights:</h2>
        <p>{insights.expertise}</p>
        <p>{insights.experience}</p>
        <p>{insights.impact}</p>
      </div>
    </div>
  );
}

// ============================================================================
// Example 8: Combining Multiple Features
// ============================================================================

export async function CombinedExample() {
  const data = await getResumeData();
  const analytics = analyzePortfolio(data);
  const formatted = formatPortfolioForDisplay(data);
  const insights = getPortfolioInsights(data);

  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-3xl font-bold">{formatted.profile.name}</h1>
        <p className="text-gray-600">{formatted.profile.title}</p>
        <p>{formatted.profile.location}</p>
      </header>

      <section>
        <h2 className="text-2xl font-bold">Summary</h2>
        <p>{formatted.profile.summary}</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Statistics</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div>
            <div className="text-2xl font-bold">{analytics.totalExperience}</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{analytics.companiesCount}</div>
            <div className="text-sm text-gray-600">Companies</div>
          </div>
          <div>
            <div className="text-2xl font-bold">{analytics.skillsCount}</div>
            <div className="text-sm text-gray-600">Skills</div>
          </div>
          <div>
            <div className="text-2xl font-bold">
              {analytics.achievementsCount}
            </div>
            <div className="text-sm text-gray-600">Achievements</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Top Skills</h2>
        <div className="flex flex-wrap gap-2">
          {analytics.topSkills.slice(0, 8).map((skill) => (
            <span key={skill} className="rounded-lg bg-blue-100 px-3 py-1">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Insights</h2>
        <ul className="space-y-2">
          <li>💼 {insights.experience}</li>
          <li>🎯 {insights.expertise}</li>
          <li>🏢 {insights.roles}</li>
          <li>🏆 {insights.impact}</li>
        </ul>
      </section>
    </div>
  );
}

// ============================================================================
// Export all examples for testing
// ============================================================================

export const examples = {
  getPortfolioInsightsExample,
  usingPortfolioTypes,
  fetchProfileDataExample,
  PortfolioStatsExample,
  ServerComponentExample,
  CombinedExample,
};

