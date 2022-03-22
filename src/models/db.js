const Sequelize = require('sequelize');

const database = new Sequelize('dbplans', 'root', 'N6aFi^uCpY%S%QTW4*sNJukJqqIVL^', {
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