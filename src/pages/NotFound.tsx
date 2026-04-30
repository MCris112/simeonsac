import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src="/images/home_img.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover brightness-[30%]"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-9xl text-title-light font-bold mb-6">404</h1>
        <p className="text-2xl text-bg-light mb-8">Página no encontrada</p>
        <Link to="/" className="cri-btn">
          Volver al Inicio
        </Link>
      </div>
    </section>
  );
}
