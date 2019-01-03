const express = require('express');
const http = require('http');

const PORT = '8087';

const app = express();

app.use((req, res, next) => {
  res.send('<h1>hello world</h1>');
  // next();
});

const server = http.createServer(app);

server.listen(PORT);