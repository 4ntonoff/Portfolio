"use client";

import { useState } from "react";
import { ViewSwitch, ViewMode } from "@/components/view-switch";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { type ResumeData } from "@/lib/data";
import { ReactNode } from "react";

interface PortfolioWrapperProps {
  data: ResumeData;
  detailedView: ReactNode;
}

export function PortfolioWrapper({
  data,
  detailedView,
}: PortfolioWrapperProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("initial");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleViewModeChange = (mode: ViewMode) => {
    if (mode === viewMode) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setViewMode(mode);
      setIsTransitioning(false);
    }, 200);
  };

  if (viewMode === "initial") {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <ShaderAnimation />

        <div className="absolute inset-0 z-10 flex min-h-screen flex-col items-center justify-center px-4 py-8">
          <div className="mb-8 text-center">
            <h1 className="mb-6 text-4xl font-bold text-white drop-shadow-lg sm:text-5xl md:text-6xl">
              {data.name}
            </h1>
            <p className="text-lg text-gray-300 drop-shadow-md sm:text-xl">
              {data.about}
            </p>
          </div>
          <ViewSwitch
            currentView={viewMode}
            onChange={handleViewModeChange}
            size="large"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`smooth-transition ${isTransitioning ? "fade-out" : "fade-in"}`}
    >
      <div key="detailed-view-wrapper">
        {detailedView}
      </div>

      <div
        key="view-switch-container"
        className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform sm:bottom-8"
      >
        <ViewSwitch currentView={viewMode} onChange={handleViewModeChange} />
      </div>
    </div>
  );
}
