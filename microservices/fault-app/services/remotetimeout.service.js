const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    transporter: "TCP",
    requestTimeout: 5 * 1000 // in milliseconds
});

broker.createService({
    name: 'remotetimeout',
    actions: {
        async calculate(ctx) {
            const { a, b, timeout } = ctx.params
            console.log(a, b, timeout)
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 6000, `${a + b} - ${broker.nodeID} `)
            })
        }
    }
})

async function init() {
    await broker.start()
    broker.repl()
}
init();

