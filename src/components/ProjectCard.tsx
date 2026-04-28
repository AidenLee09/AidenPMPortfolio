"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ExternalLink,
  Flame,
  FlaskConical,
  Loader,
  TrendingUp,
  Zap,
} from "lucide-react";
import {
  ImageLightbox,
  InspectableImage,
} from "@/components/ImageLightbox";

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
  image?: string;
}

export interface ProjectCardProps {
  title: string;
  subtitle?: string;
  description: string;
  sprints?: Sprint[];
  tags?: string[];
  span?: "1x1" | "2x2" | "full";
  variant?: "featured" | "standard" | "placeholder";
  image?: string;
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
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

function SprintPanel({
  sprint,
  onImageOpen,
}: {
  sprint: Sprint;
  onImageOpen: (src: string, alt: string, caption?: string) => void;
}) {
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

      {/* Sprint Image */}
      {sprint.image && (
        <InspectableImage
          src={sprint.image}
          alt={sprint.title}
          caption={`Analysis: ${sprint.subtitle} // ${sprint.title}`}
          width={600}
          height={340}
          onOpen={onImageOpen}
        />
      )}

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
  image,
  primaryCta,
  secondaryCta,
  variant = "standard",
}: ProjectCardProps) {
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
    caption?: string;
  } | null>(null);

  const openLightbox = (src: string, alt: string, caption?: string) => {
    setLightbox({ src, alt, caption });
  };

  const closeLightbox = () => setLightbox(null);
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
      <>
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
            gap: "1.5rem",
          }}
        >
          <div style={{ maxWidth: "640px", flex: "1 1 400px" }}>
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

          {/* MVP Image */}
          {image && (
            <InspectableImage
              src={image}
              alt={title}
              caption={`Overview: ${title} // MVP Architecture`}
              width={420}
              height={240}
              containerStyle={{
                maxWidth: "420px",
                width: "100%",
                flexShrink: 0,
              }}
              onOpen={openLightbox}
            />
          )}

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
              <SprintPanel
                key={sprint.id}
                sprint={sprint}
                onImageOpen={openLightbox}
              />
            ))}
          </div>
        )}

        {/* Dual-Action CTAs */}
        {(primaryCta || secondaryCta) && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              paddingTop: "0.75rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            {primaryCta && (
              <a
                href={primaryCta.href}
                target={primaryCta.external ? "_blank" : undefined}
                rel={primaryCta.external ? "noopener noreferrer" : undefined}
                title={
                  primaryCta.external
                    ? "Opens the live interactive dashboard in a new tab."
                    : undefined
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  borderRadius: "999px",
                  border: "1px solid oklch(60% 0.15 250 / 0.4)",
                  background: "oklch(60% 0.15 250 / 0.08)",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.01em",
                  color: "var(--text-primary)",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor =
                    "oklch(60% 0.15 250 / 0.7)";
                  e.currentTarget.style.background =
                    "oklch(60% 0.15 250 / 0.14)";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px oklch(60% 0.15 250 / 0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor =
                    "oklch(60% 0.15 250 / 0.4)";
                  e.currentTarget.style.background =
                    "oklch(60% 0.15 250 / 0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Live pulse */}
                <span
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    width: "8px",
                    height: "8px",
                    flexShrink: 0,
                  }}
                >
                  <span
                    className="lab-ping"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      background: "oklch(60% 0.15 250)",
                      opacity: 0.6,
                    }}
                  />
                  <span
                    style={{
                      position: "relative",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "oklch(60% 0.15 250)",
                    }}
                  />
                </span>
                {primaryCta.label}
                {primaryCta.external && (
                  <ExternalLink size={13} style={{ opacity: 0.5 }} />
                )}
              </a>
            )}

            {secondaryCta && (
              secondaryCta.external ? (
                <a
                  href={secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-secondary)",
                    cursor: "pointer",
                    transition: "color var(--transition-fast)",
                    padding: "10px 4px",
                    borderBottom: "1px solid transparent",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.borderBottomColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.borderBottomColor = "transparent";
                  }}
                >
                  {secondaryCta.label}
                  <span style={{ fontSize: "0.7em" }}>→</span>
                </a>
              ) : (
                <Link
                  href={secondaryCta.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-secondary)",
                    cursor: "pointer",
                    transition: "color var(--transition-fast)",
                    padding: "10px 4px",
                    borderBottom: "1px solid transparent",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.borderBottomColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.borderBottomColor = "transparent";
                  }}
                >
                  {secondaryCta.label}
                  <span style={{ fontSize: "0.7em" }}>→</span>
                </Link>
              )
            )}
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

      {/* Lightbox Modal */}
      <ImageLightbox
        src={lightbox?.src ?? ""}
        alt={lightbox?.alt ?? ""}
        caption={lightbox?.caption}
        isOpen={lightbox !== null}
        onClose={closeLightbox}
      />
    </>
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
