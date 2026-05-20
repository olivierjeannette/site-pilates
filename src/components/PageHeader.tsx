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
      className="relative"
      style={{
        paddingTop: "140px",
        paddingBottom: "60px",
        backgroundColor: "var(--color-bg)",
      }}
    >
      <div className="container-app text-center" ref={ref}>
        <div className="eyebrow justify-center mb-6" style={{ display: "inline-flex" }}>
          {eyebrow}
        </div>
        <h1
          className="h-display text-balance"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 4rem)",
            color: "var(--color-ink-900)",
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
            className="mt-5 max-w-md mx-auto text-pretty"
            style={{
              fontSize: "clamp(0.9375rem, 2vw, 1rem)",
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
