"use client";

import {
  Activity,
  Flame,
  FlaskConical,
  Loader,
  TrendingUp,
  Zap,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   Type Definitions
   ═══════════════════════════════════════════════════════════════ */

export interface SprintMetric {
  label: string;
  value: string;
}

export interface Sprint {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  formula?: string;
  metrics?: SprintMetric[];
  status: "complete" | "active" | "upcoming";
}

export interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  sprints?: Sprint[];
  tags?: string[];
  span?: "1x1" | "2x2" | "full";
  variant?: "featured" | "standard" | "placeholder";
}

/* ═══════════════════════════════════════════════════════════════
   Sub-Components
   ═══════════════════════════════════════════════════════════════ */

function StatusBadge({ status }: { status: Sprint["status"] }) {
  const labels: Record<Sprint["status"], string> = {
    complete: "Complete",
    active: "Active",
    upcoming: "Upcoming",
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "0.7rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        color: "var(--text-tertiary)",
      }}
    >
      <span className={`status-dot ${status}`} />
      {labels[status]}
    </span>
  );
}

function SprintIcon({ id }: { id: string }) {
  const size = 20;
  const color = "var(--accent)";
  if (id.includes("2"))
    return <FlaskConical size={size} color={color} />;
  if (id.includes("3"))
    return <Flame size={size} color={color} />;
  return <Zap size={size} color={color} />;
}

function SprintPanel({ sprint }: { sprint: Sprint }) {
  return (
    <div
      style={{
        padding: "1.5rem",
        background: "var(--bg-surface)",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "all var(--transition-fast)",
        flex: "1 1 0",
        minWidth: "280px",
      }}
    >
      {/* Sprint Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "var(--radius-sm)",
              background: "var(--accent-subtle)",
              border: "1px solid var(--border-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SprintIcon id={sprint.id} />
          </div>
          <div>
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--accent)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {sprint.subtitle}
            </div>
            <div
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                lineHeight: 1.3,
              }}
            >
              {sprint.title}
            </div>
          </div>
        </div>
        <StatusBadge status={sprint.status} />
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "0.875rem",
          lineHeight: 1.7,
          color: "var(--text-secondary)",
          margin: 0,
        }}
      >
        {sprint.description}
      </p>

      {/* Formula */}
      {sprint.formula && (
        <div className="formula">{sprint.formula}</div>
      )}

      {/* Metrics */}
      {sprint.metrics && sprint.metrics.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {sprint.metrics.map((m) => (
            <div key={m.label} className="metric-chip">
              <span className="metric-label">{m.label}</span>
              <span className="metric-value">{m.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ProjectCard — Main Component
   ═══════════════════════════════════════════════════════════════ */

export function ProjectCard({
  title,
  subtitle,
  description,
  sprints,
  tags,
  variant = "standard",
}: ProjectCardProps) {
  /* ── Placeholder variant ───────────────────────────────── */
  if (variant === "placeholder") {
    return (
      <div
        className="glass-card animate-pulse-soft"
        style={{
          padding: "2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "220px",
          gap: "1rem",
          textAlign: "center",
          borderStyle: "dashed",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "var(--radius-md)",
            background: "var(--accent-subtle)",
            border: "1px solid var(--border-accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader
            size={22}
            color="var(--accent)"
            style={{ animation: "spin 3s linear infinite" }}
          />
        </div>
        <div>
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-tertiary)",
              fontFamily: "var(--font-mono)",
              marginBottom: "4px",
            }}
          >
            Upcoming Project
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "1rem",
              fontWeight: 500,
              color: "var(--text-secondary)",
            }}
          >
            [Processing...]
          </div>
        </div>
        <style jsx>{`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  /* ── Featured variant ──────────────────────────────────── */
  if (variant === "featured") {
    return (
      <div
        className="glass-card"
        style={{
          padding: "2.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Accent gradient top border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background:
              "linear-gradient(90deg, var(--accent), var(--accent-hover), var(--accent))",
            opacity: 0.8,
          }}
        />

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ maxWidth: "640px" }}>
            {subtitle && (
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--accent)",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Activity size={14} />
                {subtitle}
              </div>
            )}
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: "0.75rem",
              }}
            >
              {title}
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                maxWidth: "540px",
              }}
            >
              {description}
            </p>
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              {tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Sprints */}
        {sprints && sprints.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.25rem",
            }}
          >
            {sprints.map((sprint) => (
              <SprintPanel key={sprint.id} sprint={sprint} />
            ))}
          </div>
        )}

        {/* Bottom signal bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            paddingTop: "0.5rem",
            borderTop: "1px solid var(--border)",
          }}
        >
          <TrendingUp
            size={14}
            color="var(--accent)"
          />
          <span
            style={{
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              color: "var(--text-tertiary)",
              letterSpacing: "0.02em",
            }}
          >
            ACTIVE DEVELOPMENT · 2 SPRINTS DELIVERED
          </span>
        </div>
      </div>
    );
  }

  /* ── Standard variant ──────────────────────────────────── */
  return (
    <div
      className="glass-card"
      style={{
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        height: "100%",
      }}
    >
      {subtitle && (
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--accent)",
            fontFamily: "var(--font-mono)",
          }}
        >
          {subtitle}
        </div>
      )}
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "0.875rem",
          lineHeight: 1.7,
          color: "var(--text-secondary)",
          flex: 1,
        }}
      >
        {description}
      </p>
      {tags && tags.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
          }}
        >
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
