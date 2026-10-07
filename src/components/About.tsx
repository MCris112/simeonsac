const pillars = [
  {
    title: "Misión",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
  },
  {
    title: "Visión",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.",
  },
  {
    title: "Equipo humano",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="section bg-surface">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative pb-16 pr-10 sm:pr-24">
          <img
            src="/images/insta_equipo_aire_01.jpg"
            alt="Técnicos instalando equipos de aire acondicionado en una azotea"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover"
          />
          <img
            src="/images/equipo.jpg"
            alt="Técnico revisando un tablero eléctrico"
            loading="lazy"
            className="absolute bottom-0 right-0 aspect-square w-1/2 rounded-sm border-[6px] border-surface object-cover"
          />
        </div>

        <div>
          <h2 className="heading">Nosotros</h2>

          <h3 className="mt-8 text-lg font-semibold">Nuestro objetivo</h3>
          <p className="lead mt-3">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum sed ut perspiciatis.
          </p>

          <dl className="mt-10 border-t border-line">
            {pillars.map((item) => (
              <div key={item.title} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[160px_1fr] sm:gap-8">
                <dt className="font-semibold text-main-dark">{item.title}</dt>
                <dd className="text-sm leading-relaxed text-muted">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
