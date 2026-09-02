// ChatbotWidget.jsx
import React, { useState, useEffect } from "react";

export default function ChatbotWidget() {
  const [prefill, setPrefill] = useState("");
  const whatsappNumber = "541155786693";

  const buildWhatsappUrl = (text) =>
    `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      text || "Hola, quiero más información."
    )}`;

  const handleOpenWhatsApp = () => {
    window.open(buildWhatsappUrl(prefill), "_blank", "noopener,noreferrer");
  };

  // Mantiene compatibilidad con cualquier llamada externa al widget
  useEffect(() => {
    window.openChatbot = (titulo) => {
      setPrefill(`Hola! Quiero más información sobre "${titulo}".`);
      window.open(buildWhatsappUrl(`Hola! Quiero más información sobre "${titulo}".`), "_blank", "noopener,noreferrer");
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleOpenWhatsApp}
        aria-label="Abrir chat de WhatsApp"
        className="rounded-full p-4 shadow-lg transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-400"
        style={{ backgroundColor: "#25D366" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="text-white"
        >
          <path d="M20.52 3.48A11.91 11.91 0 0 0 12.06 0C5.55 0 .28 5.27.28 11.77a11.7 11.7 0 0 0 1.58 5.76L0 24l6.72-1.76a11.74 11.74 0 0 0 5.47 1.38h.01a11.75 11.75 0 0 0 11.75-11.75c0-3.14-1.22-6.1-3.43-8.31Zm-8.46 17.1h-.01a9.74 9.74 0 0 1-4.97-1.35l-.35-.21-3.52.92.94-3.44-.23-.35a9.72 9.72 0 0 1-1.55-5.18c0-5.37 4.37-9.74 9.74-9.74 2.6 0 5.05 1.01 6.88 2.85a9.68 9.68 0 0 1 2.85 6.87c.01 5.37-4.36 9.74-9.73 9.74Zm5.56-7.24c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.33.22-.63.07-.3-.15-1.27-.47-2.42-1.51-.89-.79-1.49-1.77-1.67-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57a1.13 1.13 0 0 0-.82.38c-.27.3-1.04 1.01-1.04 2.47s1.07 2.87 1.22 3.07c.15.2 2.11 3.22 5.12 4.52.72.31 1.29.5 1.73.64.73.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </button>
    </div>
  );
}
