import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors()); // permití todos los dominios o solo tu frontend
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const response = await fetch(
      "https://n8n.triptest.com.ar/webhook/chat-cca",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: req.body.message }),
      }
    );
    const data = await response.json();

    // devolvemos la respuesta completa al frontend
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al conectar con N8N" });
  }
});

app.listen(3001, () => console.log("Backend corriendo en puerto 3001"));
