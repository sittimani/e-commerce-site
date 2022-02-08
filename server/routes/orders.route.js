const { placeOrder } = require('../controllers/order.controller')

const routes = [{
    path: '/place-order',
    method: 'post',
    config: {
        auth: 'jwt',
        handler: placeOrder
    }
}]

module.exports = routes