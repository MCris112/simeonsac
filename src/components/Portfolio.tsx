import { useCallback, useEffect, useState } from "react";
import { HiArrowLeft, HiArrowRight, HiX } from "react-icons/hi";

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
    desc: "Lorem ipsum dolor sit amet consectetur.",
  },
];

type Project = (typeof projects)[number];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentSlide(0);
  };

  const closeModal = useCallback(() => setSelectedProject(null), []);

  const total = selectedProject?.gallery.length ?? 0;
  const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % Math.max(total, 1)), [total]);
  const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev - 1 + total) % Math.max(total, 1)), [total]);

  useEffect(() => {
    if (!selectedProject) return;
    const { body } = document;
    body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedProject, closeModal, nextSlide, prevSlide]);

  return (
    <section id="portafolio" className="section bg-white">
      <div className="container-site">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <h2 className="heading">Trabajos recientes</h2>
          <p className="lead max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => openModal(project)}
              className="group relative block aspect-[4/5] overflow-hidden rounded-sm bg-ink text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div>
                  <p className="text-lg font-semibold leading-snug text-white">{project.title}</p>
                  <p className="mt-1 text-sm text-white/60">
                    {project.gallery.length} {project.gallery.length === 1 ? "foto" : "fotos"}
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-white/10 text-white transition-colors group-hover:bg-accent group-hover:text-ink">
                  <HiArrowRight size={18} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
          onClick={closeModal}
        >
          <div className="relative flex w-full max-w-5xl flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-start justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white md:text-2xl">{selectedProject.title}</h3>
                {selectedProject.desc && <p className="mt-1 text-sm text-white/60">{selectedProject.desc}</p>}
              </div>
              <button
                onClick={closeModal}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-white/10 text-white hover:bg-white/20"
                aria-label="Cerrar"
              >
                <HiX size={20} />
              </button>
            </div>

            <div className="relative aspect-[4/3] max-h-[70vh] w-full overflow-hidden rounded-sm bg-black md:aspect-[16/10]">
              <img
                key={currentSlide}
                src={selectedProject.gallery[currentSlide]}
                alt={`${selectedProject.title} – foto ${currentSlide + 1}`}
                className="h-full w-full object-contain"
              />

              {total > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm bg-ink/60 text-white hover:bg-ink"
                    aria-label="Foto anterior"
                  >
                    <HiArrowLeft size={20} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm bg-ink/60 text-white hover:bg-ink"
                    aria-label="Foto siguiente"
                  >
                    <HiArrowRight size={20} />
                  </button>
                </>
              )}
            </div>

            {total > 1 && (
              <div className="mt-4 flex items-center justify-between gap-4">
                <div className="flex gap-2 overflow-x-auto">
                  {selectedProject.gallery.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-14 w-20 shrink-0 overflow-hidden rounded-sm border-2 transition-opacity ${
                        i === currentSlide ? "border-accent" : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                      aria-label={`Ver foto ${i + 1}`}
                    >
                      <img src={src} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
                <p className="shrink-0 text-sm tabular-nums text-white/60">
                  {currentSlide + 1} / {total}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
