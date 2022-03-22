const express = require('express');
const router = express.Router();
const cors = require('cors');
const app = express();

const CallPrice = require('../models/CallPrice');
app.use(express.json());

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

  const { originDDD, destinationDDD } = req.params;

  await CallPrice.findOne({
    attributes: ['price_minute'],
    where: {
      originDDD,
      destinationDDD
    }
  })
    .then((data) => {
      return res.json({
        data
      });
    })
    .catch(() => {
      return res.status(500).json({
        error: true,
        message: "Erro interno"
      });
    });
});

module.exports = router;