import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Nos Cours – Studio Pilates by Skàli",
  description:
    "Cours collectifs, prénatal, entreprises et à domicile. Pilates Matwork tous niveaux à Laval.",
};

const courses = [
  {
    title: "Cours collectifs",
    desc: "Matwork tous niveaux, 8 à 10 personnes maximum. Plus de 15 séances par semaine. Matériel fourni.",
  },
  {
    title: "Prénatal & post-partum",
    desc: "Cours adaptés à chaque étape de la grossesse et de la récupération. Bébés bienvenus.",
  },
  {
    title: "Cours en entreprise",
    desc: "Séances directement dans vos locaux pour booster le bien-être de vos collaborateurs.",
  },
  {
    title: "Cours à domicile",
    desc: "Coaching individuel personnalisé chez vous, adapté à vos objectifs.",
  },
];

export default function CoursPage() {
  return (
    <>
      <PageHeader
        eyebrow="Studio Pilates · Laval"
        title="Nos"
        highlight="cours"
        subtitle="Pilates Matwork pour tous les niveaux. Sans jugement, sans performance."
      />

      <section className="section-y" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-app max-w-2xl">
          <ul>
            {courses.map((c, i) => (
              <li
                key={c.title}
                className="py-8"
                style={{
                  borderTop: "1px solid var(--color-ink-200)",
                  borderBottom: i === courses.length - 1 ? "1px solid var(--color-ink-200)" : "none",
                }}
              >
                <h2
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 4vw, 1.875rem)",
                    fontWeight: 500,
                    color: "var(--color-ink-900)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {c.title}
                </h2>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--color-ink-500)",
                    lineHeight: 1.6,
                  }}
                >
                  {c.desc}
                </p>
              </li>
            ))}
          </ul>

          <div className="text-center mt-12">
            <a
              href="https://app.peppy.cool"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Réserver ma séance gratuite
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
