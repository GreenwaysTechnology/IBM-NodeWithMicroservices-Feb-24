const fs = require('node:fs')

const options = {
    encoding: 'UTF-8'
}

function blockMe(message) {
    console.log(message)
}
//blocking way of writing data
const newFilePath = './src/assets/hello.txt';
const data = 'Hello,How are you?'

blockMe('start')
fs.writeFileSync(newFilePath, data, options)
blockMe('end')