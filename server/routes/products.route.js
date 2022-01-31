const controller = require('../controllers/products.controller')
const productValidator = require('../validators/product.validator')
const joi = require('joi')
const boom = require('boom')

const routes = [{
    path: '/get-products/{category}',
    method: 'get',
    config: {
        auth: 'jwt',
        handler: controller.getProducts
    }
}, {
    path: '/add-product',
    method: 'post',
    handler: controller.setProducts
}, {
    path: '/get-product/{id}',
    method: 'get',
    config: {
        auth: 'jwt',
        handler: controller.getSpecificProduct,
        response: {
            schema: productValidator.productValidator,
            failAction: (request, h, source, error) => {
                if (error) {
                    return boom.badData("Not Found")
                }
                return h.continue
            }
        }
    }
}]

module.exports = routes