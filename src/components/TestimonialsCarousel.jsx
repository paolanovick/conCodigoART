import React from "react";
import { motion } from "framer-motion";

import marca1 from "../assets/marca1.png";
import marca2 from "../assets/marca2.png";
import marca3 from "../assets/marca3.png";
import marca4 from "../assets/marca4.png";
import marca5 from "../assets/marca5.png";

export default function TestimonialsCarousel() {
  const testimonios = [
    {
      empresa: "Dalirium",
      logo: marca1,
      comentario:
        "Excelente trabajo. Nuestro sitio web quedó moderno, rápido y fácil de administrar. ¡Aumentaron nuestras ventas online!",
    },
    {
      empresa: "TripNow",
      logo: marca2,
      comentario:
        "Gracias al chatbot automatizado ahora atendemos consultas 24/7. ¡Muy recomendados!",
    },
    {
      empresa: "La Eugenia y Flia",
      logo: marca3,
      comentario:
        "Nos encantó el diseño del panel administrativo. Sencillo y visualmente impecable.",
    },
    {
      empresa: "Travel Connect",
      logo: marca4,
      comentario:
        "El equipo entendió perfecto lo que necesitábamos. La landing quedó hermosa y funcional.",
    },
    {
      empresa: "KUKE Bags",
      logo: marca5,
      comentario:
        "Automatizamos las reservas por WhatsApp y ahorramos muchísimo tiempo. Excelente atención.",
    },
  ];

  // Duplicamos para loop infinito
  const carrusel = [...testimonios, ...testimonios];

  return (
    <section className="py-20 bg-gray-900 overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        Lo que dicen nuestros clientes
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {carrusel.map((t, i) => (
            <div
              key={i}
              className="min-w-[260px] sm:min-w-[320px] max-w-[340px] bg-white text-gray-900 rounded-2xl p-6 flex flex-col items-center justify-between shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <img
                src={t.logo}
                alt={t.empresa}
                className="w-20 sm:w-24 h-auto object-contain mb-4"
              />
              <p className="italic text-sm sm:text-base text-center mb-4 leading-relaxed">
                “{t.comentario}”
              </p>
              <span className="text-fuchsia-600 font-semibold text-sm sm:text-base">
                {t.empresa}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
