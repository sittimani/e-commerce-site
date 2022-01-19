const model = require('../models/authentication.model')
const boom = require('boom')
const Jwt = require('jsonwebtoken')

async function registerUser(body) {
    const isUser = await model.findOne({ email: body.email })
    if (isUser)
        return boom.badRequest("User Already Exists")
    const user = new model(body)
    await user.save()
    return JSON.stringify("User Created Successfully")
}

async function loginUser(body) {
    const user = await model.findOne({ email: body.email })
    if (!user)
        return boom.badRequest("User not found !!!")
    return checkPassword(body, user)
}

async function checkPassword(body, user) {
    if (body.password === user.password)
        return await createToken(body._id)
    return boom.badRequest("Invalid Password !!!")
}

async function createToken(id) {
    try {
        const token = await Jwt.sign({ id }, process.env.PRIVATE_KEY)
        return { token }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    registerUser,
    loginUser
}