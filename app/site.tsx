import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#e6ddd2] bg-[#f7f4ef]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="font-[family-name:var(--font-display)] text-2xl tracking-tight">
          Noted
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#8a3d2f]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#e6ddd2] px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-[#5e564e] sm:flex-row sm:justify-between">
        <p className="font-[family-name:var(--font-display)] text-xl text-[#1b1714]">Noted</p>
        <p>Reviews of rooms, plates, and shelves.</p>
      </div>
    </footer>
  );
}
