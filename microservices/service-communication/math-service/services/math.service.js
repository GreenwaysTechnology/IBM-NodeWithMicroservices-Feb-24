const { ServiceBroker } = require('moleculer')

// const broker = new ServiceBroker({
//     transporter: "TCP"
// })
const broker = new ServiceBroker({
    transporter: "nats://localhost:4222"
})

broker.createService({
    name: 'math',
    actions: {
        add: {
            async handler(ctx) {
                //communicate adder service 
                const { a, b } = ctx.params
                const result = await ctx.call('adder.add', { a, b })
                return result
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