//non blocking api using timer 
//number,string,boolean,undefined,null,object,function,NaN,infinity
function sayHello(greet) {
    //to turn this function as callback we need to bind with any nonblocking api (timer,io,)
    //greet()
    setTimeout(greet, 5000, 'greet')
}

function blockMe(message) {
    console.log(message)
}

blockMe('start')
// sayHello(function (msg) {
//     console.log(msg)
// })
sayHello(msg => console.log(msg))
blockMe('going on')