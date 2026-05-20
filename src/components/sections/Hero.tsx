"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(eyebrowRef.current, { y: 20, opacity: 0, duration: 0.7, delay: 0.2 })
      .from(
        headingRef.current?.querySelectorAll(".line") ?? [],
        { y: 60, opacity: 0, duration: 1, stagger: 0.12 },
        "-=0.4"
      )
      .from(subRef.current, { y: 30, opacity: 0, duration: 0.7 }, "-=0.6")
      .from(ctasRef.current?.children ?? [], { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
      .from(statsRef.current?.children ?? [], { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.3")
      .from(visualRef.current, { scale: 0.85, opacity: 0, duration: 1.2, ease: "power3.out" }, "-=1.5");

    // Subtle parallax on visual
    if (visualRef.current) {
      gsap.to(visualRef.current.querySelector(".float-1"), {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(visualRef.current.querySelector(".float-2"), {
        y: 14,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg)",
        paddingTop: "100px",
        paddingBottom: "60px",
        minHeight: "100vh",
      }}
    >
      {/* Soft background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(80% 60% at 100% 0%, var(--color-sage-100) 0%, transparent 60%), radial-gradient(60% 50% at 0% 100%, rgba(229,160,136,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="container-app relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="order-2 lg:order-1">
            <div ref={eyebrowRef} className="eyebrow mb-5">
              Studio Pilates · Laval
            </div>

            <h1
              ref={headingRef}
              className="h-display text-balance mb-6"
              style={{
                fontSize: "clamp(2.5rem, 9vw, 5rem)",
                color: "var(--color-ink-900)",
              }}
            >
              <span className="line block">Bougez.</span>
              <span className="line block" style={{ color: "var(--color-sage-500)", fontStyle: "italic", fontWeight: 400 }}>
                Respirez.
              </span>
              <span className="line block">Réveillez-vous.</span>
            </h1>

            <p
              ref={subRef}
              className="text-pretty mb-8 max-w-lg"
              style={{
                fontSize: "clamp(1rem, 2.2vw, 1.125rem)",
                color: "var(--color-ink-500)",
                lineHeight: 1.6,
              }}
            >
              Pilates Matwork à Laval en petits groupes de 8 à 10 personnes maximum. Tous niveaux, ambiance bienveillante, séance d&apos;essai offerte.
            </p>

            <div ref={ctasRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
              <a
                href="https://app.peppy.cool"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Séance d&apos;essai gratuite
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <Link href="/cours" className="btn-secondary">
                Découvrir les cours
              </Link>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-8"
              style={{ borderTop: "1px solid var(--color-ink-200)" }}
            >
              {[
                { num: "+15", lbl: "séances / sem." },
                { num: "8–10", lbl: "pers. max" },
                { num: "100%", lbl: "bienveillant" },
              ].map((s) => (
                <div key={s.lbl}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.5rem, 4vw, 2rem)",
                      fontWeight: 500,
                      color: "var(--color-sage-600)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "var(--color-ink-500)", fontWeight: 500 }}
                  >
                    {s.lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <div ref={visualRef} className="order-1 lg:order-2 relative">
            <div className="relative mx-auto" style={{ maxWidth: "480px" }}>
              {/* Main card */}
              <div
                className="float-1 relative overflow-hidden rounded-[32px] aspect-[4/5]"
                style={{
                  background: "linear-gradient(135deg, var(--color-sage-500) 0%, var(--color-sage-600) 100%)",
                  boxShadow: "0 30px 60px -20px rgba(85,102,73,0.4)",
                }}
              >
                {/* Concentric circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="absolute rounded-full border"
                      style={{
                        width: `${i * 90}px`,
                        height: `${i * 90}px`,
                        borderColor: "rgba(255,255,255,0.08)",
                      }}
                    />
                  ))}
                </div>

                {/* Centered word */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                  <span
                    className="text-[10px] uppercase tracking-[0.3em] mb-3 font-semibold"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    Pratique douce
                  </span>
                  <p
                    className="text-white"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(3rem, 10vw, 4.5rem)",
                      fontWeight: 400,
                      fontStyle: "italic",
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    Pilates
                  </p>
                  <span
                    className="text-[10px] uppercase tracking-[0.3em] mt-3 font-semibold"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    Matwork · Laval
                  </span>
                </div>

                {/* Corner badge */}
                <div
                  className="absolute top-5 right-5 px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  Depuis 2023
                </div>
              </div>

              {/* Floating card – top right */}
              <div
                className="float-2 absolute -right-2 sm:-right-4 -top-4 rounded-2xl px-4 py-3 shadow-xl"
                style={{
                  backgroundColor: "var(--color-bg)",
                  border: "1px solid var(--color-ink-200)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-base"
                    style={{ backgroundColor: "var(--color-cta)" }}
                  >
                    ✨
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: "var(--color-ink-500)" }}>
                      Nouveaux
                    </div>
                    <div
                      className="text-sm font-semibold leading-tight"
                      style={{ color: "var(--color-ink-900)" }}
                    >
                      Essai offert
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card – bottom left */}
              <div
                className="float-1 absolute -left-2 sm:-left-6 -bottom-4 rounded-2xl px-4 py-3 shadow-xl"
                style={{
                  backgroundColor: "var(--color-cream-100)",
                  border: "1px solid var(--color-cream-300)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["E", "M", "S"].map((c, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-semibold border-2"
                        style={{
                          backgroundColor: i === 0 ? "var(--color-sage-400)" : i === 1 ? "var(--color-terra-400)" : "var(--color-sage-500)",
                          borderColor: "var(--color-cream-100)",
                        }}
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold leading-tight" style={{ color: "var(--color-ink-900)" }}>
                      +120 élèves
                    </div>
                    <div className="text-[10px]" style={{ color: "var(--color-ink-500)" }}>
                      nous font confiance
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
