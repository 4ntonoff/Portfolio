/**
 * Portfolio Stats Component
 * Displays key statistics about the portfolio
 */

"use client";

import { useEffect, useState } from "react";
import type { PortfolioAnalytics } from "@/utils/portfolio-analytics";

interface PortfolioStatsProps {
  analytics?: PortfolioAnalytics;
}

export function PortfolioStats({ analytics }: PortfolioStatsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !analytics) {
    return null;
  }

  const stats = [
    {
      label: "Years of Experience",
      value: analytics.totalExperience,
      icon: "💼",
    },
    {
      label: "Companies",
      value: analytics.companiesCount.toString(),
      icon: "🏢",
    },
    {
      label: "Skills",
      value: analytics.skillsCount.toString(),
      icon: "🛠️",
    },
    {
      label: "Achievements",
      value: analytics.achievementsCount.toString(),
      icon: "🏆",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-gray-700 bg-gray-800 p-4 text-center"
        >
          <div className="text-3xl">{stat.icon}</div>
          <div className="mt-2 text-2xl font-bold text-white">
            {stat.value}
          </div>
          <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

/**
 * Specializations Display Component
 */
export function SpecializationsDisplay({ analytics }: PortfolioStatsProps) {
  if (!analytics) return null;

  return (
    <div className="mt-6">
      <h3 className="mb-4 text-lg font-semibold text-white">
        Specializations
      </h3>
      <div className="flex flex-wrap gap-2">
        {analytics.specializations.map((spec) => (
          <span
            key={spec}
            className="rounded-full bg-blue-900 px-4 py-2 text-sm text-blue-200"
          >
            {spec}
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Top Skills Display Component
 */
export function TopSkillsDisplay({ analytics }: PortfolioStatsProps) {
  if (!analytics || analytics.topSkills.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="mb-4 text-lg font-semibold text-white">Top Skills</h3>
      <div className="grid gap-3 md:grid-cols-2">
        {analytics.topSkills.slice(0, 6).map((skill) => (
          <div key={skill} className="rounded-lg bg-gray-800 p-3">
            <span className="text-gray-300">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Companies Timeline Component
 */
export function CompaniesTimeline({ analytics }: PortfolioStatsProps) {
  if (!analytics || analytics.topCompanies.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="mb-4 text-lg font-semibold text-white">
        Companies
      </h3>
      <div className="space-y-2">
        {analytics.topCompanies.map((company, index) => (
          <div key={company} className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
            <span className="text-gray-300">{company}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

