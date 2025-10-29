import React from "react";
import marca1 from "../assets/marca1.png";
import marca2 from "../assets/marca2.png";
import marca3 from "../assets/marca3.png";
import marca4 from "../assets/marca4.png";
import marca5 from "../assets/marca5.png";

export default function MarcasCarousel() {
  const marcas = [marca1, marca2, marca3, marca4, marca5];

  return (
    <section className="w-full bg-white overflow-hidden py-8 mt-10">
      <div className="relative">
        {/* Contenedor de marcas animado */}
        <div className="flex animate-marcas gap-12">
          {marcas.concat(marcas).map((marca, index) => (
            <img
              key={index}
              src={marca}
              alt={`Marca ${index + 1}`}
              className="h-20 object-contain"
            />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes marcas {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marcas {
            display: flex;
            width: max-content;
            animation: marcas 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
