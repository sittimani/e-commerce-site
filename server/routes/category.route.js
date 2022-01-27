const controller = require('../controllers/category.controller')

const routes = [{
    path: '/get-categories',
    method: 'get',
    config: {
        auth: "jwt",
        handler: controller.getCategories
    }
}, {
    path: '/get-baners',
    method: 'get',
    config: {
        auth: "jwt",
        handler: controller.getBaners
    }
}]

module.exports = routes