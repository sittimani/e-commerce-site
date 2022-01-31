const mongoose = require('mongoose')

const schema = mongoose.Schema

const productSchema = new schema({
    name: {
        type: String
    },
    url: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    available_stocks: {
        type: Number
    }
}, { timestamps: true, versionKey: false })

const model = mongoose.model('productSchema', productSchema, 'products')

module.exports = model