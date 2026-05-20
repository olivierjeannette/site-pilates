import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Planning – Studio Pilates by Skàli",
  description: "Consultez le planning des cours de Pilates à Laval. Plus de 15 séances par semaine.",
};

const schedule = [
  {
    day: "Lundi",
    slots: [
      { time: "07h00", type: "Pilates collectif", level: "Tous niveaux" },
      { time: "09h30", type: "Pilates collectif", level: "Débutants" },
      { time: "12h15", type: "Pilates collectif", level: "Tous niveaux" },
      { time: "18h30", type: "Pilates collectif", level: "Intermédiaire" },
      { time: "19h30", type: "Pilates collectif", level: "Tous niveaux" },
    ],
  },
  {
    day: "Mardi",
    slots: [
      { time: "09h30", type: "Prénatal & Post-partum", level: "Spécialisé" },
      { time: "12h15", type: "Pilates collectif", level: "Tous niveaux" },
      { time: "18h30", type: "Pilates collectif", level: "Tous niveaux" },
    ],
  },
  {
    day: "Mercredi",
    slots: [
      { time: "07h00", type: "Pilates collectif", level: "Tous niveaux" },
      { time: "09h30", type: "Pilates collectif", level: "Débutants" },
      { time: "12h15", type: "Pilates collectif", level: "Intermédiaire" },
      { time: "18h30", type: "Pilates collectif", level: "Tous niveaux" },
    ],
  },
  {
    day: "Jeudi",
    slots: [
      { time: "09h30", type: "Pilates collectif", level: "Tous niveaux" },
      { time: "12h15", type: "Pilates collectif", level: "Tous niveaux" },
      { time: "18h30", type: "Pilates collectif", level: "Avancé" },
      { time: "19h30", type: "Pilates collectif", level: "Tous niveaux" },
    ],
  },
  {
    day: "Vendredi",
    slots: [
      { time: "07h00", type: "Pilates collectif", level: "Tous niveaux" },
      { time: "09h30", type: "Pilates collectif", level: "Débutants" },
      { time: "12h15", type: "Pilates collectif", level: "Tous niveaux" },
    ],
  },
  {
    day: "Samedi",
    slots: [
      { time: "09h00", type: "Pilates collectif", level: "Tous niveaux" },
      { time: "10h15", type: "Prénatal & Post-partum", level: "Spécialisé" },
    ],
  },
];

const levelColors: Record<string, { bg: string; text: string }> = {
  "Tous niveaux": { bg: "var(--color-sage-500)", text: "white" },
  "Débutants": { bg: "var(--color-sage-300)", text: "white" },
  "Intermédiaire": { bg: "var(--color-terra-400)", text: "white" },
  "Avancé": { bg: "var(--color-terra-500)", text: "white" },
  "Spécialisé": { bg: "var(--color-ink-700)", text: "white" },
};

export default function PlanningPage() {
  return (
    <>
      <PageHeader
        eyebrow="Studio Pilates by Skàli"
        title="Notre"
        highlight="planning"
        subtitle="Plus de 15 séances par semaine. Annulation possible jusqu'à 30 minutes avant le début du cours."
      />

      <section className="section-y" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-app">
          {/* Legend */}
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10 justify-center">
            {Object.entries(levelColors).map(([level, colors]) => (
              <span
                key={level}
                className="px-3 py-1.5 rounded-full text-[11px] font-medium"
                style={{ backgroundColor: colors.bg, color: colors.text }}
              >
                {level}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {schedule.map((day) => (
              <div
                key={day.day}
                className="rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                style={{
                  backgroundColor: "var(--color-cream-100)",
                  border: "1px solid var(--color-cream-300)",
                }}
              >
                <div
                  className="px-5 py-4 flex items-center justify-between"
                  style={{ backgroundColor: "var(--color-ink-900)", color: "white" }}
                >
                  <div>
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.25rem",
                        fontWeight: 500,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {day.day}
                    </h2>
                    <p className="text-[11px] mt-0.5" style={{ color: "var(--color-sage-200)" }}>
                      {day.slots.length} séance{day.slots.length > 1 ? "s" : ""}
                    </p>
                  </div>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
                    style={{ backgroundColor: "var(--color-sage-500)" }}
                  >
                    {day.day.charAt(0)}
                  </span>
                </div>
                <div>
                  {day.slots.map((slot, i) => (
                    <div
                      key={i}
                      className="px-5 py-3.5 flex items-center justify-between gap-3"
                      style={{ borderBottom: i < day.slots.length - 1 ? "1px solid var(--color-cream-300)" : "none" }}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: "var(--color-ink-900)",
                            minWidth: "52px",
                          }}
                        >
                          {slot.time}
                        </span>
                        <p className="text-xs truncate" style={{ color: "var(--color-ink-500)" }}>
                          {slot.type}
                        </p>
                      </div>
                      <span
                        className="px-2 py-0.5 rounded-full text-[9px] font-semibold whitespace-nowrap"
                        style={{
                          backgroundColor: levelColors[slot.level]?.bg ?? "var(--color-sage-500)",
                          color: levelColors[slot.level]?.text ?? "white",
                        }}
                      >
                        {slot.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Info card */}
          <div
            className="mt-10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
            style={{
              backgroundColor: "var(--color-cream-100)",
              border: "1px solid var(--color-cream-300)",
            }}
          >
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "var(--color-sage-500)", color: "white" }}
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
            </div>
            <div className="flex-1">
              <p
                className="mb-2"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  color: "var(--color-ink-900)",
                  letterSpacing: "-0.01em",
                }}
              >
                Réservation en ligne
              </p>
              <p className="text-sm mb-4" style={{ color: "var(--color-ink-500)", lineHeight: 1.6 }}>
                Les réservations se font via l&apos;application <strong>Peppy</strong>. Annulation possible jusqu&apos;à 30 min avant le cours. Le planning ci-dessus est indicatif — consultez l&apos;app pour les disponibilités en temps réel.
              </p>
              <a
                href="https://app.peppy.cool"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: "10px 18px", fontSize: "13px", minHeight: "auto" }}
              >
                Ouvrir l&apos;app Peppy
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
