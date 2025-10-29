import React from "react";
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
    <section className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
      {/* Lado izquierdo - imagen fija */}
      <div
        className="md:w-3/5 w-full h-1/2 md:h-full bg-fixed bg-center bg-cover relative"
        style={{ backgroundImage: `url(${cabeza2})` }}
      >
        <div className="w-full h-full bg-black/40 flex items-center justify-center px-4">
         
        </div>
      </div>

      {/* Lado derecho - lista animada */}
      <div
        className="md:w-2/5 w-full h-1/2 md:h-full bg-gradient-to-b from-red-700 to-red-900 flex items-center justify-center relative overflow-hidden"
        style={{ paddingTop: "3cm", paddingBottom: "2cm" }}
      >
        <div className="w-full h-full flex flex-col justify-center overflow-hidden relative">
          <ul className="animate-scroll text-white text-xl font-semibold flex flex-col items-center space-y-2">
            {items.concat(items).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Animación scroll */}
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateY(0); }
              100% { transform: translateY(-50%); }
            }
            .animate-scroll {
              display: inline-flex;
              flex-direction: column;
              animation: scroll 20s linear infinite;
            }
          `}
        </style>
      </div>
    </section>
  );
}
