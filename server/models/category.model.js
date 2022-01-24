const mongoose = require('mongoose')

const schema = mongoose.Schema

const categorySchema = new schema({
    name: {
        type: String
    },
    url: {
        type: String
    }
}, { timestamps: true, versionKey: false })

const model = mongoose.model('categorySchema', categorySchema, 'categories')

module.exports = model