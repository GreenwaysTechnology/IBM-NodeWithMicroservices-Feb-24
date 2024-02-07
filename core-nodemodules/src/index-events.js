//send-emit event and listen event.

const EventEmitter = require('node:events') //module.exports = function ==class 

//sales is domain class just we add capablity of adding events driven programming features 
class Sales extends EventEmitter {
    constructor() {
        super()
        //register event : listener 
        this.on('sold', (event) => {
            //when ever sold event is triggered, this callback getting called 
            setImmediate(() => {
                console.log('got event')
                console.log(event)
            })

        })
    }
    //write biz api 
    buy(product) {
        //emit event 
        console.log('buying...started emitting event')
        setTimeout(() => {
            this.emit('sold', product)
        }, 5000)
    }
}

function main() {
    let sales = new Sales()
    sales.buy({ id: 1, name: 'phone', qty: 100, price: 1000 })
}
main()