const http = require('http');
const PORT = '8087';

const rqListener = (req, res) => {
  console.log(req, res); 
};

const server = http.createServer((req, res) => {
  // console.log(req, res);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>this looks really ugly</title></head>');
  res.write('<body><h1>hello world</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(PORT);