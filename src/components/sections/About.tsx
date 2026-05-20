"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: "Bienveillance",
    text: "Sans jugement, sans performance. Chacun progresse à son rythme.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    title: "Petits groupes",
    text: "8 à 10 personnes maximum pour un suivi vraiment personnalisé.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Flexibilité",
    text: "Plus de 15 séances par semaine pour s&apos;adapter à votre rythme.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(titleRef.current?.children ?? [], {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
    });

    gsap.from(pillarsRef.current?.children ?? [], {
      y: 50,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: pillarsRef.current, start: "top 80%", once: true },
    });

    gsap.from(quoteRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: quoteRef.current, start: "top 85%", once: true },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-y relative"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-app">
        {/* Header */}
        <div ref={titleRef} className="max-w-2xl mb-12 md:mb-16">
          <div className="eyebrow mb-5">À propos</div>
          <h2
            className="h-display text-balance mb-5"
            style={{
              fontSize: "clamp(2rem, 6vw, 3.25rem)",
              color: "var(--color-ink-900)",
            }}
          >
            Un studio pensé pour{" "}
            <span style={{ color: "var(--color-sage-500)", fontStyle: "italic", fontWeight: 400 }}>
              vous
            </span>
          </h2>
          <p
            className="text-pretty"
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.0625rem)",
              color: "var(--color-ink-500)",
              lineHeight: 1.7,
            }}
          >
            Bienvenue chez Skàli, votre studio Pilates au cœur de Laval. Eva Dussurgey vous accueille dans une ambiance familiale et chaleureuse — un espace pour bouger, respirer et vous reconnecter à votre corps.
          </p>
        </div>

        {/* Pillars */}
        <div ref={pillarsRef} className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-14 md:mb-20">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-6 sm:p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "var(--color-cream-100)",
                border: "1px solid var(--color-cream-300)",
              }}
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4"
                style={{
                  backgroundColor: "var(--color-sage-500)",
                  color: "white",
                }}
              >
                {p.icon}
              </div>
              <h3
                className="mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  color: "var(--color-ink-900)",
                  letterSpacing: "-0.01em",
                }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm"
                style={{
                  color: "var(--color-ink-500)",
                  lineHeight: 1.6,
                }}
              >
                {p.text}
              </p>
            </div>
          ))}
        </div>

        {/* Coach card + quote */}
        <div ref={quoteRef} className="grid lg:grid-cols-[1fr_1.3fr] gap-8 items-center">
          {/* Coach card */}
          <div
            className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-auto lg:h-full min-h-[280px]"
            style={{
              background: "linear-gradient(135deg, var(--color-terra-400) 0%, var(--color-terra-500) 100%)",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-3xl text-white font-medium mb-4"
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  fontFamily: "var(--font-display)",
                }}
              >
                E
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  color: "white",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                }}
              >
                Eva Dussurgey
              </p>
              <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.85)" }}>
                Coach Pilates certifiée
              </p>
              <div className="flex gap-2 mt-5 flex-wrap justify-center">
                {["Matwork", "Prénatal", "Post-partum"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-medium"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.18)",
                      color: "white",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="px-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ color: "var(--color-sage-200)" }}
              className="mb-4"
            >
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
            <blockquote
              className="text-pretty"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.25rem, 3vw, 1.625rem)",
                lineHeight: 1.4,
                color: "var(--color-ink-900)",
                fontWeight: 400,
                fontStyle: "italic",
              }}
            >
              &ldquo;Eva est une super coach, à l&apos;écoute de tous et elle propose des séances très variées. Ambiance familiale, je recommande !&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 mt-6">
              <div
                className="w-1 h-10"
                style={{ backgroundColor: "var(--color-sage-400)" }}
              />
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--color-ink-900)" }}>
                  Camille R.
                </p>
                <p className="text-xs" style={{ color: "var(--color-ink-500)" }}>
                  Membre depuis 6 mois
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
