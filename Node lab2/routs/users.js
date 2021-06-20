const express = require ('express')
const users = require('../controlers/users')

const router = express.Router()

router.post('/' ,async, (req , res) => {
    const {body} = req ;

   await users.creat(body)
    res.status(204).end()

})

router.get('/' , async ,(req , res) => {
    const allUsers = await users.findAll()
    res.json(allUsers)

})


router.get('/:id' , async ,(req , res) => {
    const {id} = req.params
    const user = await users.findById(id)
    if(!user){
        res.status(404).end()
        return
    }
    res.json(users)

})

router.patch('/:id' ,async , (req , res) => {
    const {body , params : { id } } = req
    await users.editById (id , body)
    res.status(200).end()

})

router.delete('/:id' ,async, (req , res) => {
    const {id} = req.params;
    await users.deleteById(id)
    res.status(200).end()
})


module.exports = router 



