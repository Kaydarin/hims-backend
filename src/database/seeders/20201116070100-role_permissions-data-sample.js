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

    const permissions = await queryInterface.sequelize.query(
      `SELECT id, action FROM permissions ORDER BY id ASC`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    function findPermissionIdByAction(actionName) {
      for (let i = 0; i < permissions.length; i++) {
        if (permissions[i].action === actionName) {
          return permissions[i].id;
        }
      }
    }

    function findUserIdByUsername(username) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          return users[i].id;
        }
      }
    }

    let datas = [];

    roles.forEach(obj => {
      switch (obj.name) {
        case 'Super Admin': {

          datas = datas.concat([
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:create'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:read-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:update-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:delete-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:create'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:update-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:update-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:delete-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:delete-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:create'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:update-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:update-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:delete-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:delete-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:create'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:read-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:update-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:update-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:delete-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:delete-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
          ])
          break;
        }
        case 'Admin': {
          datas = datas.concat([
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:create'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:read-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:update-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:delete-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:create'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:update-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:update-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:delete-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:delete-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:create'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:update-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:update-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:delete-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:delete-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:create'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:read-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:update-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:update-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:delete-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:delete-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
          ])
          break;
        }
        case 'Inventory Manager': {
          datas = datas.concat([
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:create'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:update-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:update-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:delete-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:delete-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:create'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:update-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:update-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:delete-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:delete-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:create'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:read-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:update-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:update-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:delete-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:delete-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
          ])
          break;
        }
        case 'Inventory Clerk': {
          datas = datas.concat([
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:create'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:update-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:delete-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:create'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:update-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:delete-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
          ])
          break;
        }
        case 'Inventory Operator': {
          datas = datas.concat([
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:update-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:create'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:update-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:delete-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
          ])
          break;
        }
        case 'Sales Executive': {
          datas = datas.concat([
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:read-self'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-all'),
              createdBy: findUserIdByUsername('johndoe'),
              updatedBy: findUserIdByUsername('johndoe'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-all'),
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

    return queryInterface.bulkInsert('role_permissions', datas)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`SET FOREIGN_KEY_CHECKS = 0`);

    await queryInterface.bulkDelete('role_permissions', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });

    await queryInterface.sequelize.query(`SET FOREIGN_KEY_CHECKS = 1`)
  }
};