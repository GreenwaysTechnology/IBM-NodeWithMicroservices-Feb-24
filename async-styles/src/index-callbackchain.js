//callback chaining or callback nesting 

const getUser = (resolve, reject) => {
    console.log('getUser is called')
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
}
const login = (user, resolve, reject) => {
    console.log('login is called')
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'login is success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}
const showDashboard = (status, resolve, reject) => {
    console.log('showDashboard is called')
    if (status === 'login is success') {
        setTimeout(resolve, 1000, 'Welcome to Page')
    } else {
        setTimeout(reject, 1000, 'Sorry something went wrong')
    }
}

//main 
function main() {
    getUser(user => {
        login(user, status => {
            showDashboard(status, (page) => {
                console.log(page)
            }, (err) => {
                console.log(err)
            })
        }, err => {
            console.log(err)
        })
    }, err => {
        console.log(err)
    })

}
main()