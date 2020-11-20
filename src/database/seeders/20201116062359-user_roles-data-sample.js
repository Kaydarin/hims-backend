module.exports = {
  up: async (queryInterface, Sequelize) => {

    const users = await queryInterface.sequelize.query(
      `SELECT id, username FROM users ORDER BY id ASC`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const roles = await queryInterface.sequelize.query(
      `SELECT id, name FROM roles ORDER BY id ASC`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    function findUserIdByUsername(username) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          return users[i].id;
        }
      }
    }

    function findRoleIdByName(roleName) {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === roleName) {
          return roles[i].id;
        }
      }
    }

    let datas = [];

    users.forEach(obj => {
      switch (obj.username) {
        case 'johndoe': {
          datas.push({
            userId: obj.id,
            roleId: findRoleIdByName('Super Admin'),
            createdBy: obj.id,
            updatedBy: obj.id,
            createdAt: new Date(),
            updatedAt: new Date()
          });
          break;
        }
        case 'alexstu': {
          datas.push({
            userId: obj.id,
            roleId: findRoleIdByName('Admin'),
            createdBy: findUserIdByUsername('johndoe'),
            updatedBy: findUserIdByUsername('johndoe'),
            createdAt: new Date(),
            updatedAt: new Date()
          });
          break;
        }
        case 'abu': {
          datas.push({
            userId: obj.id,
            roleId: findRoleIdByName('Inventory Manager'),
            createdBy: findUserIdByUsername('johndoe'),
            updatedBy: findUserIdByUsername('johndoe'),
            createdAt: new Date(),
            updatedAt: new Date()
          });
          break;
        }
        case 'senghong': {
          datas.push({
            userId: obj.id,
            roleId: findRoleIdByName('Inventory Clerk'),
            createdBy: findUserIdByUsername('johndoe'),
            updatedBy: findUserIdByUsername('johndoe'),
            createdAt: new Date(),
            updatedAt: new Date()
          });
          break;
        }
        case 'ossas': {
          datas.push({
            userId: obj.id,
            roleId: findRoleIdByName('Inventory Operator'),
            createdBy: findUserIdByUsername('johndoe'),
            updatedBy: findUserIdByUsername('johndoe'),
            createdAt: new Date(),
            updatedAt: new Date()
          });
          break;
        }
        case 'takiya': {
          datas.push({
            userId: obj.id,
            roleId: findRoleIdByName('Sales Executive'),
            createdBy: findUserIdByUsername('johndoe'),
            updatedBy: findUserIdByUsername('johndoe'),
            createdAt: new Date(),
            updatedAt: new Date()
          });
          break;
        }
        case 'bruce': {
          datas = datas.concat([
            {
              userId: obj.id,
              roleId: findRoleIdByName('Sales Executive'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              userId: obj.id,
              roleId: findRoleIdByName('Inventory Operator'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
          ])
          break;
        }
      }
    });

    return queryInterface.bulkInsert('user_roles', datas)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);

    await queryInterface.bulkDelete('user_roles', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });

    await queryInterface.sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`)
  }
};