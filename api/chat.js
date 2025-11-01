export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const response = await fetch(
      "https://n8n.triptest.com.ar/webhook/chat-cca",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: req.body.message }),
      }
    );

    let data;
    try {
      data = await response.json();
    } catch {
      const text = await response.text();
      data = { text };
    }

    // 💡 Si N8N devuelve un array, tomamos el primer elemento
    if (Array.isArray(data) && data.length > 0) {
      data = data[0];
    }

    console.log("Respuesta procesada desde N8N:", data);

    // 💡 Enviamos solo el campo "respuesta" o texto genérico
    return res.status(200).json({
      reply:
        data.respuesta || data.text || "No se recibió respuesta del servidor.",
    });
  } catch (error) {
    console.error("Error al conectar con N8N:", error);
    return res.status(500).json({ error: "Error al conectar con N8N" });
  }
}
