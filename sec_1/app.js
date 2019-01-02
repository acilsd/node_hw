const http = require('http');
const PORT = '8087';

// const rqListener = (req, res) => {
//   console.log(req, res); 
// };

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>index</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></input></form></body>');
    res.write('</html>');
    return res.end();
  }
  // console.log(req, res);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>this looks really ugly</title></head>');
  res.write('<body><h1>hello world</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(PORT);