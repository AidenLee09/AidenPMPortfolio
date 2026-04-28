import { ProjectCard, type Sprint } from "@/components/ProjectCard";
import { BentoGrid, BentoCell } from "@/components/BentoGrid";

/* ═══════════════════════════════════════════════════════════════
   Data: Omni-Channel Dealer Health Index
   ═══════════════════════════════════════════════════════════════ */

const omniChannelSprints: Sprint[] = [
  {
    id: "sprint-2",
    subtitle: "Sprint 2",
    title: "The Strategy Simulator",
    description:
      'A "What-If" Sensitivity Analysis engine that lets stakeholders manipulate weighted input deltas (Δ) to project the effect on the composite dealer health index. Each channel score is re-weighted in real-time, surfacing which levers produce the highest marginal ROI.',
    formula: "S = Σ(wᵢ · δcᵢ)",
    metrics: [
      { label: "Weighted Index", value: "Composite" },
      { label: "Sensitivity Range", value: "±15%" },
      { label: "Confidence Band", value: "92.4%" },
    ],
    status: "complete",
    image: "/sprint 2.png",
  },
  {
    id: "sprint-3",
    subtitle: "Sprint 3",
    title: "The Profit Evaporator",
    description:
      'An Inventory Carrying-Cost Burn Engine that calculates real-time "Floorplan Drag" — the daily erosion of margin from aging inventory. Includes a persistent financial HUD for monitoring burn rate and days-to-break-even thresholds.',
    metrics: [
      { label: "Carrying Cost/Day", value: "$47.20" },
      { label: "Floorplan Burn", value: "−0.3%/d" },
      { label: "Days-to-Break", value: "42d" },
    ],
    status: "active",
    image: "/sprint 3.png",
  },
];

/* ═══════════════════════════════════════════════════════════════
   Page: The Project Lab (Home)
   ═══════════════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 clamp(1rem, 4vw, 3rem)",
      }}
    >
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="animate-fade-up"
        style={{
          paddingTop: "clamp(3rem, 8vh, 6rem)",
          paddingBottom: "clamp(2rem, 5vh, 4rem)",
          maxWidth: "720px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 12px var(--accent-glow)",
              animation: "pulse-soft 2s ease-in-out infinite",
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
            Portfolio · Active
          </span>
        </div>

        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            marginBottom: "1.25rem",
          }}
        >
          Aiden{" "}
          <span style={{ color: "var(--accent)", fontWeight: 300 }}>
            //
          </span>{" "}
          Technical
          <br />
          Product Lab
          <span style={{ color: "var(--accent)" }}>.</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.125rem)",
            lineHeight: 1.75,
            color: "var(--text-secondary)",
            maxWidth: "560px",
          }}
        >
          A collection of high-velocity prototypes and data-driven tools
          built at the intersection of{" "}
          <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
            Industrial Engineering
          </span>{" "}
          and{" "}
          <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
            PM logic
          </span>
          .
        </p>
      </section>

      {/* ── Section Label ────────────────────────────────── */}
      <div
        className="animate-fade-up"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "1.5rem",
          animationDelay: "0.2s",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--text-tertiary)",
          }}
        >
          Featured Work
        </span>
        <div
          style={{
            flex: 1,
            height: "1px",
            background: "var(--border)",
          }}
        />
      </div>

      {/* ── Featured Project: Omni-Channel ───────────────── */}
      <section
        className="animate-fade-up"
        style={{ marginBottom: "2rem", animationDelay: "0.3s" }}
      >
        <ProjectCard
          title="Omni-Channel Dealer Health Index"
          subtitle="Featured Project"
          description="A composite diagnostic platform for evaluating multi-channel dealer performance across inventory velocity, digital engagement, service retention, and financial health metrics."
          sprints={omniChannelSprints}
          tags={[
            "Data Pipeline",
            "Sensitivity Analysis",
            "Financial Modeling",
            "Python",
            "SQL",
          ]}
          variant="featured"
          span="full"
          image="/MVP.png"
          primaryCta={{
            label: "Launch Live Lab",
            href: "https://omni.aidenportfolio.dev",
            external: true,
          }}
        />
      </section>

      {/* ── BentoGrid: Additional / Future Projects ──────── */}
      <section
        className="animate-fade-up"
        style={{
          paddingBottom: "clamp(3rem, 6vh, 5rem)",
          animationDelay: "0.4s",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "1.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--text-tertiary)",
            }}
          >
            Pipeline
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "var(--border)",
            }}
          />
        </div>

        <BentoGrid columns={2}>
          <BentoCell span="1x1">
            <ProjectCard
              title="Upcoming Project"
              description=""
              variant="placeholder"
            />
          </BentoCell>
          <BentoCell span="1x1">
            <ProjectCard
              title="Upcoming Project"
              description=""
              variant="placeholder"
            />
          </BentoCell>
        </BentoGrid>
      </section>
    </div>
  );
}
