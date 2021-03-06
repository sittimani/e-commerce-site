const Boom = require('boom')
const model = require('../models/product.model')

async function getProducts(category) {
    const products = await model.find({ category })
    products.map(product => {
        product.url = `http://localhost:3000/products/${product.url}`
    })
    return products
}

async function addProduct(product) {
    const newProduct = new model(product)
    await newProduct.save()
    return "Product added successfully"
}

async function getSpecificProduct(id) {
    try {
        const product = await model.findOne({ _id: id })
        product.url = `http://localhost:3000/products/${product.url}`
        return product.toObject()
    } catch (error) {
        return Boom.badRequest("Invalid Url")
    }

}

module.exports = {
    getProducts,
    addProduct,
    getSpecificProduct
}