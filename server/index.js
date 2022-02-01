const Hapi = require('@hapi/hapi')
const Path = require('path')
const Jwt = require('jsonwebtoken')
require('dotenv').config()

const connection = require('./services/connection')
const authenticationRoutes = require('./routes/authentication.route')
const fileRoutes = require('./routes/files.route')
const categoryRoutes = require('./routes/category.route')
const productsRoutes = require('./routes/products.route')
const addressRoutes = require('./routes/address.route')


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
        if (!token)
            return { isValid: false, credentials: null }
        try {
            const decodedData = await Jwt.verify(token, process.env.PRIVATE_KEY)
            console.log("decoded", JSON.stringify(decodedData))
            return { isValid: true, credentials: decodedData }
        } catch (error) {
            console.log(error)
            return { isValid: false, credentials: null }
        }
    }

    await server.register(require('hapi-auth-jwt2'))
    server.auth.strategy('jwt', 'jwt', {
        validate: validate,
        key: process.env.PRIVATE_KEY
    })

    await server.register(require('@hapi/inert'))

    server.route(authenticationRoutes)
    server.route(fileRoutes)
    server.route(categoryRoutes)
    server.route(productsRoutes)
    server.route(addressRoutes)

    server.ext('onPreResponse', (request, h, err) => {
        if (err) {
            console.log(err)
            return err
        }
        return h.continue
    })
    await server.start()


    connection().then(resolve => {
        console.log('connected to mongoDB')
    }, reject => {
        console.log('Error in connecting to mongoDB')
    })
}

init()