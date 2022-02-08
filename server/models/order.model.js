const mongoose = require('mongoose')

const schema = mongoose.Schema

const orderSchema = new schema({
    userId: {
        type: String
    },
    deliveryType: {
        type: String
    },
    productId: {
        type: String
    },
    address: {
        type: String
    }
}, { timestamps: true, versionKey: false })

const model = mongoose.model('orderSchema', orderSchema, 'orders')

module.exports = model