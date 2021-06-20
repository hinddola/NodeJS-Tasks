const express = require('express')

const router = require('./routs')
const app = express()

app.use(express.json())

app.use('/' , router )

app.listen(3000 , ()=> {
    console.log('up and routing ');
})

