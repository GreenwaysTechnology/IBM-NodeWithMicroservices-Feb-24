const os = require('node:os'); //exports.arch=?export.cpus

console.log(os.arch())
os.cpus().forEach(cpu => {
    console.log(cpu.model, cpu.speed, cpu.times.idle)

})
console.log(os.homedir())