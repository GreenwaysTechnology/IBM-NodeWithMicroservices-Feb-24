const { ServiceBroker } = require('moleculer')

//create broker object 
const broker = new ServiceBroker()

//create service 
broker.createService({
    name: 'greeter', //service Name
    actions: {
        sayGreet() {
            return 'Welcome to Microservices'
        }
    }
})
broker.createService({
    name: 'hello', //service Name
    actions: {
        sayHello() {
            return 'Hello Microservices'
        }
    }
})

//deploy the service on Broker(Server)
async function main() {
    //start server
    try {
        await broker.start()
        console.log('Service is ready')
        //call service api 
        const hello = await broker.call('hello.sayHello')
        const greeter = await broker.call('greeter.sayGreet')
        console.log(hello, greeter)
    }
    catch (err) {

    }
}
main()