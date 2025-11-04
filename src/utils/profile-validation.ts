/**
 * Profile Data Validation
 * Validates that all profile data is complete and properly formatted
 */

import type { ResumeData } from "@/lib/data";

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  summary: {
    completeness: number;
    totalChecks: number;
    passedChecks: number;
  };
}

/**
 * Validate the complete profile data
 */
export function validateProfileData(data: ResumeData): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  let passedChecks = 0;
  let totalChecks = 0;

  // Helper function to check and count
  function check(condition: boolean, errorMsg: string, isError = true) {
    totalChecks++;
    if (condition) {
      passedChecks++;
      return true;
    }
    if (isError) {
      errors.push(errorMsg);
    } else {
      warnings.push(errorMsg);
    }
    return false;
  }

  // Basic information checks
  check(!!data.name && data.name.length > 0, "Name is required or empty");
  check(
    !!data.contact?.email && data.contact.email.includes("@"),
    "Valid email is required"
  );
  check(!!data.summary && data.summary.length > 10, "Summary is too short");
  check(!!data.about && data.about.length > 0, "About section is required");

  // Contact information checks
  check(
    !!data.contact?.social && data.contact.social.length > 0,
    "At least one social link is required",
    false
  );
  check(
    data.contact?.social?.every((s) => !!s.name && !!s.url),
    "Some social links are incomplete"
  );

  // Education checks
  check(
    !!data.education && data.education.length > 0,
    "At least one education entry is required",
    false
  );
  check(
    data.education?.every((e) => !!e.school && !!e.degree),
    "Some education entries are incomplete"
  );

  // Work experience checks
  check(
    !!data.work && data.work.length > 0,
    "At least one work experience is required",
    false
  );
  check(
    data.work?.every((w) => !!w.company && !!w.title),
    "Some work entries are incomplete"
  );
  check(
    data.work?.every((w) => !!w.bulletPoints && w.bulletPoints.length > 0),
    "Some work entries lack bullet points",
    false
  );

  // Skills checks
  check(
    !!data.skills && data.skills.length > 0,
    "At least one skill category is required"
  );
  check(
    data.skills?.every((s) => !!s.name && !!s.items && s.items.length > 0),
    "Some skill categories are incomplete or empty"
  );

  // Achievements checks
  check(
    !!data.achievements && data.achievements.length > 0,
    "At least one achievement is recommended",
    false
  );

  // Media checks
  check(
    !!data.avatarUrl && data.avatarUrl.length > 0,
    "Avatar URL is required or empty",
    false
  );
  check(
    !!data.personalWebsiteUrl && data.personalWebsiteUrl.length > 0,
    "Personal website URL is required or empty",
    false
  );

  const completeness = Math.round((passedChecks / totalChecks) * 100);

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    summary: {
      completeness,
      totalChecks,
      passedChecks,
    },
  };
}

/**
 * Get validation report as formatted string
 */
export function getValidationReport(data: ResumeData): string {
  const result = validateProfileData(data);

  let report = "📊 Profile Validation Report\n";
  report += "═".repeat(50) + "\n\n";

  report += `✅ Status: ${result.isValid ? "VALID" : "INVALID"}\n`;
  report += `📈 Completeness: ${result.summary.completeness}%\n`;
  report += `✓ Passed: ${result.summary.passedChecks}/${result.summary.totalChecks}\n\n`;

  if (result.errors.length > 0) {
    report += "❌ Errors:\n";
    result.errors.forEach((error) => {
      report += `  • ${error}\n`;
    });
    report += "\n";
  }

  if (result.warnings.length > 0) {
    report += "⚠️ Warnings:\n";
    result.warnings.forEach((warning) => {
      report += `  • ${warning}\n`;
    });
  }

  return report;
}

/**
 * Validate and fix common issues
 */
export function validateAndFixData(data: ResumeData): ResumeData {
  const fixed = { ...data };

  // Ensure arrays exist
  if (!fixed.contact) {
    fixed.contact = { email: "", phone: "", resumeUrl: "", social: [] };
  }
  if (!fixed.contact.social) fixed.contact.social = [];
  if (!fixed.education) fixed.education = [];
  if (!fixed.work) fixed.work = [];
  if (!fixed.skills) fixed.skills = [];
  if (!fixed.achievements) fixed.achievements = [];

  // Remove empty arrays
  fixed.contact.social = fixed.contact.social.filter((s) => !!s.name && !!s.url);
  fixed.education = fixed.education.filter((e) => !!e.school);
  fixed.work = fixed.work.filter((w) => !!w.company);
  fixed.skills = fixed.skills.filter((s) => !!s.name && s.items?.length > 0);
  fixed.achievements = fixed.achievements.filter((a) => !!a.title);

  return fixed;
}

/**
 * Generate statistics about profile completeness
 */
export function generateProfileStatistics(
  data: ResumeData
): Record<string, unknown> {
  return {
    profile: {
      name: !!data.name,
      about: !!data.about,
      summary: !!data.summary,
      avatar: !!data.avatarUrl,
      website: !!data.personalWebsiteUrl,
    },
    contact: {
      email: !!data.contact?.email,
      phone: !!data.contact?.phone,
      socials: data.contact?.social?.length || 0,
    },
    content: {
      education: data.education?.length || 0,
      work: data.work?.length || 0,
      skills: data.skills?.length || 0,
      skillItems: data.skills?.reduce((sum, cat) => sum + (cat.items?.length || 0), 0) || 0,
      achievements: data.achievements?.length || 0,
    },
    quality: {
      hasDescription: data.work?.every((w) => !!w.description) || false,
      hasBulletPoints: data.work?.every((w) => !!w.bulletPoints && w.bulletPoints.length > 0) || false,
      hasLinks: data.contact?.social?.every((s) => !!s.url) || false,
    },
  };
}

