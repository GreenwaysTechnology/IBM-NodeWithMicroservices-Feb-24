const http = require('node:http')
const todoservice = require('./services/todos.service')

const app = async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    try {
        const todos = await todoservice.findAll()
        res.end(JSON.stringify(todos))
    }
    catch (err) {
        return res.end(JSON.stringify({ code: 400, message: 'Data is not available' }))
    }
}
const server = http.createServer(app)

server.on('request', (req, res) => {
    console.log(`URL ${req.url} Method ${req.method}`)
})
//start 
server.listen(3000, () => {
    console.log('Server is running!')
})