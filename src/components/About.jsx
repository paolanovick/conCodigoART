import React from "react";
import aboutImg from "../assets/logoBCO.png"; // reemplaza con tu imagen

export default function About() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      {/* Lado izquierdo - texto sobre fondo blanco (mismo ancho que imagen de Seccion1) */}
      <div className="md:w-3/5 w-full bg-white text-black py-8 md:py-12 px-6 md:px-16 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h2>
        <p className="text-lg md:text-xl mb-4">
          En ConCodigoArt nos apasiona crear experiencias digitales únicas.
        </p>
        <p className="text-lg md:text-xl mb-4">
          Diseñamos sitios web, logos y soluciones tecnológicas que hacen
          destacar tu marca.
        </p>
        <p className="text-lg md:text-xl">
          Nuestro enfoque combina creatividad y tecnología para ofrecer
          resultados funcionales y estéticamente atractivos, adaptados a tus
          necesidades.
        </p>
      </div>

      {/* Lado derecho - fondo negro con imagen */}
      <div className="md:w-2/5 w-full bg-black flex justify-center items-center py-8 md:py-12 px-6 md:px-16">
        <img
          src={aboutImg}
          alt="Sobre Nosotros"
          className="w-full h-auto object-cover rounded-lg shadow-lg max-w-[90%]"
        />
      </div>
    </section>
  );
}
