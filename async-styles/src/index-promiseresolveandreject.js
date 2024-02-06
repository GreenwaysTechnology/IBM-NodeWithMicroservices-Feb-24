
const blockMe = status => {
    console.log(status)
}
const login = (userName, password) => {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('login failed')
    }
}
function main() {
    blockMe('start')
    login('admin', 'admin')
        .then(status => console.log(status))
        .catch(err => {
            console.log(err)
        })
    login('foo', 'bar')
        .then(status => console.log(status))
        .catch(err => {
            console.log(err)
        })
    blockMe('going on')
}
main()