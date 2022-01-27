const service = require('../services/product.service')

async function getProducts(request, h) {
    const category = request.params.category
    return await service.getProducts(category)
}

async function setProducts(request, h) {
    const product = request.payload
    return await service.addProduct(product)
}

module.exports = {
    getProducts,
    setProducts
}