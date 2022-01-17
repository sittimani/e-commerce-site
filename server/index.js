const hapi = require('@hapi/hapi')
const connection = require('./services/connection')
const authenticationRoute = require('./routes/authentication.route')
require('dotenv').config()

const server = hapi.server({
    port: 3000,
    host: "localhost"
})

const init = async() => {

    server.route(authenticationRoute)

    await server.register(require('hapi-cors'))

    server.events.on('start', () => {
        console.log("server started!!!")
    })

    await server.start()

    connection().then(resolve => {
        console.log('connected to mongoDB')
    }, reject => {
        console.log('Error in connecting to mongoDB')
    })
}

init()