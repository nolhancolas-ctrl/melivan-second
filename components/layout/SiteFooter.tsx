// app/components/layout/SiteFooter.tsx
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer id="footer" className="site-footer">
      <div className="page-shell footer-wrap">
        {/* Logo très grand */}
        <div className="footer-logo-row">
          <Image
            src="/logo/melivan.logo.png"
            alt="Melivan"
            width={1200}
            height={320}
            className="footer-logo-big"
            priority={false}
          />
        </div>

        {/* Colonnes */}
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-kicker">Côte d&apos;Azur, FR</div>
            <div className="footer-strong">Grasse</div>
            <div className="footer-muted">
              10 chemin de la tête de lion
              <br />
              06130 Grasse, France
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-kicker">Remote</div>
            <div className="footer-strong">Worldwide</div>
            <div className="footer-muted">
              <a className="footer-link" href="mailto:hello@melivan.dev">
                hello@melivan.dev
              </a>
              <br />
              Available worldwide
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-kicker">Navigation</div>
            <ul className="footer-list">
              <li>
                <a className="footer-link" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="footer-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-kicker">Social</div>
            <ul className="footer-list">
              <li>
                <a
                  className="footer-link"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram <span aria-hidden>↗</span>
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <span aria-hidden>↗</span>
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube <span aria-hidden>↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Melivan. All rights reserved.</div>
          <div className="footer-bottom-links">
            <a className="footer-link" href="#">
              Privacy Policy
            </a>
            <a className="footer-link" href="#">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}