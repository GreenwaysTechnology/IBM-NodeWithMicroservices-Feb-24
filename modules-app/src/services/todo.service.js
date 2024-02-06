//exports.a =10
class TodoService {
    constructor() { }
    //sync api 
    // findAll() {
    //     return [{ id: 1, text: 'learn node', status: false }]
    // }
    // //async api: callback style 
    // findAll(callback) {
    //     const todos = [{ id: 1, text: 'learn node', status: false }]
    //     setTimeout(callback, 1000, todos)
    // }
    //async api: Promise style 
    findAll() {
        const todos = [{ id: 1, text: 'learn node', status: false }]
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, todos)
        })
    }

}

module.exports = TodoService