// app/components/layout/SiteFooter.tsx
import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer id="footer" className="site-footer">
      <div className="page-shell footer-logo-only">
        <Image
          src="/logo/melivan.logo.png"
          alt="Melivan"
          width={1200}
          height={320}
          className="footer-logo-big"
          priority={false}
        />
      </div>
    </footer>
  );
}