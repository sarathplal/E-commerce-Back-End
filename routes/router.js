// import express
const express = require('express')

// import product controller & wishListController
const productController = require('../controller/procuctController')
const wishlistController = require('../controller/whishlistController')
const cartController=require('../controller/cartController')

// to create router using express
const router = new express.Router()

// route for get all products
router.get('/products/get-all-products', productController.getAllProducts)

// route for view product
router.get('/products/view-product/:id', productController.viewProduct)


// route for add to whishList
router.post('/whishList/add-product', wishlistController.addtoWishlist)
// route to view wishList
router.get('/wishList/all-products',wishlistController.getAllProducts)
// Route to delete wishList
router.delete('/wishList/delete-item/:id',wishlistController.deleteItem)

// route for add to cart
router.post('/cart/add-product',cartController.addtoCart)
// route to view cart items
router.get(`/cart/view-products`,cartController.viewCartItems)
// Route to delete item from cart
router.delete('/cart/delete-item/:id',cartController.deleteItem)
// route for incrementing cart item 
router.get('/cart/increment-item/:id',cartController.incrementCartItem)
// route for decrementing cart item
router.get('/cart/decrement-item/:id',cartController.decrementCartItem)
// Empty cart
router.delete(`/cart/empty-cart`,cartController.emptyCart)

// export router 
module.exports = router