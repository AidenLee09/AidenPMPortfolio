import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

/* ── Fonts ─────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

/* ── Metadata ──────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: "Aiden // Technical Product Lab",
    template: "%s — Aiden Portfolio",
  },
  description:
    "A collection of high-velocity prototypes and data-driven tools built at the intersection of Industrial Engineering and PM logic.",
  keywords: [
    "Product Manager",
    "Portfolio",
    "Industrial Engineering",
    "Technical PM",
    "Cox Automotive",
    "Amazon",
    "Next.js",
  ],
  authors: [{ name: "Aiden" }],
  openGraph: {
    title: "Aiden // Technical Product Lab",
    description:
      "High-velocity prototypes and data-driven tools at the intersection of Industrial Engineering and PM logic.",
    type: "website",
  },
};

/* ── Root Layout ───────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>

          <Navbar />

          <main
            style={{
              paddingTop: "var(--nav-height)",
              minHeight: "100dvh",
            }}
          >
            {children}
          </main>

          {/* Footer */}
          <footer
            style={{
              padding: "3rem clamp(1rem, 4vw, 3rem)",
              borderTop: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: "var(--text-tertiary)",
                letterSpacing: "0.02em",
              }}
            >
              © {new Date().getFullYear()} Aiden // Portfolio
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-tertiary)",
                letterSpacing: "0.02em",
              }}
            >
              Built with Next.js · Deployed on Vercel
            </span>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
