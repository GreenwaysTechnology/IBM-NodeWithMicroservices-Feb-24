const express = require('express')
const customerRouter = express.Router()

//middleware
customerRouter.use(function (req, res, next) {
    console.log('customer global middleware')
    next()
})
customerRouter.get('/', function (req, res, next) {
    console.log('customer get middleware')
    res.set({
        'customer': 'CUSTOMER GET'
    })
    next()
})

//api 
customerRouter.get('/', (req, res) => {
    res.json({ message: 'CUSTOMERS' })
})
customerRouter.post('/', (req, res) => {
    res.json({ message: 'customers post' })
})

module.exports = customerRouter