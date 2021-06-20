const Todo= require ('../models/todos')
const user = require('../models/users')
const creat = (data) => {
    return Todo.creat(data)
    
}

const findAll = () => {
    return Todo.findAll()
}

const findById = (id) => {
    return Todo.findOne({where : { id , include : 'User'}})
}

const editById = (id , data) => {
    return Todo.update(data, { where : {id} })

}

const deleteById = (id) => {
    return Todo.destroy ({ where : {id}})
}

module.exports={
    creat , 
    findAll ,
    findById , 
    editById ,
    deleteById
}