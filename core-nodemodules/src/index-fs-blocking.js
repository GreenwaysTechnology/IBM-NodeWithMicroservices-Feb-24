const fs = require('node:fs')

const path = './src/assets/info.txt'

const options = {
    encoding: 'UTF-8'
}

function blockMe(message) {
    console.log(message)
}
//async api to read file
blockMe('start')
const data = fs.readFileSync(path, options)
console.log(data)
blockMe('end')
