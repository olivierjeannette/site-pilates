"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(shapesRef.current, { opacity: 0, scale: 0.8, duration: 1.5 })
      .from(
        headingRef.current,
        { y: 60, opacity: 0, duration: 1 },
        "-=1"
      )
      .from(subRef.current, { y: 40, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(ctasRef.current, { y: 30, opacity: 0, duration: 0.7 }, "-=0.5")
      .from(scrollIndicatorRef.current, { opacity: 0, duration: 0.6 }, "-=0.3");

    const blob1 = shapesRef.current?.querySelector(".blob-1");
    const blob2 = shapesRef.current?.querySelector(".blob-2");
    if (blob1) {
      gsap.to(blob1, {
        y: 20,
        x: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
    if (blob2) {
      gsap.to(blob2, {
        y: -15,
        x: 15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--color-warm-white)" }}
    >
      {/* Background decorative blobs */}
      <div ref={shapesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="blob-1 absolute rounded-full opacity-20"
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, var(--color-sage-light), transparent 70%)",
            top: "-100px",
            right: "-100px",
          }}
        />
        <div
          className="blob-2 absolute rounded-full opacity-15"
          style={{
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, var(--color-terracotta-light), transparent 70%)",
            bottom: "50px",
            left: "-80px",
          }}
        />
        <div
          className="absolute opacity-10"
          style={{
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, var(--color-sage), transparent 70%)",
            top: "40%",
            left: "50%",
          }}
        />
      </div>

      {/* Decorative circle outline */}
      <div
        className="absolute hidden lg:block"
        style={{
          width: "520px",
          height: "520px",
          border: "1px solid rgba(139,158,126,0.2)",
          borderRadius: "50%",
          top: "50%",
          right: "8%",
          transform: "translateY(-50%)",
        }}
      />
      <div
        className="absolute hidden lg:block"
        style={{
          width: "380px",
          height: "380px",
          border: "1px solid rgba(139,158,126,0.15)",
          borderRadius: "50%",
          top: "50%",
          right: "12%",
          transform: "translateY(-50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6 flex items-center gap-3"
            style={{ color: "var(--color-sage)", letterSpacing: "0.25em" }}
          >
            <span
              className="inline-block w-8 h-px"
              style={{ backgroundColor: "var(--color-sage)" }}
            />
            Studio Pilates · Laval
          </p>

          <h1
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-charcoal)" }}
          >
            Bougez.{" "}
            <span style={{ color: "var(--color-sage-dark)" }}>Respirez.</span>
            <br />
            Réveillez-vous.
          </h1>

          <p
            ref={subRef}
            className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            style={{ color: "var(--color-charcoal-light)" }}
          >
            Des cours de Pilates Matwork en petits groupes de 8 à 10 personnes maximum, adaptés à tous les niveaux. Un espace chaleureux, sans jugement, pour prendre soin de vous.
          </p>

          <div ref={ctasRef} className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://app.peppy.cool"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "var(--color-terracotta)" }}
            >
              Séance d&apos;essai gratuite
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <Link
              href="/cours"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-base border-2 transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "var(--color-sage)",
                color: "var(--color-sage-dark)",
              }}
            >
              Découvrir les cours
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 pt-10" style={{ borderTop: "1px solid var(--color-cream-dark)" }}>
            {[
              { number: "+15", label: "séances / semaine" },
              { number: "8–10", label: "personnes max" },
              { number: "100%", label: "bienveillant" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl font-semibold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-sage-dark)" }}
                >
                  {stat.number}
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--color-charcoal-light)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: "var(--color-sage)", letterSpacing: "0.2em" }}>
          Défiler
        </span>
        <div
          className="w-px h-10 relative overflow-hidden"
          style={{ backgroundColor: "rgba(139,158,126,0.2)" }}
        >
          <div
            className="w-full bg-current absolute"
            style={{
              height: "50%",
              backgroundColor: "var(--color-sage)",
              animation: "scrollLine 1.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { top: -50%; }
          100% { top: 150%; }
        }
      `}</style>
    </section>
  );
}
