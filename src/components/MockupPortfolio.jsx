import React from "react";
import { motion } from "framer-motion";

// Importar frames
import laptopFrame from "../assets/mockup/laptop-frame.png";

import phoneFrame2 from "../assets/mockup/phone-frame2.png";
// Importar imágenes de proyectos
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
      fondo: "from-red-700 to-red-900",
    },
    {
      titulo: "Chatbot Integrado",
      descripcion:
        "Asistente virtual desarrollado con IA para mejorar la atención al cliente.",
      imagen: proyecto2,
      fondo: "from-indigo-700 to-indigo-900",
    },
    {
      titulo: "Tienda Online",
      descripcion:
        "E-commerce con pasarela de pagos, carrito y gestión de productos.",
      imagen: proyecto3,

      fondo: "from-emerald-700 to-emerald-900",
    },
    {
      titulo: "Landing Page Creativa",
      descripcion:
        "Página promocional con alto impacto visual y foco en conversión.",
      imagen: proyecto6,
      frame: phoneFrame2,
      fondo: "from-purple-700 to-purple-900",
    },
    {
      titulo: "Panel Administrativo",
      descripcion:
        "Dashboard interactivo con control de datos, métricas y usuarios.",
      imagen: proyecto5,

      fondo: "from-sky-700 to-sky-900",
    },
    {
      titulo: "Automatizaciones",
      descripcion:
        "Automatizamos procesos como Envío de emails, Newsletter, respuestas de ChatBot.",
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
            {/* Imagen principal */}
            <img
              src={p.imagen}
              alt={p.titulo}
              className="w-full max-w-3xl rounded-xl shadow-md"
            />

            {/* Mockup decorativo (laptop o phone abajo a la izquierda) */}
            <img
              src={p.frame}
              alt=""
              className="absolute bottom-[14px] left-[19px] w-[290px] opacity-90"
            />

            {/* Texto */}
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
