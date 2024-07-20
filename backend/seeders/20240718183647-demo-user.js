'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash('password', saltRounds);

    return queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: hashedPassword,
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
