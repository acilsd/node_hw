const express = require('express');

const PORT = '8087';

const app = express();

app.use('/add', (req, res, next) => {
  res.send('<h1>Add something</h1>');
  // next();
});

app.use('/', (req, res, next) => {
  res.send('<h1>Index</h1>');
  // next();
});

app.listen(PORT);