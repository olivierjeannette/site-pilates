import Link from "next/link";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/cours", label: "Cours" },
  { href: "/planning", label: "Planning" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{ backgroundColor: "var(--color-bg)", borderTop: "1px solid var(--color-ink-200)" }}
    >
      <div className="container-app py-12">
        <div className="max-w-md mx-auto text-center">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
            <span
              className="flex items-center justify-center rounded-full"
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
            <div className="leading-none text-left">
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

          {/* Nav */}
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors"
                  style={{ color: "var(--color-ink-500)" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-xs" style={{ color: "var(--color-ink-500)" }}>
            <a href="tel:+33627508536" className="hover:underline">
              06 27 50 85 36
            </a>
            <span>·</span>
            <a href="mailto:pilatesbyskali@gmail.com" className="hover:underline">
              pilatesbyskali@gmail.com
            </a>
            <span>·</span>
            <a
              href="https://www.instagram.com/pilates_by_skali"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @pilates_by_skali
            </a>
          </div>

          <p className="text-xs" style={{ color: "var(--color-ink-400)" }}>
            63 rue Jean Baptiste Lafosse, 53000 Laval
          </p>

          <p className="text-xs mt-6 pt-6" style={{ color: "var(--color-ink-400)", borderTop: "1px solid var(--color-ink-200)" }}>
            © {new Date().getFullYear()} Studio Pilates by Skàli
          </p>
        </div>
      </div>
    </footer>
  );
}
