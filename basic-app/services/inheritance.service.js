const { ServiceBroker } = require("moleculer")

const broker = new ServiceBroker();

//parent services
const hello = {
    name: 'hello',
    actions: {
        sayHello() {
            return 'Hello,From Parent';
        }
    }
}
const hai = {
    name: 'hai',
    actions: {
        sayHai() {
            return 'Hai,From Parent';
        }
    }
}

broker.createService({
    name: 'greeter',
    mixins: [hai, hello],
    actions: {
        sayGreet() {
            return 'welcome'
        }
    }
})
async function main() {

    try {
        await broker.start()
        await broker.repl()

    } catch (error) {
        console.log(error)
    }
}
main();