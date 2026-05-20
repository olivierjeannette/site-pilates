"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
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

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-3xl overflow-hidden transition-all duration-300"
      style={{
        backgroundColor: open ? "var(--color-cream-100)" : "var(--color-bg)",
        border: `1px solid ${open ? "var(--color-sage-300)" : "var(--color-ink-200)"}`,
      }}
    >
      <button
        className="w-full text-left px-5 sm:px-7 py-5 flex items-center justify-between gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="flex items-start gap-4 flex-1">
          <span
            className="text-xs font-semibold mt-1 flex-shrink-0"
            style={{ color: "var(--color-sage-500)", letterSpacing: "0.1em" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="text-base font-medium flex-1"
            style={{ color: "var(--color-ink-900)", lineHeight: 1.4 }}
          >
            {q}
          </span>
        </div>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: open ? "var(--color-ink-900)" : "var(--color-sage-100)",
            color: open ? "white" : "var(--color-ink-900)",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400"
        style={{
          maxHeight: open ? "400px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="px-5 sm:px-7 pb-5 pl-12 sm:pl-16">
          <p className="text-sm" style={{ color: "var(--color-ink-500)", lineHeight: 1.7 }}>
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Besoin d'aide ?"
        title="Questions"
        highlight="fréquentes"
        subtitle="Tout ce que vous devez savoir avant de venir au studio. Vous ne trouvez pas votre réponse ? Contactez Eva directement."
      />

      <section className="section-y" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-app max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>

          {/* Contact card */}
          <div
            className="mt-12 rounded-3xl p-7 sm:p-9 text-center"
            style={{
              backgroundColor: "var(--color-cream-100)",
              border: "1px solid var(--color-cream-300)",
            }}
          >
            <h3
              className="mb-2"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: 500,
                color: "var(--color-ink-900)",
                letterSpacing: "-0.01em",
              }}
            >
              Une autre question ?
            </h3>
            <p className="text-sm mb-6" style={{ color: "var(--color-ink-500)" }}>
              Eva vous répond rapidement par téléphone ou par email.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+33627508536"
                className="btn-primary"
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                Appeler Eva
              </a>
              <a
                href="mailto:pilatesbyskali@gmail.com"
                className="btn-secondary"
              >
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
