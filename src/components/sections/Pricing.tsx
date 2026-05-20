"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Tab = "engagement" | "sans-engagement" | "carnets";

const pricingData = {
  engagement: {
    label: "Avec engagement",
    sublabel: "12 mois",
    note: "Frais d'inscription 20€ (une seule fois)",
    plans: [
      { name: "Basic", sessions: "4 séances / mois", price: "34,99", popular: false },
      { name: "Standard", sessions: "8 séances / mois", price: "42,99", popular: true },
      { name: "Premium", sessions: "6 séances / mois", price: "56,99", popular: false },
      { name: "Ultimate", sessions: "8 séances / mois", price: "62,99", popular: false },
    ],
  },
  "sans-engagement": {
    label: "Sans engagement",
    sublabel: "Liberté totale",
    note: "Résiliable à tout moment",
    plans: [
      { name: "Basic", sessions: "4 séances / mois", price: "54,99", popular: false },
      { name: "Premium", sessions: "6 séances / mois", price: "42,99", popular: true },
    ],
  },
  carnets: {
    label: "Carnets",
    sublabel: "& à l'unité",
    note: "Carnets valables 12 mois",
    plans: [
      { name: "À l'unité", sessions: "1 séance", price: "15", popular: false, unit: "€" },
      { name: "Carnet 5", sessions: "5 séances", price: "70", popular: false, unit: "€" },
      { name: "Carnet 10", sessions: "10 séances", price: "135", popular: true, unit: "€" },
      { name: "Carnet 20", sessions: "20 séances", price: "255", popular: false, unit: "€" },
    ],
  },
};

const baseFeatures = ["Accès app Peppy", "Matériel fourni", "Annulation 30 min avant"];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<Tab>("engagement");

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

  const current = pricingData[activeTab];
  const isCarnets = activeTab === "carnets";

  return (
    <section
      ref={sectionRef}
      className="section-y"
      style={{ backgroundColor: "var(--color-cream-100)" }}
    >
      <div className="container-app">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="eyebrow justify-center mb-5" style={{ display: "inline-flex" }}>
            Tarifs
          </div>
          <h2
            className="h-display text-balance mb-4"
            style={{
              fontSize: "clamp(2rem, 6vw, 3.25rem)",
              color: "var(--color-ink-900)",
            }}
          >
            Des formules{" "}
            <span style={{ color: "var(--color-sage-500)", fontStyle: "italic", fontWeight: 400 }}>
              adaptées
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)",
              color: "var(--color-ink-500)",
              lineHeight: 1.6,
            }}
          >
            Paiement par prélèvement automatique via l&apos;application Peppy.
          </p>

          {/* Discovery offer */}
          <div
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full text-sm font-medium"
            style={{
              backgroundColor: "var(--color-ink-900)",
              color: "white",
            }}
          >
            <span style={{ color: "var(--color-cta)" }}>✦</span>
            <span>1ère séance offerte + Pass découverte 19€</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div
            className="inline-flex p-1 rounded-full"
            style={{
              backgroundColor: "var(--color-bg)",
              border: "1px solid var(--color-ink-200)",
            }}
          >
            {(Object.keys(pricingData) as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[12px] sm:text-sm font-medium transition-all duration-300 whitespace-nowrap"
                style={{
                  backgroundColor: activeTab === tab ? "var(--color-ink-900)" : "transparent",
                  color: activeTab === tab ? "white" : "var(--color-ink-500)",
                }}
              >
                {pricingData[tab].label}
              </button>
            ))}
          </div>
        </div>

        {current.note && (
          <p className="text-center text-xs sm:text-sm mb-8" style={{ color: "var(--color-ink-500)" }}>
            ⓘ {current.note}
          </p>
        )}

        {/* Cards */}
        <div
          className={`grid gap-4 sm:gap-5 ${
            current.plans.length === 2
              ? "sm:grid-cols-2 max-w-2xl mx-auto"
              : "sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {current.plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-3xl p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: plan.popular ? "var(--color-ink-900)" : "var(--color-bg)",
                color: plan.popular ? "white" : "var(--color-ink-900)",
                border: plan.popular ? "none" : "1px solid var(--color-ink-200)",
                boxShadow: plan.popular ? "0 20px 40px -15px rgba(31,31,29,0.3)" : "0 1px 3px rgba(31,31,29,0.04)",
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: "var(--color-cta)", color: "white" }}
                >
                  ★ Populaire
                </div>
              )}

              <div className="mb-5">
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {plan.name}
                </h3>
                <p className="text-xs opacity-60">{plan.sessions}</p>
              </div>

              <div className="mb-5 flex items-baseline gap-1">
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.25rem, 6vw, 2.75rem)",
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {plan.price}
                </span>
                <span className="text-base font-medium opacity-70">
                  {isCarnets ? "€" : "€/mois"}
                </span>
              </div>

              <ul className="space-y-2.5 flex-1 mb-6">
                {baseFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13px]" style={{ opacity: 0.85 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="flex-shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://app.peppy.cool"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  backgroundColor: plan.popular ? "var(--color-cta)" : "var(--color-ink-900)",
                  color: "white",
                  minHeight: "44px",
                }}
              >
                Choisir
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
