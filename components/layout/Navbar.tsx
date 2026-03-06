// app/components/layout/Navbar.tsx
import Image from "next/image";

const navItems = [
  { label: "Header", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "Book a call", href: "#contact" },
  { label: "Footer", href: "#footer" },
];

export default function Navbar() {
  return (
    <div className="page-shell nav-row">
      <a href="#top" className="nav-brand" aria-label="Go to top">
        <Image
          src="/logo/melivan.logo.png"
          alt="Melivan"
          width={240}
          height={60}
          priority
          className="nav-logo"
        />
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>

      <button type="button" aria-label="Open menu" className="nav-menu-btn">
        <span className="nav-hamburger" aria-hidden />
      </button>
    </div>
  );
}