
const blockMe = status => {
    console.log(status)
}
const getValue = () => {
    //Promise Object 
    return Promise.resolve(10)
}

blockMe('start')
getValue().then(value => {
    console.log(value)
})
blockMe('going on')