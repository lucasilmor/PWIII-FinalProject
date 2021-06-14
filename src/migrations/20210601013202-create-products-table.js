'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
     
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      img: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      preco: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      estoque: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  },
};