const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: "TCP"
})

broker.createService({
    name: 'inventory',
    events: {
        "order.created": {
            handler(ctx) {
                //here you can persist data into database
                const data = ctx.params
                console.log(data)
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