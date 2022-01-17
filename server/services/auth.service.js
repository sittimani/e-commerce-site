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

module.exports = {
    registerUser
}