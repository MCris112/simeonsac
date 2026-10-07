import { HiArrowRight } from "react-icons/hi";

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100dvh] items-center overflow-hidden bg-ink">
      <img
        src="/images/home_img.jpg"
        alt="Técnico realizando mantenimiento de aire acondicionado"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/75" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-ink to-transparent" />

      <div className="container-site flex flex-col items-center pb-16 pt-32 text-center">
        <h1 className="font-righteous text-5xl leading-none text-white sm:text-7xl md:text-8xl lg:text-9xl">
          SIMEON <span className="text-accent">SAC</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href="#servicios" className="btn-primary">
            Información <HiArrowRight size={18} />
          </a>
          <a href="#contacto" className="btn-ghost">
            Contacto
          </a>
        </div>

        <dl className="mt-16 grid w-full max-w-3xl grid-cols-3 divide-x divide-white/15 border-t border-white/15 pt-6 md:mt-24">
          {[
            ["Refrigeración", "Comercial e industrial"],
            ["Aire acondicionado", "Split, ductos y chillers"],
            ["Mantenimiento", "Preventivo y correctivo"],
          ].map(([title, text]) => (
            <div key={title} className="px-3">
              <dt className="text-sm font-semibold text-white md:text-base">{title}</dt>
              <dd className="mt-1 text-xs text-white/55 md:text-sm">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
