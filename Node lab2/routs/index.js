const todos = require('../models/todos')

const router = express .Router ()

const todosRouts = require('./todos')
const todosRouts = require('./users')


router.use('/todos' , todosRouts)
router.use('/users' , todosRouts)


module.exports = router