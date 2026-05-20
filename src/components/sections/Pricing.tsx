"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Tab = "engagement" | "sans-engagement" | "carnets";

const pricingData = {
  engagement: {
    label: "Avec engagement 12 mois",
    note: "Frais d'inscription 20€ (une seule fois)",
    plans: [
      {
        name: "Basic",
        sessions: "4 séances / mois",
        price: "34,99€",
        popular: false,
        features: ["4 cours par mois", "Engagement 12 mois", "Accès app Peppy", "Matériel fourni"],
      },
      {
        name: "Standard",
        sessions: "8 séances / mois",
        price: "42,99€",
        popular: true,
        features: ["8 cours par mois", "Engagement 12 mois", "Accès app Peppy", "Matériel fourni"],
      },
      {
        name: "Premium",
        sessions: "6 séances / mois",
        price: "56,99€",
        popular: false,
        features: ["6 cours par mois", "Engagement 12 mois", "Accès app Peppy", "Matériel fourni"],
      },
      {
        name: "Ultimate",
        sessions: "8 séances / mois",
        price: "62,99€",
        popular: false,
        features: ["8 cours par mois", "Engagement 12 mois", "Accès app Peppy", "Priorité réservation"],
      },
    ],
  },
  "sans-engagement": {
    label: "Sans engagement",
    note: "Liberté totale, résiliable à tout moment",
    plans: [
      {
        name: "Basic",
        sessions: "4 séances / mois",
        price: "54,99€",
        popular: false,
        features: ["4 cours par mois", "Sans engagement", "Accès app Peppy", "Matériel fourni"],
      },
      {
        name: "Premium",
        sessions: "6 séances / mois",
        price: "42,99€",
        popular: true,
        features: ["6 cours par mois", "Sans engagement", "Accès app Peppy", "Matériel fourni"],
      },
    ],
  },
  carnets: {
    label: "Carnets & à l'unité",
    note: "Carnets valables 12 mois",
    plans: [
      {
        name: "À l'unité",
        sessions: "1 séance",
        price: "15€",
        popular: false,
        features: ["1 cours", "Valable 1 mois", "Accès app Peppy", "Matériel fourni"],
      },
      {
        name: "Carnet 5",
        sessions: "5 séances",
        price: "70€",
        popular: false,
        features: ["5 cours", "Valables 12 mois", "Accès app Peppy", "Matériel fourni"],
      },
      {
        name: "Carnet 10",
        sessions: "10 séances",
        price: "135€",
        popular: true,
        features: ["10 cours", "Valables 12 mois", "Accès app Peppy", "Priorité réservation"],
      },
      {
        name: "Carnet 20",
        sessions: "20 séances",
        price: "255€",
        popular: false,
        features: ["20 cours", "Valables 12 mois", "Accès app Peppy", "Priorité réservation"],
      },
    ],
  },
};

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<Tab>("engagement");

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    });
  }, []);

  const current = pricingData[activeTab];

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4 flex items-center justify-center gap-3"
            style={{ color: "var(--color-sage)", letterSpacing: "0.25em" }}
          >
            <span className="inline-block w-6 h-px" style={{ backgroundColor: "var(--color-sage)" }} />
            Tarifs
            <span className="inline-block w-6 h-px" style={{ backgroundColor: "var(--color-sage)" }} />
          </p>
          <h2
            className="text-4xl md:text-5xl font-semibold mb-5"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-charcoal)" }}
          >
            Des formules{" "}
            <span style={{ color: "var(--color-sage-dark)", fontStyle: "italic" }}>adaptées</span>
          </h2>
          <p className="text-base max-w-lg mx-auto mb-4" style={{ color: "var(--color-charcoal-light)" }}>
            Paiement par prélèvement automatique via l&apos;application Peppy.
          </p>
          {/* Discovery offer */}
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium"
            style={{ backgroundColor: "var(--color-terracotta)", color: "white" }}
          >
            <span>🎁</span>
            <span>Séance d&apos;essai gratuite + Pass découverte 1 semaine illimitée à 19€</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(Object.keys(pricingData) as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: activeTab === tab ? "var(--color-sage)" : "var(--color-cream-dark)",
                color: activeTab === tab ? "white" : "var(--color-charcoal-light)",
              }}
            >
              {pricingData[tab].label}
            </button>
          ))}
        </div>

        {current.note && (
          <p className="text-center text-xs mb-8" style={{ color: "var(--color-charcoal-light)" }}>
            ℹ️ {current.note}
          </p>
        )}

        {/* Cards */}
        <div className={`grid gap-6 ${current.plans.length <= 2 ? "sm:grid-cols-2 max-w-2xl mx-auto" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
          {current.plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative"
              style={{
                backgroundColor: plan.popular ? "var(--color-charcoal)" : "var(--color-warm-white)",
                color: plan.popular ? "white" : "var(--color-charcoal)",
                border: plan.popular ? "none" : "1px solid var(--color-cream-dark)",
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "var(--color-terracotta)", color: "white" }}
                >
                  Populaire
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {plan.name}
                </h3>
                <p className="text-xs opacity-60">{plan.sessions}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                  {plan.price}
                </span>
                <span className="text-xs opacity-60 ml-1">/mois</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
                className="block w-full text-center py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{
                  backgroundColor: plan.popular ? "var(--color-terracotta)" : "var(--color-sage)",
                  color: "white",
                }}
              >
                Choisir cette formule
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
