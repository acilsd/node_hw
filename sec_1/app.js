const http = require('http');
const PORT = '8087';
const routes = require('./routes');

const server = http.createServer(routes);

server.listen(PORT);