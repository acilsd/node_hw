const express = require('express');
const path = require('path');
const currentDir = require('../utils/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(currentDir, 'views', 'shop.html'));
});

module.exports = router;
