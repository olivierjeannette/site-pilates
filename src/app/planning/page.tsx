import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Planning – Studio Pilates by Skàli",
  description: "Consultez le planning des cours de Pilates à Laval.",
};

const schedule = [
  { day: "Lundi", times: ["07h00", "09h30", "12h15", "18h30", "19h30"] },
  { day: "Mardi", times: ["09h30", "12h15", "18h30"] },
  { day: "Mercredi", times: ["07h00", "09h30", "12h15", "18h30"] },
  { day: "Jeudi", times: ["09h30", "12h15", "18h30", "19h30"] },
  { day: "Vendredi", times: ["07h00", "09h30", "12h15"] },
  { day: "Samedi", times: ["09h00", "10h15"] },
];

export default function PlanningPage() {
  return (
    <>
      <PageHeader
        eyebrow="Studio Pilates · Laval"
        title="Notre"
        highlight="planning"
        subtitle="Plus de 15 séances par semaine. Réservation et annulation sur l'app Peppy."
      />

      <section className="section-y" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-app max-w-md">
          <ul>
            {schedule.map((day, i) => (
              <li
                key={day.day}
                className="py-5"
                style={{
                  borderTop: "1px solid var(--color-ink-200)",
                  borderBottom: i === schedule.length - 1 ? "1px solid var(--color-ink-200)" : "none",
                }}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "var(--color-ink-900)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {day.day}
                  </h2>
                  <p className="text-xs" style={{ color: "var(--color-ink-500)" }}>
                    {day.times.length} séance{day.times.length > 1 ? "s" : ""}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {day.times.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "var(--color-cream-100)",
                        color: "var(--color-ink-700)",
                        border: "1px solid var(--color-ink-200)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <p className="text-center text-xs mt-8 mb-6" style={{ color: "var(--color-ink-500)" }}>
            Annulation possible jusqu&apos;à 30 min avant le cours
          </p>

          <div className="text-center">
            <a
              href="https://app.peppy.cool"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Réserver sur Peppy
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
