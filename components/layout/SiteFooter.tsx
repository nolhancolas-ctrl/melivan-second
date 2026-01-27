// app/components/layout/SiteFooter.tsx
export default function SiteFooter() {
  return (
    <footer className="page-shell mt-12 md:mt-16 mb-4 pt-10 pb-6 footer-border-top">
      <div className="grid gap-10 md:grid-cols-3 md:items-start">
        {/* Colonne 1 : logo + adresse */}
        <div className="space-y-4">
          <div className="text-sm tracking-[0.3em] uppercase text-zinc-500">
            MELIVAN
          </div>
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-100">
              Côte d&apos;Azur, Alpes-Maritimes
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              10 chemin de la tête de lion
              <br />
              06130 Grasse, France
            </p>
          </div>
          <p className="text-xs text-zinc-500">
            © 2026 Melivan. All rights reserved.
          </p>
        </div>

        {/* Colonne 2 : navigation */}
        <div className="space-y-3 text-sm">
          <p className="kicker text-zinc-500">NAVIGATION</p>
          <ul className="space-y-1.5 text-zinc-300">
            <li>
              <a href="#projects" className="hover:text-zinc-50 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-zinc-50 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : social */}
        <div className="space-y-3 text-sm">
          <p className="kicker text-zinc-500">SOCIAL</p>
          <ul className="space-y-1.5 text-zinc-300">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-50 transition"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-50 transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-50 transition"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}