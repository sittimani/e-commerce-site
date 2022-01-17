const { registerUser } = require("../services/auth.service")

async function register(request, h) {
    const body = request.payload
    return await registerUser(body)
}

module.exports = {
    register
}