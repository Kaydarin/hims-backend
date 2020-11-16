module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('permissions', [
      {
        action: 'role:create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'role:read-self',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'role:read-all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'role:update-all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'role:delete-all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'product:create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'product:read-self',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'product:read-all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'product:update-self',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'product:update-all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'product:delete-self',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'product:delete-all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'item:create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'item:read-self',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'item:read-all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'item:update-self',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'item:update-all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'item:delete-self',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'item:delete-all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'customer:create',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'customer:read-self',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'customer:read-all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'customer:update-self',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'customer:update-all',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'customer:delete-self',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'customer:delete-all',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {

    await queryInterface.sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`)

    await queryInterface.bulkDelete('permissions', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });

    await queryInterface.sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`)
  }
};