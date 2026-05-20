"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(ref.current?.querySelectorAll(".reveal") ?? [], {
      y: 30,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
    });
  }, []);

  return (
    <section
      ref={ref}
      className="section-y"
      style={{ backgroundColor: "var(--color-ink-900)" }}
    >
      <div className="container-app">
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="reveal h-display text-balance mb-8 text-white"
            style={{
              fontSize: "clamp(2rem, 6vw, 3rem)",
            }}
          >
            Votre 1ère séance{" "}
            <span style={{ color: "var(--color-terra-300)", fontStyle: "italic", fontWeight: 400 }}>
              est offerte
            </span>
          </h2>

          <p
            className="reveal text-pretty mb-12"
            style={{
              fontSize: "clamp(0.9375rem, 2vw, 1rem)",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              letterSpacing: "0.01em",
            }}
          >
            63 rue Jean Baptiste Lafosse, Laval
          </p>

          <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.peppy.cool"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Réserver gratuitement
            </a>
            <a
              href="tel:+33627508536"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "1.5px solid rgba(255,255,255,0.2)",
                minHeight: "48px",
              }}
            >
              06 27 50 85 36
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
