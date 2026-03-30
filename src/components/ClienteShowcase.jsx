import { motion } from "framer-motion";
import phoneFrame from "../assets/mockup/phoneFrame.png";

// Reemplazá esta URL con el link real de la página del cliente
const CLIENTE_URL = "https://vagabundo.com.ar/";

export default function ClienteShowcase() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Columna izquierda: mockup de celular con video */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-[220px] sm:w-[260px]">
              {/* Video dentro de la pantalla del celular */}
              <div
                className="absolute overflow-hidden rounded-[28px]"
                style={{
                  top: "13%",
                  left: "7%",
                  right: "7%",
                  bottom: "12%",
                  zIndex: 1,
                }}
              >
                <video
                  src="/cliente-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Marco del celular encima del video */}
              <img
                src={phoneFrame}
                alt="Phone mockup"
                className="relative w-full z-10 pointer-events-none drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Columna derecha: título y link */}
          <motion.div
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Agradecemos a{" "}
              <span className="text-red-500">nuestros clientes</span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg">
              Cada proyecto es una historia de confianza. Gracias por elegirnos
              para llevar tu presencia digital al siguiente nivel.
            </p>

            <a
              href={CLIENTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 text-sm sm:text-base"
            >
              Ver sitio del cliente
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
