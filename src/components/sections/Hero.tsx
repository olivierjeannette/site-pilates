"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(ref.current?.querySelectorAll(".reveal") ?? [], {
      y: 30,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2,
    });
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center text-center"
      style={{
        backgroundColor: "var(--color-bg)",
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      <div className="container-app">
        <div className="max-w-2xl mx-auto">
          <div className="reveal eyebrow justify-center mb-8" style={{ display: "inline-flex" }}>
            Studio Pilates · Laval
          </div>

          <h1
            className="reveal h-display text-balance mb-8"
            style={{
              fontSize: "clamp(2.75rem, 10vw, 5rem)",
              color: "var(--color-ink-900)",
            }}
          >
            Bougez.{" "}
            <span style={{ color: "var(--color-sage-500)", fontStyle: "italic", fontWeight: 400 }}>
              Respirez.
            </span>
          </h1>

          <p
            className="reveal text-pretty mb-10 max-w-md mx-auto"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
              color: "var(--color-ink-500)",
              lineHeight: 1.6,
            }}
          >
            Cours de Pilates en petits groupes à Laval.
            <br />
            Séance d&apos;essai offerte.
          </p>

          <div className="reveal flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://app.peppy.cool"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Réserver ma séance gratuite
            </a>
            <Link href="/cours" className="btn-secondary">
              Voir les cours
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
