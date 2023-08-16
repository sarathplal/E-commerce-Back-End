const mongoose = require('mongoose')

// define schema
const whishListSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

// create a model for collection
const wishLists = mongoose.model("wishLists", whishListSchema)

// export
module.exports = wishLists