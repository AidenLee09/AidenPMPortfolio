import type { Metadata } from "next";
import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  Rocket,
  Wrench,
} from "lucide-react";
import { SkillsMatrix } from "@/components/SkillsMatrix";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional archive — Product Management, Industrial Engineering, and entrepreneurial background.",
};

/* ═══════════════════════════════════════════════════════════════
   Data Structures
   ═══════════════════════════════════════════════════════════════ */

interface BulletPoint {
  label: string;
  detail: string;
}

interface ArchiveEntry {
  role: string;
  org: string;
  period?: string;
  bullets: BulletPoint[];
}

/* ── Professional Experience ─────────────────────────────────── */

const professional: ArchiveEntry[] = [
  {
    role: "Product Manager Intern",
    org: "Cox Automotive",
    period: "Current",
    bullets: [
      {
        label: "Feature Orchestration",
        detail:
          "Spearheaded the end-to-end design and deployment of three strategic feature sets, introducing a centralized modular interface that eliminated cross-platform fragmentation and significantly reduced user task-latency.",
      },
      {
        label: "Cross-Functional Alignment",
        detail:
          "Acted as the central node between Engineering, UX, and QA workstreams to synthesize technical requirements, ensuring 100% alignment on product vision from discovery through delivery.",
      },
      {
        label: "Agile Lifecycle Management",
        detail:
          "Optimized delivery velocity using Rally to architect epics and user stories, maintaining a rigorous Agile cadence and gaining deep proficiency in high-performance product lifecycle management.",
      },
    ],
  },
  {
    role: "Area Manager Intern",
    org: "Amazon Operations",
    period: "Internship",
    bullets: [
      {
        label: "Throughput Optimization",
        detail:
          "Engineered a strategic overhaul of the inbound freight pipeline, utilizing Lean principles to drive a 10%+ increase in daily throughput and operational velocity.",
      },
      {
        label: "Human Capital Leadership",
        detail:
          "Directed a high-volume team of 40+ associates, fostering a performance-driven culture through active feedback loops and precise communication to meet aggressive operational KPIs.",
      },
      {
        label: "Fiscal Impact & Process Improvement",
        detail:
          "Identified and executed a structural process redesign for warehouse logistics, resulting in a verified $50,000 annual cost reduction in asset management.",
      },
      {
        label: "Operational Integrity",
        detail:
          "Managed high-precision reporting and end-of-day documentation, ensuring data accuracy across all mission-critical operational metrics.",
      },
    ],
  },
];

/* ── Academic ────────────────────────────────────────────────── */

const academic: ArchiveEntry[] = [
  {
    role: "Industrial & Systems Engineering",
    org: "Kennesaw State University",
    period: "B.S.",
    bullets: [
      {
        label: "Optimization & Facility Planning",
        detail:
          "Concentration in quantitative optimization, stochastic modeling, supply chain design, and human factors engineering.",
      },
      {
        label: "Applied Research",
        detail:
          "Coursework in operations research, simulation, and data-driven decision frameworks for complex industrial systems.",
      },
    ],
  },
];

/* ── Entrepreneurial (Service Logic Lab) ─────────────────────── */

