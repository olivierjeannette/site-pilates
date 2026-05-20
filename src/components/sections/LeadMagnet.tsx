"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LeadMagnet() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        once: true,
      },
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setLoading(true);
    // Simulate API call – replace with your email service (Mailchimp, Brevo, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-warm-white)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, var(--color-sage) 0%, transparent 50%), radial-gradient(circle at 80% 50%, var(--color-terracotta) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={cardRef}
          className="rounded-3xl overflow-hidden grid md:grid-cols-2"
          style={{ backgroundColor: "var(--color-sage-dark)" }}
        >
          {/* Left: ebook visual */}
          <div
            className="relative p-10 flex flex-col justify-between"
            style={{
              background: "linear-gradient(135deg, var(--color-sage-dark) 0%, var(--color-charcoal) 100%)",
            }}
          >
            {/* Ebook mockup */}
            <div className="flex items-start gap-4 mb-8">
              <div
                className="rounded-2xl p-6 shadow-2xl relative"
                style={{
                  backgroundColor: "var(--color-cream)",
                  width: "140px",
                  minHeight: "190px",
                  transform: "rotate(-3deg)",
                }}
              >
                <div
                  className="absolute top-0 bottom-0 left-0 w-3 rounded-l-2xl"
                  style={{ backgroundColor: "var(--color-terracotta)" }}
                />
                <div className="pl-2">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-sage)" }}>
                    Ebook Offert
                  </p>
                  <p
                    className="text-sm font-semibold leading-tight"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-charcoal)", fontSize: "0.85rem" }}
                  >
                    60 Recettes Santé
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--color-charcoal-light)" }}>
                    Pour maigrir & être en forme
                  </p>
                  <div className="mt-4 space-y-1.5">
                    {["🥗", "🥑", "🍓", "🥦"].map((emoji, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <span className="text-sm">{emoji}</span>
                        <div
                          className="h-1.5 rounded-full"
                          style={{
                            width: `${60 + i * 10}%`,
                            backgroundColor: "var(--color-sage-light)",
                            opacity: 0.5,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/60">
                Cadeau de bienvenue
              </p>
              <h3
                className="text-3xl font-semibold text-white leading-tight mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                60 Recettes Santé<br />
                <span style={{ color: "var(--color-sage-light)" }}>offertes !</span>
              </h3>
              <div className="space-y-2">
                {[
                  "Recettes équilibrées & gourmandes",
                  "Idéales après une séance de Pilates",
                  "Pour mincir et rester en forme",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="p-10 flex flex-col justify-center" style={{ backgroundColor: "var(--color-cream)" }}>
            {!submitted ? (
              <>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3 flex items-center gap-2"
                  style={{ color: "var(--color-sage)", letterSpacing: "0.2em" }}
                >
                  <span className="inline-block w-4 h-px" style={{ backgroundColor: "var(--color-sage)" }} />
                  100% gratuit
                </p>
                <h4
                  className="text-2xl font-semibold mb-2"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-charcoal)" }}
                >
                  Recevez votre ebook
                </h4>
                <p className="text-sm mb-8" style={{ color: "var(--color-charcoal-light)" }}>
                  Inscrivez-vous à notre newsletter et recevez immédiatement votre guide de recettes santé par email.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--color-charcoal-light)" }}>
                      Votre prénom
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Marie"
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        backgroundColor: "var(--color-warm-white)",
                        border: "1px solid var(--color-cream-dark)",
                        color: "var(--color-charcoal)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--color-sage)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--color-cream-dark)")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--color-charcoal-light)" }}>
                      Votre email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="marie@exemple.fr"
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        backgroundColor: "var(--color-warm-white)",
                        border: "1px solid var(--color-cream-dark)",
                        color: "var(--color-charcoal)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--color-sage)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--color-cream-dark)")}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] disabled:opacity-60"
                    style={{ backgroundColor: "var(--color-terracotta)" }}
                  >
                    {loading ? "Envoi en cours..." : "Je veux mon ebook gratuit 🎁"}
                  </button>
                  <p className="text-xs text-center" style={{ color: "var(--color-charcoal-light)" }}>
                    Pas de spam. Désabonnement en 1 clic.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h4
                  className="text-2xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-charcoal)" }}
                >
                  C&apos;est envoyé, {name} !
                </h4>
                <p className="text-sm" style={{ color: "var(--color-charcoal-light)" }}>
                  Votre ebook arrive dans votre boîte mail. Vérifiez vos spams si vous ne le voyez pas dans les 5 minutes.
                </p>
                <div
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white"
                  style={{ backgroundColor: "var(--color-sage)" }}
                >
                  ✓ Email envoyé avec succès
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
