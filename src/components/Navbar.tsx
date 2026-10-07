import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Logo from "./Logo";

const navLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Trabajos", href: "#portafolio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solid = isScrolled || isMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-ink/95 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="container-site flex h-[72px] items-center justify-between gap-6" aria-label="Navegación principal">
        <a href="#home" className="font-righteous text-xl" aria-label="Simeon SAC – Inicio">
          <Logo />
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contacto" className="btn-primary hidden sm:inline-flex h-10 px-5">
            Contacto
          </a>
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-sm text-white hover:bg-white/10"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden overflow-hidden border-t border-white/10 bg-ink transition-[max-height] duration-300 ${
          isMenuOpen ? "max-h-96" : "max-h-0 border-transparent"
        }`}
      >
        <ul className="container-site flex flex-col py-4">
          {[...navLinks, { name: "Contacto", href: "#contacto" }].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-lg font-medium text-white/80 hover:text-white"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
