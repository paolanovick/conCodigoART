export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">Concodigoart</h1>
      <nav className="space-x-4">
        <a href="#about" className="hover:text-indigo-600">
          Sobre mí
        </a>
        <a href="#contact" className="hover:text-indigo-600">
          Contacto
        </a>
      </nav>
    </header>
  );
}
