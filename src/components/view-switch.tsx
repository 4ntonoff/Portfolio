"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { NeonButton } from "@/components/neon-button";

export type ViewMode = "initial" | "detailed";

interface ViewSwitchProps {
  currentView: ViewMode;
  onChange: (view: ViewMode) => void;
  size?: "default" | "large";
}

export function ViewSwitch({
  currentView,
  onChange,
  size = "default",
}: ViewSwitchProps) {
  if (currentView === "detailed" && size === "default") {
    return null;
  }

  return (
    <div className="flex flex-col items-center">
      <NeonButton onClick={() => onChange("detailed")}>
        Continue
        <ArrowRight className="h-4 w-4" />
      </NeonButton>
    </div>
  );
}
