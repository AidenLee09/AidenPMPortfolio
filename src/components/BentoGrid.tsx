"use client";

import { type ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function BentoGrid({
  children,
  columns = 2,
  className = "",
}: BentoGridProps) {
  return (
    <>
      <div
        className={`bento-grid-responsive ${className}`}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "1.5rem",
          width: "100%",
        }}
      >
        {children}
      </div>
      <style jsx global>{`
        @media (max-width: 768px) {
          .bento-grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

/* ── Bento Cell wrapper for span control ──────────────────── */
interface BentoCellProps {
  children: ReactNode;
  span?: "1x1" | "2x2" | "full";
  className?: string;
}

export function BentoCell({
  children,
  span = "1x1",
  className = "",
}: BentoCellProps) {
  const spanStyles: Record<string, React.CSSProperties> = {
    "1x1": {},
    "2x2": { gridColumn: "span 2", gridRow: "span 2" },
    full: { gridColumn: "1 / -1" },
  };

  return (
    <div className={className} style={spanStyles[span]}>
      {children}
    </div>
  );
}
