const { PeerServer } = require('peer');

const PORT = process.env.PORT || 9000; // Render define process.env.PORT
const PATH = '/meupeers';

const peerServer = PeerServer({ port: PORT, path: PATH });

console.log(`Servidor PeerJS rodando na porta ${PORT}, path ${PATH}`);