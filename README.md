# Ollama Chatbot Starter

Este é um projeto de exemplo para iniciar um chatbot usando o Ollama. Inclui um backend em Node/Express e um frontend simples em HTML.

## Executando Localmente

1. Certifique-se de ter o [Ollama](https://ollama.com/) instalado e executando em `http://localhost:11434`.

2. Clone este repositório e navegue para a pasta `server`:

```
git clone <url-do-seu-repo>
cd server
```

3. Instale as dependências e inicie o servidor:

```
npm install
npm run dev
```

4. Em outro terminal, navegue até a pasta `web` e abra o `index.html` no seu navegador ou use um servidor estático:

```
cd ../web
# Para servir com Python:
python3 -m http.server 5173
```

5. Abra `http://localhost:5173` no navegador para usar o chatbot.

## Estrutura do Projeto

```
/server
  index.js        // Código do servidor Express
  package.json    // Dependências e scripts
/web
  index.html      // Interface simples de chat
README.md         // Este arquivo
```

## Observações

- O arquivo `index.js` implementa uma rota `/api/chat` que reencaminha mensagens para o Ollama.
- A interface envia mensagens para essa rota e mostra as respostas.
- Este projeto é apenas um exemplo inicial; ajuste conforme necessário.
