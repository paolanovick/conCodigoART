import { motion } from "framer-motion";
import { FaWhatsapp, FaExternalLinkAlt } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

function LazyVideo({ src, className, style }) {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loaded) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [loaded]);

  return (
    <video
      ref={videoRef}
      src={loaded ? src : undefined}
      autoPlay
      muted
      loop
      playsInline
      className={className}
      style={style}
    >
      <track kind="captions" />
    </video>
  );
}

const proyectos = [
  {
    titulo: "vagabundo.com.ar",
    url: "https://vagabundo.com.ar/",
    video: `${process.env.PUBLIC_URL}/vagabundo.mp4`,
    formato: "phone",
    tipo: "Pet Shop & Delivery",
    descripcion: "E-commerce con catálogo de productos, carrito de compras y sistema de delivery integrado.",
    fondo: "from-red-700 to-red-900",
  },
  {
    titulo: "travelconnect.com.ar",
    url: "https://travelconnect.com.ar/",
    video: `${process.env.PUBLIC_URL}/travelconnect.mp4`,
    formato: "desktop",
    tipo: "Servicios tecnológicos",
    descripcion: "Plataforma web con chatbot omnicanal, CRM integrado y gestión de paquetes turísticos.",
    fondo: "from-indigo-700 to-indigo-900",
  },
  {
    titulo: "hubtravel.com.ar",
    url: "https://hubtravel.com.ar/",
    video: `${process.env.PUBLIC_URL}/hub.mp4`,
    formato: "desktop",
    tipo: "Viajes Personalizados",
    descripcion: "Destinos increíbles. Experiencias únicas.",
    fondo: "from-cyan-700 to-teal-900",
    videoFit: "contain",
    screenBg: "#07111f",
  },
  {
    titulo: "aducma.org.ar",
    url: "https://aducma.org.ar/",
    video: `${process.env.PUBLIC_URL}/aducma.mp4`,
    formato: "phone",
    tipo: "Sitio Institucional",
    descripcion: "Sitio institucional moderno con gestión de contenidos y comunicación con asociados.",
    fondo: "from-emerald-700 to-emerald-900",
  },
  {
    titulo: "dalirium.art",
    url: "https://dalirium.art/",
    video: `${process.env.PUBLIC_URL}/dalirium.mp4`,
    formato: "desktop",
    tipo: "Arte & Cultura",
    descripcion: "Landing page de alto impacto visual para galería de arte con experiencia inmersiva.",
    fondo: "from-purple-700 to-purple-900",
  },
  {
    titulo: "eldanes.online",
    url: "https://eldanes.online/",
    video: `${process.env.PUBLIC_URL}/eldanes.mp4`,
    formato: "phone",
    tipo: "Bebidas & Delivery",
    descripcion: "E-commerce con catálogo de bebidas, combos y sistema de pedidos online.",
    fondo: "from-sky-700 to-sky-900",
  },
  {
    titulo: "buenos-aires-guide.vercel.app",
    url: "https://buenos-aires-guide.vercel.app/",
    video: `${process.env.PUBLIC_URL}/guia.mp4`,
    formato: "desktop",
    tipo: "Guía Turística",
    descripcion: "Web app turística con exploración de barrios, departamentos y puntos de interés de Buenos Aires.",
    fondo: "from-amber-700 to-amber-900",
  },
  {
    titulo: "laeugenia.vercel.app",
    url: "https://laeugenia.vercel.app/",
    video: `${process.env.PUBLIC_URL}/laeugenia.mp4`,
    formato: "phone",
    tipo: "Gastronomía",
    descripcion: "Tienda online gastronómica con productos destacados, categorías y sistema de compra.",
    fondo: "from-rose-700 to-rose-900",
  },
  {
    titulo: "elmenu.ar/tucomida",
    url: "https://www.elmenu.ar/tucomida",
    video: `${process.env.PUBLIC_URL}/elmenu.mp4`,
    formato: "phone",
    tipo: "Menú Digital",
    descripcion: "Menú digital interactivo con categorías, productos y experiencia optimizada para mobile.",
    fondo: "from-orange-700 to-orange-900",
  },
  {
    titulo: "tutenis.fun",
    url: "https://www.tutenis.fun/",
    video: `${process.env.PUBLIC_URL}/tutenis.mp4`,
    formato: "phone",
    tipo: "Turnos de tenis",
    descripcion: "Reservá tu horario, recuperá clases y mirá tus cupos sin vueltas.",
    fondo: "from-lime-700 to-emerald-900",
    videoFit: "contain",
    screenBg: "#f8fafc",
  },
];

