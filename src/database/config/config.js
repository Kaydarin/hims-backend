require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",
        dialectOptions: {
            charset: 'utf8_general_ci'
        },
        migrationStorageTableName: "_sequelize_migration",
        seederStorageTableName: "_sequelize_seeds"
    },
    test: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",
        dialectOptions: {
            charset: 'utf8_general_ci'
        },
        migrationStorageTableName: "_sequelize_migration",
        seederStorageTableName: "_sequelize_seeds"
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",
        dialectOptions: {
            charset: 'utf8_general_ci'
        },
        migrationStorageTableName: "_sequelize_migration",
        seederStorageTableName: "_sequelize_seeds"
    }
};