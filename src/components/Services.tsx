const servicesData = [
  {
    title: "Instalaciones y servicios de mantenimiento",
    desc: "Para sistemas de aire acondicionado, tanto en expansión directa como en agua helada.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        fill="none"
        viewBox="0 0 203 180"
      >
        <path
          fill="white"
          d="M33.77 45c4.453 0 8.806-1.32 12.508-3.792A22.487 22.487 0 0049.69 6.59a22.518 22.518 0 00-24.535-4.877A22.51 22.51 0 0015.05 10a22.49 22.49 0 002.8 28.41A22.52 22.52 0 0033.77 45zm0 61.903a15.502 15.502 0 014.799-11.25L63.942 71.72c.58-.545 1.327-.812 1.974-1.255a22.471 22.471 0 00-8.257-10.318 22.492 22.492 0 00-12.632-3.896H22.514a22.52 22.52 0 00-15.92 6.59A22.493 22.493 0 000 78.75v33.75c0 2.984 1.186 5.845 3.297 7.955a11.26 11.26 0 007.96 3.295v45c0 2.984 1.186 5.845 3.297 7.955a11.26 11.26 0 007.96 3.295h22.513a11.26 11.26 0 007.96-3.295 11.246 11.246 0 003.297-7.955v-33.887l-17.715-16.71a15.5 15.5 0 01-4.799-11.25zM168.852 45c4.453 0 8.806-1.32 12.508-3.792a22.5 22.5 0 009.574-23.098 22.496 22.496 0 00-6.162-11.52 22.52 22.52 0 00-24.535-4.877A22.511 22.511 0 00150.133 10a22.489 22.489 0 002.8 28.41A22.519 22.519 0 00168.852 45zm11.257 11.25h-22.513a22.49 22.49 0 00-12.631 3.895 22.47 22.47 0 00-8.258 10.315c.647.447 1.407.703 1.977 1.262l25.37 23.928a15.59 15.59 0 013.547 17.364 15.594 15.594 0 01-3.547 5.136l-17.715 16.716v33.884c0 2.984 1.186 5.845 3.297 7.955a11.259 11.259 0 007.96 3.295h22.513c2.986 0 5.849-1.185 7.96-3.295a11.247 11.247 0 003.297-7.955v-45c2.986 0 5.849-1.185 7.96-3.295a11.247 11.247 0 003.297-7.955V78.75c0-5.967-2.372-11.69-6.594-15.91a22.521 22.521 0 00-15.92-6.59zm-23.78 47.58l-25.37-23.927a4.222 4.222 0 00-7.134 3.066v12.656H78.798V82.969a4.217 4.217 0 00-2.552-3.89 4.224 4.224 0 00-4.582.82l-25.37 23.931a4.36 4.36 0 000 6.142l25.37 23.931a4.222 4.222 0 007.134-3.073v-12.705h45.027v12.705a4.21 4.21 0 00.69 2.33 4.214 4.214 0 004.276 1.842 4.22 4.22 0 002.168-1.099l25.37-23.931a4.356 4.356 0 000-6.142z"
        />
      </svg>
    ),
  },
  {
    title: "Incluimos",
    desc: "Servicio de instalación, mantenimiento preventivo, mantenimiento correctivo y automatización de equipos.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        fill="none"
        viewBox="0 0 180 180"
      >
        <path
          fill="white"
          d="M150.636 14.873L58.92 106.589 29.174 76.843 0 106.017l29.746 29.746 29.364 29.364 29.174-29.174L180 44.237l-29.364-29.364z"
        />
      </svg>
    ),
  },
  {
    title: "Tenemos la capacidad para realizar",
    desc: "Ventilación forzada comerciales e industriales, y cámaras de refrigeración comercial e industrial.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        fill="none"
        viewBox="0 0 180 180"
      >
        <path
          fill="white"
          d="M90 112.5c-33.15 0-60 13.425-60 30v15h120v-15c0-16.575-26.85-30-60-30zm-30-45a30 30 0 1060 0H60zM86.25 15c-2.25 0-3.75 1.575-3.75 3.75v22.5H75V22.5s-16.875 6.45-16.875 28.125c0 0-5.625 1.05-5.625 9.375h75c-.375-8.325-5.625-9.375-5.625-9.375C121.875 28.95 105 22.5 105 22.5v18.75h-7.5v-22.5c0-2.175-1.425-3.75-3.75-3.75h-7.5z"
        />
      </svg>
    ),
  },
  {
    title: "Montaje de Instalación",
    desc: "Mini split, split decorativos, piso techo, ductos y compactos, chillers, equipos de refrigeración.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        fill="none"
        viewBox="0 0 180 180"
      >
        <path
          fill="white"
          d="M61.275 42.75L7.5 78.6v78.9H45v-60h30v60h37.5V76.875L61.275 42.75z"
        />
        <path
          fill="white"
          d="M75 22.5v11.325L90 43.8l12.975 8.7h9.525v6.375l15 10.05V82.5h15v15h-15v15h15v15h-15v30h45v-135H75zm67.5 45h-15v-15h15v15z"
        />
      </svg>
    ),
  },
  {
    title: "Le ofrecemos también",
    desc: "Suministro de instalación de Equipos y repuestos de aire acondicionado.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        fill="none"
        viewBox="0 0 180 180"
      >
        <path
          fill="white"
          d="M126 18c0-9.9 8.1-18 18-18s18 8.1 18 18-8.1 18-18 18-18-8.1-18-18zm43.02 32.22C161.37 46.89 153 45 144 45c-6.03 0-11.79.9-17.28 2.52 5.22 4.95 8.28 11.88 8.28 19.35V72h45v-5.13c0-7.29-4.5-13.77-10.98-16.65zM36 36c9.9 0 18-8.1 18-18S45.9 0 36 0 18 8.1 18 18s8.1 18 18 18zm17.28 11.52C47.79 45.9 42.03 45 36 45c-9 0-17.37 1.89-25.02 5.22C4.5 53.1 0 59.58 0 66.87V72h45v-5.13c0-7.47 3.06-14.4 8.28-19.35zM72 18c0-9.9 8.1-18 18-18s18 8.1 18 18-8.1 18-18 18-18-8.1-18-18zm54 54H54v-5.13c0-7.29 4.5-13.77 10.98-16.65C72.63 46.89 81 45 90 45s17.37 1.89 25.02 5.22C121.5 53.1 126 59.58 126 66.87V72zm-9 54c0-9.9 8.1-18 18-18s18 8.1 18 18-8.1 18-18 18-18-8.1-18-18zm54 54H99v-5.13c0-7.29 4.5-13.77 10.98-16.65C117.63 154.89 126 153 135 153s17.37 1.89 25.02 5.22c6.48 2.88 10.98 9.36 10.98 16.65V180zM27 126c0-9.9 8.1-18 18-18s18 8.1 18 18-8.1 18-18 18-18-8.1-18-18zm54 54H9v-5.13c0-7.29 4.5-13.77 10.98-16.65C27.63 154.89 36 153 45 153s17.37 1.89 25.02 5.22C76.5 161.1 81 167.58 81 174.87V180zm15.75-81V81h-13.5v18H63l27 27 27-27H96.75z"
        />
      </svg>
    ),
  },
  {
    title: "Sistemas de aire acondicionado",
    desc: "Para sistemas de aire acondicionado, tanto en expansión directa como en agua helada.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        fill="none"
        viewBox="0 0 177 124"
      >
        <path
          fill="white"
          d="M171.828 56.824l-16.179-16.192a17.696 17.696 0 00-12.528-5.176H132.75V8.857c0-4.899-3.955-8.857-8.85-8.857H8.85A8.844 8.844 0 000 8.857v93C0 114.091 9.9 124 22.125 124c7.274 0 13.662-3.571 17.7-8.968 4.038 5.425 10.426 8.968 17.7 8.968 12.224 0 22.125-9.909 22.125-22.143 0-1.522-.166-2.99-.443-4.428h45.136a21.237 21.237 0 00-.443 4.428c0 12.234 9.901 22.143 22.125 22.143s22.125-9.909 22.125-22.143c0-1.522-.166-2.99-.442-4.428h4.867A4.44 4.44 0 00177 93V69.335c0-4.706-1.853-9.19-5.172-12.51zm-149.703 53.89c-4.867 0-8.85-3.985-8.85-8.857 0-4.871 3.982-8.857 8.85-8.857 4.867 0 8.85 3.986 8.85 8.857 0 4.872-3.983 8.857-8.85 8.857zm35.4 0c-4.867 0-8.85-3.985-8.85-8.857 0-4.871 3.983-8.857 8.85-8.857 4.867 0 8.85 3.986 8.85 8.857 0 4.872-3.983 8.857-8.85 8.857zm75.225-62h10.371a4.39 4.39 0 013.125 1.301L158.221 62H132.75V48.714zm13.275 62c-4.867 0-8.85-3.985-8.85-8.857 0-4.871 3.983-8.857 8.85-8.857 4.868 0 8.85 3.986 8.85 8.857 0 4.872-3.982 8.857-8.85 8.857z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="cri-title mb-12">
          <h2 className="text-5xl font-bold text-main text-center uppercase">SERVICIOS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-main p-12 flex flex-col items-center shadow-lg hover:shadow-2xl hover:bg-main-2 transition-all duration-300 rounded-lg group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.svg}
              </div>
              <p className="text-2xl text-white font-semibold text-center mb-4">
                {service.title}
              </p>
              <p className="text-sm text-blue-100 text-center">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
