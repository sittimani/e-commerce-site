const service = require('../services/category.service')


async function getCategories(request, h) {
    const data = await service.categories()
    return data
}

async function getBaners(request, h) {
    return await service.getBaners()
}

module.exports = {
    getCategories,
    getBaners
}