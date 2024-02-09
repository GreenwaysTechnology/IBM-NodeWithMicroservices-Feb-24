const express = require('express')
//create application object 
const app = express()

const PORT = 3000

//global middleware which is called for all url,all methods
app.use((req, res, next) => {
    //middleware logic
    console.log('Middleware logic')
    //we have to call next 
    next()
})

//middleware for given route 
app.get('/api/products', (req, res, next) => {
    console.log('this is middleare gets called for products')
    //setting headers at middleware level
    res.set({
        'message': 'products'
    })
    next()
})

//request and response handling 
app.get('/api/products', (req, res) => {
    res.end('products')
})



//start server
const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})
server.on('request', (req, res) => {
    console.log(req.url, req.method)
})

