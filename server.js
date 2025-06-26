const { PeerServer } = require('peer');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 9000;
const PATH = '/meupeers';

// Rota para teste
app.get('/', (req, res) => {
  res.send('PeerJS Server está rodando!');
});

const peerServer = PeerServer({ port: PORT, path: PATH });

app.listen(PORT, () => {
  console.log(`Servidor PeerJS rodando na porta ${PORT}, path ${PATH}`);
});