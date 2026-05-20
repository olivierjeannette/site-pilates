"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(ref.current?.querySelectorAll(".reveal") ?? [], {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
    });
  }, []);

  return (
    <section
      ref={ref}
      className="section-y"
      style={{ backgroundColor: "var(--color-cream-100)" }}
    >
      <div className="container-app">
        <div className="max-w-2xl mx-auto text-center">
          <div className="reveal eyebrow justify-center mb-12" style={{ display: "inline-flex" }}>
            À propos
          </div>

          <h2
            className="reveal h-display text-balance mb-10"
            style={{
              fontSize: "clamp(2rem, 6vw, 3rem)",
              color: "var(--color-ink-900)",
            }}
          >
            Un studio pensé{" "}
            <span style={{ color: "var(--color-terra-500)", fontStyle: "italic", fontWeight: 400 }}>
              pour vous
            </span>
          </h2>

          <p
            className="reveal text-pretty mb-16"
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.125rem)",
              color: "var(--color-ink-700)",
              lineHeight: 1.85,
            }}
          >
            Eva Dussurgey vous accueille dans une ambiance familiale, en petits groupes de 8 à 10 personnes maximum. Sans jugement, sans performance — juste le plaisir de bouger.
          </p>

          <div className="reveal flex items-center justify-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg"
              style={{
                backgroundColor: "var(--color-sage-500)",
                fontFamily: "var(--font-display)",
                fontWeight: 500,
              }}
            >
              E
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold" style={{ color: "var(--color-ink-900)" }}>
                Eva Dussurgey
              </p>
              <p className="text-xs" style={{ color: "var(--color-ink-500)" }}>
                Coach Pilates certifiée
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
