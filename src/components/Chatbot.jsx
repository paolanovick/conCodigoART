// Chatbot.jsx
import React, { useState, useEffect } from "react";

export default function Chatbot({ prefill = "" }) {
  const [message, setMessage] = useState(prefill);
  const [messages, setMessages] = useState([]); // historial de mensajes
  const [loading, setLoading] = useState(false);

  // Actualiza el mensaje cuando cambia prefill
  useEffect(() => {
    setMessage(prefill);
  }, [prefill]);

  const handleSend = async () => {
    if (!message) return;

    // Agregar mensaje del usuario al historial
    const userMessage = { type: "user", text: message };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      // 🔹 Aquí llamamos a nuestro backend proxy
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      // 🔹 Ajuste clave: tomar cualquier campo de respuesta de N8N
     const botMessage = {
       type: "bot",
       text:
         data.reply || data.data || data.message || "No se recibió respuesta.",
     };


      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Error de conexión." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container bg-white rounded-3xl shadow-lg p-6 max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-3">Asistente Virtual</h3>

      <div className="chat-window bg-gray-100 rounded-xl p-4 mb-4 max-h-64 overflow-y-auto">
        {messages.map((m, i) => (
          <p
            key={i}
            className={`text-sm mb-2 ${
              m.type === "user"
                ? "text-right text-blue-600"
                : "text-left text-gray-700"
            }`}
          >
            {m.text}
          </p>
        ))}
        {loading && <p className="text-sm text-gray-500">Escribiendo...</p>}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded-lg p-2 text-sm"
          placeholder="Escribe tu consulta..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          type="button"
          onClick={handleSend}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
