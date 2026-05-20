"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/cours", label: "Cours" },
  { href: "/planning", label: "Planning" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3,
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (menuOpen) {
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      style={{
        backgroundColor: scrolled ? "rgba(253,250,245,0.96)" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(44,44,44,0.08)" : "none",
        transition: "background-color 0.4s ease, box-shadow 0.4s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="text-2xl font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-sage-dark)" }}
          >
            Skàli
          </span>
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--color-charcoal-light)", letterSpacing: "0.2em" }}
          >
            Studio Pilates
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium tracking-wide transition-all duration-200 relative group"
                style={{ color: "var(--color-charcoal-light)", letterSpacing: "0.05em" }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "var(--color-sage)" }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a
          href="https://app.peppy.cool"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{ backgroundColor: "var(--color-terracotta)" }}
        >
          Réserver un cours
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "var(--color-charcoal)",
              transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "var(--color-charcoal)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: "var(--color-charcoal)",
              transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden"
        style={{ height: 0, opacity: 0, backgroundColor: "var(--color-warm-white)" }}
      >
        <ul className="flex flex-col px-6 pb-6 pt-2 gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-base font-medium py-2 border-b"
                style={{
                  color: "var(--color-charcoal)",
                  borderColor: "var(--color-cream-dark)",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://app.peppy.cool"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 rounded-full text-sm font-medium text-white mt-2"
              style={{ backgroundColor: "var(--color-terracotta)" }}
            >
              Réserver un cours
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
