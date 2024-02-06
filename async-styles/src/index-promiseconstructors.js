
const blockMe = status => {
    console.log(status)
}
const login = (userName, password) => {
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(resolve, 5000, 'login success')
        } else {
            setTimeout(reject, 5000, 'login failed')
        }
    })
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