const { getAddress } = require("../services/address.service")

async function getMyAddress(request, h) {
    const id = request.auth.artifacts.decoded.id
    return getAddress(id)
}

module.exports = {
    getMyAddress
}