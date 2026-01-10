import React from "react";
import PillNav from "./PillNav"; // Ajusta la ruta según tu estructura
import logoBCOsf from "../assets/logoBCOsf.png";

export default function Header() {
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
      activeHref={window.location.hash || '#'}
      className="shadow"
      ease="power3.easeOut"
      baseColor="#ffffff"          // Texto blanco base
      pillColor="#f1f1f1"           // Indigo para el pill (hover)
      hoveredPillTextColor="#000000" // Texto blanco cuando hay hover
      pillTextColor="#ffffff"        // Texto blanco en estado normal
      initialLoadAnimation={true}
    />
  );
}