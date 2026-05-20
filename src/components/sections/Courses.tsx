"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const courses = [
  { title: "Cours collectifs", desc: "Matwork tous niveaux, 8 à 10 personnes max." },
  { title: "Prénatal & post-partum", desc: "Adapté à chaque étape. Bébés bienvenus." },
  { title: "Cours en entreprise", desc: "Séances dans vos locaux pour vos équipes." },
  { title: "Cours à domicile", desc: "Coaching individuel personnalisé chez vous." },
];

export default function Courses() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(ref.current?.querySelectorAll(".reveal") ?? [], {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
    });
  }, []);

  return (
    <section
      ref={ref}
      className="section-y"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-app">
        <div className="max-w-2xl mx-auto text-center mb-20 md:mb-28">
          <div className="reveal eyebrow justify-center mb-12" style={{ display: "inline-flex" }}>
            Nos cours
          </div>
          <h2
            className="reveal h-display text-balance"
            style={{
              fontSize: "clamp(2rem, 6vw, 3rem)",
              color: "var(--color-ink-900)",
            }}
          >
            Une formule{" "}
            <span style={{ color: "var(--color-terra-500)", fontStyle: "italic", fontWeight: 400 }}>
              pour chacun
            </span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <ul>
            {courses.map((c, i) => (
              <li
                key={c.title}
                className="reveal py-10 flex items-center justify-between gap-8"
                style={{
                  borderTop: "1px solid var(--color-ink-200)",
                  borderBottom: i === courses.length - 1 ? "1px solid var(--color-ink-200)" : "none",
                }}
              >
                <div className="flex-1">
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                      fontWeight: 500,
                      color: "var(--color-ink-900)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-500)" }}>
                    {c.desc}
                  </p>
                </div>
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-cream-200)", color: "var(--color-terra-600)" }}
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </li>
            ))}
          </ul>

          <div className="reveal text-center mt-20">
            <a
              href="https://app.peppy.cool/quicksell/cm3odpadb7357411js28lc8vy46/book/trial/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Essayer gratuitement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
