import React, { useState, useEffect } from "react";
import PillNav from "./PillNav";
import logoBCOsf from "../assets/logoBCOsf.png";

export default function Header() {
  const [activeSection, setActiveSection] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#', '#about', '#seccion1', '#contact'];
      const scrollPosition = window.scrollY + 200; // Offset para el header

      // Encuentra qué sección está visible
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section === '#') {
          if (scrollPosition < 100) {
            setActiveSection('#');
            return;
          }
          continue;
        }
        
        const element = document.querySelector(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          return;
        }
      }
    };

    // Detectar clicks en los links
    const handleHashChange = () => {
      setActiveSection(window.location.hash || '#');
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Ejecutar al cargar
    handleScroll();
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <PillNav
      logo={logoBCOsf}
      logoAlt="ConCodigoArt"
      items={[
        { label: 'Inicio', href: '#' },
        { label: 'Nosotros', href: '#about' },
        { label: 'Productos', href: '#seccion1' },
        { label: 'Contacto', href: '#contact' }
      ]}
      activeHref={activeSection}
      className="shadow"
      ease="power3.easeOut"
      baseColor="#ffffff"
      pillColor="#f1f1f1"
      hoveredPillTextColor="#000000"
      pillTextColor="#ffffff"
      initialLoadAnimation={true}
    />
  );
}