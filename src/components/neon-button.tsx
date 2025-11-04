"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function NeonButton({ children, onClick, className }: NeonButtonProps) {
  return (
    <div className="relative">
      <style jsx global>{`
        svg[id="unopaq-filter"] {
          display: none;
        }

        .neon-container {
          position: relative;
          display: inline-block;
        }

        .neon-button {
          position: relative;
          cursor: pointer;
          border: none;
          background: rgba(0, 0, 0, 0.3);
          color: #fff;
          font-weight: 600;
          font-size: 14px;
          padding: 10px 24px;
          border-radius: 2px;
          overflow: visible;
          transition: all 0.3s ease;
        }

        .neon-button:hover {
          background: rgba(0, 0, 0, 0.5);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }

        .neon-text {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .neon-border {
          pointer-events: none;
          position: absolute;
        }

        .neon-border::before {
          content: "";
          position: absolute;
          inset: 0;
          background: inherit;
          filter: blur(2px);
          opacity: 0.6;
        }

        .neon-border::after {
          content: "";
          position: absolute;
          inset: 0;
          background: inherit;
          filter: blur(8px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .neon-button:hover .neon-border::after {
          opacity: 0.8;
        }

        .neon-left {
          left: -3px;
          top: -12px;
          bottom: -12px;
          width: 2px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.8),
            transparent
          );
        }

        .neon-right {
          right: -3px;
          top: -12px;
          bottom: -12px;
          width: 2px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.8),
            transparent
          );
        }

        .neon-top {
          top: -3px;
          left: -12px;
          right: -12px;
          height: 2px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.8),
            transparent
          );
        }

        .neon-bottom {
          bottom: -3px;
          left: -12px;
          right: -12px;
          height: 2px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0.8),
            transparent
          );
        }

        .neon-corner {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 1);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .neon-button:hover .neon-corner {
          opacity: 1;
        }

        .neon-corner-tl {
          top: -3px;
          left: -3px;
        }

        .neon-corner-tr {
          top: -3px;
          right: -3px;
        }

        .neon-corner-bl {
          bottom: -3px;
          left: -3px;
        }

        .neon-corner-br {
          bottom: -3px;
          right: -3px;
        }
      `}</style>

      <svg id="unopaq-filter" style={{ position: "absolute", width: 0, height: 0 }}>
        <filter width="3000%" x="-1000%" height="3000%" y="-1000%" id="unopaq">
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 3 0" />
        </filter>
      </svg>

      <div className="neon-container">
        <button onClick={onClick} className={cn("neon-button", className)}>
          <div className="neon-border neon-left" />
          <div className="neon-border neon-right" />
          <div className="neon-border neon-top" />
          <div className="neon-border neon-bottom" />

          <div className="neon-corner neon-corner-tl" />
          <div className="neon-corner neon-corner-tr" />
          <div className="neon-corner neon-corner-bl" />
          <div className="neon-corner neon-corner-br" />

          <div className="neon-text">{children}</div>
        </button>
      </div>
    </div>
  );
}
