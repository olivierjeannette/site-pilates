"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LeadMagnet() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
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
      scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
    });

    if (bookRef.current) {
      gsap.to(bookRef.current, {
        y: -10,
        rotation: -2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      className="section-y relative overflow-hidden"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="container-app">
        <div
          ref={cardRef}
          className="relative rounded-[32px] overflow-hidden grid md:grid-cols-2"
          style={{
            background: "linear-gradient(135deg, var(--color-sage-600) 0%, var(--color-sage-700) 100%)",
            boxShadow: "0 30px 60px -20px rgba(63,77,54,0.4)",
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.06)",
              top: "-200px",
              right: "-100px",
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.06)",
              bottom: "-150px",
              left: "-100px",
            }}
          />

          {/* Left side: ebook visual */}
          <div className="relative p-6 sm:p-10 md:p-12 flex flex-col justify-center min-h-[320px] md:min-h-[480px]">
            {/* Ebook mockup */}
            <div className="relative flex justify-center mb-8 md:mb-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-1/4">
              <div
                ref={bookRef}
                className="relative"
                style={{
                  width: "180px",
                  filter: "drop-shadow(0 25px 35px rgba(0,0,0,0.35))",
                }}
              >
                {/* Book cover */}
                <div
                  className="rounded-r-lg rounded-l-md overflow-hidden relative"
                  style={{
                    background: "linear-gradient(135deg, var(--color-cream-50) 0%, var(--color-cream-200) 100%)",
                    aspectRatio: "3/4",
                  }}
                >
                  {/* Spine */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-2.5"
                    style={{
                      background: "linear-gradient(90deg, var(--color-cta-dark), var(--color-cta))",
                    }}
                  />
                  <div className="pl-5 pr-3 pt-5 pb-4 h-full flex flex-col">
                    <p
                      className="text-[8px] uppercase tracking-[0.2em] font-bold mb-2"
                      style={{ color: "var(--color-cta)" }}
                    >
                      Ebook offert
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "var(--color-ink-900)",
                        lineHeight: 1.1,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      60 Recettes
                      <br />
                      <span style={{ fontStyle: "italic", color: "var(--color-sage-500)" }}>Santé</span>
                    </p>
                    <p
                      className="text-[10px] mt-2 mb-3"
                      style={{ color: "var(--color-ink-500)", lineHeight: 1.4 }}
                    >
                      Pour maigrir et rester en pleine forme
                    </p>

                    {/* Decorative lines */}
                    <div className="space-y-1.5 mt-auto mb-2">
                      {[80, 65, 90, 70].map((w, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="text-[10px]">
                            {["🥗", "🥑", "🍓", "🥦"][i]}
                          </span>
                          <div
                            className="h-1 rounded-full"
                            style={{
                              width: `${w}%`,
                              background: "linear-gradient(90deg, var(--color-sage-200), var(--color-sage-300))",
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    <p
                      className="text-[8px] text-center font-semibold mt-2"
                      style={{ color: "var(--color-ink-500)", letterSpacing: "0.15em" }}
                    >
                      STUDIO PILATES SKÀLI
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative md:max-w-[55%]">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                <span style={{ color: "var(--color-cta)" }}>🎁</span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-white">
                  Cadeau gratuit
                </span>
              </div>
              <h3
                className="text-white mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                }}
              >
                60 recettes santé
                <br />
                <span style={{ color: "var(--color-sage-200)", fontStyle: "italic", fontWeight: 400 }}>
                  offertes
                </span>
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Idéales après une séance de Pilates",
                  "Équilibrées et gourmandes",
                  "Pour mincir naturellement",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/85">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" style={{ color: "var(--color-sage-200)" }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side: form */}
          <div
            className="relative p-6 sm:p-10 md:p-12 flex flex-col justify-center"
            style={{ backgroundColor: "var(--color-bg)" }}
          >
            {!submitted ? (
              <>
                <div className="eyebrow mb-4">100% gratuit</div>
                <h4
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.5rem, 4vw, 2rem)",
                    fontWeight: 500,
                    color: "var(--color-ink-900)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  Recevez votre ebook
                </h4>
                <p
                  className="text-sm mb-7"
                  style={{ color: "var(--color-ink-500)", lineHeight: 1.6 }}
                >
                  Laissez-nous votre email et recevez immédiatement votre guide de recettes santé.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="lead-name"
                      className="block text-[11px] font-semibold uppercase tracking-wider mb-2"
                      style={{ color: "var(--color-ink-500)" }}
                    >
                      Prénom
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Marie"
                      required
                      className="w-full px-4 py-3.5 rounded-2xl text-base outline-none transition-all"
                      style={{
                        backgroundColor: "var(--color-cream-100)",
                        border: "1.5px solid transparent",
                        color: "var(--color-ink-900)",
                        minHeight: "48px",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-sage-400)";
                        e.currentTarget.style.backgroundColor = "var(--color-bg)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "transparent";
                        e.currentTarget.style.backgroundColor = "var(--color-cream-100)";
                      }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lead-email"
                      className="block text-[11px] font-semibold uppercase tracking-wider mb-2"
                      style={{ color: "var(--color-ink-500)" }}
                    >
                      Email
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="marie@exemple.fr"
                      required
                      className="w-full px-4 py-3.5 rounded-2xl text-base outline-none transition-all"
                      style={{
                        backgroundColor: "var(--color-cream-100)",
                        border: "1.5px solid transparent",
                        color: "var(--color-ink-900)",
                        minHeight: "48px",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-sage-400)";
                        e.currentTarget.style.backgroundColor = "var(--color-bg)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "transparent";
                        e.currentTarget.style.backgroundColor = "var(--color-cream-100)";
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full"
                    style={{ minHeight: "52px" }}
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                          <path d="M22 12c0-5.523-4.477-10-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        Envoi...
                      </>
                    ) : (
                      <>
                        Je veux mon ebook
                        <span>🎁</span>
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center" style={{ color: "var(--color-ink-400)" }}>
                    Pas de spam · Désabonnement en 1 clic
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "var(--color-sage-100)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-sage-600)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    fontWeight: 500,
                    color: "var(--color-ink-900)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Merci {name} !
                </h4>
                <p className="text-sm" style={{ color: "var(--color-ink-500)", lineHeight: 1.6 }}>
                  Votre ebook arrive dans votre boîte mail. Vérifiez vos spams si vous ne le voyez pas dans les 5 minutes.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
