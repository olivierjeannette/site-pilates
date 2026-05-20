import type { Metadata } from "next";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Tarifs – Studio Pilates by Skàli",
  description:
    "Abonnements, carnets de séances et offres découverte. Séance d'essai gratuite pour les nouveaux.",
};

export default function TarifsPage() {
  return (
    <>
      <div className="pt-32 pb-16 text-center" style={{ backgroundColor: "var(--color-warm-white)" }}>
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
          Nos <span style={{ color: "var(--color-sage-dark)", fontStyle: "italic" }}>tarifs</span>
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-base px-6" style={{ color: "var(--color-charcoal-light)" }}>
          Des formules adaptées à tous les budgets et toutes les fréquences. Commencez par une séance gratuite !
        </p>
      </div>
      <Pricing />
      <CTA />
    </>
  );
}
