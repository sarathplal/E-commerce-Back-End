// import model- cartSchema
const carts = require('../models/cartSchema')

// logic to add item to cart
exports.addtoCart = async (req, res) => {
    // get product datas from request
    const { id, title, price, image, quantity } = req.body

    try {
        // check productis in model or not
        const product = await carts.findOne({ id })

        if (product) {
            // If yes, send response as product already exists
            product.quantity += 1
            product.total = product.quantity * product.price
            product.save()
            res.status(200).json("Products added")
        }
        else {
            // add product to model
            const newProduct = new carts({
                id, title, price, image, quantity, total: price * quantity
            })
            // save in Mongodb
            await newProduct.save()
            res.status(200).json("Product added")
        }
    } catch (error) {
        console.log(error);
        res.status(404).json(error)
    }



}

// logic to view cart items
exports.viewCartItems = async (req, res) => {

    try {
        let allProducts = await carts.find()
        res.status(200).json(allProducts)
    }
    catch (error) {
        console.log(error);
        res.status(401).json(error)
    }
}

// Logic to delete item from cart
exports.deleteItem = async (req, res) => {

    let { id } = req.params
    console.log(id);
    try {
        await carts.deleteOne({ id })
        const allItems = await carts.find()
        res.status(200).json(allItems)
    }
    catch (err) {
        res.status(401).json(err)
    }
}
// Logic to increment item from cart
exports.incrementCartItem = async (req, res) => {
    // get id from request 
    const { id } = req.params
    try {
        // check id is in cart or not 
        const item = await carts.findOne({ id })
        if (item) {
            console.log("yes");
            item.quantity += 1
            item.total = item.quantity * item.price
            await item.save()
            const allItems = await carts.find()
            res.status(200).json(allItems);
        }
        else {
            res.status(404).json("item Not Found")
        }
    }
    catch (error) {
        res.status(401).json(error)
    }
}
// Logic to decrement item from cart
exports.decrementCartItem = async (req, res) => {
    // get id from request 
    const { id } = req.params
    try {
        // check id is in cart or not 
        const item = await carts.findOne({ id })
        if (item) {
            console.log("yes");
            item.quantity -= 1
            if (item.quantity == 0) {
                await carts.deleteOne({ id })
                const allItems = await carts.find()
                res.status(200).json(allItems);
            } else {
                item.total = item.quantity * item.price
                await item.save()
                const allItems = await carts.find()
                res.status(200).json(allItems);
            }

        }
        else {
            res.status(404).json("item Not Found")
        }
    }
    catch (error) {
        res.status(401).json(error)
    }
}
// Empty cart
exports.emptyCart = async (req, res) => {
    try {
        await carts.deleteMany({})
        const allItems = await carts.find()
        res.status(200).json(allItems)
    } catch (error) {
        res.status(401).json(error)
    }
}

