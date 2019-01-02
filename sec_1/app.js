const http = require('http');
const PORT = '8087';

const rqListener = (req, res) => {
    console.log(req, res); 
};

const server = http.createServer((req, res) => {
    console.log(req, res);
});

server.listen(PORT);