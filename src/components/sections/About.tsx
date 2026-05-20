"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(textRef.current?.children ?? [], {
      y: 50,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        once: true,
      },
    });

    gsap.from(imageRef.current, {
      x: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        once: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div ref={textRef}>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4 flex items-center gap-3"
            style={{ color: "var(--color-sage)", letterSpacing: "0.25em" }}
          >
            <span className="inline-block w-6 h-px" style={{ backgroundColor: "var(--color-sage)" }} />
            À propos
          </p>

          <h2
            className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-charcoal)" }}
          >
            Un studio pensé pour{" "}
            <span style={{ color: "var(--color-sage-dark)", fontStyle: "italic" }}>vous</span>
          </h2>

          <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-charcoal-light)" }}>
            Bienvenue chez Skàli, votre studio Pilates au cœur de Laval. Ici, pas de performance, pas de jugement — juste un espace pour prendre soin de vous, à votre rythme.
          </p>

          <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-charcoal-light)" }}>
            Eva Dussurgey, coach sportive passionnée, vous accueille dans des groupes de 8 à 10 personnes maximum pour un suivi personnalisé et une ambiance familiale. Plus de 15 séances hebdomadaires sont proposées pour s&apos;adapter à tous les emplois du temps.
          </p>

          {/* Quote */}
          <blockquote
            className="relative pl-6 py-2 mb-8 italic text-base leading-relaxed"
            style={{
              borderLeft: "3px solid var(--color-sage)",
              color: "var(--color-charcoal)",
              fontFamily: "var(--font-heading)",
              fontSize: "1.1rem",
            }}
          >
            &ldquo;Eva est une super coach, à l&apos;écoute de tous. Ambiance familiale !&rdquo;
            <footer className="mt-2 text-sm not-italic" style={{ color: "var(--color-charcoal-light)", fontFamily: "inherit" }}>
              — Un client du studio
            </footer>
          </blockquote>

          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg"
              style={{ backgroundColor: "var(--color-sage)" }}
            >
              E
            </div>
            <div>
              <p className="font-semibold text-sm" style={{ color: "var(--color-charcoal)" }}>Eva Dussurgey</p>
              <p className="text-xs" style={{ color: "var(--color-charcoal-light)" }}>Coach Pilates certifiée</p>
            </div>
          </div>
        </div>

        {/* Visual card */}
        <div ref={imageRef} className="relative">
          <div
            className="rounded-3xl overflow-hidden aspect-[4/5] flex items-center justify-center relative"
            style={{ backgroundColor: "var(--color-sage)" }}
          >
            {/* Pattern background */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border"
                  style={{
                    width: `${120 + i * 60}px`,
                    height: `${120 + i * 60}px`,
                    borderColor: "white",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 text-center px-8">
              <p
                className="text-6xl font-semibold text-white mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Pilates
              </p>
              <p className="text-white/80 text-sm tracking-widest uppercase">Matwork · Laval</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { v: "Tous niveaux", i: "🌿" },
                  { v: "Matériel fourni", i: "🎯" },
                  { v: "Sans jugement", i: "💛" },
                  { v: "Petits groupes", i: "👥" },
                ].map((item) => (
                  <div
                    key={item.v}
                    className="rounded-xl px-3 py-3 text-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    <div className="text-xl mb-1">{item.i}</div>
                    <p className="text-white text-xs font-medium">{item.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div
            className="absolute -bottom-6 -left-6 rounded-2xl px-6 py-4 shadow-xl"
            style={{ backgroundColor: "var(--color-warm-white)" }}
          >
            <p className="text-3xl font-semibold" style={{ fontFamily: "var(--font-heading)", color: "var(--color-terracotta)" }}>
              Séance gratuite
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--color-charcoal-light)" }}>pour les nouveaux</p>
          </div>
        </div>
      </div>
    </section>
  );
}
