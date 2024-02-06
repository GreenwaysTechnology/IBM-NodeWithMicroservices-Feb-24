
const blockMe = status => {
    console.log(status)
}
const getError = () => {
    //Promise Object 
    return Promise.reject('something wrong')
}

blockMe('start')
getError().catch(err => {
    console.log(err)
})
blockMe('going on')