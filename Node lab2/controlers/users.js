const User= require ('../models/users')

const creat = (data) => {
    return User.creat(data)
    
}

const findAll = () => {
    return User.findAll()
}

const findById = (id) => {
    return User.findOne({where : { id }})
}

const editById = (id , data) => {
    return User.update(data, { where : {id} })

}

const deleteById = (id) => {
    return User.destroy ({ where : {id}})
}

module.exports={
    creat , 
    findAll ,
    findById , 
    editById ,
    deleteById
}