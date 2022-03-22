(async (req, res) => {

  // const tarifa = async (req, res) => {
  console.log('passei aqui');
  const database = require('./db');
  const CallPrice = require('./callPrice');

  await database.sync();



  const callPriceLink = await CallPrice.findAll({
    attributes: ['price_minute'],
    where: {
      originDDD: 11,
      destinationDDD: 99
    }
  });

  const priceMinute = callPriceLink.length !== 0 ? callPriceLink[0].dataValues.price_minute / 100 : 0;

  // console.log(req);
  console.log(priceMinute);
  // };

  // module.exports = tarifa;
})();