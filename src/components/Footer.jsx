import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNewsletter = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch(
        "https://n8n.triptest.com.ar/webhook/newsletter",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      if (!res.ok) throw new Error("Error al suscribirse");

      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    } catch (err) {
      console.error(err);
      alert("Ocurrió un error al suscribirse. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="footer bg-black text-white">
      <div className="footer-container max-w-7xl mx-auto px-4 py-12">
        {/* Logo y columnas */}
        <div className="footer-header">
          <img
            src="/assets/logoBN.png"
            alt="Logo"
            className="footer-logo w-24 h-auto mb-4"
          />

          <div className="footer-top grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center w-full">
            {/* Columna 1: Secciones */}
            <div className="footer-column flex flex-col items-center text-center">
              <h3 className="font-bold text-lg mb-3">Secciones</h3>
              <Link
                to="/"
                className="hover:underline mb-1 text-gray-300 hover:text-white transition"
              >
                Inicio
              </Link>
              <Link
                to="/inicio"
                className="hover:underline mb-1 text-gray-300 hover:text-white transition"
              >
                Nosotros
              </Link>
              <Link
                to="/productos"
                className="hover:underline mb-1 text-gray-300 hover:text-white transition"
              >
                Productos
              </Link>
              <Link
                to="/contacto"
                className="hover:underline mb-1 text-gray-300 hover:text-white transition"
              >
                Contacto
              </Link>
            </div>

            {/* Columna 2: Contacto y legales */}
            <div className="footer-column flex flex-col items-center text-center">
              <h3 className="font-bold text-lg mb-3">Contacto & Legal</h3>
              <Link
                to="/Servicios-web"
                className="hover:underline mb-1 text-gray-300 hover:text-white transition"
              >
                Servicios Web
              </Link>
              <Link
                to="/politica-privacidad"
                className="hover:underline mb-1 text-gray-300 hover:text-white transition"
              >
                Política de Privacidad
              </Link>
              <Link
                to="/aviso-legal"
                className="hover:underline mb-1 text-gray-300 hover:text-white transition"
              >
                Legales
              </Link>
              <Link
                to="/politica-cookies"
                className="hover:underline mb-1 text-gray-300 hover:text-white transition"
              >
                Política de Cookies
              </Link>
              <Link
                to="/terminos-condiciones"
                className="hover:underline mb-1 text-gray-300 hover:text-white transition"
              >
                Términos & Condiciones
              </Link>
            </div>

            {/* Columna 3: Newsletter */}
            <div className="footer-column flex flex-col items-center text-center col-span-1 sm:col-span-2 lg:col-span-1">
              <h3 className="font-bold text-lg mb-3">Newsletter</h3>
              <p className="mb-3 text-gray-300">
                Suscríbete para recibir ofertas y novedades.
              </p>
              <form
                onSubmit={handleNewsletter}
                className="flex flex-col items-center space-y-3 w-full max-w-xs"
              >
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-white focus:outline-none transition"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-4 py-2 bg-white text-black hover:bg-gray-200 rounded font-semibold transition"
                >
                  {loading ? "Suscribiendo..." : "Suscribirse"}
                </button>
                {subscribed && (
                  <p className="text-gray-300 mt-2">
                    ¡Gracias por suscribirte!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="footer-socials flex justify-center gap-4 mt-8 text-lg text-white">
          <button
            aria-label="Facebook"
            className="hover:text-gray-400 transition"
          >
            <FaFacebookF />
          </button>
          <button
            aria-label="Twitter"
            className="hover:text-gray-400 transition"
          >
            <FaTwitter />
          </button>
          <button
            aria-label="Instagram"
            onClick={() =>
              window.open("https://www.instagram.com/kuke.bags/", "_blank")
            }
            className="hover:text-gray-400 transition"
          >
            <FaInstagram />
          </button>
          <button
            aria-label="LinkedIn"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin />
          </button>
        </div>

        {/* Pie de página */}
        <div className="footer-bottom mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Con CódigoART. Todos los derechos
          reservados.
        </div>
        <div className="footer-bottom mt-2 text-center text-sm text-gray-400">
          Powered by{" "}
          <a
            href="https://concodigoart.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition underline"
          >
            ConCódigoART
          </a>
        </div>
      </div>
    </div>
  );
}
