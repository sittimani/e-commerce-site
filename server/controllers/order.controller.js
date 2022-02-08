const { placeMyOrder } = require("../services/orders.service")

async function placeOrder(request, h) {
    let data = request.payload
    const id = request.auth.artifacts.decoded.id
    data.userId = id
    return await placeMyOrder(data)
}

module.exports = {
    placeOrder
}