const express = require ('express')
const todos = require('../controlers/todos')

const router = express.Router()

router.post('/' , (req , res) => {
    const {body} = req ;

    todos.creat(body)
    res.status(204).end()

})

router.get('/' , async ,(req , res) => {
    const allTodos = await todos.findAll()
    res.json(allTodos)

})


router.get('/:id' , async ,(req , res) => {
    const {id} = req.params
    const todo = await todos.findById(id)
    if(!todo){
        res.status(404).end()
        return
    }
    res.json(todos)

})

router.patch('/:id' ,async , (req , res) => {
    const {body , params : { id } } = req
    await todos.editById (id , body)
    res.status(200).end()

})

router.delete('/:id' ,async, (req , res) => {
    const {id} = req.params;
    await todos.deleteById(id)
    res.status(200).end()
})


module.exports = router 

