const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./User');
const Task = require('./Task');


sequelize.sync().then(() => {
  console.log('Database connected and synchronized');
});

module.exports = { User, Task };
