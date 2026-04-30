export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-main-dark pt-28 pb-12 text-desc-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <a href="#" className="text-4xl font-bold text-white no-underline">
              Digenda SAC
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#home" className="hover:bg-btn-bg hover:text-white px-4 py-2 rounded-lg transition-all duration-300">
              Inicio
            </a>
            <a href="#nosotros" className="hover:bg-btn-bg hover:text-white px-4 py-2 rounded-lg transition-all duration-300">
              Nosotros
            </a>
            <a href="#servicios" className="hover:bg-btn-bg hover:text-white px-4 py-2 rounded-lg transition-all duration-300">
              Servicios
            </a>
            <a href="#contacto" className="hover:bg-btn-bg hover:text-white px-4 py-2 rounded-lg transition-all duration-300">
              Contacto
            </a>
          </div>
        </div>

        <hr className="border-gray-600 mb-12" />

        <div className="flex justify-center gap-8 mb-12">
          {/* Social icons could go here */}
          <a href="#" className="w-16 h-16 bg-main-2 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="#" className="w-16 h-16 bg-main-2 rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>

        <div className="text-center text-sm text-gray-500">
          <a
            href="http://darkredgm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            &copy; {currentYear} Darkredgm.com
          </a>
        </div>
      </div>
    </footer>
  );
}
