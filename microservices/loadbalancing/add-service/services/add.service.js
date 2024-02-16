const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: "TCP",
    registry: {
        discoverer: 'LocalDiscover',
        strategy: 'RoundRobin'
    }
})
// const broker = new ServiceBroker({
//     transporter: "nats://localhost:4222"
// })

broker.createService({
    name: 'adder',
    actions: {
        add: {
            handler(ctx) {

                return `${ctx.params.a} + ${ctx.params.b} from ${broker.nodeID}`
            }
        }
    }
})


async function main() {
    try {
        //start the broker 
        await broker.start()
        //use repl prompt
        broker.repl()

    } catch (err) {
        console.log(err)
    }
}
main()