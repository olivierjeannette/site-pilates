"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

const YOUTUBE_VIDEO_ID = "yWEy5Biv7gQ";

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
      className="relative flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg)",
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playsinline=1&rel=0&playlist=${YOUTUBE_VIDEO_ID}`}
          title="Studio Pilates – ambiance"
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "max(100vw, 56.25vh)",
            height: "max(177.78vw, 100vh)",
            border: 0,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(20, 24, 22, 0.45)",
          }}
        />
      </div>

      <div className="container-app relative" style={{ zIndex: 1 }}>
        <div className="max-w-2xl mx-auto">
          <div
            className="reveal eyebrow justify-center mb-10"
            style={{ display: "inline-flex", color: "rgba(255, 255, 255, 0.85)" }}
          >
            Studio Pilates · Laval
          </div>

          <h1
            className="reveal h-display text-balance mb-8"
            style={{
              fontSize: "clamp(2.75rem, 10vw, 5rem)",
              color: "#ffffff",
              textShadow: "0 2px 20px rgba(0, 0, 0, 0.35)",
            }}
          >
            Bougez.{" "}
            <span style={{ color: "var(--color-terra-300)", fontStyle: "italic", fontWeight: 400 }}>
              Respirez.
            </span>
          </h1>

          <p
            className="reveal text-pretty mb-14 max-w-md mx-auto"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
              color: "rgba(255, 255, 255, 0.92)",
              lineHeight: 1.7,
              textShadow: "0 1px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            Cours de Pilates en petits groupes à Laval.
            <br />
            Séance d&apos;essai offerte.
          </p>

          <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
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
