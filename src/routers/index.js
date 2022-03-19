const express = require('express');

const router = express.Router();

router.get('/health', (req, res, next) => {
  res.status(200).send({
    title: "API Node Express",
    version: "0.1.0",
  });
});

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: "API Node Express",
    version: "0.1.0",
  });
});

module.exports = router;