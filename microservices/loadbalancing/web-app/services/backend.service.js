const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker()

//back end service
broker.createService({
    name: 'hello',
    actions: {
        sayHello: {
            handler(ctx) {
                return 'Hello,REST Service'
            }
        }
    }
})

//create gateway service 
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay]
})

async function main() {
    try {
        await broker.start()
    }
    catch (err) {
        console.log(err)
    }
}
main()