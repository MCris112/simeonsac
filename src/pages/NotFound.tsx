import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[100dvh] items-center overflow-hidden bg-ink">
      <img
        src="/images/home_img.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
      />
      <div className="container-site py-32">
        <h1 className="font-righteous text-8xl leading-none text-white md:text-9xl">404</h1>
        <p className="mt-6 text-xl text-white/75">Página no encontrada</p>
        <Link to="/" className="btn-primary mt-10">
          <HiArrowLeft size={18} /> Volver al Inicio
        </Link>
      </div>
    </section>
  );
}
