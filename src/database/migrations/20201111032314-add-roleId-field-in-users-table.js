'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'roleId', {
      type: Sequelize.DataTypes.BIGINT,
      after: 'id',
      references: {
        model: {
          tableName: 'roles'
        },
        key: 'id'
      },
      allowNull: false
    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'roleId');
  }
};
