export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    // Enviar el mensaje a N8N
    const response = await fetch(
      "https://n8n.triptest.com.ar/webhook/chat-cca",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: req.body.message }),
      }
    );

    // Intentamos leer JSON, si no hay, devolvemos texto plano
    let data;
    try {
      data = await response.json();
    } catch {
      const text = await response.text();
      data = { text };
    }

    console.log("Respuesta de N8N:", data);

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error al conectar con N8N:", error);
    return res.status(500).json({ error: "Error al conectar con N8N" });
  }
}
