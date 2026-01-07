import React from 'react';
import InfiniteMenu from './InfiniteMenu'; // Ajustá la ruta según tu estructura
import tarjeta111 from "../assets/tarjeta111.png";
import tarjeta22 from "../assets/tarjeta22.png";
import tarjeta41 from "../assets/tarjeta41.png";

export default function Hero() {
  // Configurá tus items con las tarjetas
  const menuItems = [
    {
      image: tarjeta41,
      link: '#proyecto1',
      title: 'Proyecto Artístico',
      description: 'Explorá mi arte digital'
    },
    {
      image: tarjeta111,
      link: '#proyecto2',
      title: 'Proyecto Tecnológico',
      description: 'Soluciones creativas'
    },
    {
      image: tarjeta22,
      link: '#proyecto3',
      title: 'Proyecto Creativo',
      description: 'Arte y código unidos'
    },
    // Repetí las tarjetas para mejor efecto
    {
      image: tarjeta41,
      link: '#proyecto4',
      title: 'Más Arte',
      description: 'Creaciones digitales'
    },
    {
      image: tarjeta111,
      link: '#proyecto5',
      title: 'Más Tech',
      description: 'Innovación visual'
    }
  ];

  return (
    <section className="relative bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Logo y título */}
      <div className="flex flex-col items-center mb-10 z-30">
        <h1 className="mt-12 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
          ConCodigoArt
        </h1>

        <p className="text-white mt-2 text-base sm:text-lg md:text-xl text-center max-w-xl">
          Tu espacio creativo para proyectos artísticos y tecnológicos
        </p>
      </div>

      <div className="relative flex justify-center items-center w-full flex-1 pb-3">
        {/* 🖥️ Desktop con InfiniteMenu */}
        <div className="hidden md:block w-full h-[600px] relative">
          <InfiniteMenu items={menuItems} scale={1.2} />
        </div>

        {/* 💻 Tablet */}
        <div className="hidden sm:flex md:hidden flex-row justify-center items-center gap-3">
          <img
            src={tarjeta41}
            alt="Tarjeta 4"
            className="w-52 h-auto rotate-12"
          />
          <img src={tarjeta111} alt="Tarjeta 1" className="w-60 h-auto z-30" />
          <img
            src={tarjeta22}
            alt="Tarjeta 2"
            className="w-52 h-auto -rotate-12"
          />
        </div>

        {/* 📱 Mobile */}
        <div className="flex flex-col gap-4 sm:hidden items-center justify-center w-full px-4">
          <img
            src={tarjeta41}
            alt="Tarjeta 4"
            className="w-11/12 max-w-xs h-auto transform rotate-6"
          />
          <img
            src={tarjeta111}
            alt="Tarjeta 1"
            className="w-11/12 max-w-xs h-auto"
          />
          <img
            src={tarjeta22}
            alt="Tarjeta 2"
            className="w-11/12 max-w-xs h-auto transform -rotate-6"
          />
        </div>
      </div>
    </section>
  );
}