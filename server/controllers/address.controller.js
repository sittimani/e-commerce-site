const { getAddress, addUserAddress, updateUserAddress, deleteUserAddress } = require("../services/address.service")

async function getMyAddress(request, h) {
    const id = request.auth.artifacts.decoded.id
    return getAddress(id)
}

async function addAddress(request, h) {
    const body = request.payload
    const id = request.auth.artifacts.decoded.id
    return await addUserAddress(body, id)
}

async function updateAddress(request, h) {
    const body = request.payload
    return await updateUserAddress(body)
}

async function deleteAddress(request, h) {
    const id = request.params.id
    return deleteUserAddress(id)
}

module.exports = {
    getMyAddress,
    updateAddress,
    addAddress,
    deleteAddress
}