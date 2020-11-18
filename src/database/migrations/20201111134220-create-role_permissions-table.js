'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('role_permissions', {
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
      permissionId: {
        type: Sequelize.DataTypes.BIGINT,
        references: {
          model: {
            tableName: 'permissions'
          },
          key: 'id'
        },
        allowNull: false
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
    return queryInterface.dropTable('role_permissions');
  }
};
