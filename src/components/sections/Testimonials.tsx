"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(ref.current?.querySelectorAll(".reveal") ?? [], {
      y: 30,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 70%", once: true },
    });
  }, []);

  return (
    <section
      ref={ref}
      className="section-y"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-app">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal flex justify-center gap-0.5 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--color-cta)">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          <blockquote
            className="reveal text-pretty mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.25rem, 4vw, 1.875rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--color-ink-900)",
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
            }}
          >
            &ldquo;Eva est une super coach, à l&apos;écoute de tous. Ambiance familiale, je recommande !&rdquo;
          </blockquote>

          <p className="reveal text-sm" style={{ color: "var(--color-ink-500)" }}>
            <span className="font-semibold" style={{ color: "var(--color-ink-900)" }}>
              Camille R.
            </span>
            {" · "}
            Membre depuis 6 mois
          </p>
        </div>
      </div>
    </section>
  );
}
