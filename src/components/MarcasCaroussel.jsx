import React from "react";
import marca1 from "../assets/marca1.png";
import marca2 from "../assets/marca2.png";
import marca3 from "../assets/marca3.png";
import marca4 from "../assets/marca4.png";
import marca5 from "../assets/marca5.png";
import marca6 from "../assets/marca6.png";
import marca7 from "../assets/marca7.png";


export default function MarcasCarousel() {
  const marcas = [marca1, marca2, marca3, marca4, marca5, marca6, marca7];

  return (
    <section className="w-full bg-white overflow-hidden py-8 mt-10">
      <div className="relative">
        <div className="flex animate-marcas gap-12">
          {[...marcas, ...marcas].map((marca, index) => (
            <imgvagabu
              key={index}
              src={marca}
              alt={`Marca ${index + 1}`}
              className="h-28 w-auto object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes marcas {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .animate-marcas {
            width: max-content;
            animation: marcas 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
