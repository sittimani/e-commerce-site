const { getMyAddress, updateAddress, addAddress, deleteAddress } = require("../controllers/address.controller")

const routes = [{
    path: "/getMyAddress",
    method: "get",
    config: {
        auth: "jwt",
        handler: getMyAddress
    }
}, {
    path: "/add-address",
    method: "post",
    config: {
        auth: "jwt",
        handler: addAddress
    }
}, {
    path: "/update-address",
    method: "put",
    config: {
        auth: "jwt",
        handler: updateAddress
    }
}, {
    path: "/delete-address/{id}",
    method: "delete",
    config: {
        auth: "jwt",
        handler: deleteAddress
    }
}]

module.exports = routes