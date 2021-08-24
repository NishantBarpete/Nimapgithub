module.exports = app =>{
    const products = require('../controllers/productController')
    var router = require("express").Router()

    //Creating new product
    router.post("/createNew",products.create)

    //get all products
    router.get("/getProductList", products.fetchAllProducts)

    router.delete("/deleteProduct",products.deleteProduct)
    app.use('/api',router)

}