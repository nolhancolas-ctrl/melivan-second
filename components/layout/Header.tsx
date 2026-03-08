// app/components/layout/Header.tsx
import Image from "next/image";

export default function Header() {
  return (
    <header className="site-header">
      <div className="page-shell header-row">
        <a href="#top" className="header-brand" aria-label="Go to top">
          <Image
            src="/logo/melivan.logo.png"
            alt="Melivan"
            width={240}
            height={60}
            priority
            className="header-logo"
          />
        </a>
      </div>
    </header>
  );
}