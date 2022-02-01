const model = require('../models/category.model')
const fs = require('fs')
const Path = require('path')

async function categories() {
    const data = await model.find()
    data.map((catagory => {
        catagory.url = `http://localhost:3000/categories/${catagory.url}`
    }))
    return data
}

async function getBaners() {
    try {
        const path = `${Path.dirname(__dirname)}/public/baners/`
        const files = fs.readdirSync(path)
        const data = files.map(file => {
            return file = `http://localhost:3000/baners/${file}`
        })
        return data
    } catch (error) {
        //console.log(error)
    }
}

module.exports = {
    categories,
    getBaners
}