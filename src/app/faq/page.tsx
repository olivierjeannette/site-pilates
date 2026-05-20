"use client";

import { useState } from "react";
import type { Metadata } from "next";
import CTA from "@/components/sections/CTA";

const faqs = [
  {
    q: "Est-ce que le Pilates est adapté aux débutants ?",
    a: "Absolument ! Tous nos cours sont adaptables à tous les niveaux, y compris les grands débutants. Eva veille à ce que chaque participant puisse suivre à son rythme, avec des propositions d'adaptation pour chaque exercice.",
  },
  {
    q: "Est-ce que je dois apporter du matériel ?",
    a: "Non, tout le matériel est fourni sur place (tapis, ballons, bandes élastiques, etc.). Venez simplement avec une tenue confortable.",
  },
  {
    q: "Comment réserver un cours ?",
    a: "La réservation se fait en ligne via l'application Peppy. Vous pouvez aussi nous contacter par téléphone au 06 27 50 85 36 ou par email à pilatesbyskali@gmail.com.",
  },
  {
    q: "Puis-je annuler ma réservation ?",
    a: "Oui, l'annulation est possible jusqu'à 30 minutes avant le début du cours via l'application Peppy.",
  },
  {
    q: "Comment fonctionne la séance d'essai gratuite ?",
    a: "La première séance est offerte à tous les nouveaux membres ! Réservez simplement via l'app Peppy ou contactez Eva directement. C'est l'occasion idéale pour découvrir le studio et rencontrer Eva sans engagement.",
  },
  {
    q: "Y a-t-il un engagement avec les abonnements ?",
    a: "Nous proposons des formules avec engagement 12 mois (tarifs préférentiels) et des formules sans engagement. Le paiement se fait par prélèvement automatique mensuel via l'app Peppy.",
  },
  {
    q: "Les cours prénatal sont-ils accessibles tout au long de la grossesse ?",
    a: "Oui, les cours sont adaptés à chaque stade de la grossesse. Eva veille à ce que les exercices soient toujours sécurisés et bénéfiques pour vous et votre bébé. Les bébés sont également les bienvenus pendant les cours post-partum.",
  },
  {
    q: "Proposez-vous des cours en entreprise ?",
    a: "Oui ! Eva peut se déplacer dans vos locaux pour proposer des séances de Pilates à vos équipes. Contactez-nous par email ou téléphone pour établir un devis personnalisé.",
  },
  {
    q: "Quelle tenue porter pour les cours ?",
    a: "Portez simplement une tenue de sport confortable dans laquelle vous pouvez bouger librement. Les chaussettes antidérapantes sont recommandées (vous pratiquez pieds nus ou en chaussettes).",
  },
  {
    q: "Combien de personnes maximum par cours ?",
    a: "Les cours se font en petits groupes de 8 à 10 personnes maximum. Cela permet à Eva de suivre chaque participant individuellement et d'apporter les corrections et conseils nécessaires.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-200"
      style={{ border: "1px solid var(--color-cream-dark)", backgroundColor: "var(--color-warm-white)" }}
    >
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-semibold" style={{ color: "var(--color-charcoal)" }}>
          {q}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{
            backgroundColor: open ? "var(--color-sage)" : "var(--color-cream-dark)",
            color: open ? "white" : "var(--color-charcoal-light)",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-charcoal-light)" }}>
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

// metadata cannot be exported from a "use client" component — handled at segment level
export default function FaqPage() {
  return (
    <>
      <div className="pt-32 pb-16 text-center" style={{ backgroundColor: "var(--color-cream)" }}>
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4 flex items-center justify-center gap-3"
          style={{ color: "var(--color-sage)", letterSpacing: "0.25em" }}
        >
          <span className="inline-block w-6 h-px" style={{ backgroundColor: "var(--color-sage)" }} />
          Studio Pilates by Skàli
        </p>
        <h1
          className="text-5xl md:text-6xl font-semibold"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-charcoal)" }}
        >
          Questions{" "}
          <span style={{ color: "var(--color-sage-dark)", fontStyle: "italic" }}>fréquentes</span>
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-base px-6" style={{ color: "var(--color-charcoal-light)" }}>
          Vous ne trouvez pas votre réponse ? Contactez Eva directement.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <a
            href="tel:+33627508536"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{ backgroundColor: "var(--color-sage)", color: "white" }}
          >
            06 27 50 85 36
          </a>
          <a
            href="mailto:pilatesbyskali@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105"
            style={{ border: "1px solid var(--color-sage)", color: "var(--color-sage-dark)" }}
          >
            pilatesbyskali@gmail.com
          </a>
        </div>
      </div>

      <section className="py-16 max-w-3xl mx-auto px-6">
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
