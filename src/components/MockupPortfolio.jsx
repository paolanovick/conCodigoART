import React from "react";
import { motion } from "framer-motion";
import laptopFrame from "../assets/mockup/laptop-frame.png";
import phoneFrame2 from "../assets/mockup/phone-frame2.png";
import phoneFrame from "../assets/mockup/phoneFrame.png";
import proyecto1 from "../assets/mockup/proyecto1.png";
import proyecto2 from "../assets/mockup/proyecto2.png";
import proyecto3 from "../assets/mockup/proyecto3.png";
import proyecto5 from "../assets/mockup/proyecto5.png";
import proyecto6 from "../assets/mockup/proyecto6.png";
import proyecto7 from "../assets/mockup/proyecto7.png";

export default function MockupPortfolio() {
  const proyectos = [
    {
      titulo: "Sitio Web para todos los rubros",
      descripcion:
        "Diseño web moderno y responsive con integración de APIs y panel administrativo.",
      imagen: proyecto1,
      frame: laptopFrame,
      tipoFrame: "laptop",
      fondo: "from-red-700 to-red-900",
    },
    {
      titulo: "Chatbot Integrado",
      descripcion:
        "Asistente virtual con IA para mejorar la atención al cliente.",
      imagen: proyecto2,
      frame: phoneFrame,
      tipoFrame: "phone",
      fondo: "from-indigo-700 to-indigo-900",
    },
    {
      titulo: "Tienda Online",
      descripcion: "E-commerce con carrito y pasarela de pagos.",
      imagen: proyecto3,
      fondo: "from-emerald-700 to-emerald-900",
    },
    {
      titulo: "Landing Page Creativa",
      descripcion: "Página con alto impacto visual y foco en conversión.",
      imagen: proyecto6,
      frame: phoneFrame2,
      tipoFrame: "phoneFrame",
      fondo: "from-purple-700 to-purple-900",
    },
    {
      titulo: "Panel Administrativo",
      descripcion: "Dashboard interactivo con control de datos y métricas.",
      imagen: proyecto5,
      fondo: "from-sky-700 to-sky-900",
    },
    {
      titulo: "Automatizaciones",
      descripcion:
        "Automatizamos procesos como envíos de emails, newsletter y respuestas con ChatBot programados.",
      imagen: proyecto7,
      fondo: "from-emerald-700 to-emerald-900",
    },
  ];

  return (
    <section className="py-20 bg-gray-950">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Nuestros Proyectos Destacados
      </h2>

      <div className="flex flex-col gap-20 max-w-6xl mx-auto px-6">
        {proyectos.map((p, i) => (
          <motion.div
            key={i}
            className={`relative flex flex-col items-center text-white rounded-3xl p-8 bg-gradient-to-br ${p.fondo} shadow-lg overflow-hidden`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={p.imagen}
              alt={p.titulo}
              className="w-full max-w-3xl rounded-xl object-cover"
            />

            {p.frame && (
              <motion.img
                src={p.frame}
                alt=""
                initial={{ x: -100, opacity: 0 }} // menos desplazamiento para mobile
                whileInView={{ x: 0, opacity: 0.7 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`
      absolute
      ${
        p.tipoFrame === "phoneFrame"
          ? "bottom-[120px] sm:bottom-[160px] left-[20px] sm:left-[40px] w-[80px] sm:w-[150px] md:w-[190px] z-20"
          : p.tipoFrame === "phone"
          ? "bottom-[100px] sm:bottom-[100px] left-[15px] sm:left-[38px] w-[90px] sm:w-[140px] md:w-[180px] z-10"
          : "bottom-[50px] sm:bottom-[50px] left-[5px] sm:left-[10px] w-[140px] sm:w-[190px] md:w-[260px] z-10"
      }
    `}
              />
            )}

            <div className="mt-8 text-center space-y-2">
              <h3 className="text-2xl font-bold">{p.titulo}</h3>
              <p className="text-gray-200 text-sm">{p.descripcion}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
