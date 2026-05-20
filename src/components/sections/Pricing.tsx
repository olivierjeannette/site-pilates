"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  { price: "Gratuit", label: "1ère séance d'essai" },
  { price: "19€", label: "Pass découverte 1 semaine" },
  { price: "dès 35€/mois", label: "Abonnements mensuels" },
];

export default function Pricing() {
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
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
          <div className="reveal eyebrow justify-center mb-6" style={{ display: "inline-flex" }}>
            Tarifs
          </div>
          <h2
            className="reveal h-display text-balance"
            style={{
              fontSize: "clamp(2rem, 6vw, 3rem)",
              color: "var(--color-ink-900)",
            }}
          >
            Simple et{" "}
            <span style={{ color: "var(--color-sage-500)", fontStyle: "italic", fontWeight: 400 }}>
              accessible
            </span>
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          <ul className="reveal mb-8">
            {highlights.map((h, i) => (
              <li
                key={h.label}
                className="py-5 flex items-baseline justify-between gap-4"
                style={{
                  borderTop: "1px solid var(--color-ink-200)",
                  borderBottom: i === highlights.length - 1 ? "1px solid var(--color-ink-200)" : "none",
                }}
              >
                <span className="text-sm" style={{ color: "var(--color-ink-500)" }}>
                  {h.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: "var(--color-ink-900)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {h.price}
                </span>
              </li>
            ))}
          </ul>

          <div className="reveal flex flex-col gap-3">
            <a
              href="https://app.peppy.cool"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Réserver ma séance gratuite
            </a>
            <Link href="/tarifs" className="btn-secondary">
              Voir toutes les formules
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
