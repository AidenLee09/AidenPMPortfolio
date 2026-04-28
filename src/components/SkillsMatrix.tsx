"use client";

import {
  Cpu,
  Code2,
  Target,
  Ruler,
  BarChart3,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════ */

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Product & Strategy",
    icon: <Target size={18} />,
    skills: [
      "Agile / Scrum",
      "Product Lifecycle Management (PLM)",
      "Strategic Roadmapping",
      "Stakeholder Management",
      "Strategic Communication",
      "Venture Management (LTV/CAC)",
      "Rally",
    ],
  },
  {
    title: "Engineering & Dev",
    icon: <Code2 size={18} />,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "SQL",
      "Tailwind CSS",
      "Vibe Coding (AI-Assisted Dev)",
      "Git / GitHub",
    ],
  },
  {
    title: "Data & Optimization",
    icon: <BarChart3 size={18} />,
    skills: [
      "Statistical Process Control (Minitab)",
      "Data Analysis",
      "Predictive Modeling",
      "Lean Six Sigma",
      "Process Optimization",
      "A/B Testing",
    ],
  },
  {
    title: "Technical Design & Ops",
    icon: <Ruler size={18} />,
    skills: [
      "AutoCAD",
      "Facility Planning",
      "UI/UX Design Logic",
      "Throughput Optimization",
      "Resource Allocation",
      "P&L Management",
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   Section Header (local)
   ═══════════════════════════════════════════════════════════════ */

function MatrixHeader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "var(--radius-sm)",
          background: "var(--accent-subtle)",
          border: "1px solid var(--border-accent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--accent)",
          flexShrink: 0,
        }}
      >
        <Cpu size={20} />
      </div>
      <div>
        <h2
          style={{
            fontSize: "1.3rem",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.2,
          }}
        >
          Skills Matrix
        </h2>
        <span
          style={{
            fontSize: "0.7rem",
            fontFamily: "var(--font-mono)",
            fontWeight: 500,
            color: "var(--text-tertiary)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          ISE × Product Management
        </span>
      </div>
      <div
        style={{
          flex: 1,
          height: "1px",
          background: "var(--border)",
          marginLeft: "4px",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SkillsMatrix Component
   ═══════════════════════════════════════════════════════════════ */

export function SkillsMatrix() {
  return (
    <section
      className="animate-fade-up"
      style={{
        marginBottom: "clamp(3rem, 6vh, 5rem)",
        animationDelay: "0.45s",
      }}
    >
      <MatrixHeader />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className="glass-card"
            style={{
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              cursor: "default",
              transition:
                "border-color var(--transition-fast), box-shadow var(--transition-fast)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--border-accent)";
              e.currentTarget.style.boxShadow = "var(--shadow-glow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.boxShadow = "var(--shadow-sm)";
            }}
          >
            {/* Category Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span style={{ color: "var(--accent)", display: "flex" }}>
                {cat.icon}
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-mono)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--accent)",
                }}
              >
                {cat.title}
              </span>
            </div>

            {/* Skills Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    padding: "5px 10px",
                    lineHeight: 1.4,
                    transition:
                      "border-color var(--transition-fast), color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-accent)";
                    e.currentTarget.style.color = "var(--text-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
