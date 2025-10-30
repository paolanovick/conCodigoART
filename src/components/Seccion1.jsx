import cabeza2 from "../assets/cabeza.jpeg";

export default function Seccion1() {
  const items = [
    "Diseño de Páginas Web",
    "Diseño de Logos",
    "Integraciones con APIs",
    "React & JavaScript",
    "HTML & CSS Avanzado",
    "Python y Automatización",
    "Diseño Responsive",
    "SEO y Optimización Web",
    "Branding Digital",
    "UX/UI Creativo",
  ];

  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen overflow-hidden">
      {/* Imagen arriba en mobile */}
      <div
        className="w-full md:w-3/5 h-[40vh] md:h-auto bg-center bg-cover relative"
        style={{ backgroundImage: `url(${cabeza2})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Lista animada abajo (mobile) o derecha (desktop) */}
      <div className="w-full md:w-2/5 flex items-center justify-center bg-gradient-to-b from-red-700 to-red-900 relative overflow-hidden py-10 md:py-20">
        <ul className="animate-scroll text-white text-lg sm:text-xl font-semibold flex flex-col items-center space-y-3">
          {items.concat(items).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
