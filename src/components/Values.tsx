const values = [
  "Responsabilidad",
  "Enfoque al cliente",
  "Trabajo en equipo",
  "Compromiso",
  "Visión de largo plazo",
  "Flexibilidad",
];

export default function Values() {
  return (
    <section id="valores" className="section bg-white">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div>
          <h2 className="heading">Valores</h2>
          <p className="lead mt-5 max-w-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
          </p>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <li
              key={value}
              className="group relative flex min-h-32 items-end bg-white p-6 transition-colors hover:bg-surface"
            >
              <span className="absolute left-0 top-0 h-[3px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              <p className="text-lg font-semibold leading-snug">{value}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
