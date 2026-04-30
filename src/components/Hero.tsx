export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <img
        src="/images/home_img.jpg"
        alt="Digenda sac background top"
        className="absolute inset-0 w-full h-full object-cover brightness-[30%]"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-6xl md:text-9xl text-title-light font-bold mb-6 animate-fadeIn">
          DIGIENDA SAC
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-bg-light mb-8 animate-fadeIn delay-300">
          Somos una empresa con más de 12 años especializada en REFRIGERACION -
          AIRE ACONDICIONADO, dedicada a ofrecer nuestros servicios en
          suministro, Fabricación, instalación, mantenimiento preventivo -
          correctivo y Reparación.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fadeIn delay-500">
          <a href="#servicios" className="cri-btn">
            Información
          </a>
          <a href="#contacto" className="cri-btn">
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}
