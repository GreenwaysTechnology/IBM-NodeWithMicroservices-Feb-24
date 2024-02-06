const TodoService = require('./services/todo.service')


async function main() {
    const todoservice = new TodoService()
    // console.log(todoservice.findAll())
    //todoservice.findAll((todos) => { console.log(todos) })
    //todoservice.findAll().then(todos => console.log(todos))
    try {
        const todos = await todoservice.findAll()
        console.log(todos)
    }
    catch (err) {

    }
}
main()