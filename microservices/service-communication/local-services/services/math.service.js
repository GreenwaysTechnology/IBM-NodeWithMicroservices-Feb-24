const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

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

broker.createService({
    name: 'adder',
    actions: {
        add: {
            handler(ctx) {
                return ctx.params.a + ctx.params.b
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