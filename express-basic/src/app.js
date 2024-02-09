const express = require('express')
const TODOS = require('./mock-data/todos')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const fs = require('node:fs')
const path = require('node:path')

//create application object 
const app = express()
const PORT = 3000

//register body parser middleware 
app.use(bodyParser.json())
// app.use(morgan('combined'))
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

//apis 
app.get('/', (req, res) => {
    res.json({ message: 'Home' })
})

app.get('/api/todos', (req, res) => {
    res.json(TODOS)
})
//GET /api/todos/1
app.get('/api/todos/:id', (req, res) => {
    const id = Number(req.params.id)
    const todo = TODOS.filter(todo => todo.id === id)
    res.json(todo)
})
app.post('/api/todos', (req, res) => {
    //read payload using node core pattern 
    const todo = req.body
    console.log(todo)
    res.json(todo)

})
app.put('/api/todos/:id', (req, res) => {
    //read payload using node core pattern 
    const id = Number(req.params.id)
    let todo = ''
    req.on('data', (chunk) => {
        todo += chunk
    })
    req.on('end', async () => {
        try {
            console.log(id)
            console.log(todo)
            //update logic goes here
            res.status(200).json({ message: 'Todo update' })
        }
        catch (error) {
            res.status(500).json({ message: error })
        }
    });

})

app.delete('/api/todos/:id', (req, res) => {
    //read payload using node core pattern 
    const id = Number(req.params.id)
    res.status(204).end()
})

//start server
const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})
server.on('request', (req, res) => {
    console.log(req.url, req.method)
})

