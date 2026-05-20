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
    note: "Frais d'inscription 20€ (une seule fois)",
    plans: [
      { name: "Basic", sessions: "4 séances / mois", price: "34,99", unit: "€/mois" },
      { name: "Standard", sessions: "8 séances / mois", price: "42,99", unit: "€/mois", popular: true },
      { name: "Premium", sessions: "6 séances / mois", price: "56,99", unit: "€/mois" },
      { name: "Ultimate", sessions: "8 séances / mois", price: "62,99", unit: "€/mois" },
    ],
  },
  "sans-engagement": {
    label: "Sans engagement",
    note: "Résiliable à tout moment",
    plans: [
      { name: "Basic", sessions: "4 séances / mois", price: "54,99", unit: "€/mois" },
      { name: "Premium", sessions: "6 séances / mois", price: "42,99", unit: "€/mois", popular: true },
    ],
  },
  carnets: {
    label: "Carnets",
    note: "Carnets valables 12 mois",
    plans: [
      { name: "À l'unité", sessions: "1 séance", price: "15", unit: "€" },
      { name: "Carnet 5", sessions: "5 séances", price: "70", unit: "€" },
      { name: "Carnet 10", sessions: "10 séances", price: "135", unit: "€", popular: true },
      { name: "Carnet 20", sessions: "20 séances", price: "255", unit: "€" },
    ],
  },
};

export default function PricingDetailed() {
  const ref = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<Tab>("engagement");

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

  const current = pricingData[activeTab];

  return (
    <section
      ref={ref}
      className="section-y"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-app">
        {/* Tabs */}
        <div className="reveal flex justify-center mb-8">
          <div
            className="inline-flex p-1 rounded-full"
            style={{
              backgroundColor: "var(--color-cream-100)",
              border: "1px solid var(--color-ink-200)",
            }}
          >
            {(Object.keys(pricingData) as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-3 sm:px-5 py-2 rounded-full text-[12px] sm:text-sm font-medium transition-all whitespace-nowrap"
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
          <p className="reveal text-center text-xs mb-6" style={{ color: "var(--color-ink-500)" }}>
            ⓘ {current.note}
          </p>
        )}

        <div className="reveal max-w-md mx-auto">
          <ul>
            {current.plans.map((plan, i) => (
              <li
                key={plan.name}
                className="py-5 flex items-baseline justify-between gap-4"
                style={{
                  borderTop: "1px solid var(--color-ink-200)",
                  borderBottom: i === current.plans.length - 1 ? "1px solid var(--color-ink-200)" : "none",
                }}
              >
                <div>
                  <p
                    className="flex items-center gap-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.125rem",
                      fontWeight: 500,
                      color: "var(--color-ink-900)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {plan.name}
                    {plan.popular && (
                      <span
                        className="text-[9px] px-1.5 py-0.5 rounded-full font-semibold uppercase tracking-wider"
                        style={{ backgroundColor: "var(--color-cta)", color: "white" }}
                      >
                        Top
                      </span>
                    )}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--color-ink-500)" }}>
                    {plan.sessions}
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: "var(--color-ink-900)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {plan.price}
                  <span className="text-xs ml-1" style={{ color: "var(--color-ink-500)" }}>
                    {plan.unit}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="reveal mt-8 text-center">
            <a
              href="https://app.peppy.cool"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              S&apos;abonner via Peppy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
