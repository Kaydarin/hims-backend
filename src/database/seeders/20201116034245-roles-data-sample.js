module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [
      {
        name: 'Super Admin',
        description: 'A super admin role.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Admin',
        description: 'An admin role.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Inventory Manager',
        description: 'Inventory manager who manage incoming & outgoing products.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Inventory Clerk',
        description: 'Inventory clerk who manage incoming products.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Inventory Operator',
        description: 'Inventory clerk who manage outgoing products.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sales Executive',
        description: 'A sales executive role.',
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