const entrepreneurial: ArchiveEntry[] = [
  {
    role: "Founder & Lead Architect",
    org: "Luxe Computers",
    bullets: [
      {
        label: "Data-Driven Operations",
        detail:
          "Leveraged historical performance metrics and predictive modeling to optimize operational workflows and forecast resource requirements against fluctuating market demand.",
      },
      {
        label: "Full-Cycle Venture Management",
        detail:
          "Direct oversight of the comprehensive business stack, including fiscal architecture, human capital management, and multi-channel growth strategies.",
      },
      {
        label: "Strategic Value Engineering",
        detail:
          "Analyzed hardware market volatility to architect value-added service tiers, driving significant revenue growth through high-margin custom solutions.",
      },
      {
        label: "Solution Architecture",
        detail:
          "Acted as a lead technical consultant, translating complex client requirements into optimized hardware configurations and performance-tuned systems.",
      },
    ],
  },
  {
    role: "Founder & Operations Lead",
    org: "Luxe Pressure Washing LLC",
    bullets: [
      {
        label: "Client Needs Assessment",
        detail:
          "Implemented a consultative sales framework to diagnose maintenance requirements and maximize Life Time Value (LTV) through strategic service upselling.",
      },
      {
        label: "Operational Scaling",
        detail:
          "Architected the foundational HR and payroll infrastructure, successfully transitioning the enterprise from a founder-operator model to a scalable, employee-managed operation.",
      },
      {
        label: "Acquisition Optimization",
        detail:
          "Directed and refined multi-platform ad campaigns, utilizing A/B testing and conversion tracking to minimize Customer Acquisition Cost (CAC) and maximize lead velocity.",
      },
      {
        label: "Asset Maintenance Strategy",
        detail:
          "Developed and executed a preventative maintenance protocol for industrial equipment to ensure near-zero operational downtime and maximum asset longevity.",
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   Sub-Components
   ═══════════════════════════════════════════════════════════════ */

function SectionHeader({
  icon,
  label,
  sublabel,
}: {
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
}) {
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
        {icon}
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
          {label}
        </h2>
        {sublabel && (
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
            {sublabel}
          </span>
        )}
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

function ArchiveCard({
  entry,
  variant = "default",
}: {
  entry: ArchiveEntry;
  variant?: "default" | "lab";
}) {
  const isLab = variant === "lab";

  return (
    <div
      className="glass-card"
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        borderLeft: isLab
          ? "3px solid var(--accent)"
          : "3px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        position: "relative",
        background: isLab ? "var(--accent-subtle)" : undefined,
        boxShadow: isLab ? "inset 0 0 0 1px var(--border-accent)" : undefined,
      }}
    >
      {/* Role Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.3,
              marginBottom: "4px",
            }}
          >
            {entry.role}
          </h3>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--accent)",
              letterSpacing: "0.01em",
            }}
          >
            {entry.org}
          </div>
        </div>
        {entry.period && (
          <span
            className="tag"
            style={{ fontSize: "0.65rem", flexShrink: 0 }}
          >
            {entry.period}
          </span>
        )}
      </div>

      {/* Bullet Points — geometric dashes */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {entry.bullets.map((bullet) => (
          <div
            key={bullet.label}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "12px",
              alignItems: "start",
            }}
          >
            {/* Geometric accent marker */}
            <div
              style={{
                width: "6px",
                height: "6px",
                background: "var(--accent)",
                marginTop: "0.6rem",
                flexShrink: 0,
                borderRadius: "1px",
              }}
            />
            <div>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  letterSpacing: "-0.01em",
                  color: "var(--text-primary)",
                }}
              >
                {bullet.label}
              </span>
              <span
                style={{
                  color: "var(--text-tertiary)",
                  fontWeight: 400,
                  margin: "0 6px",
                }}
              >
                —
              </span>
              <span
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.85,
                  color: "oklch(from var(--text-secondary) l c h / 0.8)",
                  fontWeight: 400,
                }}
              >
                {bullet.detail}
              </span>
            </div>
          </div>
        ))}
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
        maxWidth: "920px",
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
              letterSpacing: "-0.05em",
              lineHeight: 1.08,
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
              lineHeight: 1.8,
              color: "oklch(from var(--text-secondary) l c h / 0.8)",
              maxWidth: "540px",
            }}
          >
            A structured record of execution across product management,
            industrial systems engineering, and venture-scale entrepreneurship.
          </p>
        </div>

        <div style={{ flexShrink: 0 }}>
          <div
            className="glass-card"
            style={{
              padding: "0.5rem",
              borderRadius: "calc(var(--radius-xl) + 4px)",
              width: "fit-content",
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

      {/* ── Professional Experience ──────────────────────── */}
      <section
        className="animate-fade-up"
        style={{
          marginBottom: "3.5rem",
          animationDelay: "0.15s",
        }}
      >
        <SectionHeader
          icon={<Briefcase size={20} />}
          label="Professional Experience"
          sublabel="Corporate · Operations"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {professional.map((entry) => (
            <ArchiveCard key={entry.org} entry={entry} />
          ))}
        </div>
      </section>

      {/* ── Academic ──────────────────────────────────────── */}
      <section
        className="animate-fade-up"
        style={{
          marginBottom: "3.5rem",
          animationDelay: "0.25s",
        }}
      >
        <SectionHeader
          icon={<GraduationCap size={20} />}
          label="Academic Foundation"
          sublabel="Engineering · Research"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {academic.map((entry) => (
            <ArchiveCard key={entry.org} entry={entry} />
          ))}
        </div>
      </section>

      {/* ── Entrepreneurial — Service Logic Lab ──────────── */}
      <section
        className="animate-fade-up"
        style={{
          marginBottom: "3.5rem",
          animationDelay: "0.35s",
        }}
      >
        <SectionHeader
          icon={<Rocket size={20} />}
          label="Service Logic Lab"
          sublabel="Ventures · Self-Directed"
        />

        {/* Lab context callout */}
        <div
          className="glass-card"
          style={{
            padding: "1rem 1.5rem",
            marginBottom: "1.25rem",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderLeft: "3px solid var(--accent)",
            borderRadius: "var(--radius-md)",
          }}
        >
          <Wrench size={16} style={{ color: "var(--accent)", flexShrink: 0 }} />
          <span
            style={{
              fontSize: "0.8rem",
              lineHeight: 1.7,
              color: "oklch(from var(--text-secondary) l c h / 0.8)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Self-funded ventures built from zero — applying product thinking to
            real-world service delivery and hardware operations.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {entrepreneurial.map((entry) => (
            <ArchiveCard key={entry.org} entry={entry} variant="lab" />
          ))}
        </div>
      </section>

      {/* ── Skills Matrix ────────────────────────────────── */}
      <SkillsMatrix />
    </div>
  );
}
