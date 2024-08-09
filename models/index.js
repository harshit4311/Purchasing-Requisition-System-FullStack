const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');

const environment = process.env.NODE_ENV || 'development';
const { username, password, database, host, dialect } = config[environment];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Item = require('./item')(sequelize, DataTypes);

module.exports = db;
