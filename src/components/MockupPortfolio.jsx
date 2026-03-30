import { motion } from "framer-motion";
import { FaWhatsapp, FaExternalLinkAlt } from "react-icons/fa";

// Agregá los videos en public/ con el nombre indicado en cada objeto
const proyectos = [
  {
    titulo: "vagabundo.com.ar",
    url: "https://vagabundo.com.ar/",
    video: `${process.env.PUBLIC_URL}/vagabundo.mp4`,
    formato: "phone",
    fondo: "from-red-700 to-red-900",
  },
  {
    titulo: "travelconnect.com.ar",
    url: "https://travelconnect.com.ar/",
    video: `${process.env.PUBLIC_URL}/travelconnect.mp4`,
    formato: "desktop",
    fondo: "from-indigo-700 to-indigo-900",
  },
  {
    titulo: "aducma.org.ar",
    url: "https://aducma.org.ar/",
    video: `${process.env.PUBLIC_URL}/aducma.mp4`,
    formato: "phone",
    fondo: "from-emerald-700 to-emerald-900",
  },
  {
    titulo: "dalirium.art",
    url: "https://dalirium.art/",
    video: `${process.env.PUBLIC_URL}/dalirium.mp4`,
    formato: "desktop",
    fondo: "from-purple-700 to-purple-900",
  },
  {
    titulo: "eldanes.online",
    url: "https://eldanes.online/",
    video: `${process.env.PUBLIC_URL}/eldanes.mp4`,
    formato: "phone",
    fondo: "from-sky-700 to-sky-900",
  },
  {
    titulo: "buenos-aires-guide.vercel.app",
    url: "https://buenos-aires-guide.vercel.app/",
    video: `${process.env.PUBLIC_URL}/guia.mp4`,
    formato: "desktop",
    fondo: "from-amber-700 to-amber-900",
  },
  {
    titulo: "laeugenia.vercel.app",
    url: "https://laeugenia.vercel.app/",
    video: `${process.env.PUBLIC_URL}/laeugenia.mp4`,
    formato: "phone",
    fondo: "from-rose-700 to-rose-900",
  },
];

function VideoMockup({ video, formato = "phone" }) {
  const isDesktop = formato === "desktop";

  const screen = video ? (
    <video src={video} autoPlay muted loop playsInline className="w-full h-full object-cover" />
  ) : (
    <div className="w-full h-full flex items-center justify-center bg-gray-800">
      <span className="text-gray-500 text-xs text-center px-4">Próximamente</span>
    </div>
  );

  if (isDesktop) {
    return (
      <div className="flex-shrink-0 mx-auto" style={{ width: "520px", maxWidth: "100%" }}>
        {/* Tapa / pantalla */}
        <div
          className="relative rounded-t-xl rounded-b-sm overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
            padding: "10px 10px 6px 10px",
            boxShadow: "0 -2px 10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Cámara web */}
          <div className="flex justify-center mb-2">
            <div className="w-2 h-2 rounded-full bg-gray-700 ring-1 ring-gray-600" />
          </div>
          {/* Pantalla con bisel */}
          <div
            className="overflow-hidden rounded-sm"
            style={{
              height: "290px",
              background: "#000",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            {screen}
          </div>
        </div>

        {/* Bisagra */}
        <div
          style={{
            height: "5px",
            background: "linear-gradient(to bottom, #111, #333)",
            borderRadius: "0 0 2px 2px",
          }}
        />

        {/* Base / teclado */}
        <div
          style={{
            background: "linear-gradient(145deg, #2e2e2e, #1c1c1c)",
            height: "28px",
            borderRadius: "0 0 4px 4px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.6)",
            position: "relative",
          }}
        >
          {/* Trackpad */}
          <div
            style={{
              position: "absolute",
              bottom: "4px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "12px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "3px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
        </div>

        {/* Pie / sombra de mesa */}
        <div
          style={{
            height: "4px",
            background: "linear-gradient(to bottom, #555, transparent)",
            borderRadius: "0 0 50% 50%",
            margin: "0 20px",
          }}
        />
        <div
          style={{
            height: "8px",
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.4), transparent)",
            margin: "0 10px",
          }}
        />
      </div>
    );
  }

  // Marco estilo celular
  return (
    <div
      className="flex-shrink-0 mx-auto relative"
      style={{ width: "260px", maxWidth: "100%" }}
    >
      {/* Cuerpo del celular */}
      <div
        className="relative rounded-[40px] shadow-2xl overflow-hidden"
        style={{
          border: "4px solid #1f2937",
          outline: "1px solid #374151",
          background: "#000",
        }}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
          style={{ width: "50px", height: "12px", background: "#1f2937", borderRadius: "0 0 10px 10px" }}
        />
        {/* Pantalla */}
        <div style={{ height: "500px" }}>
          {screen}
        </div>
        {/* Barra inferior */}
        <div className="flex justify-center items-center py-2 bg-black">
          <div className="w-24 h-1 rounded-full bg-gray-600" />
        </div>
      </div>
      {/* Botón de volumen izquierda */}
      <div className="absolute w-[2px] h-7 rounded-l-sm bg-gray-600" style={{ left: "-5px", top: "80px" }} />
      <div className="absolute w-[2px] h-10 rounded-l-sm bg-gray-600" style={{ left: "-5px", top: "120px" }} />
      {/* Botón power derecha */}
      <div className="absolute w-[2px] h-9 rounded-r-sm bg-gray-600" style={{ right: "-5px", top: "100px" }} />
    </div>
  );
}

export default function MockupPortfolio() {
  const handleOpenWhatsApp = () => {
    const mensaje = encodeURIComponent(
      "Hola 👋, me interesa obtener más información sobre sus proyectos web."
    );
    window.open(`https://wa.me/5491151215750?text=${mensaje}`, "_blank");
  };

  return (
    <section className="py-20 bg-gray-950">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Nuestros Proyectos Destacados
      </h2>

      <div className="flex flex-col gap-20 max-w-6xl mx-auto px-6">
        {proyectos.map((p, i) => (
          <motion.div
            key={i}
            className={`relative flex flex-col md:flex-row items-center gap-6 text-white rounded-3xl p-8 bg-gradient-to-br ${p.fondo} shadow-lg overflow-hidden`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <VideoMockup video={p.video} formato={p.formato} />

            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <p className="text-2xl font-bold tracking-wide break-all">
                {p.titulo}
              </p>

              <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-sm px-5 py-2 rounded-full transition-colors duration-200"
                  >
                    Ver sitio
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
                <button
                  onClick={handleOpenWhatsApp}
                  className="flex items-center gap-2 bg-gray-700/60 hover:bg-gray-600/80 text-white text-sm px-5 py-2 rounded-full transition-colors duration-200"
                >
                  Consultar
                  <FaWhatsapp className="text-green-400 text-lg" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
