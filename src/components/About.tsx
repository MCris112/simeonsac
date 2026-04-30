export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="cri-title mb-12">
          <h2 className="text-5xl font-bold text-main text-center uppercase">NOSOTROS</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {/* Mission */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-48 h-48 flex-shrink-0">
                <img
                  src="/images/mision.png"
                  alt="Misión"
                  className="w-full h-full object-cover border border-gray-300"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl text-main-2 font-bold mb-2">Misión</p>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Fortalecer nuestra relación con nuestros clientes brindándoles
                  la seguridad, calidad en nuestros servicios de aire
                  acondicionado y refrigeración.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-48 h-48 flex-shrink-0">
                <img
                  src="/images/vision.jpg"
                  alt="Visión"
                  className="w-full h-full object-cover border border-gray-300"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl text-main-2 font-bold mb-2">Visión</p>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Ser líderes y reconocidos como empresa competitiva en el rubro,
                  mediante las soluciones integrales que les brindamos de
                  acuerdo a sus necesidades, logrando así una excelencia en el
                  servicio.
                </p>
              </div>
            </div>

            {/* Team */}
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-48 h-48 flex-shrink-0">
                <img
                  src="/images/equipo.jpg"
                  alt="Equipo"
                  className="w-full h-full object-cover border border-gray-300"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl text-main-2 font-bold mb-2">Equipo Humano</p>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Contamos con personal altamente calificado siempre dispuesto a
                  obtener la plena satisfacción de nuestros clientes.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full h-[475px] mb-6 overflow-hidden">
              <img
                src="/images/insta_equipo_aire_01.jpg"
                alt="Objetivo"
                className="w-full h-full object-cover object-top border border-gray-300"
              />
            </div>
            <div className="text-center w-2/3">
              <p className="text-4xl text-main-2 font-bold mb-2 uppercase">NUESTRO OBJETIVO</p>
              <p className="text-gray-800 text-sm leading-relaxed">
                Es en brindarle al cliente calidad ambiental, seguridad,
                confianza, y garantía en nuestros servicios como en nuestros
                productos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
