const { ServiceBroker } = require('moleculer')

//create broker object 
const broker = new ServiceBroker()

//create service 
broker.createService({
    name: 'greeter', //service Name
    actions: {
        //service apis
        sayHello() {
            return 'Hello Micro service'
        },
        sayHai() {
            return 'Hai Micro Service'
        },
        sayGreet() {
            return 'Welcome to Microservices'
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
        const hello = await broker.call('greeter.sayHello')
        const hai = await broker.call('greeter.sayHai')
        const greeter = await broker.call('greeter.sayGreet')
        console.log(hello, hai, greeter)
    }
    catch (err) {

    }
}
main()