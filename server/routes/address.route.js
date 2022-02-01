const { getMyAddress } = require("../controllers/address.controller")

const routes = [{
    path: "/getMyAddress",
    method: "get",
    config: {
        auth: "jwt",
        handler: getMyAddress
    }
}]

module.exports = routes