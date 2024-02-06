//async functions 

//implicit promise
async function getValue() {
    return 10 // Promise.resolve(10)
}
//explicit promise 
async function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('login failed')
    }
}



function blockMe(message) {
    console.log(message)
}

function main() {
    blockMe('start')
    getValue().then(value => console.log(value))
    login('admin', 'admin').then(status => console.log(status))
    blockMe('end')
}
main()