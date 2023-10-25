"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const password = "123456";
    const passwordHashed = await bcrypt.hash(password, 10);

    return await queryInterface.bulkInsert("users", [
      {
        name: "Admin",
        email: "admin@gmail.com",
        password: passwordHashed,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
