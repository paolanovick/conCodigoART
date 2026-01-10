import cabeza2 from "../assets/cabeza.jpeg";
import FlowingMenu from "./FlowingMenu";

// Importa imágenes para cada ítem (o usa placeholder)
import webImg from "../assets/web-design.jpg"; // Agrega tus imágenes

export default function Seccion1() {
  const menuItems = [
    { 
      link: '#web', 
      text: 'Páginas Web', 
      image: cabeza2 // Usa tus propias imágenes
    },
    { 
      link: '#logos', 
      text: 'Diseño de Logos', 
      image: cabeza2
    },
    { 
      link: '#apis', 
      text: 'Integraciones APIs', 
      image: cabeza2
    },
    { 
      link: '#react', 
      text: 'React & JavaScript', 
      image: cabeza2
    },
    { 
      link: '#python', 
      text: 'Python & Automatización', 
      image: cabeza2
    },
    { 
      link: '#responsive', 
      text: 'Diseño Responsive', 
      image: cabeza2
    },
    { 
      link: '#seo', 
      text: 'SEO & Optimización', 
      image: cabeza2
    },
    { 
      link: '#branding', 
      text: 'Branding Digital', 
      image: cabeza2
    }
  ];

  return (
    <section id="seccion1" className="flex flex-col md:flex-row w-full min-h-screen overflow-hidden">
      {/* Imagen arriba en mobile, izquierda en desktop */}
      <div
        className="w-full md:w-3/5 h-[40vh] md:h-auto bg-center bg-cover relative"
        style={{ backgroundImage: `url(${cabeza2})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* FlowingMenu abajo (mobile) o derecha (desktop) */}
      <div className="w-full md:w-2/5 h-[60vh] md:h-auto relative">
        <FlowingMenu 
          items={menuItems}
          speed={15}
          textColor="#ffffff"
          bgColor="#b91c1c"
          marqueeBgColor="#ffffff"
          marqueeTextColor="#b91c1c"
          borderColor="rgba(255, 255, 255, 0.2)"
        />
      </div>
    </section>
  );
}