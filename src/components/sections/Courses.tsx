"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    label: "01",
    title: "Cours collectifs",
    subtitle: "Matwork tous niveaux",
    description:
      "Des séances sur tapis adaptables à votre énergie du jour. Plus de 15 créneaux hebdomadaires.",
    tags: ["Tous niveaux", "8–10 pers.", "Matériel fourni"],
    bg: "var(--color-sage-500)",
    txt: "white",
    accent: "var(--color-sage-200)",
  },
  {
    label: "02",
    title: "Prénatal & post-partum",
    subtitle: "Pour les futures et jeunes mamans",
    description:
      "Cours adaptés à chaque étape de la grossesse et de la récupération. Bébés bienvenus.",
    tags: ["Spécialisé", "Adapté", "Bébés OK"],
    bg: "var(--color-cream-100)",
    txt: "var(--color-ink-900)",
    accent: "var(--color-terra-500)",
  },
  {
    label: "03",
    title: "En entreprise",
    subtitle: "Pour vos équipes",
    description:
      "Séances directement dans vos locaux pour booster le bien-être de vos collaborateurs.",
    tags: ["Déplacement", "Sur mesure", "Flexible"],
    bg: "var(--color-ink-900)",
    txt: "white",
    accent: "var(--color-sage-300)",
  },
  {
    label: "04",
    title: "À domicile",
    subtitle: "Coaching individuel",
    description:
      "Séances personnalisées chez vous, adaptées à vos objectifs et votre progression.",
    tags: ["Individuel", "Sur mesure", "Chez vous"],
    bg: "var(--color-terra-500)",
    txt: "white",
    accent: "var(--color-cream-100)",
  },
];

export default function Courses() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(headerRef.current?.children ?? [], {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
    });

    gsap.from(cardsRef.current?.children ?? [], {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: cardsRef.current, start: "top 80%", once: true },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-y relative"
      style={{ backgroundColor: "var(--color-cream-100)" }}
    >
      <div className="container-app">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mb-12 md:mb-16">
          <div className="eyebrow mb-5">Nos cours</div>
          <h2
            className="h-display text-balance mb-5"
            style={{
              fontSize: "clamp(2rem, 6vw, 3.25rem)",
              color: "var(--color-ink-900)",
            }}
          >
            Une formule pour{" "}
            <span style={{ color: "var(--color-sage-500)", fontStyle: "italic", fontWeight: 400 }}>
              chaque besoin
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.0625rem)",
              color: "var(--color-ink-500)",
              lineHeight: 1.7,
            }}
          >
            Que vous soyez débutant ou confirmé, notre studio s&apos;adapte à votre rythme, vos disponibilités et vos objectifs.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {courses.map((c) => (
            <div
              key={c.title}
              className="group relative rounded-[28px] p-6 sm:p-8 flex flex-col overflow-hidden transition-transform duration-500 hover:-translate-y-2"
              style={{
                backgroundColor: c.bg,
                color: c.txt,
                minHeight: "320px",
                boxShadow: "0 1px 3px rgba(31,31,29,0.04)",
              }}
            >
              {/* Decorative circle */}
              <div
                className="absolute -top-16 -right-16 rounded-full opacity-10 transition-transform duration-700 group-hover:scale-125"
                style={{
                  width: "200px",
                  height: "200px",
                  border: `1px solid ${c.accent}`,
                  backgroundColor: c.accent,
                  opacity: 0.08,
                }}
              />

              <div className="relative flex-1">
                <div
                  className="text-xs font-semibold mb-6"
                  style={{ color: c.accent, letterSpacing: "0.15em" }}
                >
                  {c.label}
                </div>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 4vw, 1.875rem)",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.15,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-sm mb-4 opacity-75"
                  style={{ fontWeight: 500 }}
                >
                  {c.subtitle}
                </p>
                <p
                  className="text-sm mb-6 opacity-85"
                  style={{ lineHeight: 1.6 }}
                >
                  {c.description}
                </p>
              </div>

              <div className="relative flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      color: c.txt,
                      border: c.txt === "white" ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(31,31,29,0.1)",
                      backgroundImage: c.txt !== "white" ? "linear-gradient(0deg, rgba(31,31,29,0.04), rgba(31,31,29,0.04))" : undefined,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://app.peppy.cool"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Essayer gratuitement
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
