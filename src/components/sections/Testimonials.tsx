"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "Eva est une super coach, à l'écoute de tous et elle propose des séances très variées. Le fait d'être par groupe de 8 à 10 personnes lui permet de bien voir tout le monde.",
    author: "Camille R.",
    detail: "Membre depuis 6 mois",
  },
  {
    text: "Ambiance familiale, cours bien structurés et adaptés à mon niveau. Eva sait mettre tout le monde à l'aise, même les débutants.",
    author: "Sophie M.",
    detail: "Cours collectifs",
  },
  {
    text: "J'ai commencé en prénatal et je continue après l'accouchement. Eva est très attentive et les cours sont parfaitement adaptés.",
    author: "Laura T.",
    detail: "Prénatal & post-partum",
  },
  {
    text: "Le meilleur studio de Pilates à Laval. Locaux soignés, matériel de qualité, et surtout une coach exceptionnelle qui prend le temps.",
    author: "Julien P.",
    detail: "Membre depuis 1 an",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(headerRef.current?.children ?? [], {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-y relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-app">
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-xl">
            <div className="eyebrow mb-5">Témoignages</div>
            <h2
              className="h-display text-balance"
              style={{
                fontSize: "clamp(2rem, 6vw, 3.25rem)",
                color: "var(--color-ink-900)",
              }}
            >
              Ils nous font{" "}
              <span style={{ color: "var(--color-sage-500)", fontStyle: "italic", fontWeight: 400 }}>
                confiance
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="var(--color-cta)">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--color-ink-900)" }}>
                4.9/5
              </p>
              <p className="text-xs" style={{ color: "var(--color-ink-500)" }}>
                +50 avis Google
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: scroll snap horizontal | Desktop: grid */}
        <div
          ref={trackRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none"
        >
          {testimonials.map((t, i) => (
            <article
              key={t.author}
              className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-start rounded-3xl p-6 sm:p-7 flex flex-col"
              style={{
                backgroundColor: i % 2 === 0 ? "var(--color-cream-100)" : "var(--color-sage-50)",
                border: "1px solid var(--color-cream-300)",
                minHeight: "260px",
              }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-cta)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p
                className="text-pretty flex-1 mb-5"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(0.9375rem, 2vw, 1rem)",
                  lineHeight: 1.55,
                  color: "var(--color-ink-700)",
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--color-ink-200)" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                  style={{ backgroundColor: i % 2 === 0 ? "var(--color-sage-500)" : "var(--color-terra-500)" }}
                >
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-ink-900)" }}>
                    {t.author}
                  </p>
                  <p className="text-[11px]" style={{ color: "var(--color-ink-500)" }}>
                    {t.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile scroll hint */}
        <p className="md:hidden text-center text-xs mt-4" style={{ color: "var(--color-ink-400)" }}>
          ← Faites glisser pour voir plus →
        </p>
      </div>
    </section>
  );
}
