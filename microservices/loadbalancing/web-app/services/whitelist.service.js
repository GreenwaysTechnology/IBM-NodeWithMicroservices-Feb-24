const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

//http://localhost:3000/api/greeter/sayHello
//http://localhost:3000/api/admin/getAdmin
const broker = new ServiceBroker({
    transporter: 'TCP',
    serializer: "JSON" // not necessary to set, because it is the default
});

// /GateWayService
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    //override ApiGateWayService properties
    settings: {
        routes: [{
            path: '/api',
            whitelist: [
                "greeter.sayHello",
                "greeter.sayHai"
            ]
        }, {
            path: '/admin'
        }]
    }
})

broker.createService({
    name: 'greeter',
    actions: {
        sayHello() {
            return 'Hello!';
        },
        sayHai() {
            return 'Hai!';
        },
        sayGreet() {
            return 'Greet!';
        }
    }

})



async function main() {
    await broker.start();
}
main();
