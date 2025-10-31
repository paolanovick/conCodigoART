import React, { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    try {
      const res = await fetch("https://n8n.triptest.com.ar/webhook/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setEnviado(true);
        setFormData({ nombre: "", email: "", mensaje: "" });
        setTimeout(() => setEnviado(false), 5000);
      } else {
        alert("Error al enviar el mensaje.");
      }
    } catch (err) {
      console.error(err);
      alert("Error de conexión.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="py-20 bg-gray-950">
      <div className="flex flex-col gap-20 max-w-6xl mx-auto px-6">
        <div className="relative flex flex-col lg:flex-row items-stretch text-white rounded-3xl overflow-hidden bg-gradient-to-br from-rose-900 to-red-950 shadow-lg">
         

          {/* Lado izquierdo - Información */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center mt-16 lg:mt-0">
           
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                ¿Querés potenciar tu negocio con tecnología?
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                En <span className="font-bold">Con Código ART</span>{" "}
                transformamos ideas en soluciones digitales. Envianos tu
                consulta y descubrí cómo podemos ayudarte a llevar tu proyecto
                al siguiente nivel.
              </p>
              <div className="space-y-3 text-gray-200">
                <p>• Respuesta en menos de 24 horas</p>
                <p>• Soluciones personalizadas para tu negocio</p>
                <p>• Asesoramiento sin compromiso</p>
              </div>
            </div>
          </div>

          {/* Lado derecho - Formulario */}
          <div className="lg:w-1/2 bg-white/10 backdrop-blur-sm p-8 lg:p-12">
            <div className="space-y-5">
              {/* Input Nombre */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl p-4 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/30 transition-all"
                />
              </div>

              {/* Input Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl p-4 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/30 transition-all"
                />
              </div>

              {/* Textarea Mensaje */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  placeholder="Contanos sobre tu proyecto..."
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl p-4 text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/30 transition-all resize-none"
                />
              </div>

              {/* Botón de envío */}
              <button
                onClick={handleSubmit}
                disabled={enviando}
                className={`w-full bg-white text-rose-900 font-bold text-lg py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-md ${
                  enviando
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-[1.02]"
                }`}
              >
                {enviando ? "Enviando..." : "Enviar Mensaje"}
              </button>

              {/* Mensaje de éxito */}
              {enviado && (
                <div className="bg-green-500 text-white font-semibold text-center py-4 px-6 rounded-xl shadow-md">
                  ¡Mensaje enviado con éxito! 🎉
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
