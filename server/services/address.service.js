const model = require('../models/address.model')

async function getAddress(id) {
    const addresses = await model.find({ userId: id })
    return addresses
}

async function addUserAddress(body, id) {
    body.userId = id
    const address = new model(body)
    await address.save()
    return JSON.stringify("Address added successfully")
}

async function updateUserAddress(body) {
    const id = body._id
    await model.findByIdAndUpdate(id, body)
    return JSON.stringify("Updated Successfully")
}

async function deleteUserAddress(id) {
    await model.deleteOne({ _id: id })
    return JSON.stringify("Deleted Successfully")
}

module.exports = {
    getAddress,
    addUserAddress,
    updateUserAddress,
    deleteUserAddress
}