import {
  GitHubIcon,
  LinkedInIcon,
  TelegramIcon,
} from "@/components/icons";
import { type ResumeData } from "@/lib/data";

/**
 * Map of social platform names to their icon components
 */
const iconMap = {
  Telegram: TelegramIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
} as const;

/**
 * Enhanced resume data type with icon components
 */
export type ResumeDataWithIcons = Omit<ResumeData, "contact"> & {
  contact: Omit<ResumeData["contact"], "social"> & {
    social: Array<
      ResumeData["contact"]["social"][number] & {
        icon: React.ComponentType<{ className?: string }>;
      }
    >;
  };
};

/**
 * Client-side helper to add icon components to resume data
 * This is necessary because React components cannot be serialized
 */
export function addIconsToResumeData(data: ResumeData): ResumeDataWithIcons {
  return {
    ...data,
    contact: {
      ...data.contact,
      social: data.contact.social.map((social) => ({
        ...social,
        icon: iconMap[social.name as keyof typeof iconMap] || GitHubIcon,
      })),
    },
  };
}
