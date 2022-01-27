const controller = require('../controllers/products.controller')

const routes = [{
    path: "/get-products/{category}",
    method: "get",
    config: {
        auth: "jwt",
        handler: controller.getProducts
    }
}, {
    path: "/add-product",
    method: "post",
    handler: controller.setProducts
}]

module.exports = routes