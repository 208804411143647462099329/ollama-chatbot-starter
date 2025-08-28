import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());
app.use(express.json());

// URL do servidor Ollama local
const OLLAMA_CHAT_ENDPOINT = 'http://localhost:11434/api/chat';

// Rota para chat: recebe um campo "user" no corpo e envia para o modelo
app.post('/api/chat', async (req, res) => {
  try {
    const { user } = req.body;
    const response = await fetch(OLLAMA_CHAT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3',
        messages: [
          { role: 'system', content: 'Responda sempre em português do Brasil.' },
          { role: 'user', content: user }
        ]
      })
    });
    const data = await response.json();
    res.json({ reply: data.message?.content ?? '' });
  } catch (err) {
    console.error('Erro na rota /api/chat:', err);
    res.status(500).json({ error: 'Falha ao conectar ao modelo' });
  }
});

// Rota de saúde simples
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
