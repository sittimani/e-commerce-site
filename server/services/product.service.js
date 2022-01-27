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

module.exports = {
    getProducts,
    addProduct
}