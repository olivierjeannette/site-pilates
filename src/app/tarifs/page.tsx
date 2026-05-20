import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/sections/Pricing";
import LeadMagnet from "@/components/sections/LeadMagnet";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Tarifs – Studio Pilates by Skàli",
  description:
    "Abonnements, carnets de séances et offres découverte. Séance d'essai gratuite pour les nouveaux.",
};

export default function TarifsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Studio Pilates by Skàli"
        title="Nos"
        highlight="tarifs"
        subtitle="Des formules adaptées à tous les budgets et toutes les fréquences. Commencez par une séance gratuite."
      />
      <Pricing />
      <LeadMagnet />
      <CTA />
    </>
  );
}
