import tarjeta11 from "../assets/tarjeta11.png";
import tarjeta22 from "../assets/tarjeta22.png";
import tarjeta41 from "../assets/tarjeta41.png";

export default function Hero() {
  return (
    <section className="relative bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Logo y título */}
      <div className="flex flex-col items-center mb-10 z-30">
        <h1 className="mt-12 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
          Bienvenido a ConCodigoArt
        </h1>

        <p className="text-white mt-2 text-base sm:text-lg md:text-xl text-center max-w-xl">
          Tu espacio creativo para proyectos artísticos y tecnológicos
        </p>
      </div>

      <div className="relative flex justify-center items-center w-full flex-1 pb-3">
        {/* 🖥️ Desktop */}
        <div className="hidden md:flex justify-center items-center relative w-full">
          <img
            src={tarjeta41}
            alt="Tarjeta 4"
            className="absolute left-1/2 transform -translate-x-[140%] -translate-y-12 rotate-[10deg] w-[26rem] h-auto z-20"
          />
          <img
            src={tarjeta11}
            alt="Tarjeta 1"
            className="relative z-30 transform -translate-y-16 w-[28rem] h-auto"
          />
          <img
            src={tarjeta22}
            alt="Tarjeta 2"
            className="absolute left-1/2 transform translate-x-[35%] -translate-y-12 -rotate-[10deg] w-[26rem] h-auto z-20"
          />
        </div>

        {/* 💻 Tablet */}
        <div className="hidden sm:flex md:hidden flex-row justify-center items-center gap-3">
          <img
            src={tarjeta41}
            alt="Tarjeta 4"
            className="w-52 h-auto rotate-12"
          />
          <img src={tarjeta11} alt="Tarjeta 1" className="w-60 h-auto z-30" />
          <img
            src={tarjeta22}
            alt="Tarjeta 2"
            className="w-52 h-auto -rotate-12"
          />
        </div>

        {/* 📱 Mobile */}
        {/* 📱 Tarjetas Móvil - apiladas y centradas */}
        <div className="flex flex-col gap-4 sm:hidden items-center justify-center w-full px-4">
          <img
            src={tarjeta41}
            alt="Tarjeta 4"
            className="w-11/12 max-w-xs h-auto transform rotate-6"
          />
          <img
            src={tarjeta11}
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
