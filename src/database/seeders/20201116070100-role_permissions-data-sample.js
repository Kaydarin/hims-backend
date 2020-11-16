module.exports = {
  up: async (queryInterface, Sequelize) => {

    const roles = await queryInterface.sequelize.query(
      `SELECT id, name from roles`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const permissions = await queryInterface.sequelize.query(
      `SELECT id, action from permissions`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    function findPermissionIdByAction(actionName) {
      for (let i = 0; i < permissions.length; i++) {
        if (permissions[i].action === actionName) {
          return permissions[i].id;
        }
      }
    }

    roles.forEach(obj => {
      switch (obj.name) {
        case 'Super Admin': {
          queryInterface.bulkInsert('role_permissions', [
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:create'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:read-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:update-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:delete-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:create'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:update-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:update-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:delete-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:delete-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:create'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:update-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:update-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:delete-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:delete-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:create'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:read-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:update-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:update-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:delete-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:delete-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
          ]);
          break;
        }
        case 'Admin': {
          queryInterface.bulkInsert('role_permissions', [
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:create'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:read-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:update-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:delete-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:create'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:update-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:update-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:delete-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:delete-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:create'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:update-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:update-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:delete-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:delete-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:create'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:read-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:update-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:update-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:delete-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:delete-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
          ]);
          break;
        }
        case 'Inventory Manager': {
          queryInterface.bulkInsert('role_permissions', [
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:create'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:update-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:update-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:delete-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:delete-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:create'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:update-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:update-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:delete-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:delete-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:create'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:read-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:update-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:update-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:delete-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:delete-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
          ]);
          break;
        }
        case 'Inventory Clerk': {
          queryInterface.bulkInsert('role_permissions', [
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:create'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:update-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:delete-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:create'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:update-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:delete-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
          ]);
          break;
        }
        case 'Inventory Operator': {
          queryInterface.bulkInsert('role_permissions', [
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:update-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:create'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:update-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('customer:delete-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
          ]);
          break;
        }
        case 'Sales Executive': {
          queryInterface.bulkInsert('role_permissions', [
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('role:read-self'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('product:read-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              roleId: obj.id,
              permissionId: findPermissionIdByAction('item:read-all'),
              createdAt: new Date(),
              updatedAt: new Date()
            },
          ]);
          break;
        }
      }
    });
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