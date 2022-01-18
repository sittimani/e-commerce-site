const controller = require('../controllers/authentication.controller')
const { userValidator, loginValidator } = require('../validators/user.validator')

const routes = [{
    path: '/register',
    method: 'post',
    handler: controller.register,
    options: {
        validate: {
            payload: userValidator
        }
    }
}, {
    path: '/login',
    method: 'post',
    handler: controller.login,
    options: {
        validate: {
            payload: loginValidator
        }
    }
}]

module.exports = routes