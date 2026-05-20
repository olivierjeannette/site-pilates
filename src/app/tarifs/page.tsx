import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PricingDetailed from "@/components/sections/PricingDetailed";
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
        eyebrow="Studio Pilates · Laval"
        title="Nos"
        highlight="tarifs"
        subtitle="1ère séance gratuite. Paiement via l'app Peppy."
      />
      <PricingDetailed />
      <CTA />
    </>
  );
}
