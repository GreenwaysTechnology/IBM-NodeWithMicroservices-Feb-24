const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    transporter: 'TCP'
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