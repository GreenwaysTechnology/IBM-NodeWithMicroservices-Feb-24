const express = require('express')
const customerRouter = require('./router/customer.router')
const app = express();

//register middleware 
app.use('/api/customers', customerRouter)

app.use((err, req, res, next) => {
    //  next()
    res.status(500);
    res.send(err.message);
})

//api test error 
app.get('/api/greet/:message', (req, res) => {
    const message = req.params.message
    if (message === 'hello') {
        res.send(message)
    } else {
        throw new Error('Internal Server Error')
    }
})

app.listen(3000, () => {
    console.log('Express server is running')
})