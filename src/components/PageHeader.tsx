"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}

export default function PageHeader({ eyebrow, title, highlight, subtitle }: PageHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(ref.current?.children ?? [], {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      delay: 0.1,
    });
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: "120px",
        paddingBottom: "60px",
        backgroundColor: "var(--color-cream-100)",
      }}
    >
      {/* Soft bg blur */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 0%, rgba(139,158,126,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="container-app relative z-10 text-center" ref={ref}>
        <div className="eyebrow justify-center mb-5" style={{ display: "inline-flex" }}>
          {eyebrow}
        </div>
        <h1
          className="h-display text-balance"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            color: "var(--color-ink-900)",
            letterSpacing: "-0.02em",
          }}
        >
          {title}{" "}
          {highlight && (
            <span style={{ color: "var(--color-sage-500)", fontStyle: "italic", fontWeight: 400 }}>
              {highlight}
            </span>
          )}
        </h1>
        {subtitle && (
          <p
            className="mt-5 max-w-xl mx-auto text-pretty"
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.125rem)",
              color: "var(--color-ink-500)",
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
