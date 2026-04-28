"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume.pdf", label: "Resume", external: true },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className="glass"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "var(--nav-height)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(1rem, 4vw, 3rem)",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        borderBottom: "1px solid var(--border)",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
          }}
        >
          Aiden Lee
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "1.15rem",
            fontWeight: 300,
            color: "var(--accent)",
            margin: "0 4px",
          }}
        >
          //
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "1.15rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
          }}
        >
          Portfolio
        </span>
      </Link>

      {/* Desktop Nav */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
        className="desktop-nav"
      >
        {navLinks.map((link) => {
          const isActive =
            !link.external && pathname === link.href;

          if (link.external) {
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  color: "var(--text-secondary)",
                  transition: "color var(--transition-fast)",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                {link.label}
              </a>
            );
          }

          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: isActive ? 600 : 500,
                letterSpacing: "0.02em",
                color: isActive
                  ? "var(--accent)"
                  : "var(--text-secondary)",
                transition: "color var(--transition-fast)",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                if (!isActive)
                  e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                if (!isActive)
                  e.currentTarget.style.color =
                    "var(--text-secondary)";
              }}
            >
              {link.label}
              {isActive && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "var(--accent)",
                    borderRadius: "1px",
                  }}
                />
              )}
            </Link>
          );
        })}

        {/* Launch Lab CTA */}
        <a
          href="https://omni.aidenportfolio.dev"
          target="_blank"
          rel="noopener noreferrer"
          id="launch-lab-cta"
          className="launch-lab-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "7px 16px",
            borderRadius: "999px",
            border: "1px solid oklch(60% 0.15 250 / 0.3)",
            background: "transparent",
            textDecoration: "none",
            fontSize: "0.8rem",
            fontWeight: 600,
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.02em",
            color: "var(--text-primary)",
            cursor: "pointer",
            transition: "all var(--transition-fast)",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "oklch(60% 0.15 250 / 0.7)";
            e.currentTarget.style.background = "oklch(60% 0.15 250 / 0.08)";
            e.currentTarget.style.boxShadow =
              "0 0 16px oklch(60% 0.15 250 / 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "oklch(60% 0.15 250 / 0.3)";
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Live Pulse Indicator */}
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
          Launch Lab
          <ExternalLink size={12} style={{ opacity: 0.5 }} />
        </a>

        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            id="theme-toggle"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "38px",
              height: "38px",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border)",
              background: "var(--bg-surface)",
              cursor: "pointer",
              transition: "all var(--transition-fast)",
              color: "var(--text-secondary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.boxShadow = "var(--shadow-glow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-secondary)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
        )}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle mobile menu"
        id="mobile-menu-toggle"
        className="mobile-menu-btn"
        style={{
          display: "none",
          alignItems: "center",
          justifyContent: "center",
          width: "38px",
          height: "38px",
          borderRadius: "var(--radius-sm)",
          border: "1px solid var(--border)",
          background: "var(--bg-surface)",
          cursor: "pointer",
          color: "var(--text-secondary)",
        }}
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile Overlay — fully opaque to prevent tap-through */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "var(--nav-height)",
            left: 0,
            right: 0,
            bottom: 0,
            background: "var(--bg-primary)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
            zIndex: 999,
            padding: "2rem",
          }}
        >
          {navLinks.map((link) => {
            const isActive =
              !link.external && pathname === link.href;

            const commonStyle: React.CSSProperties = {
              textDecoration: "none",
              fontSize: "1.5rem",
              fontWeight: isActive ? 700 : 500,
              color: isActive
                ? "var(--accent)"
                : "var(--text-primary)",
              letterSpacing: "-0.01em",
              padding: "0.5rem 1.5rem",
              borderRadius: "var(--radius-md)",
              transition: "background var(--transition-fast)",
              width: "100%",
              maxWidth: "280px",
              textAlign: "center",
            };

            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={commonStyle}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                style={commonStyle}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Launch Lab CTA — Mobile */}
          <a
            href="https://omni.aidenportfolio.dev"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              textDecoration: "none",
              fontSize: "1.1rem",
              fontWeight: 600,
              fontFamily: "var(--font-mono)",
              color: "var(--text-primary)",
              padding: "12px 24px",
              borderRadius: "999px",
              border: "1px solid oklch(60% 0.15 250 / 0.4)",
              background: "oklch(60% 0.15 250 / 0.06)",
              width: "100%",
              maxWidth: "280px",
            }}
          >
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
            Launch Lab
            <ExternalLink size={14} style={{ opacity: 0.5 }} />
          </a>

          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "12px 24px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border)",
                background: "var(--bg-surface)",
                cursor: "pointer",
                color: "var(--text-secondary)",
                fontSize: "1rem",
                fontFamily: "var(--font-body)",
                width: "100%",
                maxWidth: "280px",
              }}
            >
              {theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          )}
        </div>
      )}

      {/* Responsive styles */}
      <style jsx global>{`
        @keyframes lab-ping {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          75%, 100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
        .lab-ping {
          animation: lab-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          header.glass {
            background: var(--bg-primary) !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }
        }
      `}</style>
    </header>
  );
}
