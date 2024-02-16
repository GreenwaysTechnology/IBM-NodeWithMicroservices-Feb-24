const { ServiceBroker } = require('moleculer')

//create broker object 
const broker = new ServiceBroker()

broker.createService({
    name: 'hello', //service Name
    actions: {
        sayHello(ctx) {
            const message = ctx.params.message
            return `${message} Microservices`
        }
    }
})

//deploy the service on Broker(Server)
async function main() {
    //start server
    try {
        await broker.start()
        console.log('Service is ready')
        const hello = await broker.call('hello.sayHello', { message: 'Hai' })
        console.log(hello)
    }
    catch (err) {

    }
}
main()