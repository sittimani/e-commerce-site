const joi = require('joi')

const userValidator = joi.object({
    name: joi.string().required().regex(/[A-Za-z]/),
    email: joi.string().required().email(),
    phone: joi.string().required().min(10).max(10).regex(/[0-9]/),
    password: joi.string().required().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
    confirmPassword: joi.string().optional()
})

const loginValidator = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
})

module.exports = {
    userValidator,
    loginValidator
}