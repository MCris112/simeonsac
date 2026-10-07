import { HiArrowRight } from "react-icons/hi";

const services = [
  {
    title: "Instalaciones y servicios de mantenimiento",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Incluimos",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Tenemos la capacidad para realizar",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Montaje de Instalación",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  },
  {
    title: "Le ofrecemos también",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
  },
  {
    title: "Sistemas de aire acondicionado",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section bg-white">
      <div className="container-site grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="heading">Servicios</h2>
          <p className="lead mt-5 max-w-sm">
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.
          </p>
          <img
            src="/images/insta_motor_compression_01.jpg"
            alt="Compresor industrial instalado en planta"
            loading="lazy"
            className="mt-10 hidden aspect-[4/3] w-full rounded-sm object-cover lg:block"
          />
          <a href="#contacto" className="btn-dark mt-8">
            Solicitar una visita <HiArrowRight size={18} />
          </a>
        </div>

        <ul className="border-t border-line">
          {services.map((service) => (
            <li key={service.title} className="group border-b border-line py-8">
              <h3 className="text-xl font-semibold leading-snug transition-colors group-hover:text-main-dark md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">{service.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
