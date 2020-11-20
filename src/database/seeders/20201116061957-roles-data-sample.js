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

    return await queryInterface.bulkInsert('roles', [
      {
        name: 'Super Admin',
        description: 'A super admin role.',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Admin',
        description: 'An admin role.',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Inventory Manager',
        description: 'Inventory manager who manage incoming & outgoing products.',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Inventory Clerk',
        description: 'Inventory clerk who manage incoming products.',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Inventory Operator',
        description: 'Inventory clerk who manage outgoing products.',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sales Executive',
        description: 'A sales executive role.',
        createdBy: findUserIdByUsername('johndoe'),
        updatedBy: findUserIdByUsername('johndoe'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {

    await queryInterface.sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`)

    await queryInterface.bulkDelete('roles', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });

    await queryInterface.sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`)
  }
};