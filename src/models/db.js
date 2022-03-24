const Sequelize = require('sequelize');

const database = new Sequelize('dbplans', 'root', '123456^', {
  host: process.env.DB_LOCAL,
  dialect: 'mysql'
});

database.authenticate()
  .then(() => {
    console.log('Success connection database');
  })
  .catch((error) => {
    console.log(`Error connection database: ${error}`);
  });

module.exports = database;