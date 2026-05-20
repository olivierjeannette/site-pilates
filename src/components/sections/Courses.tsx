"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    icon: "🧘",
    title: "Cours Collectifs",
    subtitle: "Tous niveaux · 8–10 pers. max",
    description:
      "Des séances sur tapis adaptées à tous les niveaux avec plus de 15 créneaux hebdomadaires. Matériel fourni sur place.",
    features: ["Adaptable à votre niveau", "Matériel fourni", "Tous les jours de la semaine"],
    color: "var(--color-sage)",
    textColor: "white",
  },
  {
    icon: "🤰",
    title: "Prénatal & Post-partum",
    subtitle: "Femmes enceintes & jeunes mamans",
    description:
      "Des cours spécialement conçus pour accompagner la grossesse et la récupération après l'accouchement. Les bébés sont les bienvenus.",
    features: ["Adapté à la grossesse", "Bébés bienvenus", "Suivi personnalisé"],
    color: "var(--color-terracotta)",
    textColor: "white",
  },
  {
    icon: "🏢",
    title: "Cours en Entreprise",
    subtitle: "Pour vos équipes",
    description:
      "Des séances sportives adaptées directement dans vos locaux pour booster le bien-être de vos équipes et réduire le stress au travail.",
    features: ["Déplacement possible", "Adapté aux équipes", "Horaires flexibles"],
    color: "var(--color-sage-dark)",
    textColor: "white",
  },
  {
    icon: "🏠",
    title: "Cours à Domicile",
    subtitle: "Coaching individuel",
    description:
      "Eva se déplace chez vous pour des séances sur mesure, adaptées à vos objectifs et à votre progression personnelle.",
    features: ["Séances individuelles", "À votre domicile", "Programme personnalisé"],
    color: "var(--color-cream-dark)",
    textColor: "var(--color-charcoal)",
  },
];

export default function Courses() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(cardsRef.current?.children ?? [], {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 75%",
        once: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--color-warm-white)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4 flex items-center justify-center gap-3"
            style={{ color: "var(--color-sage)", letterSpacing: "0.25em" }}
          >
            <span className="inline-block w-6 h-px" style={{ backgroundColor: "var(--color-sage)" }} />
            Nos cours
            <span className="inline-block w-6 h-px" style={{ backgroundColor: "var(--color-sage)" }} />
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold mb-5"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-charcoal)" }}
          >
            Une formule pour{" "}
            <span style={{ color: "var(--color-sage-dark)", fontStyle: "italic" }}>chaque besoin</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--color-charcoal-light)" }}>
            Que vous soyez débutant ou confirmé, notre studio s&apos;adapte à votre rythme, vos disponibilités et vos objectifs.
          </p>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ backgroundColor: course.color, color: course.textColor }}
            >
              <div className="text-4xl mb-5">{course.icon}</div>
              <h3 className="text-xl font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                {course.title}
              </h3>
              <p className="text-xs mb-4 opacity-75 font-medium">{course.subtitle}</p>
              <p className="text-sm leading-relaxed mb-6 opacity-85 flex-1">{course.description}</p>
              <ul className="space-y-2">
                {course.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "currentColor", opacity: 0.6 }} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://app.peppy.cool"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "var(--color-terracotta)" }}
          >
            Essayer gratuitement
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
