const express = require('express')

//create application object 
const app = express()

const PORT = 3000


//apis 
app.get('/', (req, res) => {
    res.json({ message: 'Home' })
})

app.get('/api/greet', (req, res) => {
    res.json({ message: 'hello-get' })
})
app.post('/api/greet', (req, res) => {
    res.json({ message: 'hello-post' })
})
app.put('/api/greet', (req, res) => {
    res.json({ message: 'hello-put' })
})
app.delete('/api/greet', (req, res) => {
    res.json({ message: 'hello-delete' })
})

//start server
const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Express is running @ ${server.address().port}`)
})
server.on('request', (req, res) => {
    console.log(req.url, req.method)
})

