"use client";

import { useEffect, useState } from "react";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 safe-bottom pointer-events-none"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.4s var(--ease-out), opacity 0.3s var(--ease-out)",
      }}
    >
      <div
        className="m-3 rounded-full shadow-2xl pointer-events-auto"
        style={{
          backgroundColor: "rgba(31,31,29,0.96)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          padding: "8px 8px 8px 20px",
        }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-[10px] uppercase tracking-widest" style={{ color: "var(--color-sage-200)" }}>
              Offre découverte
            </p>
            <p className="text-sm font-medium text-white truncate">
              1ère séance gratuite
            </p>
          </div>
          <a
            href="https://app.peppy.cool"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-5 py-3 rounded-full text-sm font-semibold text-white whitespace-nowrap"
            style={{ backgroundColor: "var(--color-cta)" }}
          >
            Réserver
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
