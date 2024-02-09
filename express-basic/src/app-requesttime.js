const express = require('express')

const app = express();

//This is middlware is executed for every request irrespect of url and method
const requestTime = (req, res, next) => {
    req.requestTime = Date.now()
    next()
}
//how to attach this middlware 
app.use((req, res, next) => {
    req.requestTime = Date.now()
    next()
})

app.get('/', (req, res, next) => {
    let responseText = '<h1>Hello World</h1>'
    responseText += `Requested at ${req.requestTime}`
    res.send(responseText)
})

app.listen(3000, () => {
    console.log('Express server is running')
})