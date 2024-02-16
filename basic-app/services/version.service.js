const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker({
    serializer: "JSON" // not necessary to set, because it is the default
})

//declare service
broker.createService({
    name: 'posts',
    version: 1,
    actions: {
        //args
        async findAll(ctx) {
            return 'posts -v1'
        }
    }
})
// call v1.posts.findAll
broker.createService({
    name: 'posts',
    version: 2,
    actions: {
        //args
        async findAll(ctx) {
            return 'posts -v2'
        }
    }
})
async function main() {
    try {
        await broker.start()
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()