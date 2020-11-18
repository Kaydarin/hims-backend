'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('_db_logs', {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      tableId: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false
      },
      fieldName: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: false
      },
      oldValue: {
        type: Sequelize.DataTypes.STRING(255)
      },
      newValue: {
        type: Sequelize.DataTypes.STRING(255)
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
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('_db_logs');
  }
};
