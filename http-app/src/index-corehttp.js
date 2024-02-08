const http = require('node:http')

//req is just variable which points http.ClientRequest Object 
//res is jst variable which points http.ServerResponse Object
// http module is enabled streaming by default
//http module provides many events - data,close,end,
const app = (req, res) => {
    //send response 
    //res.write('hello')
    res.end('Hello Node!')
}
const server = http.createServer(app)

server.on('request', (req, res) => {
    ///console.log(req)
    console.log(`URL ${req.url} Method ${req.method}`)

})
//start 
server.listen(3000, () => {
    console.log('Server is running!')
})