module.exports = {
  up: async (queryInterface, Sequelize) => {

    const roles = await queryInterface.sequelize.query(
      `SELECT id, name from roles`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    function findRoleIdByName(roleName) {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === roleName) {
          return roles[i].id;
        }
      }
    }

    return await queryInterface.bulkInsert('users', [
      {
        roleId: findRoleIdByName('Super Admin'),
        fullName: 'John Doe',
        username: 'johndoe',
        password: 'john123',
        email: 'john@example.com',
        phoneNo: '+60123456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: findRoleIdByName('Admin'),
        fullName: 'Alexie Stukov',
        username: 'alexstu',
        password: 'alex123',
        email: 'alex@example.com',
        phoneNo: '+60112223333',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: findRoleIdByName('Inventory Manager'),
        fullName: 'Abu Bakr',
        username: 'abu',
        password: 'abu123',
        email: 'abu@example.com',
        phoneNo: '+6073217654',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: findRoleIdByName('Inventory Clerk'),
        fullName: 'Seng Hong',
        username: 'senghong',
        password: 'sh123',
        email: 'senghong@example.com',
        phoneNo: '+6061234567',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: findRoleIdByName('Inventory Operator'),
        fullName: 'Uvuvwevwevwe Onyetenyevwe Ugwemubwem Ossas',
        username: 'ossas',
        password: 'ossas123',
        email: 'ossas@example.com',
        phoneNo: '+6089999999',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: findRoleIdByName('Sales Executive'),
        fullName: 'Takiya Genji',
        username: 'takiya',
        password: 'takiya123',
        email: 'yakiya@example.com',
        phoneNo: '+60145556666',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);

    await queryInterface.bulkDelete('users', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });

    await queryInterface.sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`)
  }
};