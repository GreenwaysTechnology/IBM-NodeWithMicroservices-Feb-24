//callback chaining or callback nesting 

const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        //mock data
        let user = {
            name: 'admin'
        }
        //user = null
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, 'User not found')
        }
    })
}
const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'login is success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}
const showDashboard = status => {
    console.log('showDashboard is called')
    return new Promise((resolve, reject) => {
        if (status === 'login is success') {
            setTimeout(resolve, 1000, 'Welcome to Page')
        } else {
            setTimeout(reject, 1000, 'Sorry something went wrong')
        }
    })
}

//main 
function main() {
    // getUser(user => {
    //     login(user, status => {
    //         showDashboard(status, (page) => {
    //             console.log(page)
    //         }, (err) => {
    //             console.log(err)
    //         })
    //     }, err => {
    //         console.log(err)
    //     })
    // }, err => {
    //     console.log(err)
    // })
    // getUser()
    //     .then(user => {
    //         login(user)
    //             .then(status => {
    //                 showDashboard(status)
    //                     .then(page => console.log(page)).catch(err => {
    //                         console.log(err)
    //                     })
    //             }).catch(err => {
    //                 console.log(err)
    //             })
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })

    //avoid catchs and chain thens
    // getUser('admin', 'admin')
    //     .then(user => { return login(user) })
    //     .then(status => { return showDashboard(status) })
    //     .then(page => console.log(page))
    //     .catch(err => console.log(err))

    // getUser('admin', 'admin')
    //     .then(user => login(user))
    //     .then(status => showDashboard(status))
    //     .then(page => console.log(page))
    //     .catch(err => console.log(err))
    getUser('admin', 'admin')
        .then(login)
        .then(showDashboard)
        .then(page => console.log(page))
        .catch(err => console.log(err))
}
main()