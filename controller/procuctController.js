// Import products collection/model
const products = require('../models/productSchema')

// logic to get all products
exports.getAllProducts = async (req, res) => {
    try {
        const allProducts = await products.find()
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(401).json(error)
    }
}

// logic to view Product
exports.viewProduct = async (req, res) => {

    // Get id from request
    let { id } = req.params

    try {
        const product = await products.findOne({ id })
        res.status(200).json(product)
        // const product = await products.findOne({ id })
        // res.send(200).json(product)
    } catch (error) {
        res.status(404).json("product is not available")
    }
}