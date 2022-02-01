const model = require('../models/address.model')

async function getAddress(id) {
    const address = await model.find({ userId: id })
    return address
}

module.exports = {
    getAddress
}