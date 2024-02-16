//hello.service.js 
//import Moleculer 
const { ServiceBroker } = require('moleculer')

//create broker object 
const broker = new ServiceBroker()

//create service 
broker.createService({
    name: 'hello', //service Name
    actions: {
        //service apis
        sayHello() {
            return 'Hello Micro service'
        }
    }
})
//deploy the service on Broker(Server)
// function main() {
//     //start server 
//     broker.start().then(() => {
//         //you can start invoking apis 
//         console.log('service is ready')
//     }).catch(err => {
//         console.log('Server failed')
//     })
// }
async function main() {
    //start server
    try {
        await broker.start()
        console.log('Service is ready')
        //call service api 
        const response = await broker.call('hello.sayHello')
        console.log(response)
    }
    catch (err) {

    }
}
main()