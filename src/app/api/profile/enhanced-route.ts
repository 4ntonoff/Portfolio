/**
 * Enhanced API Route for Profile Data
 * Provides comprehensive profile information with analytics
 */

import { NextResponse } from "next/server";
import { getResumeData } from "@/lib/data";
import {
  analyzePortfolio,
  generatePortfolioSummary,
  getPortfolioInsights,
  generatePerformanceMetrics,
  formatPortfolioForDisplay,
} from "@/utils/portfolio-analytics";

export const dynamic = 'force-static';

/**
 * GET /api/profile - Get complete profile data with analytics
 * Returns profile information, resume data, and analytics
 */
export async function GET(request: Request) {
  try {
    // Get resume data
    const data = await getResumeData();

    // Generate analytics
    const analytics = analyzePortfolio(data);
    const insights = getPortfolioInsights(data);
    const metrics = generatePerformanceMetrics(data);
    const formatted = formatPortfolioForDisplay(data);

    // Build response
    const response = {
      success: true,
      timestamp: new Date().toISOString(),
      data: {
        resume: data,
        analytics,
        insights,
        metrics,
        formatted,
      },
      metadata: {
        version: "1.0",
        lastUpdated: "2025-01-03",
        author: "Alexandr Antonov",
      },
    };

    return NextResponse.json(response, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch profile data",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/profile/summary - Get profile summary only
 */
export async function GET_SUMMARY() {
  try {
    const data = await getResumeData();
    const summary = generatePortfolioSummary(data);

    return NextResponse.json({
      success: true,
      summary,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to generate summary" },
      { status: 500 }
    );
  }
}

/**
 * GET /api/profile/analytics - Get analytics only
 */
export async function GET_ANALYTICS() {
  try {
    const data = await getResumeData();
    const analytics = analyzePortfolio(data);
    const metrics = generatePerformanceMetrics(data);

    return NextResponse.json({
      success: true,
      analytics,
      metrics,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}

