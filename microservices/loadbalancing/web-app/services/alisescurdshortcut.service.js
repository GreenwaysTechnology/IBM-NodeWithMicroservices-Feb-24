const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");

const PRODUCTS = [{
    id: 1,
    name: 'a'
}]

const broker = new ServiceBroker();

//CURD service : 

broker.createService({
    name: 'products',
    actions: {
        //GET ALL products
        list: {
            handler(ctx) {
                return PRODUCTS;
            }
        },
        //GET product by id
        get: {
            handler(ctx) {
                console.log(ctx.params)
                return PRODUCTS.filter(product => product.id == ctx.params.id)
            }
        },
        //save
        create(ctx) {
            console.log(ctx.params)
            return 'Product Created'
        },
        //update
        update(ctx) {
            return 'Product updated'
        },
        //delete
        remove(ctx) {
            return 'Product removed'
        }
    }
})


broker.createService({
    name: 'APIGateWay',
    mixins: [ApiGateWayService],
    settings: {
        routes: [{
            path: '/api',
            aliases: {
                "REST products": "products"
            }
        }]
    }
})


async function init() {
    try {
        await broker.start();
    }
    catch (e) {
        log(e);
    }
}
init();
