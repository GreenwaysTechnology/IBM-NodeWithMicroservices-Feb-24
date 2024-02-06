//callback chaining or callback nesting 

const getUser = async () => {
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
async function main() {
    //thenable 
    // getUser('admin', 'admin')
    //     .then(login)
    //     .then(showDashboard)
    //     .then(page => console.log(page))
    //     .catch(err => console.log(err))

    try {
        const user = await getUser()
        const status = await login(user)
        const page = await showDashboard(status)
        console.log(page)
    }
    catch (err) {
        console.log(err)
    }
}
main()