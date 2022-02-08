const model = require('../models/order.model')

async function placeMyOrder(order) {
    const newOrder = new model(order)
    await newOrder.save()
    return JSON.stringify("Order Placed Successfully !!!")
}

module.exports = {
    placeMyOrder
}