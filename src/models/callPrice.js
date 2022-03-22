const Sequelize = require('sequelize');
const database = require('./db');

const CallPrice = database.define('tb_callprice', {
  originDDD: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  destinationDDD: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price_minute: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = CallPrice;