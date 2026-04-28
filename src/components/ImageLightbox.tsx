"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   ImageLightbox — Lab-grade Image Inspection Modal
   ═══════════════════════════════════════════════════════════════ */

interface LightboxProps {
  src: string;
  alt: string;
  caption?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageLightbox({
  src,
  alt,
  caption,
  isOpen,
  onClose,
}: LightboxProps) {
  // Esc key handler
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKey]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded view of ${alt}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "2rem",
            cursor: "zoom-out",
            background: "oklch(20% 0.05 250 / 0.6)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ delay: 0.1 }}
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close image viewer"
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              width: "40px",
              height: "40px",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--border)",
              background: "var(--bg-surface)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--text-secondary)",
              transition: "all var(--transition-fast)",
              zIndex: 10000,
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
            <X size={18} />
          </motion.button>

          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: caption ? "80vh" : "85vh",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid var(--border-accent)",
              boxShadow:
                "0 0 40px oklch(60% 0.15 250 / 0.12), 0 20px 60px oklch(0% 0 0 / 0.4)",
              cursor: "default",
              position: "relative",
            }}
          >
            <Image
              src={src}
              alt={alt}
              width={1400}
              height={800}
              quality={95}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "90vw",
                maxHeight: caption ? "80vh" : "85vh",
                display: "block",
                objectFit: "contain",
              }}
            />
          </motion.div>

          {/* Caption */}
          {caption && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ delay: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                marginTop: "1rem",
                padding: "8px 16px",
                borderRadius: "999px",
                border: "1px solid var(--border)",
                background: "var(--bg-surface)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "var(--text-tertiary)",
                letterSpacing: "0.02em",
                cursor: "default",
              }}
            >
              {caption}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════════════════════════════
   InspectableImage — Clickable image wrapper with zoom cursor
   ═══════════════════════════════════════════════════════════════ */

interface InspectableImageProps {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  onOpen: (src: string, alt: string, caption?: string) => void;
}

export function InspectableImage({
  src,
  alt,
  caption,
  width,
  height,
  style,
  containerStyle,
  onOpen,
}: InspectableImageProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View ${alt} in full screen`}
      onClick={() => onOpen(src, alt, caption)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(src, alt, caption);
        }
      }}
      style={{
        cursor: "zoom-in",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden",
        border: "1px solid var(--border)",
        transition: "border-color var(--transition-fast), box-shadow var(--transition-fast)",
        ...containerStyle,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--border-accent)";
        e.currentTarget.style.boxShadow = "0 0 16px oklch(60% 0.15 250 / 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          objectFit: "cover",
          transition: "transform 0.3s ease",
          ...style,
        }}
      />
    </div>
  );
}
