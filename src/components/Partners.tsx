const partners = [
  "/images/partners/brand-1.png",
  "/images/partners/brand-2.png",
  "/images/partners/brand-3.png",
  "/images/partners/brand-4.png",
  "/images/partners/brand-5.png",
  "/images/partners/brand-6.png",
  "/images/partners/brand-7.png",
  "/images/partners/brand-8.png",
];

export default function Partners() {
  return (
    <section id="trabajosCon" className="relative w-full overflow-hidden">
      <div className="relative min-h-[500px]">
        <img
          src="/images/bg_confia_nosotros.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover brightness-[20%]"
        />
        <div className="relative z-10 py-20 px-4 container mx-auto text-center">
          <h2 className="text-6xl md:text-[8rem] font-bold text-white mb-4">
            CONFÍA EN NOSOTROS
          </h2>
          <p className="text-xl md:text-2xl text-desc-light mb-12">
            Nuestros clientes respaldan nuestra calidad de trabajo.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="w-64 h-24 p-5 bg-white/20 rounded-xl backdrop-blur-sm hover:scale-110 transition-transform duration-300 flex items-center justify-center"
              >
                <img
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
