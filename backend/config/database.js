const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'mysecretpassword', {
  host: '172.17.0.2',
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
