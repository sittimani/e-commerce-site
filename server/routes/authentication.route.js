const controller = require('../controllers/authentication.controller')
const userValidator = require('../validators/user.validator')

const routes = [{
    path: '/register',
    method: 'post',
    handler: controller.register,
    options: {
        validate: {
            payload: userValidator
        }
    }
}]

module.exports = routes