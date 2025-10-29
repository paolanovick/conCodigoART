export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-pink-500 h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl font-bold mb-4">Bienvenido a ConCodigoArt</h1>
      <p className="text-xl mb-6">
        Tu espacio creativo para proyectos artísticos y tecnológicos
      </p>
      <button className="bg-white text-purple-600 font-bold py-2 px-6 rounded hover:bg-gray-200 transition">
        Explorar
      </button>
    </section>
  );
}
