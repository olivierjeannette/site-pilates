"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LeadMagnet() {
  const ref = useRef<HTMLElement>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useGSAP(() => {
    gsap.from(ref.current?.querySelectorAll(".reveal") ?? [], {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
    });
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
      ref={ref}
      className="section-y"
      style={{ backgroundColor: "var(--color-cream-100)" }}
    >
      <div className="container-app">
        <div className="max-w-md mx-auto text-center">
          <div className="reveal eyebrow justify-center mb-12" style={{ display: "inline-flex" }}>
            Cadeau gratuit
          </div>

          <h2
            className="reveal h-display text-balance mb-8"
            style={{
              fontSize: "clamp(1.875rem, 5vw, 2.5rem)",
              color: "var(--color-ink-900)",
            }}
          >
            60 recettes santé{" "}
            <span style={{ color: "var(--color-terra-500)", fontStyle: "italic", fontWeight: 400 }}>
              offertes
            </span>
          </h2>

          <p
            className="reveal text-pretty mb-16"
            style={{
              fontSize: "clamp(0.9375rem, 2vw, 1rem)",
              color: "var(--color-ink-500)",
              lineHeight: 1.8,
            }}
          >
            Recevez gratuitement votre ebook pour mincir et rester en forme.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="reveal flex flex-col gap-5">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Votre prénom"
                required
                className="w-full px-5 py-4 rounded-full text-base outline-none transition-all text-center"
                style={{
                  backgroundColor: "var(--color-bg)",
                  border: "1.5px solid var(--color-ink-200)",
                  color: "var(--color-ink-900)",
                  minHeight: "52px",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-sage-400)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-ink-200)")}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
                className="w-full px-5 py-4 rounded-full text-base outline-none transition-all text-center"
                style={{
                  backgroundColor: "var(--color-bg)",
                  border: "1.5px solid var(--color-ink-200)",
                  color: "var(--color-ink-900)",
                  minHeight: "52px",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--color-sage-400)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--color-ink-200)")}
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
                style={{ minHeight: "52px" }}
              >
                {loading ? "Envoi..." : "Recevoir mon ebook"}
              </button>
              <p className="text-xs mt-5" style={{ color: "var(--color-ink-400)" }}>
                Pas de spam · Désabonnement en 1 clic
              </p>
            </form>
          ) : (
            <div className="reveal">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "var(--color-sage-100)" }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-sage-600)" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p
                className="mb-3"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--color-ink-900)",
                  letterSpacing: "-0.01em",
                }}
              >
                Merci {name} !
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-500)" }}>
                Votre ebook arrive dans votre boîte mail.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
