import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";

const links = [
  { name: "Inicio", href: "#home" },
  { name: "Trabajos", href: "#portafolio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/60">
      <div className="container-site grid gap-10 py-16 md:grid-cols-[1.5fr_1fr_auto] md:gap-16">
        <div>
          <a href="#home" className="font-righteous text-2xl" aria-label="Simeon SAC – Inicio">
            <Logo markClassName="w-10 h-10" />
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>

        <nav aria-label="Enlaces del pie de página">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-2">
          <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-ink">
            <FaFacebookF size={16} />
          </a>
          <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-ink">
            <FaInstagram size={16} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Simeon SAC. Todos los derechos reservados.</p>
          <p>
            Desarrollado por{" "}
            <a href="https://www.darkredgm.com" target="_blank" rel="noopener" className="text-white/80 hover:text-white">
              Darkredgm
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
