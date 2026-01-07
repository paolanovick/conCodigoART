import React from "react";
import logoBCOsf from "../assets/logoBCOsf.png"; // Ajusta la ruta si es necesario

export default function Header() {
  return (
    <header className="bg-black shadow p-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logoBCOsf} alt="ConCodigoArt" className="w-32  h-auto" />
      </div>

      {/* Navegación */}
      <nav className="space-x-6">
        <a
          href="#nosotros"
          className="text-white hover:text-indigo-400 font-medium transition-colors"
        >
          Nosotros
        </a>
        <a
          href="#productos"
          className="text-white hover:text-indigo-400 font-medium transition-colors"
        >
          Productos
        </a>
        <a
          href="#contacto"
          className="text-white hover:text-indigo-400 font-medium transition-colors"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}
