const controller = require('../controllers/category.controller')

const routes = [{
    path: '/get-categories',
    method: 'get',
    handler: controller.getCategories
}, {
    path: '/get-baners',
    method: 'get',
    handler: controller.getBaners
}]

module.exports = routes