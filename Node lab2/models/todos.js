const {sequelize} = require('sequelize')
const user = require('./users')
const sequelize = require('..//db')


const Todo = sequelize.define('todos' , {
    content:{
        type : DataTypes.STRING
    }
})


Todo.belongs(user)

Todo.sync({alter : true});

module.exports = Todo;


