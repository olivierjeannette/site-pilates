"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/cours", label: "Cours" },
  { href: "/planning", label: "Planning" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled || menuOpen ? "rgba(253, 250, 245, 0.92)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(16px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(16px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(31,31,29,0.06)" : "1px solid transparent",
        }}
      >
        <nav className="container-app">
          <div className="flex items-center justify-between" style={{ height: "68px" }}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Accueil">
              <span
                className="flex items-center justify-center rounded-full transition-transform group-hover:scale-110"
                style={{
                  width: "36px",
                  height: "36px",
                  backgroundColor: "var(--color-sage-500)",
                  color: "white",
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                S
              </span>
              <div className="leading-none">
                <span
                  className="block"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "var(--color-ink-900)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Skàli
                </span>
                <span
                  className="block text-[9px] mt-0.5"
                  style={{
                    color: "var(--color-ink-500)",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  Studio Pilates
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative px-4 py-2 text-sm font-medium transition-colors"
                      style={{
                        color: isActive ? "var(--color-sage-600)" : "var(--color-ink-700)",
                      }}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                          style={{ backgroundColor: "var(--color-cta)" }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <a
                href="https://app.peppy.cool"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex btn-primary"
                style={{ padding: "10px 20px", fontSize: "13px", minHeight: "auto" }}
              >
                Réserver
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                className="md:hidden relative flex items-center justify-center rounded-full transition-colors"
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: menuOpen ? "var(--color-ink-900)" : "var(--color-sage-100)",
                }}
              >
                <span
                  className="absolute block transition-all duration-300"
                  style={{
                    width: "16px",
                    height: "1.5px",
                    backgroundColor: menuOpen ? "white" : "var(--color-ink-900)",
                    transform: menuOpen ? "rotate(45deg)" : "translateY(-4px)",
                    borderRadius: "1px",
                  }}
                />
                <span
                  className="absolute block transition-all duration-300"
                  style={{
                    width: "16px",
                    height: "1.5px",
                    backgroundColor: menuOpen ? "white" : "var(--color-ink-900)",
                    transform: menuOpen ? "rotate(-45deg)" : "translateY(4px)",
                    borderRadius: "1px",
                  }}
                />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className="md:hidden fixed inset-0 z-40 transition-opacity"
        style={{
          backgroundColor: "rgba(31,31,29,0.4)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      />

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        className="md:hidden fixed top-[68px] left-0 right-0 z-40 transition-transform duration-500"
        style={{
          transform: menuOpen ? "translateY(0)" : "translateY(-110%)",
          backgroundColor: "var(--color-bg)",
          borderBottomLeftRadius: "32px",
          borderBottomRightRadius: "32px",
          boxShadow: "0 30px 60px -20px rgba(31,31,29,0.25)",
        }}
      >
        <div className="px-6 pt-6 pb-8">
          <ul className="flex flex-col gap-1 mb-6">
            {links.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <li
                  key={link.href}
                  style={{
                    transitionDelay: menuOpen ? `${i * 50}ms` : "0ms",
                    transition: "all 0.4s var(--ease-out)",
                    transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
                    opacity: menuOpen ? 1 : 0,
                  }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-4 px-2"
                    style={{
                      borderBottom: "1px solid var(--color-ink-200)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "24px",
                        fontWeight: 500,
                        color: isActive ? "var(--color-sage-600)" : "var(--color-ink-900)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {link.label}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      style={{ color: isActive ? "var(--color-cta)" : "var(--color-ink-400)" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            href="https://app.peppy.cool"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full"
            style={{
              transition: "all 0.4s var(--ease-out)",
              transitionDelay: menuOpen ? "250ms" : "0ms",
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: menuOpen ? 1 : 0,
            }}
          >
            Séance d&apos;essai gratuite
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>

          <div
            className="mt-6 flex items-center justify-center gap-6 text-xs"
            style={{
              color: "var(--color-ink-500)",
              transition: "all 0.4s var(--ease-out)",
              transitionDelay: menuOpen ? "300ms" : "0ms",
              opacity: menuOpen ? 1 : 0,
            }}
          >
            <a href="tel:+33627508536" className="flex items-center gap-1.5">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              06 27 50 85 36
            </a>
            <a
              href="https://www.instagram.com/pilates_by_skali"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @pilates_by_skali
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
