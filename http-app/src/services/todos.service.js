const TODOS = require('../mock-data/todos')

class TodoService {

    //api 
    findAll() {
        // console.log(TODOS)
        return Promise.resolve(TODOS)
    }
    //findByid
    findById(id) {
        return Promise.resolve(TODOS)
    }
}
module.exports = new TodoService()