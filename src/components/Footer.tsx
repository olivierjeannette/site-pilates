import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-charcoal)", color: "var(--color-cream)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3
              className="text-3xl font-semibold mb-3"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-sage-light)" }}
            >
              Skàli
            </h3>
            <p className="text-sm mb-1" style={{ color: "rgba(245,240,232,0.6)", letterSpacing: "0.15em" }}>
              STUDIO PILATES
            </p>
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.75)" }}>
              Un espace bienveillant pour bouger, respirer et se reconnecter à son corps. Tous niveaux bienvenus.
            </p>
            <a
              href="https://www.instagram.com/pilates_by_skali"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm transition-colors hover:opacity-80"
              style={{ color: "var(--color-sage-light)" }}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @pilates_by_skali
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--color-sage-light)" }}>
              Navigation
            </h4>
            <ul className="space-y-3">
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
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: "rgba(245,240,232,0.75)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--color-sage-light)" }}>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--color-sage-light)", marginTop: "2px" }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </span>
                <span className="text-sm" style={{ color: "rgba(245,240,232,0.75)" }}>
                  63 rue Jean Baptiste Lafosse<br />53000 Laval
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span style={{ color: "var(--color-sage-light)" }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </span>
                <a href="tel:+33627508536" className="text-sm hover:opacity-80 transition-opacity" style={{ color: "rgba(245,240,232,0.75)" }}>
                  +33 6 27 50 85 36
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span style={{ color: "var(--color-sage-light)" }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </span>
                <a href="mailto:pilatesbyskali@gmail.com" className="text-sm hover:opacity-80 transition-opacity" style={{ color: "rgba(245,240,232,0.75)" }}>
                  pilatesbyskali@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(245,240,232,0.1)" }}>
              <a
                href="https://app.peppy.cool"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "var(--color-terracotta)" }}
              >
                Réserver en ligne
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs"
          style={{ borderTop: "1px solid rgba(245,240,232,0.1)", color: "rgba(245,240,232,0.4)" }}
        >
          <p>© {new Date().getFullYear()} Studio Pilates by Skàli — Laval</p>
          <p>Coach : Eva Dussurgey</p>
        </div>
      </div>
    </footer>
  );
}
