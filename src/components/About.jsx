export default function Contact() {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <h2 className="text-4xl font-bold mb-6 text-center">Contacto</h2>
      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Tu nombre"
          className="border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Tu email"
          className="border p-3 rounded"
        />
        <textarea
          placeholder="Mensaje"
          className="border p-3 rounded"
        ></textarea>
        <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition">
          Enviar
        </button>
      </form>
    </section>
  );
}
