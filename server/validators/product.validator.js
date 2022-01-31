const joi = require('joi')

const productValidator = joi.object({
    _id: joi.any().optional(),
    name: joi.string().required(),
    url: joi.string().required(),
    category: joi.string().required(),
    price: joi.number().required(),
    description: joi.string().required(),
    available_stocks: joi.number().required(),
    createdAt: joi.any(),
    updatedAt: joi.any()
})

module.exports = {
    productValidator
}