// ChatbotWidget.jsx
import React, { useState, useEffect } from "react";
import Chatbot from "./Chatbot";
import { MessageCircle } from "lucide-react";

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState("");

  // Permite que MockupPortfolio abra el chat
  useEffect(() => {
    window.openChatbot = (titulo) => {
      setPrefill(`Hola! Quiero más información sobre "${titulo}".`);
      setOpen(true);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle size={24} />
      </button>

      {open && (
        <div className="absolute bottom-16 right-0">
          <Chatbot prefill={prefill} />
        </div>
      )}
    </div>
  );
}
