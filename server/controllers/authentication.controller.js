const { registerUser, loginUser } = require("../services/auth.service")

async function register(request, h) {
    const body = request.payload
    return await registerUser(body)
}

async function login(request, h) {
    const body = request.payload
    return await loginUser(body)
}

module.exports = {
    register,
    login
}