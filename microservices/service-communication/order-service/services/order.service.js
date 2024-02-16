const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: "TCP"
})

broker.createService({
    name: 'order',
    actions: {
        placeorder: {
            //biz logic 
            handler(ctx) {
                const { id, name, qty } = ctx.params
                //service to service communication via context object 
                ctx.emit('order.created', { id: id, name: name, qty: qty })
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