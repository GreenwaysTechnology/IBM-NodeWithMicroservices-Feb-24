
const login = (userName, password, resolve, reject) => {
    if (userName === 'admin' && password === 'admin') {
        setTimeout(resolve, 5000, 'Login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}
login('admin', 'admin', (status) => {
    console.log(status)
}, (err) => {
    console.log(err)
})
login('foo', 'bar', (status) => {
    console.log(status)
}, (err) => {
    console.log(err)
})