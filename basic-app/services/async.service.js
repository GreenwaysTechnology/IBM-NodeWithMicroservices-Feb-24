//hello.service.js 
//import Moleculer 
const { ServiceBroker } = require('moleculer')

//create broker object 
const broker = new ServiceBroker()

//create service 
broker.createService({
    name: 'hello', //service Name
    actions: {
        async sayHello() {
            //return 'Hello Micro service'
            return new this.Promise((resolve, reject) => {
                setTimeout(resolve, 5000, 'Hello Async Service')
            })
        }
    }
})

async function main() {
    //start server
    try {
        await broker.start()
        broker.repl()
    }
    catch (err) {

    }
}
main()