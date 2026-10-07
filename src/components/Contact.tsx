import { useState, type FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const EMAIL = "contacto@example.com";

const details = [
  { label: "Correo", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "Teléfono", value: "+51 900 000 000", href: "tel:+51900000000" },
  { label: "Dirección", value: "Av. Ejemplo 123, Lima" },
  { label: "Horario", value: "Lunes a sábado, 8:00 a 18:00" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Consulta de ${form.name}`;
    const body = `${form.message}\n\n${form.name} – ${form.email}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contacto" className="section bg-surface">
      <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="heading">Contacto</h2>
          <p className="lead mt-5 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do.
          </p>

          <dl className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {details.map((item) => (
              <div key={item.label}>
                <dt className="text-sm text-muted">{item.label}</dt>
                <dd className="mt-1 font-semibold">
                  {item.href ? (
                    <a href={item.href} className="hover:text-main-dark">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="https://wa.me/51900000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-10 bg-[#1FAF54] text-white hover:bg-[#178F44]"
          >
            <FaWhatsapp size={20} /> Escríbenos por WhatsApp
          </a>
        </div>

        <form onSubmit={onSubmit} className="rounded-sm border border-line bg-white p-6 sm:p-10">
          <div className="grid gap-5">
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Nombre</span>
              <input type="text" required value={form.name} onChange={update("name")} placeholder="Su nombre" className="field" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Correo</span>
              <input type="email" required value={form.email} onChange={update("email")} placeholder="nombre@example.com" className="field" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium">Mensaje</span>
              <textarea
                rows={5}
                required
                value={form.message}
                onChange={update("message")}
                placeholder="Cuéntenos qué necesita"
                className="field h-auto resize-y py-3"
              />
            </label>
          </div>
          <button type="submit" className="btn-dark mt-8 w-full">
            Enviar <HiArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
