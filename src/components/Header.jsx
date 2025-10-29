import logo from "../assets/ccaLogosf1.png"; // Ajusta la ruta si es necesario

export default function Header() {
  return (
    <header className="bg-white shadow p-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="ConCodigoArt" className="w-20 h-auto" />
        
      </div>

      {/* Navegación */}
      <nav className="space-x-6">
        <a
          href="#nosotros"
          className="hover:text-indigo-600 font-medium transition-colors"
        >
          Nosotros
        </a>
        <a
          href="#productos"
          className="hover:text-indigo-600 font-medium transition-colors"
        >
          Productos
        </a>
        <a
          href="#contacto"
          className="hover:text-indigo-600 font-medium transition-colors"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}
