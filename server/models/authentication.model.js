const mongoose = require('mongoose')

const schema = mongoose.Schema

const authSchema = new schema({
    name: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
}, { timestamps: true, versionKey: false })

const model = mongoose.model('authSchema', authSchema, 'users')

module.exports = model