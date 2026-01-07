import InfiniteMenu from './InfiniteMenu';
import tarjeta111 from "../assets/tarjeta111.png";
import tarjeta22 from "../assets/tarjeta22.png";
import tarjeta41 from "../assets/tarjeta41.png";

export default function Hero() {
  const menuItems = [
    {
      image: tarjeta41,
      link: '#proyecto1',
     
    },
    {
      image: tarjeta111,
      link: '#proyecto2',
      
    },
    {
      image: tarjeta22,
      link: '#proyecto3',
      
    },
    {
      image: tarjeta41,
      link: '#proyecto4',
      
    },
    {
      image: tarjeta111,
      link: '#proyecto5',
      
    }
  ];

  return (
    <section className="relative bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Logo y título */}
      <div className="flex flex-col items-center mb-4 z-30"> {/* 🔥 Era mb-10, ahora mb-4 */}
  <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
    ConCodigoArt
  </h1>

  <p className="text-white mt-2 text-base sm:text-lg md:text-xl text-center max-w-xl">
    Tu espacio creativo para proyectos artísticos y tecnológicos
  </p>
</div>

      <div className="relative flex justify-center items-center w-full flex-1 pb-3">
        {/* 🖥️ Desktop con InfiniteMenu */}
        <div className="hidden md:block w-[120000px] h-[650px] relative">
          <InfiniteMenu items={menuItems} scale={0.03} />
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