const { ServiceBroker } = require('moleculer')

//create broker object 
const broker = new ServiceBroker()

broker.createService({
    name: 'math', //service Name
    actions: {
        add: {
            //meta information
            params: {
                a: {
                    type: 'number',
                    positive: true,
                    integer: true
                },
                b: {
                    type: 'number',
                    positive: true,
                    integer: true
                }
            },
            //logic
            handler(ctx) {
                return ctx.params.a + ctx.params.b
            }
        }
    }
})

//deploy the service on Broker(Server)
async function main() {
    //start server
    try {
        await broker.start()
        console.log('Service is ready')
        const result = await broker.call('math.add', { a: 10.7, b: 10 })
        console.log(result)
    }
    catch (err) {
        console.log(err)
    }
}
main()