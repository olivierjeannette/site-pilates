"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "Eva est une super coach, à l'écoute de tous et elle propose des séances très variées. Le fait d'être par groupe de 8 à 10 personnes lui permet de bien voir tout le monde et d'apporter les conseils nécessaires.",
    author: "Camille R.",
    detail: "Membre depuis 6 mois",
    rating: 5,
  },
  {
    text: "Ambiance familiale, cours bien structurés et adaptés à mon niveau. Je recommande à 100% ! Eva sait mettre tout le monde à l'aise, même les débutants.",
    author: "Sophie M.",
    detail: "Cours collectifs",
    rating: 5,
  },
  {
    text: "J'ai commencé le Pilates en prénatal et je continue après l'accouchement. Eva est très attentive et les cours sont parfaitement adaptés. Un vrai plus pour la récupération !",
    author: "Laura T.",
    detail: "Cours prénatal & post-partum",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(cardsRef.current?.children ?? [], {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
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
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4 flex items-center justify-center gap-3"
            style={{ color: "var(--color-sage)", letterSpacing: "0.25em" }}
          >
            <span className="inline-block w-6 h-px" style={{ backgroundColor: "var(--color-sage)" }} />
            Témoignages
            <span className="inline-block w-6 h-px" style={{ backgroundColor: "var(--color-sage)" }} />
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-charcoal)" }}
          >
            Ils nous font{" "}
            <span style={{ color: "var(--color-sage-dark)", fontStyle: "italic" }}>confiance</span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ backgroundColor: "var(--color-warm-white)" }}
            >
              {/* Stars */}
              <div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--color-terracotta)">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote mark */}
                <p
                  className="text-5xl leading-none mb-3 font-serif"
                  style={{ color: "var(--color-sage-light)", lineHeight: "0.8" }}
                >
                  &ldquo;
                </p>

                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-charcoal-light)" }}>
                  {t.text}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--color-cream-dark)" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                  style={{ backgroundColor: "var(--color-sage)" }}
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-charcoal)" }}>
                    {t.author}
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-charcoal-light)" }}>
                    {t.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
