export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="cri-title mb-4">
          <h2 className="text-5xl font-bold text-main text-center uppercase">CONTACTO</h2>
        </div>
        <p className="text-center text-desc-dark tracking-widest text-sm mb-12 uppercase">
          Ingresa tus datos y un representante lo contactara pronto
        </p>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-xl shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  placeholder="Su nombre"
                  className="w-full px-4 py-3 border border-main rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Correo</label>
                <input
                  type="email"
                  placeholder="nombre@example.com"
                  className="w-full px-4 py-3 border border-main rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-main rounded-lg focus:outline-none focus:ring-2 focus:ring-main"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full cri-btn bg-main text-white py-4 rounded-lg font-bold hover:bg-main-dark transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
            <div className="mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                fill="none"
                viewBox="0 0 314 314"
              >
                <path
                  fill="#B0BDC6"
                  d="M3.054 257.043l90.405-95.78L24.067 60.106c-3.42 4.398-5.864 10.751-6.352 17.104L.122 238.962c-.489 6.842.489 13.194 2.932 18.081zM306.523 43.003L175.557 166.149l103.111 141.228c5.864-4.887 9.774-12.217 10.751-21.502l23.457-220.393c.977-9.285-1.955-17.104-6.353-22.48z"
                />
                <path
                  fill="#CAD5DD"
                  d="M125.712 210.62l-32.253-49.357-90.405 95.781c1.955 4.398 5.376 7.33 9.285 8.307l248.248 47.402c6.841 1.466 13.194-.977 18.081-5.375L175.557 166.15l-49.845 44.47z"
                />
                <path
                  fill="#DFE9EF"
                  d="M289.908 35.673L34.818 53.265c-3.909.49-7.818 2.932-10.75 6.842L93.46 161.263l32.252 49.356 49.845-44.469L306.523 43.003c-4.399-4.887-10.263-7.819-16.615-7.33z"
                />
                <path
                  fill="#ED4C5C"
                  d="M132.554 159.309L75.379 73.79l23.945-.489 1.466-69.88L174.58 0l-1.955 74.767 41.049.978-81.12 83.564z"
                />
              </svg>
            </div>
            <p className="text-gray-600 mb-4">Tambíen puedes contactarnos a travez de:</p>
            <a
              href="https://wa.me/51980100743"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-btn-bg font-bold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <span>+51 980 100 743</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
