import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative pb-24 md:pb-12"
      style={{ backgroundColor: "var(--color-ink-900)", color: "rgba(255,255,255,0.7)" }}
    >
      <div className="container-app pt-16 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="flex items-center justify-center rounded-full"
                style={{
                  width: "44px",
                  height: "44px",
                  backgroundColor: "var(--color-sage-500)",
                  color: "white",
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  fontWeight: 500,
                }}
              >
                S
              </span>
              <div className="leading-none">
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "24px",
                    color: "white",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Skàli
                </p>
                <p
                  className="text-[10px] mt-1"
                  style={{ color: "var(--color-sage-200)", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 500 }}
                >
                  Studio Pilates
                </p>
              </div>
            </div>
            <p className="text-sm max-w-sm leading-relaxed mb-6">
              Un espace bienveillant pour bouger, respirer et se reconnecter à son corps. Tous niveaux bienvenus à Laval.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/pilates_by_skali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                aria-label="Instagram"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="mailto:pilatesbyskali@gmail.com"
                className="flex items-center justify-center w-10 h-10 rounded-full transition-colors"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                aria-label="Email"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-sage-200)" }}
            >
              Navigation
            </p>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Accueil" },
                { href: "/cours", label: "Nos cours" },
                { href: "/planning", label: "Planning" },
                { href: "/tarifs", label: "Tarifs" },
                { href: "/faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--color-sage-200)" }}
            >
              Contact
            </p>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="https://maps.google.com/?q=63+rue+Jean+Baptiste+Lafosse+53000+Laval"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm hover:text-white transition-colors"
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ marginTop: "3px", color: "var(--color-sage-300)" }} className="flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span>63 rue Jean Baptiste Lafosse<br />53000 Laval</span>
                </a>
              </li>
              <li>
                <a href="tel:+33627508536" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color: "var(--color-sage-300)" }} className="flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  06 27 50 85 36
                </a>
              </li>
              <li>
                <a href="mailto:pilatesbyskali@gmail.com" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color: "var(--color-sage-300)" }} className="flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  pilatesbyskali@gmail.com
                </a>
              </li>
            </ul>
            <a
              href="https://app.peppy.cool"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "12px 20px", fontSize: "13px" }}
            >
              Réserver via Peppy
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.4)" }}
        >
          <p>© {new Date().getFullYear()} Studio Pilates by Skàli · Laval</p>
          <p>Conçu avec ♥ pour Eva Dussurgey</p>
        </div>
      </div>
    </footer>
  );
}
