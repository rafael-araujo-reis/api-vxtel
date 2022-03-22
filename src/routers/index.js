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

router.get('/callprice/originDDD/:originDDD/destinationDDD/:destinationDDD', async (req, res) => {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");

  console.log('aqui vou chamar');
  console.log(req.params);

  res.status(200).send({
    priceMinute: 10
  });
});

module.exports = router;