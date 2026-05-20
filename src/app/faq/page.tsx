"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/sections/CTA";

const faqs = [
  {
    q: "Le Pilates est-il adapté aux débutants ?",
    a: "Oui, tous nos cours sont adaptables à tous les niveaux. Eva propose des adaptations pour chaque exercice.",
  },
  {
    q: "Faut-il apporter du matériel ?",
    a: "Non, tout est fourni sur place. Venez simplement en tenue confortable.",
  },
  {
    q: "Comment réserver ?",
    a: "Via l'application Peppy. La 1ère séance est gratuite pour les nouveaux.",
  },
  {
    q: "Puis-je annuler ?",
    a: "Oui, jusqu'à 30 minutes avant le début du cours, via l'app Peppy.",
  },
  {
    q: "Combien de personnes par cours ?",
    a: "8 à 10 personnes maximum, pour un suivi vraiment personnalisé.",
  },
  {
    q: "Y a-t-il un engagement ?",
    a: "Formules avec engagement 12 mois (tarif préférentiel) et sans engagement disponibles.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li
      className="py-8"
      style={{
        borderTop: "1px solid var(--color-ink-200)",
      }}
    >
      <button
        className="w-full text-left flex items-center justify-between gap-6"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="text-base font-medium"
          style={{ color: "var(--color-ink-900)" }}
        >
          {q}
        </span>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform"
          style={{
            backgroundColor: "var(--color-sage-100)",
            color: "var(--color-sage-600)",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "320px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <p className="text-sm pt-6 pr-12" style={{ color: "var(--color-ink-500)", lineHeight: 1.8 }}>
          {a}
        </p>
      </div>
    </li>
  );
}

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Besoin d'aide ?"
        title="Questions"
        highlight="fréquentes"
      />

      <section className="section-y" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-app max-w-xl">
          <ul style={{ borderBottom: "1px solid var(--color-ink-200)" }}>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </ul>

          <div className="text-center mt-20">
            <p className="text-sm mb-6" style={{ color: "var(--color-ink-500)" }}>
              Une autre question ?
            </p>
            <a href="tel:+33627508536" className="btn-primary">
              Appeler Eva
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
