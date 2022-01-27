const Hapi = require('@hapi/hapi')
const Path = require('path')
const Jwt = require('jsonwebtoken')
require('dotenv').config()

const connection = require('./services/connection')
const authenticationRoutes = require('./routes/authentication.route')
const fileRoutes = require('./routes/files.route')
const categoryRoutes = require('./routes/category.route')
const productsRoutes = require('./routes/products.route')


const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
        files: {
            relativeTo: Path.join(__dirname, 'public')
        }
    }
})

const init = async() => {

    await server.register(require('hapi-cors'))

    server.events.on('start', () => {
        console.log('server started!!!')
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

    await server.register(require('hapi-auth-jwt2'))
    await server.auth.strategy('jwt', 'jwt', {
        validate: validate,
        key: process.env.PRIVATE_KEY
    })

    await server.register(require('@hapi/inert'))

    server.route(authenticationRoutes)
    server.route(fileRoutes)
    server.route(categoryRoutes)
    server.route(productsRoutes)

    await server.start()

    connection().then(resolve => {
        console.log('connected to mongoDB')
    }, reject => {
        console.log('Error in connecting to mongoDB')
    })
}

init()