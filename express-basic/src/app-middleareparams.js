const express = require('express')

const app = express();

//middlware with parameter
const MyMiddleware = function (param) {
    return function (req, res, next) {
        console.log(param)
        //do something with param
        next()
    }
}
app.use(MyMiddleware({ isActive: true, version: '1.0' }))

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(3000, () => {
    console.log('Express server is running')
})