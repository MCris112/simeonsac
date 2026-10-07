const partners = [
  { src: "/images/partners/brand-1.png", name: "LG" },
  { src: "/images/partners/brand-2.png", name: "Carrier" },
  { src: "/images/partners/brand-3.png", name: "York" },
  { src: "/images/partners/brand-4.png", name: "Midea" },
  { src: "/images/partners/brand-5.png", name: "Cold Point" },
  { src: "/images/partners/brand-6.png", name: "Danfoss" },
  { src: "/images/partners/brand-7.png", name: "Full Gauge" },
  { src: "/images/partners/brand-8.png", name: "Quality" },
];

export default function Partners() {
  return (
    <section id="trabajosCon" className="relative isolate overflow-hidden bg-ink">
      <img
        src="/images/bg_confia_nosotros.png"
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15"
      />

      <div className="container-site section">
        <div className="max-w-2xl">
          <h2 className="heading text-white">Confía en nosotros</h2>
          <p className="lead mt-5 text-white/65">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-4">
          {partners.map((partner) => (
            <li key={partner.src} className="flex h-28 items-center justify-center bg-ink/80 p-6 md:h-32">
              <img
                src={partner.src}
                alt={partner.name}
                loading="lazy"
                className="max-h-12 max-w-[150px] object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
