const model = require('../models/category.model')

async function categories() {
    const data = await model.find()
    return data
}

module.exports = {
    categories
}