function VideoMockup({ video, formato = "phone", videoFit = "cover", screenBg = "#000" }) {
  const isDesktop = formato === "desktop";

  const screen = video ? (
    <LazyVideo
      src={video}
      className="w-full h-full"
      style={{ objectFit: videoFit, background: screenBg }}
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center bg-gray-800">
      <span className="text-gray-500 text-xs text-center px-4">Próximamente</span>
    </div>
  );

  if (isDesktop) {
    return (
      <div className="flex-shrink-0 w-full md:w-[480px]" style={{ maxWidth: "100%" }}>
        <div
          className="relative rounded-t-xl rounded-b-sm overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
            padding: "10px 10px 6px 10px",
            boxShadow: "0 -2px 10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex justify-center mb-2">
            <div className="w-2 h-2 rounded-full bg-gray-700 ring-1 ring-gray-600" />
          </div>
          <div
            className="overflow-hidden rounded-sm"
            style={{ height: "270px", background: screenBg, boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" }}
          >
            {screen}
          </div>
        </div>
        <div style={{ height: "5px", background: "linear-gradient(to bottom, #111, #333)", borderRadius: "0 0 2px 2px" }} />
        <div style={{ background: "linear-gradient(145deg, #2e2e2e, #1c1c1c)", height: "24px", borderRadius: "0 0 4px 4px", boxShadow: "0 4px 12px rgba(0,0,0,0.6)", position: "relative" }}>
          <div style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", width: "70px", height: "10px", background: "rgba(255,255,255,0.05)", borderRadius: "3px", border: "1px solid rgba(255,255,255,0.08)" }} />
        </div>
        <div style={{ height: "4px", background: "linear-gradient(to bottom, #555, transparent)", borderRadius: "0 0 50% 50%", margin: "0 20px" }} />
        <div style={{ height: "8px", background: "radial-gradient(ellipse at center, rgba(0,0,0,0.4), transparent)", margin: "0 10px" }} />
      </div>
    );
  }

  return (
    <div className="flex-shrink-0 mx-auto relative" style={{ width: "220px", maxWidth: "100%" }}>
      <div
        className="relative rounded-[36px] shadow-2xl overflow-hidden"
        style={{ border: "4px solid #1f2937", outline: "1px solid #374151", background: "#000" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10" style={{ width: "50px", height: "12px", background: "#1f2937", borderRadius: "0 0 10px 10px" }} />
        <div style={{ height: "420px", background: screenBg }}>{screen}</div>
        <div className="flex justify-center items-center py-2 bg-black">
          <div className="w-20 h-1 rounded-full bg-gray-600" />
        </div>
      </div>
      <div className="absolute w-[2px] h-6 rounded-l-sm bg-gray-600" style={{ left: "-5px", top: "70px" }} />
      <div className="absolute w-[2px] h-9 rounded-l-sm bg-gray-600" style={{ left: "-5px", top: "108px" }} />
      <div className="absolute w-[2px] h-8 rounded-r-sm bg-gray-600" style={{ right: "-5px", top: "90px" }} />
    </div>
  );
}

export default function MockupPortfolio() {
  const handleOpenWhatsApp = (titulo) => {
    const mensaje = encodeURIComponent(
      `Hola 👋, me interesa obtener más información sobre el proyecto: ${titulo}.`
    );
    window.open(`https://wa.me/5491151215750?text=${mensaje}`, "_blank");
  };

  return (
    <section className="py-20 bg-gray-950">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Nuestros Proyectos Destacados
      </h2>

      <div className="flex flex-col gap-16 max-w-6xl mx-auto px-6">
        {proyectos.map((p, i) => (
          <motion.div
            key={i}
            className={`relative flex flex-col md:flex-row items-center gap-8 text-white rounded-3xl p-8 bg-gradient-to-br ${p.fondo} shadow-lg overflow-hidden`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <VideoMockup
              video={p.video}
              formato={p.formato}
              videoFit={p.videoFit}
              screenBg={p.screenBg}
            />

            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-3">
              {/* Etiqueta de tipo */}
              <span className="text-xs font-semibold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
                {p.tipo}
              </span>

              {/* URL */}
              <p className="text-xl font-bold tracking-wide break-all">
                {p.titulo}
              </p>

              {/* Descripción */}
              <p className="text-sm text-white/75 leading-relaxed max-w-sm">
                {p.descripcion}
              </p>

              {/* Botones */}
              <div className="flex gap-3 flex-wrap justify-center md:justify-start mt-1">
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
                  onClick={() => handleOpenWhatsApp(p.titulo)}
                  className="flex items-center gap-2 bg-black/30 hover:bg-black/50 text-white text-sm px-5 py-2 rounded-full transition-colors duration-200"
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
