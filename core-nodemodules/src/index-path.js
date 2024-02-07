const fs = require('node:fs');
const path = require('node:path')

const blockMe = message => console.log(message)

//nonblocking + non streaming

//const filePath = './src/assets/info.txt'
const filePath = path.join(__dirname, 'assets/info.txt')

const options = {
    encoding: 'UTF-8'
}
blockMe('start')
//readFile---------select or epool(api)-------------|file desc--->kernal emits event
fs.readFile(filePath, options, (err, data) => {
    if (err) throw err
    console.log(data)
})
blockMe('end')