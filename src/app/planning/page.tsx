import type { Metadata } from "next";
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
  "Tous niveaux": { bg: "var(--color-sage)", text: "white" },
  "Débutants": { bg: "var(--color-sage-light)", text: "white" },
  "Intermédiaire": { bg: "var(--color-terracotta-light)", text: "white" },
  "Avancé": { bg: "var(--color-terracotta)", text: "white" },
  "Spécialisé": { bg: "var(--color-charcoal-light)", text: "white" },
};

export default function PlanningPage() {
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
          <span style={{ color: "var(--color-sage-dark)", fontStyle: "italic" }}>Planning</span> des cours
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-base px-6" style={{ color: "var(--color-charcoal-light)" }}>
          Plus de 15 séances par semaine. Annulation possible jusqu&apos;à 30 minutes avant le début du cours.
        </p>
        <div className="mt-6">
          <a
            href="https://app.peppy.cool"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-all hover:scale-105"
            style={{ backgroundColor: "var(--color-terracotta)" }}
          >
            Réserver via l&apos;app Peppy
          </a>
        </div>
      </div>

      <section className="py-16 max-w-6xl mx-auto px-6">
        {/* Legend */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {Object.entries(levelColors).map(([level, colors]) => (
            <span
              key={level}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{ backgroundColor: colors.bg, color: colors.text }}
            >
              {level}
            </span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedule.map((day) => (
            <div
              key={day.day}
              className="rounded-3xl overflow-hidden"
              style={{ border: "1px solid var(--color-cream-dark)" }}
            >
              <div
                className="px-6 py-4"
                style={{ backgroundColor: "var(--color-sage)", color: "white" }}
              >
                <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                  {day.day}
                </h2>
                <p className="text-xs text-white/70">{day.slots.length} séance{day.slots.length > 1 ? "s" : ""}</p>
              </div>
              <div style={{ backgroundColor: "var(--color-warm-white)" }}>
                {day.slots.map((slot, i) => (
                  <div
                    key={i}
                    className="px-6 py-4 flex items-center justify-between"
                    style={{ borderBottom: i < day.slots.length - 1 ? "1px solid var(--color-cream-dark)" : "none" }}
                  >
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--color-charcoal)" }}>
                        {slot.time}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--color-charcoal-light)" }}>
                        {slot.type}
                      </p>
                    </div>
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: levelColors[slot.level]?.bg ?? "var(--color-sage)",
                        color: levelColors[slot.level]?.text ?? "white",
                        fontSize: "0.65rem",
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

        <div
          className="mt-10 rounded-2xl p-6 flex items-start gap-4"
          style={{ backgroundColor: "var(--color-cream)", border: "1px solid var(--color-cream-dark)" }}
        >
          <span className="text-2xl">ℹ️</span>
          <div>
            <p className="text-sm font-semibold mb-1" style={{ color: "var(--color-charcoal)" }}>
              Réservation en ligne
            </p>
            <p className="text-sm" style={{ color: "var(--color-charcoal-light)" }}>
              Les réservations se font via l&apos;application <strong>Peppy</strong>. Annulation possible jusqu&apos;à 30 min avant le cours. Le planning ci-dessus est indicatif — consultez l&apos;app pour les créneaux exacts et les disponibilités en temps réel.
            </p>
            <a
              href="https://app.peppy.cool"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm font-medium hover:underline"
              style={{ color: "var(--color-sage-dark)" }}
            >
              Ouvrir l&apos;app Peppy →
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
