const { Sequelize } = require("sequelize")
const config = require("../config.json");
module.exports = new Sequelize(config.mysql.db, config.mysql.user, config.mysql.password, {
    host: config.mysql.ip,
    dialect: 'mysql'
})