const http = require('http');
const fs = require('fs');
const PORT = '8087';

// const rqListener = (req, res) => {
//   console.log(req, res); 
// };

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>index</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></input></form></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    let body = [];

    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        if (err) console.error(err);
        res.writeHead(302, { Location: '/' });
        return res.end();
      });
      // console.log(parsedBody); 
    });
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