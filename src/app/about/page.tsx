import type { Metadata } from "next";
import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  Rocket,
  Cpu,
  Code2,
  Database,
  PenTool,
  Sparkles,
  BarChart3,
  Layout,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional archive — Product Management, Industrial Engineering, and entrepreneurial background.",
};

/* ═══════════════════════════════════════════════════════════════
   Data
   ═══════════════════════════════════════════════════════════════ */

interface TimelineEntry {
  role: string;
  org: string;
  detail: string;
  period?: string;
}

interface SkillItem {
  label: string;
  icon: React.ReactNode;
}

const professional: TimelineEntry[] = [
  {
    role: "Product Manager",
    org: "Cox Automotive",
    detail:
      "Driving product strategy for dealer-facing platforms. Leading cross-functional sprint ceremonies, defining OKRs, and translating stakeholder requirements into data-backed feature roadmaps.",
    period: "Current",
  },
  {
    role: "Area Manager Intern",
    org: "Amazon Operations",
    detail:
      "Managed end-to-end warehouse operations across shift cycles. Applied lean principles and Six Sigma methodology to optimize throughput and reduce cycle time in fulfillment workflows.",
    period: "Internship",
  },
];

const academic: TimelineEntry[] = [
  {
    role: "Industrial & Systems Engineering",
    org: "Kennesaw State University",
    detail:
      "Concentration in Optimization & Facility Planning. Coursework in operations research, stochastic modeling, supply chain design, and human factors engineering.",
    period: "B.S.",
  },
];

const entrepreneurial: TimelineEntry[] = [
  {
    role: "Founder",
    org: "Luxe Computers",
    detail:
      "Built a custom PC assembly and consulting business from scratch. Managed sourcing, pricing strategy, client relations, and technical support operations.",
  },
  {
    role: "Founder",
    org: "Luxe Pressure Washing LLC",
    detail:
      "Launched and scaled a service-based business. Developed operational workflows, client acquisition funnels, and financial forecasting models for seasonal demand patterns.",
  },
];

const skills: SkillItem[] = [
  { label: "Next.js", icon: <Layout size={16} /> },
  { label: "React", icon: <Code2 size={16} /> },
  { label: "Python", icon: <Cpu size={16} /> },
  { label: "SQL", icon: <Database size={16} /> },
  { label: "AutoCAD", icon: <PenTool size={16} /> },
  { label: "Data Analysis", icon: <BarChart3 size={16} /> },
  { label: "Vibe Coding", icon: <Sparkles size={16} /> },
  { label: "TypeScript", icon: <Code2 size={16} /> },
];

/* ═══════════════════════════════════════════════════════════════
   Sub-Components
   ═══════════════════════════════════════════════════════════════ */

function SectionHeader({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "1.5rem",
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
        {icon}
      </div>
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        {label}
      </h2>
      <div
        style={{
          flex: 1,
          height: "1px",
          background: "var(--border)",
        }}
      />
    </div>
  );
}

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  return (
    <div
      className="glass-card"
      style={{
        padding: "1.5rem",
        display: "flex",
        gap: "1.25rem",
        position: "relative",
      }}
    >
      {/* Timeline dot and line */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "4px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "var(--accent)",
            boxShadow: "0 0 10px var(--accent-glow)",
            flexShrink: 0,
          }}
        />
        <div
          style={{
            width: "2px",
            flex: 1,
            background:
              "linear-gradient(to bottom, var(--accent), transparent)",
            marginTop: "4px",
            borderRadius: "1px",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "6px",
          }}
        >
          <h3
            style={{
              fontSize: "1.05rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            {entry.role}
          </h3>
          {entry.period && (
            <span
              className="tag"
              style={{
                fontSize: "0.65rem",
              }}
            >
              {entry.period}
            </span>
          )}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "var(--accent)",
            marginBottom: "0.75rem",
            letterSpacing: "0.01em",
          }}
        >
          {entry.org}
        </div>
        <p
          style={{
            fontSize: "0.875rem",
            lineHeight: 1.75,
            color: "var(--text-secondary)",
            margin: 0,
          }}
        >
          {entry.detail}
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Page: About — The Professional Archive
   ═══════════════════════════════════════════════════════════════ */

export default function AboutPage() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "0 clamp(1rem, 4vw, 3rem)",
      }}
    >
      {/* ── Page Header ──────────────────────────────────── */}
      <section
        className="animate-fade-up"
        style={{
          paddingTop: "clamp(3rem, 8vh, 6rem)",
          paddingBottom: "clamp(2rem, 4vh, 3rem)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap-reverse",
          gap: "2rem",
        }}
      >
        <div style={{ flex: "1 1 400px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "1.25rem",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 12px var(--accent-glow)",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--accent)",
              }}
            >
              Credentials
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            The Professional
            <br />
            Archive
            <span style={{ color: "var(--accent)" }}>.</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)",
              lineHeight: 1.75,
              color: "var(--text-secondary)",
              maxWidth: "540px",
            }}
          >
            A structured overview of experience across product management,
            industrial engineering, and entrepreneurship.
          </p>
        </div>

        <div style={{ flexShrink: 0 }}>
          <div 
            className="glass-card" 
            style={{ 
              padding: "0.5rem", 
              borderRadius: "calc(var(--radius-xl) + 4px)",
              width: "fit-content"
            }}
          >
            <Image
              src="/Aiden Lee.jpg"
              alt="Aiden Lee"
              width={180}
              height={180}
              style={{
                borderRadius: "var(--radius-xl)",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Professional ─────────────────────────────────── */}
      <section
        className="animate-fade-up stagger-children"
        style={{
          marginBottom: "3rem",
          animationDelay: "0.15s",
        }}
      >
        <SectionHeader
          icon={<Briefcase size={20} />}
          label="Professional"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {professional.map((entry) => (
            <TimelineCard key={entry.org} entry={entry} />
          ))}
        </div>
      </section>

      {/* ── Academic ──────────────────────────────────────── */}
      <section
        className="animate-fade-up stagger-children"
        style={{
          marginBottom: "3rem",
          animationDelay: "0.25s",
        }}
      >
        <SectionHeader
          icon={<GraduationCap size={20} />}
          label="Academic"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {academic.map((entry) => (
            <TimelineCard key={entry.org} entry={entry} />
          ))}
        </div>
      </section>

      {/* ── Entrepreneurial ──────────────────────────────── */}
      <section
        className="animate-fade-up stagger-children"
        style={{
          marginBottom: "3rem",
          animationDelay: "0.35s",
        }}
      >
        <SectionHeader
          icon={<Rocket size={20} />}
          label="Entrepreneurial"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {entrepreneurial.map((entry) => (
            <TimelineCard key={entry.org} entry={entry} />
          ))}
        </div>
      </section>

      {/* ── Skills Matrix ────────────────────────────────── */}
      <section
        className="animate-fade-up"
        style={{
          marginBottom: "clamp(3rem, 6vh, 5rem)",
          animationDelay: "0.45s",
        }}
      >
        <SectionHeader
          icon={<Cpu size={20} />}
          label="Skills Matrix"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "0.75rem",
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.label}
              className="glass-card"
              style={{
                padding: "1rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "default",
              }}
            >
              <span style={{ color: "var(--accent)", display: "flex" }}>
                {skill.icon}
              </span>
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                {skill.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
