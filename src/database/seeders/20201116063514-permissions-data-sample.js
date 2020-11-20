module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.sequelize.query(
      `SELECT id, username FROM users ORDER BY id ASC`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    function findUserIdByUsername(username) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          return users[i].id;
        }
      }
    }

    return await queryInterface.bulkInsert('permissions', [
      {
        action: 'role:create',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'role:read-self',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'role:read-all',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'role:update-all',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'role:delete-all',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'product:create',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'product:read-self',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'product:read-all',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'product:update-self',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'product:update-all',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'product:delete-self',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'product:delete-all',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'item:create',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'item:read-self',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'item:read-all',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'item:update-self',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'item:update-all',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'item:delete-self',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'item:delete-all',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'customer:create',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'customer:read-self',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'customer:read-all',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'customer:update-self',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'customer:update-all',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'customer:delete-self',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        action: 'customer:delete-all',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
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