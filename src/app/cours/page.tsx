import type { Metadata } from "next";
import Courses from "@/components/sections/Courses";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Nos Cours – Studio Pilates by Skàli",
  description:
    "Cours collectifs, prénatal, entreprises et à domicile. Pilates Matwork tous niveaux à Laval.",
};

export default function CoursPage() {
  return (
    <>
      {/* Page header */}
      <div
        className="pt-32 pb-16 text-center"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
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
          Nos <span style={{ color: "var(--color-sage-dark)", fontStyle: "italic" }}>cours</span>
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-base px-6" style={{ color: "var(--color-charcoal-light)" }}>
          Pilates Matwork pour tous les niveaux. Sans jugement, sans performance — juste le plaisir de bouger.
        </p>
      </div>

      {/* Detail cards */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: "🧘",
              title: "Cours collectifs sur tapis",
              desc: "Des cours sur tapis tous niveaux, adaptables à votre énergie du jour. Plus de 15 séances hebdomadaires pour s'adapter à tous les emplois du temps. Matériel fourni sur place.",
              tags: ["Tous niveaux", "8–10 pers. max", "+15 créneaux/sem.", "Matériel fourni"],
              cta: "Réserver un cours collectif",
            },
            {
              icon: "🤰",
              title: "Prénatal & Post-partum",
              desc: "Des cours spécialement conçus pour accompagner les femmes enceintes et les jeunes mamans. Les bébés sont les bienvenus pendant les séances post-partum.",
              tags: ["Femmes enceintes", "Post-accouchement", "Bébés bienvenus", "Suivi adapté"],
              cta: "Réserver un cours prénatal",
            },
            {
              icon: "🏢",
              title: "Cours en entreprise",
              desc: "Eva se déplace directement dans vos locaux pour proposer des séances sportives à vos équipes. Une façon idéale de favoriser le bien-être au travail.",
              tags: ["Déplacement inclus", "Adapté aux équipes", "Horaires flexibles", "Devis sur demande"],
              cta: "Demander un devis",
            },
            {
              icon: "🏠",
              title: "Cours à domicile",
              desc: "Des séances individuelles personnalisées directement chez vous. Eva adapte le programme à vos objectifs et votre progression pour des résultats optimaux.",
              tags: ["100% personnalisé", "À domicile", "Programme sur mesure", "Coaching individuel"],
              cta: "Réserver un cours à domicile",
            },
          ].map((course) => (
            <div
              key={course.title}
              className="rounded-3xl p-8 transition-all duration-300 hover:shadow-xl"
              style={{ backgroundColor: "var(--color-warm-white)", border: "1px solid var(--color-cream-dark)" }}
            >
              <div className="text-4xl mb-4">{course.icon}</div>
              <h2
                className="text-2xl font-semibold mb-3"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-charcoal)" }}
              >
                {course.title}
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-charcoal-light)" }}>
                {course.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: "var(--color-cream)", color: "var(--color-sage-dark)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://app.peppy.cool"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-all hover:scale-105"
                style={{ backgroundColor: "var(--color-sage)" }}
              >
                {course.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <Courses />
      <CTA />
    </>
  );
}
