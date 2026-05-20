"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(contentRef.current?.children ?? [], {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-y relative overflow-hidden"
      style={{ backgroundColor: "var(--color-ink-900)" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, var(--color-sage-400) 0%, transparent 50%), radial-gradient(circle at 80% 30%, var(--color-cta) 0%, transparent 50%)",
        }}
      />

      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          border: "1px solid rgba(168, 185, 156, 0.1)",
          top: "50%",
          left: "-150px",
          transform: "translateY(-50%)",
        }}
      />

      <div className="container-app relative z-10">
        <div ref={contentRef} className="max-w-3xl mx-auto text-center">
          <div className="eyebrow justify-center mb-6" style={{ display: "inline-flex", color: "var(--color-sage-200)" }}>
            <span style={{ color: "white", opacity: 0.9 }}>Prêt à commencer ?</span>
          </div>

          <h2
            className="h-display text-balance text-white mb-6"
            style={{
              fontSize: "clamp(2.25rem, 7vw, 4rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Votre première séance
            <br />
            <span style={{ color: "var(--color-sage-200)", fontStyle: "italic", fontWeight: 400 }}>
              est offerte
            </span>
          </h2>

          <p
            className="text-pretty mb-9 max-w-xl mx-auto"
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.125rem)",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.6,
            }}
          >
            Découvrez l&apos;ambiance du studio sans engagement. Réservez en 30 secondes via l&apos;app Peppy.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <a
              href="https://app.peppy.cool"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ minHeight: "52px" }}
            >
              Réserver ma séance gratuite
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="tel:+33627508536"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "white",
                border: "1.5px solid rgba(255,255,255,0.15)",
                minHeight: "52px",
              }}
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              06 27 50 85 36
            </a>
          </div>

          {/* Info pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { icon: "📍", text: "63 rue J.B. Lafosse, Laval" },
              { icon: "⏰", text: "Annulation 30 min avant" },
              { icon: "✨", text: "1ère séance gratuite" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.65)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
