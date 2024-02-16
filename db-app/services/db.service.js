const { ServiceBroker } = require('moleculer')
const DbService = require("moleculer-db");
const PrismaAdapter = require("moleculer-db-adapter-prisma");

const broker = new ServiceBroker()


broker.createService({
    name: "posts",
    mixins: [DbService],
    adapter: new PrismaAdapter(),
    settings: {
        fields: ["id", "title", "content", "votes", "status"],
    },
    model: "post", // Model name in camelCase
});
//ui 
broker.createService({
    name: 'client',
    actions: {
        findAll(ctx) {
            const posts = ctx.call('posts.find')
            return posts
        },
        findById(ctx) {
            const { id } = ctx.params
            console.log(id)
            return ctx.call("posts.get", { id: id })

        },
        save(ctx) {
            const { title, votes, status, content } = ctx.params
            return ctx.call("posts.create", {
                title: title,
                votes: votes,
                content: content,
                status: status || false
            })
        },
        update(ctx) {
            const { id, title, votes, status, content } = ctx.params
            return ctx.call("posts.update", { id, title, votes, status, content })
        },
        remove(ctx) {
            const { id } = ctx.params
            return ctx.call("posts.remove", { id })
        }

    }
})



async function main() {
    await broker.start()
    broker.repl()
}
main()
