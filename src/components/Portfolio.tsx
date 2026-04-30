import { useState } from "react";

const projects = [
  {
    id: "proyecto00",
    title: "Instalación de extracción de aire",
    image: "/images/insta_extra_aire_00.jpg",
    gallery: ["/images/insta_extra_aire_00.jpg"],
    desc: "",
  },
  {
    id: "proyecto01",
    title: "Instalación de equipos de aire acondicionado",
    image: "/images/insta_equipo_aire_01.jpg",
    gallery: ["/images/insta_equipo_aire_00.jpg", "/images/insta_equipo_aire_01.jpg"],
    desc: "",
  },
  {
    id: "proyecto02",
    title: "Reparación de chiller",
    image: "/images/repa_chiller_00.jpg",
    gallery: ["/images/repa_chiller_00.jpg", "/images/repa_chiller_01.jpg"],
    desc: "",
  },

  {
    id: "proyecto03",
    title: "Instalación de motor compresor a cámara de conservación",
    image: "/images/insta_motor_compression_00.jpg",
    gallery: [
      "/images/insta_motor_compression_00.jpg",
      "/images/insta_motor_compression_01.jpg",
      "/images/insta_motor_compression_02.jpg",
    ],
    desc: "",
  },
  {
    id: "proyecto04",
    title: "Instalación de aire acondicionado para data center",
    image: "/images/insta_aire_center_00.jpg",
    gallery: [
      "/images/insta_aire_center_00.jpg",
      "/images/insta_aire_center_01.jpg",
      "/images/insta_aire_center_02.jpg",
    ],
    desc: "",
  },
  {
    id: "proyecto05",
    title: "Extras",
    image: "/images/extra_00.jpg",
    gallery: [
      "/images/extra_00.jpg",
      "/images/extra_01.jpg",
      "/images/extra_02.jpg",
      "/images/extra_03.jpg",
      "/images/extra_04.jpg",
      "/images/extra_05.jpg",
    ],
    desc: "Otras imágenes dentro del trabajo.",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[0]>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setCurrentSlide(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) => (prev + 1) % selectedProject.gallery.length);
    }
  };

  const prevSlide = () => {
    if (selectedProject) {
      setCurrentSlide((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
    }
  };

  return (
    <section id="portafolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="cri-title mb-12">
          <h2 className="text-5xl font-bold text-main text-center">TRABAJOS RECIENTES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="cri-card cursor-pointer group"
            >
              <div className="overflow-hidden aspect-square">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover brightness-[60%] group-hover:brightness-90 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-xl text-white font-semibold mb-2">{project.title}</p>
                <p className="text-sm text-gray-300">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90">
          <div className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl flex flex-col md:flex-row">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-[110] bg-main text-white px-4 py-2 rounded hover:bg-main-dark transition-colors"
            >
              Cerrar Ventana
            </button>

            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-3xl text-orange-600 font-bold mb-4">{selectedProject.title}</h3>
              <p className="text-gray-600">{selectedProject.desc}</p>
            </div>

            <div className="md:w-1/2 relative bg-main-dark min-h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedProject.gallery[currentSlide]}
                  alt={`Slide ${currentSlide}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {selectedProject.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 border border-white hover:bg-black/60"
                  >
                    ❮
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 border border-white hover:bg-black/60"
                  >
                    ❯
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
