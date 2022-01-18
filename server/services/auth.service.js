const model = require('../models/authentication.model')
const boom = require('boom')

async function registerUser(body) {
    const isUser = await model.findOne({ email: body.email })
    if (isUser)
        return boom.badRequest("User Already Exists")
    const user = new model(body)
    await user.save()
    return JSON.stringify("User Created Successfully")
}

async function loginUser(body) {
    console.log(body)
    const user = await model.findOne({ email: body.email })
    if (!user)
        return boom.badRequest("User not found !!!")
    return checkPassword(body, user)
}

function checkPassword(body, user) {
    if (body.password === user.password)
        return JSON.stringify("login Successfully!!!")
    return boom.badRequest("Invalid Password !!!")
}

module.exports = {
    registerUser,
    loginUser
}