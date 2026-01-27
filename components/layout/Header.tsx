// app/components/layout/Header.tsx
const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-900/80 bg-[#09090b]/90 backdrop-blur-xl">
      <div className="page-shell flex h-16 items-center justify-between">
        <a
          href="#top"
          className="text-xl font-semibold tracking-[0.18em] uppercase text-zinc-50"
        >
          Melivan
        </a>
        <nav className="flex items-center gap-8 text-sm text-zinc-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-zinc-50 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}