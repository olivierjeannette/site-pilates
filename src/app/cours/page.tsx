import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Courses from "@/components/sections/Courses";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Nos Cours – Studio Pilates by Skàli",
  description:
    "Cours collectifs, prénatal, entreprises et à domicile. Pilates Matwork tous niveaux à Laval.",
};

const detailedCourses = [
  {
    num: "01",
    icon: "🧘‍♀️",
    title: "Cours collectifs sur tapis",
    desc: "Des cours sur tapis tous niveaux, adaptables à votre énergie du jour. Plus de 15 séances hebdomadaires pour s'adapter à tous les emplois du temps.",
    tags: ["Tous niveaux", "8–10 pers. max", "+15 créneaux/sem.", "Matériel fourni"],
    cta: "Réserver un cours collectif",
  },
  {
    num: "02",
    icon: "🤰",
    title: "Prénatal & Post-partum",
    desc: "Des cours spécialement conçus pour accompagner les femmes enceintes et les jeunes mamans. Les bébés sont les bienvenus pendant les séances post-partum.",
    tags: ["Femmes enceintes", "Post-accouchement", "Bébés bienvenus", "Suivi adapté"],
    cta: "Réserver un cours prénatal",
  },
  {
    num: "03",
    icon: "🏢",
    title: "Cours en entreprise",
    desc: "Eva se déplace directement dans vos locaux pour proposer des séances sportives à vos équipes. Une façon idéale de favoriser le bien-être au travail.",
    tags: ["Déplacement inclus", "Adapté aux équipes", "Horaires flexibles", "Devis sur demande"],
    cta: "Demander un devis",
  },
  {
    num: "04",
    icon: "🏠",
    title: "Cours à domicile",
    desc: "Des séances individuelles personnalisées directement chez vous. Eva adapte le programme à vos objectifs et votre progression pour des résultats optimaux.",
    tags: ["100% personnalisé", "À domicile", "Programme sur mesure", "Coaching individuel"],
    cta: "Réserver un cours à domicile",
  },
];

export default function CoursPage() {
  return (
    <>
      <PageHeader
        eyebrow="Studio Pilates by Skàli"
        title="Nos"
        highlight="cours"
        subtitle="Pilates Matwork pour tous les niveaux. Sans jugement, sans performance — juste le plaisir de bouger."
      />

      <section className="section-y" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-app">
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {detailedCourses.map((c) => (
              <article
                key={c.title}
                className="rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: "var(--color-cream-100)",
                  border: "1px solid var(--color-cream-300)",
                }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="text-3xl sm:text-4xl">{c.icon}</div>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: "var(--color-sage-500)", letterSpacing: "0.15em" }}
                  >
                    {c.num}
                  </span>
                </div>
                <h2
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 4vw, 1.875rem)",
                    fontWeight: 500,
                    color: "var(--color-ink-900)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {c.title}
                </h2>
                <p
                  className="text-sm mb-5"
                  style={{ color: "var(--color-ink-500)", lineHeight: 1.6 }}
                >
                  {c.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[11px] font-medium"
                      style={{
                        backgroundColor: "var(--color-bg)",
                        color: "var(--color-sage-600)",
                        border: "1px solid var(--color-sage-200)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://app.peppy.cool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: "12px 20px", fontSize: "13px", minHeight: "44px" }}
                >
                  {c.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Courses />
      <CTA />
    </>
  );
}
