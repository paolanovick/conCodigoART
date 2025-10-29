
import tarjeta1 from "../assets/tarjeta1.png";
import tarjeta2 from "../assets/tarjeta2.png";
import tarjeta4 from "../assets/tarjeta4.png";

export default function Hero() {
  return (
    <section className="relative bg-black h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Logo y título */}
      <div className="flex flex-col items-center mb-10 z-30">
        <h1 className="mt-12 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
          Bienvenido a ConCodigoArt
        </h1>

        <p className="text-white mt-2 text-base sm:text-lg md:text-xl text-center max-w-xl">
          Tu espacio creativo para proyectos artísticos y tecnológicos
        </p>
      </div>

      <div className="relative flex justify-center items-center w-full flex-1">
        {/* 🖥️ Tarjetas Desktop - grandes y encimadas */}
        <div className="hidden md:flex justify-center items-center relative w-full">
          {/* Izquierda */}
          <img
            src={tarjeta4}
            alt="Tarjeta 4"
            className="absolute left-1/2 transform -translate-x-[140%] -translate-y-12 rotate-[10deg] w-[28rem] h-auto transition-transform duration-300 hover:-translate-y-2 hover:scale-105 z-20"
          />
          {/* Central */}
          <img
            src={tarjeta1}
            alt="Tarjeta 1"
            className="relative z-30 transform -translate-y-16 w-[28rem] h-auto transition-transform duration-300 hover:scale-105 hover:rotate-1"
          />
          {/* Derecha */}
          <img
            src={tarjeta2}
            alt="Tarjeta 2"
            className="absolute left-1/2 transform translate-x-[35%] -translate-y-12 -rotate-[10deg] w-[28rem] h-auto transition-transform duration-300 hover:-translate-y-2 hover:scale-105 z-20"
          />
        </div>

        {/* 💻 Tarjetas Tablet - más grandes y juntas */}
        <div className="hidden sm:flex md:hidden flex-row justify-center items-center gap-2">
          <img
            src={tarjeta4}
            alt="Tarjeta 4"
            className="w-56 h-auto transform rotate-12"
          />
          <img
            src={tarjeta1}
            alt="Tarjeta 1"
            className="w-64 h-auto transform -translate-y-3 z-30"
          />
          <img
            src={tarjeta2}
            alt="Tarjeta 2"
            className="w-56 h-auto transform -rotate-12"
          />
        </div>

        {/* 📱 Tarjetas Móvil - apiladas y un poco más grandes */}
        <div className="flex flex-col gap-4 sm:hidden items-center">
          <img
            src={tarjeta4}
            alt="Tarjeta 4"
            className="w-60 h-auto transform rotate-6"
          />
          <img src={tarjeta1} alt="Tarjeta 1" className="w-64 h-auto" />
          <img
            src={tarjeta2}
            alt="Tarjeta 2"
            className="w-60 h-auto transform -rotate-6"
          />
        </div>
      </div>
    </section>
  );
}
