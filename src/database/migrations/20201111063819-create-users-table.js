'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      roleId: {
        type: Sequelize.DataTypes.BIGINT,
        references: {
          model: {
            tableName: 'roles'
          },
          key: 'id'
        },
        allowNull: false
      },
      fullname: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      username: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
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
    return queryInterface.dropTable('users');
  }
};
