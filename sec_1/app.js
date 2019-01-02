const http = require('http');
const PORT = '8087';

const rqListener = (req, res) => {
  console.log(req, res); 
};

const server = http.createServer((req, res) => {
  // console.log(req, res);
  res.setHeader('Content-Type', 'text/html');
});

server.listen(PORT);