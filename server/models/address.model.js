const mongoose = require('mongoose')

const schema = mongoose.Schema

const addressSchema = new schema({
    address: {
        type: String
    },
    userId: {
        type: String
    }
}, { timestamps: true, versionKey: false })

const model = mongoose.model('addressSchema', addressSchema, 'address')

module.exports = model