// import wishList schema
const wishLists = require('../models/wishListSchema')

// Logic to add product to wishList
exports.addtoWishlist = async (req, res) => {
    // get product details from req
    const { id, title, price, image } = req.body

    try {
        // check productis in model or not
        const product = await wishLists.findOne({ id })

        if (product) {
            // If yes, send response as product already exists
            res.status(406).json("Product  already exist in wishList")
        }
        else {
            // add product to model
            const newProduct = new wishLists({
                id, title, image, price
            })

            // save in Mongodb
            await newProduct.save()
            res.status(200).json(newProduct)
        }
    } catch (error) {
        console.log(error);
        res.status(404).json(error)
    }
}

// Logic to get allProducts From WhishList
exports.getAllProducts = async (req, res) => {
    try {
        const allProducts = await wishLists.find()
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(401).json(error)
    }
}
// Logic to delete item
exports.deleteItem = async (req, res) => {

    // get id from request
    const { id } = req.params
    console.log(id);
    // delete item From wishList
    try {
        item = await wishLists.deleteOne({ id })
        const allItems = await wishLists.find()
        console.log(allItems);
        res.status(200).json(allItems)

    } catch (error) {
        console.log(error);
        res.status(401).json(error)
    }

}
