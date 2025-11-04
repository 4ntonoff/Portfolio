/**
 * Custom hook for accessing profile configuration
 * Provides easy access to profile data throughout the application
 */

import { profileConfig, type ProfileConfig } from "@/config/profile";

/**
 * Hook to get profile configuration
 * @returns {ProfileConfig} The profile configuration object
 */
export function useProfileConfig(): ProfileConfig {
  return profileConfig;
}

/**
 * Hook to get contact information
 * @returns Contact information object
 */
export function useProfileContact() {
  return profileConfig.contact;
}

/**
 * Hook to get social media links
 * @returns Social media links object
 */
export function useProfileSocials() {
  return profileConfig.socials;
}

/**
 * Hook to get skills
 * @returns Skills object organized by category
 */
export function useProfileSkills() {
  return profileConfig.skills;
}

/**
 * Hook to get professional summary
 * @returns Professional summary object
 */
export function useProfileSummary() {
  return profileConfig.summary;
}

/**
 * Hook to get top achievements
 * @returns Array of top achievements
 */
export function useProfileAchievements() {
  return profileConfig.topAchievements;
}

/**
 * Hook to get SEO metadata
 * @returns SEO configuration
 */
export function useProfileSEO() {
  return profileConfig.seo;
}

/**
 * Get formatted contact string
 * @returns Formatted contact information
 */
export function getFormattedContact(): string {
  const { name, contact } = profileConfig;
  return `${name} | ${contact.email} | ${contact.phone}`;
}

/**
 * Get all profile highlights
 * @returns Formatted profile highlights
 */
export function getProfileHighlights() {
  return profileConfig.highlights.map((h) => ({
    ...h,
    formatted: `${h.role} at ${h.company} (${h.duration}) - ${h.achievement}`,
  }));
}

