"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(contentRef.current?.children ?? [], {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
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
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-charcoal)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, var(--color-sage) 0%, transparent 60%), radial-gradient(circle at 70% 50%, var(--color-terracotta) 0%, transparent 60%)",
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute rounded-full border opacity-10"
        style={{ width: "400px", height: "400px", borderColor: "var(--color-sage-light)", top: "50%", left: "-100px", transform: "translateY(-50%)" }}
      />
      <div
        className="absolute rounded-full border opacity-10"
        style={{ width: "300px", height: "300px", borderColor: "var(--color-terracotta)", bottom: "-100px", right: "-50px" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div ref={contentRef}>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-6 flex items-center justify-center gap-3"
            style={{ color: "var(--color-sage-light)", letterSpacing: "0.25em" }}
          >
            <span className="inline-block w-6 h-px" style={{ backgroundColor: "var(--color-sage-light)" }} />
            Commencez dès aujourd&apos;hui
            <span className="inline-block w-6 h-px" style={{ backgroundColor: "var(--color-sage-light)" }} />
          </p>

          <h2
            className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Votre première séance{" "}
            <span style={{ color: "var(--color-sage-light)", fontStyle: "italic" }}>est gratuite</span>
          </h2>

          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(245,240,232,0.7)" }}>
            Venez découvrir l&apos;ambiance du studio sans engagement. Nous sommes au 63 rue Jean Baptiste Lafosse, à Laval.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://app.peppy.cool"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: "var(--color-terracotta)" }}
            >
              Réserver ma séance gratuite
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="tel:+33627508536"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-base border-2 transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "white",
              }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              06 27 50 85 36
            </a>
          </div>

          {/* Info pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: "📍", text: "63 rue J.B. Lafosse, Laval" },
              { icon: "⏰", text: "Annulation jusqu'à 30 min avant" },
              { icon: "✨", text: "1ère séance gratuite" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(245,240,232,0.8)" }}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
