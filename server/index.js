const hapi = require('@hapi/hapi')
const connection = require('./services/connection')
const Jwt = require('jsonwebtoken')
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

    const validate = async(decoded, request, h) => {
        const token = request.headers.authorization
        console.log(token)
        if (!token)
            return { isValid: false, credentials: null }
        try {
            await Jwt.verify(token, process.env.PRIVATE_KEY)
            return { isValid: true }
        } catch (error) {
            console.log(error)
            return { isValid: false, credentials: null }
        }
    }

    await server.register(require("hapi-auth-jwt2"))
    await server.auth.strategy("jwt", "jwt", {
        validate: validate,
        key: process.env.PRIVATE_KEY
    })

    await server.start()

    connection().then(resolve => {
        console.log('connected to mongoDB')
    }, reject => {
        console.log('Error in connecting to mongoDB')
    })
}

init()