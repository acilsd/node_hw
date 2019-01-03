const express = require('express');

const PORT = '8087';

const app = express();

app.use('/users', (req, res, next) => {
  console.log('something');
  res.send('<h1>Users</h1>');
  // next();
});

app.use('/', (req, res, next) => {
  console.log('another something');
  res.send('<h1>Index</h1>');
  // next();
});

app.listen(PORT);