const {sequelize} = require('sequelize')

const sequelize= new sequelize('sqlserver://localhost:/db_data')

module.exports = sequelize 