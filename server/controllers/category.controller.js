const service = require('../services/category.service')
const fs = require('fs')
const Path = require('path')

async function getCategories(request, h) {
    const data = await service.categories()
    data.map((catagory => {
        catagory.url = `http://localhost:3000/categories/${catagory.url}`
    }))
    return data
}

async function getBaners(request, h) {
    try {
        const path = `${Path.dirname(__dirname)}/public/baners/`
        const files = fs.readdirSync(path)
        const data = files.map(file => {
            return file = `http://localhost:3000/baners/${file}`
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getCategories,
    getBaners
}