'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('customers', {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fullname: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: true
      },
      email: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
      phoneNo: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
      isDeleted: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      createdBy: {
        type: Sequelize.DataTypes.BIGINT,
        defaultValue: null,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id'
        }
      },
      updatedBy: {
        type: Sequelize.DataTypes.BIGINT,
        defaultValue: null,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id'
        }
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('customers');
  }
};
