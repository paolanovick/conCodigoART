import React, { useState, useEffect } from "react";
import PillNav from "./PillNav";
import logoBCOsf from "../assets/logoBCOsf.png";

export default function Header() {
  const [activeSection, setActiveSection] = useState('#');

  useEffect(() => {
    const handleScroll = () => {
      // Posición actual del scroll más la mitad de la ventana
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Obtener todas las secciones
      const sections = [
        { id: '#contact', element: document.querySelector('#contact') },
        { id: '#seccion1', element: document.querySelector('#seccion1') },
        { id: '#about', element: document.querySelector('#about') },
      ];

      // Si estamos muy arriba, es Inicio
      if (window.scrollY < 200) {
        setActiveSection('#');
        return;
      }

      // Buscar qué sección está en el viewport
      let found = false;
      for (const section of sections) {
        if (section.element) {
          
          const sectionTop = section.element.offsetTop;
          const sectionBottom = sectionTop + section.element.offsetHeight;
          
          // Si el scroll está dentro de esta sección
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
            found = true;
            break;
          }
        }
      }

      // Si no encontramos ninguna, es Inicio
      if (!found && window.scrollY < 500) {
        setActiveSection('#');
      }
    };

    // Detectar clicks en los links
    const handleClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        setTimeout(() => {
          handleScroll();
        }, 600); // Espera a que termine el scroll
      }
    };

    // Listeners
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);
    
    // Ejecutar al cargar
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
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